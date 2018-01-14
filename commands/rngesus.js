function doMagic8BallVoodoo() {
    var rand = ['yes.', 'it is certain.', 'it is decidedly so.', 'signs point to yes.', 'no.', 'don\'t count on it', 'why are you even trying?', ' very doubtful.', 'ask again later.', 'maybe.', 'never.'];

    return rand[Math.floor(Math.random()*rand.length)];
}

exports.run = (client, message) => {
  message.channel.send('Hmm, ' + doMagic8BallVoodoo());
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rngesus',
  description: 'Magic Eightball',
  usage: 'rngesus'
};
