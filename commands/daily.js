exports.run = (client, message) => {
  message.channel.send('```Daily Quests are reset at 12 PM (UTC) / 5 AM (PST) every day. \nMonday - Thunder \nTuesday -Fire \nWednesday - Water \nThursday - Wind \nFriday - Light \nSaturday - Dark \nSunday - Gems/EXP```');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'daily',
  description: 'show\'s daily quests',
  usage: 'daily'
};
