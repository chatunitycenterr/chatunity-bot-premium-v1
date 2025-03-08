// by https://github.com/elrebelde21

import '../plugins/_content.js'
//let handler = m => m
//handler.all = async function (m) {
const antiSpam = new Map();
export async function before(m, { conn }) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 
if (chat.isBanned) return
 
let vn = 'https://qu.ax/Ocxm.mp3'
let bot = `${pickRandom([`*Ehi! Eccomi qui. Posso aiutare 👉👈 Hey! I'm here. I can help 🙌*`, `Eccomi | Here I am 😼`, `*Ciao, eccomi. Posso aiutarti? | Hello, here I am, can I help? 😸*`])}`.trim()
let txt = `*Il tuo Nokia è troppo lento e hai bisogno che il tuo bot sia attivo 24/7?* 📱⏳

Abbiamo la soluzione perfetta per te! 🎉 Mantieni il tuo bot in funzione senza interruzioni con i nostri server. Offriamo server gratuiti e a pagamento a prezzi super accessibili per tutti. 💸 

🖥️ *Totalmente compatibile con Chatunity-bot:* Sfrutta al massimo il suo potenziale sui nostri server ad alte prestazioni, garantendo un'esperienza fluida e di alta qualità. Lo staff di Chatunity-bot e CorinPlus Host si occupa di farti godere al massimo di tutte le sue funzionalità. 💬✨

🟢 \`\`\`Informazioni sull'Host\`\`\`

💻 *Pagina:*
https://dash.skyultraplus.com

🧡 *Canale WhatsApp:*
https://whatsapp.com/channel/0029VaZVlJZHwXb8naJBQN0J

🗣📲 *Contatto:*
• wa.me/8619858371809

Non aspettare oltre e porta il tuo bot al livello successivo con il nostro servizio di hosting. È facile, veloce ed economico! 💪🚀` 

const lastMessageTime = antiSpam.get(m.sender) || 0;
const currentTime = Date.now();
if (currentTime - lastMessageTime < 5000) return 
antiSpam.set(m.sender, currentTime); 

if (/^infohost$/i.test(m.text)) {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363259442839354@newsletter', 
serverMessageId: '', 
newsletterName: 'Sky-Ultra-Plus ☁️' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 chatunity-server 🤖`,
body: `Il server plus di cui hai bisogno!_`,
"previewType": "PHOTO",
thumbnailUrl: 'https://cloud.dorratz.com/files/0e620e089bf149565c789c350f4f3347.jpg', 
sourceUrl: accountsgb}}},
{ quoted: fkontak})
} 
 
if (/^bot$/i.test(m.text)) {
await conn.reply(m.chat, bot, m, fakeChannel)
await conn.sendPresenceUpdate('recording', m.chat)
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: m })   
} else if (/^simi$/i.test(m.text)) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}SCRIVI UN TESTO PER PARLARE CON ME\n\nESEMPIO\n*Ciao Gata Bot*\n\nWRITE A TEXT TO TALK TO ME\n\nEXAMPLE\n*Hello Gata Bot.*`, m);
} else if (m.text.includes(`bot`) || m.text.includes(`Bot`) || m.text.includes(`simsimi`) || m.text.includes(`simi`) || m.text.includes(`alexa`)) {   
if (m.text.includes('jadibot') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('instalarbot') || m.text.includes('infobot')) return;
if (/^Voglio un bot|come ottengo un bot?|Voglio un bot?|voglio un bot|richiesta|richiesto bot|richiedo bot|Ho bisogno di un bot|ho bisogno di un bot$/i.test(m.text) ) {
return conn.reply(m.chat,  `\`⚡Vuoi un bot per il tuo gruppo?\`

*💬 Hai diverse opzioni. Puoi installarlo da solo seguendo i passaggi di installazione:*
* #instalarbot

*🧡 Puoi creare un sub-bot con il comando:*
* #serbot (scansiona il QR) 
* #jadibot --code (Codice di 8 cifre)

*💖 Puoi richiederlo facendo una donazione volontaria tramite PayPal* 

> 🚀 Il bot sarà attivo 24/7 per il tuo gruppo.

\`⚡ Dove posso donare?\`
> Tramite il nostro PayPal.

*❇️ PayPal:*
• https://www.paypal.com/paypalme/chatunity
 

\`⏩ Passo successivo ⏩\`

> Dopo il pagamento, puoi inviare una prova di pagamento (screenshot) per aggiungere il bot al tuo gruppo:

• https://chat.whatsapp.com/FDRfhecUGrCEQswkg8FUYz
• ${ig}

\`⚡ Il bot sarà attivo 24/7?\`
_*Sì, il nostro bot è ospitato su un server a pagamento per mantenerlo attivo 24/7 (ecco perché chiediamo donazioni per mantenerlo funzionante) 💞*_ 

> *Grazie per aver scelto ${gt} 💬💞*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Ciao ${name} 👋`, body: wm, previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
}
}
return !0 
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

