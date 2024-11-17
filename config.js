const { readFileSync } = require('fs')
require('dotenv').config({path: './mongo.env'});
require('dotenv').config({path: './owner.env'});
require('dotenv').config({path: './session.env'});
require('dotenv').config({path: './bot.env'});

module.exports = {
    /**
     * bot details and parameters
     */
    botname: process.env.BotName || "Mr-Dracula🌚🌙",
    footer: process.env.Footer || "© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐐𝐮𝐞𝐞𝐧 𝐀𝐧𝐲𝐚 𝐁𝐨𝐭",
    prefa: process.env.Prefix || "-",
    themeemoji: process.env.ThemeEmoji || "🎐",

    /**
     * owner details and parameters
     */
    ownername: process.env.Owner_Name || "Pika~Kun",
    ownernumber: process.env.Owner_Number || "916900904828",
    instagramId: process.env.Insta || "3.69_pika",

    /**
     * other details and parameters
     */
    author: process.env.Author || "Mr-Dracula🌚🌙",
    packname: process.env.PackName || "Your-Bae🪀",
    socialLink: process.env.Web || "https://github.com/PikaBotz",
    groupLink: process.env.GcLink || "https://chat.whatsapp.com/E490r0wSpSr89XkCWeGtnX",
    warns: Number(process.env.Warn_Limits) || 3,
    cooldown: Number(process.env.Cooldown_Timer_Seconds) || 5, // default cooldown time per command in seconds
    mongoUrl: process.env.MongoDB || "YOUR_MONGODB_URL",
    sessionId: process.env.SESSION_ID |Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxSZHpqRFRuRndzMG91L2t6TTdqVXliSDNTU3laNytXMVkxeTRtcTkwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmRVWndwOWh3OXVuaC9uYXVyd0pXRm5UeW1QVTN3Mms3SzY2OVVHOEFFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRFZzR0R3Z2tEdi9FS2d1UlFPMDE0c3JGakxWTTJxUi9WMEdWN3p1clZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6akpVaUJmSDFLcGYvdy80YTJzOC9VUkR1L1FpWGNHWXF0MDhLbFgzcDNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGK3JRbHZtbXVRLzVML0VOVWxReFB1L1NTSC9SRm56akRYZjVlUENhbFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkphWGpNRnE5eEZCNElTdG9POWY3N3VjSjdGTlRLRFNtQm5sTFhyd0pPbVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK01JM0FJbFFnQ2RDRWd6cHFacnRMRko1U1U2MENvNmkxL0RJTDArL0xuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemphU3UxZ3FpbjMyNXppUzUxdFdwSHJrVVc3WnpYa012MGpyV2ZEYWF4ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF2VEc3enZUNTIzRW1UKzJWaWNySEN3ek9tNXJpZExaVzFnYUh5bFlIbE0xOUI3RzllTXZnTFFSNW0vWE94NDV6YU14MGd3S1IyMGdmdXp1TitrRGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJHNUR6TEgvWVREZWJHZWJhQ2YvczdkRzRxMk5GZVRjWllwZ1JERlhKWGlnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ19zMldSY2VRdldMTXIzZ2dYNWJ2dyIsInBob25lSWQiOiJlYzY5YjRhYy1iYjY3LTRlYzEtOWFmOS01YTNlN2QyNTc0YjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1VKRTZ3OVNRZnBXTkRSUi9ZTC9WbXZndjQ4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik44aTdvdHMrbDU3Q0lwSGZXcDlWUXVuZWRYYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJITU5UQlROSCIsIm1lIjp7ImlkIjoiNTA5NDA5OTM5MDE6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VuPCdlobwnZaX8J2Wm/CdlorwnZaT8J2WmCDwnZaR8J2WiiDwnZab8J2WisyB8J2Wl/Cdlo7wnZaZ8J2WhvCdlofwnZaR8J2WiiDwnZaK8J2Wk/CdlojwnZaN8J2WhvCdlpPwnZaZ8J2WivCdlprwnZaXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTFB5WWdHRUlyVTQ3a0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxV2xwVHJwVjBBZ2U2SkpPWEczTm5CazBaT2dUd1d3MXVzb0ZSSUlJRTBFPSIsImFjY291bnRTaWduYXR1cmUiOiJLUFpIRFA3OXZucVRFQnBUbUdxL1dKaERwVERiTkZ4SlZiZUFPNVhOSUoxS1YrSDdKYXNHMVRKbGlRajYyVGVUb0tlcnByR3hkMkdlNU9NNWhaSWlEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieERZSVNlNHhVVjBGTWpxeC9EWFRaWmxDOEVkUFdYZHBXeFNaanNNcUROUHZxYnE1QjZZR2NkdWUycEZnNUVocy9ZWkduNmdpRndScGFrTkpHbU9iaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0MDk5MzkwMToxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbHBhVTY2VmRBSUh1aVNUbHh0elp3Wk5HVG9FOEZzTmJyS0JVU0NDQk5CIn19XSwicGxhdGZvcm0iOiJzbWJhIn0=| "YOUR_SESSION_ID",

    /**
     * thumbnails and medias
     */
    image_1: readFileSync('./lib/Assets/image_1.jpg'), // primary image
    image_2: readFileSync('./lib/Assets/image_2.jpg'), // secondry image
    imageUrl: "https://i.ibb.co/ZKKSZHT/Picsart-23-06-24-13-36-01-843.jpg", // image url, to replace to your url upload your image to https://imgbb.com
    imageMentionUrl: "https://i.ibb.co/ZKKSZHT/Picsart-23-06-24-13-36-01-843.jpg", // image for mention reply audio media
    aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
    menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
    ownerMentionMp3: readFileSync('./lib/Assets/ownerMentionMp3.mp3'),  // audio for mention reply audio media

    /**
     * core parameters and values
     */
    ownercon: { key: { fromMe: false, participant: '0@s.whatsapp.net', ...({ remoteJid: 'status@broadcast' }), }, message: { contactMessage: { displayName: this.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${this.ownername},;;;\nFN:${this.ownername}\nitem1.TEL;waid=${this.ownernumber}:${this.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: this.image_2, thumbnail: this.image_2, sendEphemeral: true } } },
    fakeshop: { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { orderMessage: { itemCount: 1234, status: 200, thumbnail: this.image_1, surface: 200, message: this.botname, orderTitle: this.ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore: 999, isForwarded: true}, sendEphemeral: true },
    message: {
        success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
        admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
        botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
        owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
        group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
        private: 'This command is only for private chats.',
        wait: '🔄 Processing request...',
        error: "❌ Oops! An error occurred while processing your request. Please try again later.",
        ban: `You're banned from using this bot!`,
        nsfw: 'This group is not *NSFW* enabled.',
        banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
    },
    Port: process.env.Port || "8080",

    /**
     * external APIs
     */
    api: {
        api1: "https://www.guruapi.tech" // Guru's API
    }
}

global.connectionMessageSent = false;
global.game = {
    tictactoe: {}
}
