const { app, BrowserWindow } = require('electron');

let mainWindow;
if (require('electron-squirrel-startup')) {
	app.quit();
}

const createWindow = () => {
	mainWindow = new BrowserWindow({
		x: 50,
		y: 50,
		width: 1300,
		height: 950,
		webPreferences: {
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	});

	// and load the index.html of the app.
	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	mainWindow.on('closed', () => (mainWindow = null));

	//* Open the DevTools.
	// mainWindow.webContents.openDevTools();
};

// Create app when ready
app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});