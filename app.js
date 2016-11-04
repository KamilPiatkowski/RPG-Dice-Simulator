const electron = require('electron');
const{app} = electron;
const {BrowserWindow} = electron;

let win;

function createWindow() {
    win = new BrowserWindow({width: 332, height: 501, frame: false, resizabe: false});
    win.isResizable(false);
    win.focus();
    win.loadURL(`file://${__dirname}/index.html`);
}

app.on('ready', createWindow);