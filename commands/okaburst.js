exports.run = (client, message) => {
  message.channel.send('Current Okami Burst start times are PST: 11am and 8pm | GMT: 7pm and 4am');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'okaburst',
  description: 'shows burst time for Okami',
  usage: 'okaburst'
};
