import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import '../plugins/_content.js'

let handler = m => m
handler.before = async function (m, { conn, usedPrefix }) {
	
if (!db.data.chats[m.chat].autolevelup) return
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu)
let mentionedJid = [who]
let username = conn.getName(who)
let userName = m.pushName || 'Anónimo'
	
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (m.chat === "120363393378968493@newsletter") return; 
if (m.fromMe) return
if (!chat.autolevelup) return !0

let level = user.level
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) 
user.level++
if (before !== user.level) {
let currentRole = Object.entries(roles).sort((a, b) => b[1] - a[1]) .find(([, minLevel]) => level + 1 >= minLevel)[0]
let nextRole = Object.entries(roles).sort((a, b) => a[1] - b[1]) .find(([, minLevel]) => level + 2 < minLevel)[0]

//if (user.role != currentRole && level >= 1) {
if (level >= 1) {
user.role = currentRole
let chtxt = `✨ ¡Felicidades *${userName}*, por tu nuevo rango!\n\n\`Nuevo Rango:\`\n${currentRole}`
if (nextRole) {
chtxt += `\n\n> Próximo rango ${nextRole}, en el *nivel ${roles[nextRole]}*. ¡Sigue así!`
}

//if (conn.user.jid === global.conn.user.jid) {	
await global.conn.sendMessage(ch.ch1, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '😎 ¡Alguien obtuvo un nuevo Rango!',
thumbnailUrl: ppch,
sourceUrl: accountsgb,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null }) 	
}
	
