const Discord = require('discord.js')

module.exports = {
	name: 'automod',
	aliases: [],
	category: "General",
	description: "badge automode",
	usage: "automod",
	examples: [],
	run: async (whitehall, message, args, prefix) => {
       		const whitehall_guild = message.guild
			const whitehall_message = message

			  
   
		   const rule = whitehall_guild.autoModerationRules.create({
			   name: `Automod by NovaWorld`,
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
							   channel: whitehall_message.channel,
							   durationSeconds: 10,
							   customMessage: 'Ce message a été bloqué par NovaWorld'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await whitehall_message.reply(`FIN discord.gg/whitehall & discord.gg/novaworld`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule) return;
   
			   const embed = new Discord.MessageEmbed()
			   
			   .setDescription('C\'est bon')
   
			   whitehall_message.reply({embeds: [embed]})
		   }, 3000)
   
   
	   
   
   
		   const rule2 = whitehall_guild.autoModerationRules.create({
			   name: `Automod by WhiteHall & NovaWorld"insulte"`,
			   creatorId: `820361590826205215`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 1,
			   triggerMetadata:
				   {
					   keywordFilter: [`insulte`]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: whitehall_message.channel,
							   durationSeconds: 10,
							   customMessage: 'Ce message a été bloqué par WhiteHall & Novaworld'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await whitehall_message.reply(`FIN discord.gg/whitehall & discord.gg/novaworld`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule2) return;
   
			   const embed2 = new Discord.MessageEmbed()
			   .setDescription('C\'est bon \'insulte\'')
   
			   whitehall_message.reply({embeds: [embed2]})
		   }, 3000)

		   const rule9 = whitehall_guild.autoModerationRules.create({
			name: `Automod by WhiteHall & Nova World"insulte"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insulte`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par WhiteHall'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`FIN discord.gg/whitehall & discord.gg/novaworld`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule9) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'insulte\'')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule3 = whitehall_guild.autoModerationRules.create({
			name: `Automod by WhiteHall "insulte"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insulte`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par WhiteHall'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`FIN discord.gg/whitehall & discord.gg/novaworld `)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule3) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'insulte\'')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule4 = whitehall_guild.autoModerationRules.create({
			name: `Automod by WhiteHall "insulte"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insulte`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par WhiteHall'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`FIN discord.gg/whitehall & discord.gg/novaworld`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule4) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'insulte\'')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule5 = whitehall_guild.autoModerationRules.create({
			name: `Automod by WhiteHall "insulte"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insulte`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par WhiteHall'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`FIN discord.gg/whitehall & discord.gg/novaworld`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule5) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'insulte\'')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule6 = whitehall_guild.autoModerationRules.create({
			name: `Automod by WhiteHall "insulte"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insulte`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par WhiteHall'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`FIN discord.gg/whitehall & discord.gg/novaworld`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule6) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'insulte\'')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

		const rule7 = whitehall_guild.autoModerationRules.create({
			name: `Automod by WhiteHall "insulte"`,
			creatorId: `820361590826205215`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`insulte`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: whitehall_message.channel,
							durationSeconds: 10,
							customMessage: 'Ce message a été bloqué par WhiteHall'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await whitehall_message.reply(`FIN discord.gg/whitehall & discord.gg/novaworld`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule7) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('C\'est bon \'insulte\'')

			whitehall_message.reply({embeds: [embed2]})
		}, 3000)

   
	   
	}
}
