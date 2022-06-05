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
    console.log('Bot is ready for action!\n');

    // Format bot creation date, optional
    const dateFormatted = new Date(bot.info.creationDate).toLocaleDateString(
        undefined,
        {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }
    );

    console.log('--------------------');

    console.log(`Bot id: ${bot.info.id}`);
    console.log(`Bot username: ${bot.info.username}`);
    console.log(`Bot creation date: ${dateFormatted}`);

    console.log('--------------------');
});
