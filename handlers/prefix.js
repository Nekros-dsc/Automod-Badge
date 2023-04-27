const { readdirSync } = require('fs');
const ascii = require('ascii-table');
let table = new ascii("Commands Handler");
table.setHeading('N°', 'COMMANDS:', 'STATUS:');

module.exports = (Funny) => {
	readdirSync('./commands/').forEach(dir => {
		const commands = readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
		for (let file of commands) {
			let pull = require(`../commands/${dir}/${file}`);
			if (pull.name) {
				Funny.commands.set(pull.name, pull);
				table.addRow(Funny.commands.size, file, '🟩')
			} else {
				table.addRow(Funny.commands.size, file, '🟥')
				continue;
			} if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => Funny.aliases.set(alias, pull.name))
		}
	});
	console.log(table.toString());
	console.log(`[HANDLER]  ${Funny.commands.size} commandes!`);
};