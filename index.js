const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Pentagon Roleplay',
        state: 'Aktuell: ',
        startTimestamp: new Date(),
        largeImageKey: 'fivem',
        largeImageText: 'PentagonRP',
        partySize: 1, 
        partyMax: 512,
        buttons: [{
            label: 'Beitreten',
            url: 'https://www.pentagon-roleplay.de/'
        },
        {
            label: 'Discord',
            url: 'https://discord.gg/CxBmJnr4TC'
        }]
        //smallImageKey: 'small',
        //smallImageText: 'IMAGEsmall'
    });
    console.clear()

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('Rich Presence active')
    console.log('You can edit the RP in here :)')
    console.log('CREATED BY LAZAR')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    
});

rpc.login({
    clientId: '835525037242318879'
});