let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsInsta2}\n*${usedPrefix + command} gata_dios*`
try {
await m.reply(global.wait)    
const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`)
var anu = await res.json()
var anuku = anu.result
if (anuku == '') return m.reply(`${lenguajeGB['smsAvisoFG']()}${mid.smsInsta3}`)  
for (var i of anuku) {
let res = await axios.head(i)
let mime = res.headers['content-type'] 
if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply(`${lenguajeGB['smsAvisoFG']()}${mid.smsInsta3}`)})
if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply(`${lenguajeGB['smsAvisoFG']()}${mid.smsInsta3}`)})
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}${mid.smsinfo}`, m, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: 'ChatUnity-bot-premium-v1 | ChatUnity', body: 'developed by chatunity',          previewType: 0, thumbnail: gataMenu, sourceUrl: md}}})
}} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = false
}}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 3
handler.register = true
export default handler