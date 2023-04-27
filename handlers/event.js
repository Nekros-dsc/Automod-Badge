const { readdirSync } = require('fs');
const ascii = require('ascii-table');
let table = new ascii("Events Handler:");
table.setHeading('EVENTS:', 'STATUS:');

module.exports = (whitehall) => {
    readdirSync('./events/').forEach(dir => {
        const events = readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'));
        for(let file of events) {
            let pull = require(`../events/${dir}/${file}`);
            if(pull.name) {
                whitehall.events.set(pull.name, pull);
            } else {
                table.addRow(file, '🟩');
                continue;
            }
        }
    });
    console.log(table.toString());
	console.log(`[HANDLER] Le dossier event a été load avec succès!`);
}