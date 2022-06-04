// **************************************************************** //
//           Connects to Fronvo and displays a message              //
// **************************************************************** //

import { Fronvo } from '@fronvo/api';

// Create a bot instance and automatically connect
const bot = new Fronvo({
    token: 'token',
});

// Register the 'ready' event
bot.event('ready', () => {
    console.log('Bot is ready for action!');
});
