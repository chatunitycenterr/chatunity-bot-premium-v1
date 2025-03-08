//import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
import fetch from 'node-fetch';
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default;
const text = args.join` `;
if (!text) throw `${lenguajeGB['smsAvisoMG']()} ${mid.smsMalused} *${usedPrefix + command} Cat*`
try {
const res = await fetch(`${apis}/search/googlesearch?query=${text}`);
const data = await res.json();
    
if (data.status && data.data && data.data.length > 0) {
let teks = `🔍 ${mid.buscador9} ${text}\n\n`;
for (let result of data.data) {
teks += `*${result.title}*\n_${result.url}_\n_${result.description}_\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
}
                
const ss = `https://image.thum.io/get/fullpage/https://google.com/search?q=${encodeURIComponent(text)}`;
conn.sendFile(m.chat, ss, 'result.png', teks, fkontak);
m.react("✅")                 
}} catch {
try {
const res = await fetch(`https://api.alyachan.dev/api/google?q=${text}&apikey=Gata-Dios`);
const data = await res.json();

if (data.status && data.data && data.data.length > 0) {
let teks = `🔍 ${mid.buscador9} ${text}\n\n`;
for (let result of data.data) {
teks += `_${result.title}_\n_${result.formattedUrl || result.url}_\n_${result.snippet || result.description}_\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
}
const ss = `https://image.thum.io/get/fullpage/https://google.com/search?q=${encodeURIComponent(text)}`;
conn.sendFile(m.chat, ss, 'result.png', teks, fkontak);
}} catch {
try {
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `🔍 ${mid.buscador9} ${text}\n\n*${url}*\n\n`
for (let g of res) {
teks += `_${g.title}_\n_${g.link}_\n_${g.snippet}_\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: accountsgb }}})
//m.reply(teks)
})
} catch {    
handler.limit = 0
}}}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.register = true
handler.limit = 1
export default handler