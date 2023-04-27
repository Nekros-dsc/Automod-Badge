const { Client, Collection, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");
const config = require("./config.json");
const express = require('express');



const whitehall = new Client({
    intents: 32767
});





whitehall.commands = new Collection();
whitehall.slash_commands = new Collection();
whitehall.aliases = new Collection();
whitehall.events = new Collection();
whitehall.categories = fs.readdirSync("./commands");


module.exports = whitehall;
if(!whitehall) return


["prefix", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(whitehall);
});


process.on('unhandledRejection', err => {
    console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
    console.log(err);
});


const AUTH = process.env.TOKEN || config.whitehall.TOKEN;
if (!AUTH) {
    console.warn("[WARN] You need to provide a Bot token!").then(async () => process.exit(1));
} else {
    whitehall.login(AUTH).catch(() => console.log("[WARN] It seems like the token is invalid, please recheck it. If the this error stills showing, then enable the 3 Gateaway Intents."));
}