const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, Tray } = electron;
const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window');

let mainWindow;
let tray;

app.on('ready', () => {
  mainWindow = new MainWindow();

  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
 
  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`)
  tray = new TimerTray(iconPath, mainWindow);
});