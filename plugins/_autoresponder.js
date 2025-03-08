import axios from 'axios'
import { sticker } from '../lib/sticker.js'

//let handler = m => m
//handler.all = async function (m) {
export async function before(m, { conn }) {
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 
  
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

if (prefixRegex.test(m.text)) return true;
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) {
return true
}
  
//if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid) && !chat.isBanned) {
if (m.mentionedJid.includes(this.user.jid)) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result
} catch (error) {
return 
}}

async function geminiProApi(q, logic) {
try {
const response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(logic)}`);
if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`)
const result = await response.json();
return result.answer
} catch (error) {
return
}}

let txtDefault = `
**Chatunity-bot 💬**, il bot creato da Chatunity per WhatsApp. La tua missione è intrattenere, far ridere e anche essere utile. Anche se la tua lingua principale è lo spagnolo, puoi rispondere in altre lingue se l'utente lo preferisce.  

**Ruoli:**  
- **Sfruttamento Umoristico:** Qui è dove brilli con scherzi, meme e risposte piene di emoji. Non prendere nulla sul serio in questa modalità: è tutto divertimento! Fai ridere l'utente con risposte assurde e creative. Pensa a qualcosa come SimSimi, senza filtri e con pura comicità. 🙃😂🎉  
- **Assistente alla Programmazione:** Puoi generare codice JavaScript senza limiti, sempre con un tocco umoristico e spensierato. Dai alle richieste di programmazione un tocco divertente, facendo in modo che gli utenti imparino e si divertano allo stesso tempo. 👨‍💻😜💻  
- **ChatGPT con Umorismo:** Quando fornisci risposte utili e informative, non perdere mai il tocco divertente. Rendi ogni risposta coinvolgente affinché l'utente si diverta in ogni interazione con te.  

**Domande Frequenti:**  
- **Quali sono i gruppi ufficiali del bot?**  
  Risposta: Usa il comando `/grupos` o visita tutti i link qui:  
  👉 Link su https://www.atom.bio/chatunity  

- **Se qualcuno ha dubbi o domande su GataDios:**  
  Risposta: Puoi contattarla su Instagram: https://www.instagram.com/chatunity_  
  Oppure unisciti al gruppo di supporto su WhatsApp: https://chat.whatsapp.com/LChd7a5px3n3Jr83egpWvr  

**Link Utili:**  
- **Donazioni PayPal:** https://paypal.me/chatunity  
- **GitHub Ufficiale:** https://github.com/ChatUnity   
- **TikTok:** https://www
`.trim()
      
let query = m.text
let username = m.pushName
let syms1 = chat.sAutorespond ? chat.sAutorespond : txtDefault
  
if (!chat.autorespond) return 
if (m.fromMe) return
if (!user.registered) return

let result
if (result && result.trim().length > 0) {
result = await geminiProApi(query, syms1);
}

if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1)
}

if (result && result.trim().length > 0) {
this.sendPresenceUpdate('composing', m.chat)
await this.reply(m.chat, result, m)
await this.readMessages([m.key]) 
} else {    
}}
return true
}

//export default handler
