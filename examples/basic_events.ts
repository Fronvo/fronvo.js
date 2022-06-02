// **************************************************************** //
//           Connects to Fronvo and displays a message              //
// **************************************************************** //

import { Fronvo } from '../src/index';

const bot = new Fronvo({ token: 'token' });

bot.event('ready', () => {
    console.log('Bot is ready for action!');
});
