require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const CHANNEL = process.env.CHANNEL;

const MAX_TIME = 60 * 3600;
const MIN_TIME = 30 * 3600;
const SCREAMS = [
  "RRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEEEEEEEEEEEEEEEHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!",
];

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  beginScreaming();
});

const getRandomScream = () => {
  return SCREAMS[[Math.floor(Math.random() * SCREAMS.length)]];
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const beginScreaming = () => {
  const channel = bot.channels.find((channel) => channel.id === CHANNEL);
  setTimeout(() => {
    channel.send(getRandomScream());
    beginScreaming(); // do not let the screaming end...
  }, getRandomInt(MIN_TIME, MAX_TIME));
};
