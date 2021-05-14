import { app, BrowserWindow, Tray, screen, Menu } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';

let tray: Tray;
let window: BrowserWindow;

interface WindowPosition {
  x: number;
  y: number;
}

function createWindow(): void {
  window = new BrowserWindow({
    width: 400,
    height: 250,
    show: false,
    frame: false,
    darkTheme: true,
    resizable: false,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true
    },
  })

  if(isDev) {
    const devURL = 'http://localhost:3000';
    window.loadURL(devURL);
  } else {
    const prodURL = `file://${app.getAppPath()}/index.html`;
    window.loadURL(prodURL);
  }
}

function createTray(): void {
  const iconPath = path.resolve(__dirname, '..', 'assets', 'IconTemplate.png');
  tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Spotify Player', click: toggleWindow },
    { label: 'Quit', click() { app.quit() } }
  ]);

  tray.setContextMenu(contextMenu);
}

function getWindowPosition(): WindowPosition {
  const trayBounds = screen.getCursorScreenPoint();

  const x = Math.round(trayBounds.x);
  const y = Math.round(trayBounds.y - 4);

  return { x, y };
}

function toggleWindow(): void {
  const isVisible = window.isVisible();

  if(isVisible) {
    window.hide();
    return;
  }

  showWindow();
}

function showWindow(): void {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y, false);
  window.show();
  window.focus();
}

app.on('ready', () => {
  createWindow();
  createTray();
});


