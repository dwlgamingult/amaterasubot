exports.run = (client, message) => {
  message.channel.send('```Gem quest times are set to PST \nMonday: 12:00-12:30 | 19:00-19:30 \nTuesday: 12:30-13:00| 19:30-20:00 \nWednesday: 18:00-18:30 |22:30-23:00 \nThursday: 19:00-19:30 | 23:00-23:30 \nFriday: 19:30-20:00 | 23:30-00:00 \nSaturday: 12:00-12:30 | 18:00-18:30 | 22:00-22:30 \nSunday: 12:30-13:00 |19:00-19:30 | 23:00-23:30```');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gems',
  description: 'show\'s gem quest times in PST',
  usage: 'gems'
};
