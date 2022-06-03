const RPC = require('discord-rpc');
const chalk = require("chalk");
const rpc = new RPC.Client({
    transport: 'ipc'
});
rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Hey!',
        state: 'Hello world!',
        startTimestamp: new Date(),
        largeImageKey: 'Image1',
        largeImageText: 'Text',
        smallImageKey: 'Image2',
        smallImageText: 'Text',
        buttons: [{
            label: 'Button1',
             url: 'http://twitter.com/'
        }, { 
            label: 'Button2', 
             url: 'https://github.com'
        
        }]
    });
    console.clear();
    process.title = 'Discord RPC made by @carpodii'
   console.log(chalk.blue.bold("Discord custom rpc status made by @carpodi"));
   console.log(chalk.red.bold("Satus loaded succesfully."));
   console.log(chalk.red.bold("NOTE: If you close this window the status will be deactivated."))
})
rpc.login({
    clientId: 'ClientID'
})
