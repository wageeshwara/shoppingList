const electron = require("electron");
const url = require("url");
const path = require("path");

const {app,BrowserWindow,Menu} = electron;

 let mainWindow;
 let addWindow

 //Listen for the app for ready
 app.on('ready',function(){
    //Create new window
    mainWindow = new BrowserWindow({});
    //Load html file into the window
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes:true
    }))

    //Build menu from the template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    //Insert menu
    Menu.setApplicationMenu(mainMenu);
 });

 //handle Create add window 
 function createAddWindow(){
     //Create new window
    mainWindow = new BrowserWindow({});
    //Load html file into the window
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes:true
    }))

    //Build menu from the template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    //Insert menu
    Menu.setApplicationMenu(mainMenu);
 }

 //main menu template
 const mainMenuTemplate = [
    {
        label: 'file',
        submenu:[
            {
                label:"Add item",
                click(){
                    createAddWindow()
                }
            },
            {
                label:"Clear Item"
            },
            {
                label:"Quit",
                accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q' ,
                click(){
                    app.quit();
                }
            }
        ]
    }
 ];