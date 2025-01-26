const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      devTools: true,
    },
  });

  mainWindow.maximize();

  mainWindow.loadFile('dist/thought-cabinet-client/browser/index.html');

  mainWindow.setBackgroundColor('#343B4B');
  mainWindow.webContents.openDevTools();
}

ipcMain.handle('is-window-maximized', () => {
  return mainWindow.isMaximized();
});

ipcMain.on('minimize-window', () => {
  mainWindow.minimize();
});

ipcMain.on('maximize-window', () => {
  mainWindow.maximize();
});

ipcMain.on('unmaximize-window', () => {
  mainWindow.unmaximize();
});

ipcMain.on('close-window', () => {
  mainWindow.close();
});

app.on('ready', createWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
