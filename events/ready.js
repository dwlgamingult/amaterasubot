const schedule = require('node-schedule');

module.exports = client => {

  var rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = 1;
  rule.hour = [12, 19];
  rule.minute = 0;

  var j = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  rule.dayOfWeek = 2;
  rule.hour = [12, 19];
  rule.minute = 30;

  var i = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  rule.dayOfWeek = 3;
  rule.hour = 18;
  rule.minute= 0;

  var h = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  rule.dayOfWeek = 3;
  rule.hour = 22;
  rule.minute = 30;

  var g = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  rule.dayOfWeek = 4;
  rule.hour = [19, 23];
  rule.minute = 0;

  var f = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  rule.dayOfWeek = 5;
  rule.hour = [19, 23];
  rule.minute = 30;

  var e = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  rule.dayOfWeek = 6;
  rule.hour = [12, 18, 22];
  rule.minute = 0;

  var d = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  rule.dayofWeek = 7;
  rule.hour = 12;
  rule.minute = 30;

  var c = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  rule.dayOfWeek = 7;
  rule.hour = [19, 23];
  rule.minute = 0;

  var b = schedule.scheduleJob(rule, function() {
    client.channels.get('290857568535052298').send('<@&291032633666699265> Gem quests!');
  })

  console.log('Oh captain My Captain');
};
