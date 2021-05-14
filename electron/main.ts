import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

function createWindow(): void  {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  if(isDev) {
    const devUrl = 'http://localhost:3000';
    window.loadURL(devUrl);
  } else {
    const prodUrl = `file://${app.getAppPath()}/index.html`;
    window.loadURL(prodUrl);
  }
}

app.on('ready', createWindow);