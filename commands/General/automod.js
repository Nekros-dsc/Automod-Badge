const Discord = require('discord.js')

module.exports = {
	name: 'automod',
	aliases: [],
	category: "General",
	description: "badge automode",
	usage: "automod",
	examples: [],
	run: async (funouille, message, args, prefix) => {
       		const guild = message.guild

			  
   
		   const rule = guild.autoModerationRules.create({
			   name: `Automod by funouille`,
			   creatorId: `820361590826205215`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 4,
			   triggerMetadata:
				   {
					   presets: [1, 2, 3]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: message.channel,
							   durationSeconds: 10,
							   customMessage: 'Ce message a été bloqué par funouille'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await message.reply(`${err}`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule) return;
   
			   const embed = new Discord.MessageEmbed()
			   
			   .setDescription('C\'est bon')
   
			   message.reply({embeds: [embed]})
		   }, 3000)
   
   
	   
   
   
		   const rule2 = guild.autoModerationRules.create({
			   name: `Automod by funouille "funouilletropgrr"`,
			   creatorId: `820361590826205215`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 1,
			   triggerMetadata:
				   {
					   keywordFilter: [`funouilletropgrr`]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: message.channel,
							   durationSeconds: 10,
							   customMessage: 'Ce message a été bloqué par funouille'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await message.reply(`${err}`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule2) return;
   
			   const embed2 = new Discord.MessageEmbed()
			   .setDescription('C\'est bon \'funouilletropgrr\'')
   
			   message.reply({embeds: [embed2]})
		   }, 3000)

		   const rule9 = guild.autoModerationRules.create({
			name: `Automod by funouille "funouilletropgrr"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`funouilletropgrr`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par funouille'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await message.reply(`${err}`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule9) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'funouilletropgrr\'')

			message.reply({embeds: [embed2]})
		}, 3000)

		const rule3 = guild.autoModerationRules.create({
			name: `Automod by funouille "funouilletropgrr"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`funouilletropgrr`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par funouille'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await message.reply(`${err}`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule3) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'funouilletropgrr\'')

			message.reply({embeds: [embed2]})
		}, 3000)

		const rule4 = guild.autoModerationRules.create({
			name: `Automod by funouille "funouilletropgrr"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`funouilletropgrr`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par funouille'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await message.reply(`${err}`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule4) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'funouilletropgrr\'')

			message.reply({embeds: [embed2]})
		}, 3000)

		const rule5 = guild.autoModerationRules.create({
			name: `Automod by funouille "funouilletropgrr"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`funouilletropgrr`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par funouille'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await message.reply(`${err}`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule5) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'funouilletropgrr\'')

			message.reply({embeds: [embed2]})
		}, 3000)

		const rule6 = guild.autoModerationRules.create({
			name: `Automod by funouille "funouilletropgrr"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`funouilletropgrr`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par funouille'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await message.reply(`${err}`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule6) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'funouilletropgrr\'')

			message.reply({embeds: [embed2]})
		}, 3000)

		const rule7 = guild.autoModerationRules.create({
			name: `Automod by funouille "funouilletropgrr"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`funouilletropgrr`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par funouille'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await message.reply(`${err}`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule7) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'funouilletropgrr\'')

			message.reply({embeds: [embed2]})
		}, 3000)

   
	   
	}
}
