const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Taifur@gmail.com";
global.location = "Sialkot,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "4593707292@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxtaifur/Taifur-md-v2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/088d3f88c84da41200e34.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "4593707292,923192173398";
global.owner = process.env.OWNER_NUMBER || "4593707292";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dSU21YUEsvY3hpUjQyYkl2bmZZTkZ3VThuYjA5ci8ycFhxQzNCS2RGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnpIdmh6RUprc2RCZCtXVEZMUjZUUmhsaUJuVnNWeXVEWlNoZWQ2RUdCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR2VxTlZ4bjIyNmNJbW9mSFNDUmJOb2pUSzFVSWR1WENXdHR4T2k0c2xzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSFdXazdMR1VCZG1NZitVVWcvVFhpaVprT1hJcVZWSitQNE5lR0drRFZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFVjhVVmVrb0wycU5IWUlkb05QYU4rL01DcGZ2MzRzZEVvS1phWWIwVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI1WW45YnR4MWZDS1I4UzFzMDlXYkhPOXpnVGlUS0xGL2FOeXo0emhIenM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dGYzBaU2JUZ0REbUsyeUNIeXJNb2l2eUE4dzcxVzY0TkQyZHNEZXgxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVJlaDhaL0M2MzhTeXhnSjhyQ1hvdUVHOVljdFlUaXJVYmsrcEVqdHptbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklpWFlzQlNSSGhsVkZNY3B4TVEvL2hDNVNlU2FOK1dtYzNCZk9zNHZTYzdzYlRueWNKOG1maytsenY3MXEzYUdTTUwzVjZJWlE0U280TE1XdWFwTGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJDdCtGSU4rVUtDelVFQTRST05KWCtHaW5iTkRHbVJKdXRUTWtzREVSenZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0U3k5ZzJrQVJ5aXlFSUFoMjhtUlhBIiwicGhvbmVJZCI6ImUzZmE3YjBjLWI3NzItNDg1Ny04NjNhLTA0ZDUyMGFlMjRiZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmb3BWTnVXeStFYkt4RUJ5L1IvZzY0clhaZHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGxHa3hwKzdHOUxXcFQxYnRSY0dIZ2xLQTNzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZBTVY4S0MyIiwibWUiOnsiaWQiOiIyMTI2MTI0MzU5NzI6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOGqfCdkIvwnZCU8J2QgvCdkIjwnZCF8J2QhPCdkJHwk4aqXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01TUTFPQUJFTmIyd3JVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFZd2dSU3Q1K00rNlMrUHMxbXhldFpPVEd1aEp3WnVUN25pYUM2RnB6ekk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdBa1FnSEhCMjJXb1hDSUdhQ3AyNWZvS244Z2FsVjhZZjgyVm0wYm5hNkVOcDJCaGNpcEVCaVdhaS83Vk1wOUloU0doUHVRZFVSQkdFeEY1NGI1V0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvRFlXbUoyUWxhYk5MMFAvdnpwVXpzaEZqUWNLM3FNVVlYZklFK0VuN2xFU0RiRzF6THY0Mm5wdWxIbGJhN0sxR3F0dGg2UzEzRlBWSnBKaC9wYTlnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjYxMjQzNTk3MjoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXbU1JRVVyZWZqUHVrdmo3TlpzWHJXVGt4cm9TY0diays1NG1ndWhhYzh5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODU4MzM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9pQSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐓𝐀𝐈𝐅𝐔𝐑👑-𝐌𝐃-𝐕2",
  author: process.env.PACK_AUTHER || "🖤𝐋𝐔𝐂𝐈𝐅𝐄𝐑𓆪",
  packname: process.env.PACK_NAME || "𓆩𝐓𝐀𝐈𝐅𝐔𝐑🥀",
  botname: process.env.BOT_NAME || "𓆩𝐓𝐀𝐈𝐅𝐔𝐑🥀-𝐌𝐃-𝐕2𓆪",
  ownername: process.env.OWNER_NAME || "𓆩𝐋𝐔𝐂𝐈𝐅𝐄𝐑𓆪",
  errorChat: process.env.ERROR_CHAT || "4593707292",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
