import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsInsta2}\n*${usedPrefix + command} gata_dios*`
try {
const apiUrl = `${apis}/tools/igstalk?username=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.data) return m.react("❌");
const profile = delius.data;
const txt = `┃ 𓃠 *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ ${mid.user}
┃ ${profile.username}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${mid.name}
┃ ${profile.full_name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${mid.smsinsta4} 
┃ ${profile.biography}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *VERIFICADOS*: 
┃ ${profile.verified ? 'Sí' : 'No'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *CUENTA PRIVADA*: 
┃ ${profile.private ? 'Sí' : 'No'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${mid.smsinsta1}
┃ ${profile.followers}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${mid.smsinsta2}
┃ ${profile.following}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${mid.smsinsta3} 
┃ ${profile.posts}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *URL*: 
┃ ${profile.url}`;
await conn.sendFile(m.chat, profile.profile_picture, 'insta_profile.jpg', txt, m, null, fake);
} catch (error) {
try {
const {key} = await conn.sendMessage(m, {text: wait})
await conn.sendMessage(m, {text: waitt, edit: key})
await conn.sendMessage(m, {text: waittt, edit: key})
await conn.sendMessage(m, {text: waitttt, edit: key})
let res = await igstalk(args[0].replace(/^@/, ''))
let res2 = await fetch(`https://api.lolhuman.xyz/api/stalkig/${args[0].replace(/^@/, '')}?apikey=${lolkeysapi}`)
let res3 = await res2.json()
let json = JSON.parse(JSON.stringify(res))
let iggs = `┃ 𓃠 *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃  ${mid.name}
┃ *${json.username}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃  ${mid.user}
┃ *${json.fullname}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${mid.smsYT4}
┃ *https://instagram.com/${json.username.replace(/^@/, '')}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${mid.smsinsta1}
┃ *${json.followers}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃  ${mid.smsinsta2}
┃ *${json.following}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃  ${mid.smsinsta3}
┃ *${json.post}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃  ${mid.smsinsta4}
┃ *${json.bio}*`.trim() 
let aa = `${res3.result.photo_profile || res.profile}`
await conn.sendFile(m.chat, aa, 'error.jpg', iggs, m)
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()} *${mid.smsinfo}*`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ChatUnity-bot-premium-v1 | ChatUnity',
body: 'developed by chatunity',         
previewType: 0, thumbnail: gataMenu,
sourceUrl: md}}})
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.money = false
}}}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.money = 150
//handler.level = 3
//handler.register = true
export default handler

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: { "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8", "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36" }}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()}
resolve(result)})})}