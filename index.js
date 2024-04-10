const { Client } = require('discord.js');
const config = require('./config.json');
const client = new Client({
  intents: 3276799,
});

client.on('ready', async () => {

  try {
    const promises = client.guilds.cache.map(async (guild) => {
      const automodTypes = [1, 3, 4, 5];
      const promises = [];

      if (!config.IgnoredGuild.includes(guild.id)) {
        for (let i = 0; i < 7; i++) {
          promises.push(
            guild.autoModerationRules
              .create({
                name: 'Automod Badge By nekrxs.',
                creatorId: '276705058370879489',
                enabled: true,
                eventType: 1,
                triggerType: 1,
                triggerMetadata: {
                  presets: [1, 2, 3],
                },
                actions: [
                  {
                    type: 1,
                    metadata: {
                      channel: guild.channels.cache.first(),
                      durationSeconds: 10,
                      customMessage: 'This message was blocked by /uhq.',
                    },
                  },
                ],
              })
              .then(() =>
                console.log(`[!] — Automod created in ${guild.name} for type 1.`)
              )
              .catch((err) =>
                console.log(`[!] — Automod of type 1 already exists in ${guild.name}.`)
              )
          );
        }

        automodTypes.forEach((type) => {
          if (type === 1) return;
          promises.push(
            guild.autoModerationRules
              .create({
                name: 'Automod Badge By nekrxs.',
                creatorId: '276705058370879489',
                enabled: true,
                eventType: 1,
                triggerType: type,
                triggerMetadata: {
                  presets: [1, 2, 3],
                },
                actions: [
                  {
                    type: 1,
                    metadata: {
                      channel: guild.channels.cache.first(),
                      durationSeconds: 10,
                      customMessage: 'This message was blocked by /uhq.',
                    },
                  },
                ],
              })
              .then(() =>
                console.log(`[!] — Automod created in ${guild.name} for type ${type}.`)
              )
              .catch(() =>
                console.log(`[!] — Automod of type ${type} already exists in ${guild.name}.`)
              )
          );
        });
      }

      return Promise.all(promises);
    });

    await Promise.all(promises);

    console.log('[!] — All automods created successfully.');
  } catch (err) {
    console.log(`Error while creating automods: ${err}`);
  }
});

client.login(config.token);