conn.reply(m.chat, `*╭━⊰ ${username} ⊱━დ*
*┃ ${lenguajeGB.smsAutoLv2()} ${before}*
*┃ ${lenguajeGB.smsAutoLv3()} ${user.level}*
*┃ ${lenguajeGB.smsAutoLv4()}* ${user.role}
*┃ ${lenguajeGB.smsAutoLv5()} ${new Date().toLocaleString('id-ID')}*
*╰━⊰ ${lenguajeGB.smsAutoLv1()} ⊱━━დ*

*_${lenguajeGB.smsAutoLv6()}_*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
	 
let especial = ['limit', 'diamond', 'joincount', 'emerald', 'berlian', 'kyubi', 'gold', 'money', 'tiketcoin', 'stamina'].getRandom()
let especial2 = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let especial3 = ['eleksirb', 'emasbatang', 'emasbiasa', 'rubah', 'sampah', 'serigala', 'kayu', 'sword', 'umpan', 'healtmonster', 'emas', 'pancingan', 'pancing'].getRandom()
let especial4 = ['common', 'uncoommon', 'mythic', 'pet', 'gardenboxs', 'legendary'].getRandom()

let especialCant = Math.floor(Math.random() * (9 - 6 + 1)) + 6 // Intervalo: 6 a 9
let especialCant2 = Math.floor(Math.random() * (10 - 6 + 1)) + 6 // Intervalo: 6 a 10
let especialCant3 = Math.floor(Math.random() * (10 - 6 + 1)) + 6 // Intervalo: 6 a 10
let especialCant4 = Math.floor(Math.random() * (3 - 2 + 1)) + 2 // Intervalo: 2 a 3

let normal = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let normal2 = ['petFood', 'makanancentaur', 'makanangriffin', 'makanankyubi', 'makanannaga', 'makananpet', 'makananphonix'  ].getRandom()
let normal3 = ['anggur', 'apel', 'jeruk', 'mangga', 'pisang'].getRandom()

let normalCant = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 
let normalCant2 = [1, 3, 2, 2, 4, 4, 2, 2, 4, 4, 5, 5, 1].getRandom() 
let normalCant3 = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 

if (level >= 1) {
let chtxt = `👤 *Usuario:* ${userName}\n🆙 *Nivel anterior:* ${before}\n🆕 *Nivel actual:* ${level + 1}\n👾 *Rango:* ${user.role}\n💬 *Bot:* ${gt}${(level + 1) % 5 === 0 ? `\n\n💰 *Recompensa por alacanzar el nivel ${level + 1}:*
🎁 *Bono:* \`X${Math.floor(((level + 1) - 5) / 10) + 1}\`
- *${especialCant * (Math.floor(((level + 1) - 5) / 10) + 1)} ${global.rpgshop.emoticon(especial)}*
- *${especialCant2 * (Math.floor(((level + 1) - 5) / 10) + 1)} ${global.rpgshop.emoticon(especial2)}*
- *${especialCant3 * (Math.floor(((level + 1) - 5) / 10) + 1)} ${global.rpgshop.emoticon(especial3)}*
- *${especialCant4 * (Math.floor(((level + 1) - 5) / 10) + 1)} ${global.rpgshop.emoticon(especial4)}*

> 👀 Prossima ricompensa al *livello ${level + 6}*` : ''}`.trim()
await global.conn.sendMessage(ch.ch1, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 Notifica Generale 🔔 】",
body: '⭐ Qualcuno è salito di livello!',
thumbnailUrl: ppch,
sourceUrl: accountsgb,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null }) 
}

if (user.level == 5){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 5!!* 🏆
𓃠 *${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1
  
}else if (user.level == 10){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 10!!* 🏆
𓃠 *${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1
  
}else if (user.level == 15){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 15!!* 🏆
𓃠 *${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2
  
}else if (user.level == 20){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 20!!* 🏆
𓃠 *${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb}}}) 
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2
  
}else if (user.level == 25){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 25!!* 🏆
𓃠 *${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3
	
}else if (user.level == 30){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 30!!* 🏆
𓃠 *${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3
	
}else if (user.level == 35){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 35!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 40){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 40!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 45){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 45!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 50){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 50!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 55){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 55!!* 🏆
𓃠 *${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6
	
}else if (user.level == 60){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 60!!* 🏆
𓃠 *${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6
	
}else if (user.level == 65){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 65!!* 🏆
𓃠 *${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7
	
}else if (user.level == 70){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 70!!* 🏆
𓃠 *${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7
	
}else if (user.level == 75){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 75!!* 🏆
𓃠 *${especialCant * 8} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 8} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 8} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 8} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 8
user[especial2] += especialCant2 * 8
user[especial3] += especialCant3 * 8
user[especial4] += especialCant4 * 8
	
}else if (user.level == 80){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 80!!* 🏆
𓃠 *${especialCant * 8} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 8} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 8} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 8} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 8
user[especial2] += especialCant2 * 8
user[especial3] += especialCant3 * 8
user[especial4] += especialCant4 * 8
	
}else if (user.level == 85){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 85!!* 🏆
𓃠 *${especialCant * 9} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 9} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 9} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 9} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb}}})
user[especial] += especialCant * 9
user[especial2] += especialCant2 * 9
user[especial3] += especialCant3 * 9
user[especial4] += especialCant4 * 9
	
}else if (user.level == 90){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 90!!* 🏆
𓃠 *${especialCant * 9} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 9} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 9} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 9} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 9
user[especial2] += especialCant2 * 9
user[especial3] += especialCant3 * 9
user[especial4] += especialCant4 * 9
	
}else if (user.level == 95){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 95!!* 🏆
𓃠 *${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10
	
}else if (user.level == 100){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 100!!* 🏆
𓃠 *${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10
	
}else{	
	
}
	 
}}		
export default handler

global.roles = {
    // Livello 0-9: Principianti
    "🌱 *Avventuriero(a) - Novizio(a) V*": 0,
    "🌱 *Avventuriero(a) - Novizio(a) IV*": 2,
    "🌱 *Avventuriero(a) - Novizio(a) III*": 4,
    "🌱 *Avventuriero(a) - Novizio(a) II*": 6,
    "🌱 *Avventuriero(a) - Novizio(a) I*": 8,
    
    // Livello 10-19: Apprendisti
    "🛠️ *Apprendista del Cammino V*": 10,
    "🛠️ *Apprendista del Cammino IV*": 12,
    "🛠️ *Apprendista del Cammino III*": 14,
    "🛠️ *Apprendista del Cammino II*": 16,
    "🛠️ *Apprendista del Cammino I*": 18,
    
    // Livello 20-29: Esploratori
    "⚔️ *Esploratore(trice) della Valle V*": 20,
    "⚔️ *Esploratore(trice) della Valle IV*": 22,
    "⚔️ *Esploratore(trice) della Valle III*": 24,
    "⚔️ *Esploratore(trice) della Valle II*": 26,
    "⚔️ *Esploratore(trice) della Valle I*": 28,
    
    // Livello 30-39: Guerrieri
    "🏹 *Guerriero(a) dell'Alba V*": 30,
    "🏹 *Guerriero(a) dell'Alba IV*": 32,
    "🏹 *Guerriero(a) dell'Alba III*": 34,
    "🏹 *Guerriero(a) dell'Alba II*": 36,
    "🏹 *Guerriero(a) dell'Alba I*": 38,
    
    // Livello 40-49: Guardiani
    "🛡️ *Guardiano(a) delle Foreste V*": 40,
    "🛡️ *Guardiano(a) delle Foreste IV*": 42,
    "🛡️ *Guardiano(a) delle Foreste III*": 44,
    "🛡️ *Guardiano(a) delle Foreste II*": 46,
    "🛡️ *Guardiano(a) delle Foreste I*": 48,
    
    // Livello 50-59: Maghi
    "🔮 *Mago(a) del Crepuscolo V*": 50,
    "🔮 *Mago(a) del Crepuscolo IV*": 52,
    "🔮 *Mago(a) del Crepuscolo III*": 54,
    "🔮 *Mago(a) del Crepuscolo II*": 56,
    "🔮 *Mago(a) del Crepuscolo I*": 58,
    
    // Livello 10000+: Immortali
    "👑🌌 *Divinità Eterna del Multiverso* ⚡": 10000
    };
    