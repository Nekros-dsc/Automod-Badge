const Funny = require("../../index.js");
const config = require("../../config.json");
const ms = require("ms");

Funny.once('ready', async () => {
  console.log(`[Funny] ${Funny.user.tag} est prêt. Il surveille ${Funny.guilds.cache.size} servers and ${Funny.users.cache.size} uses.`);



  Funny.user.setActivity(`Funny tjr la pour toi`)
});