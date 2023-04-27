const { Client, Collection, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");
const config = require("./config.json");
const express = require('express');



const funny = new Client({
    intents: 32767
});




funny.commands = new Collection();
funny.slash_commands = new Collection();
funny.aliases = new Collection();
funny.events = new Collection();
funny.categories = fs.readdirSync("./commands");


module.exports = funny;


["prefix", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(funny);
});


process.on('unhandledRejection', err => {
    console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
    console.log(err);
});


const AUTH = process.env.TOKEN || config.funny.TOKEN;
if (!AUTH) {
    console.warn("[WARN] You need to provide a Bot token!").then(async () => process.exit(1));
} else {
    funny.login(AUTH).catch(() => console.log("[WARN] It seems like the token is invalid, please recheck it. If the this error stills showing, then enable the 3 Gateaway Intents."));
}