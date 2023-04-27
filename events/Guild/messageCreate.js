const Funny = require('../../index.js');
const config = require('../../config.json');

Funny.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = Funny.commands.get(cmd)
    if (!command) command = Funny.commands.get(Funny.aliases.get(cmd));
    if (command) {
        try {
            let prefix = config.prefix;
            if(!prefix) prefix = "!";

            

            command.run(Funny, message, args, prefix);
        } catch (e) {
            function id(length) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() *
                        charactersLength));
                }
                return result;
            }

            const i = id(12);

            console.error(`[ERROR] Error ID: ${i}\n ` + e);

            await message.reply(`Something went wrong while executing the command! Here is the error ID that you can report it to the developers: \`${i}\`}`)
        }
    }
})