exports.run = (client, message) => {
  message.channel.send('Gem quest times are set to GMT\n Monday:   20:00-20:30  |  03:00-03:30\n Tuesday:   20:30-21:00   |  03:30-04:00\n Wednesday:   02:00-02:30  |  06:30-07:00\n Thursday:   03:00-03:30  |  07:00-07:30\n Friday:   03:30-04:00  |  07:30-08:00\n Saturday:   20:00-20:30  |  02:00-02:30  |  06:00-06:30\n Sunday:   20:30-21:00  |  03:00-03:30   | 07:00-07:30');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gemsgmt',
  description: 'gem quests in GMT.',
  usage: 'gemsgmt'
};
