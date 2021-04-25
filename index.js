const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Pika Game',
        state: 'Players: ',
        startTimestamp: new Date(),
        largeImageKey: 'large',
        largeImageText: 'IMAGElarge',
        smallImageKey: 'small',
        smallImageText: 'IMAGEsmall',
        partySize: 1, 
        partyMax: 512,
        buttons: [{
            label: 'PIKA',
            url: 'https://knowyourmeme.com/memes/surprised-pikachu'
        },
        {
            label: 'GitHub',
            url: 'https://github.com/LordLazor/'
        }]

    });
    console.clear()

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('Rich Presence active')
    console.log('You can edit the RP in here :)')
    console.log('CREATED BY LordLazor')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    
});

rpc.login({
    clientId: 'YOUR CLIENT ID HERE'
});
