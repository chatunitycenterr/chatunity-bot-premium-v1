import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
import axios from "axios"

let handler = async (m, { conn, usedPrefix, command }) => {
//let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(gataMenu.getRandom())).buffer() }}}
try { 
if (command == 'consejo' || command == 'advice') { 
let img = 'https://img.freepik.com/vector-premium/caracter-gato-ilustracion-hoja-trebol_75474-1263.jpg'
let list = global.motivation 
let contenido = list[Math.floor(Math.random() * list.length)]
let result = await translate(`${contenido}`, { to: lenguajeGB.lenguaje(), autoCorrect: true })
let texto = `
・☘️・》・》・》

*ღ _${result.text}_*

・☘️・》・》・》`
conn.sendButton(m.chat, texto.trim(), wm, img, [
[lenguajeGB.smsConj(), `${usedPrefix + command}`],
[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], null, fkontak)}
//conn.sendFile(m.chat, img, 'error.png', texto.trim(), fkontak)}   
//await conn.sendButton(m.chat, texto.trim(), wm, img, [[lenguajeGB.smsConj(), `${usedPrefix + command}`], [lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m, frep)}   
  
if (command == 'frase2' || command == 'phrase2') { 
let img = 'https://superpet.pe/blog/wp-content/uploads/2022/05/nombres-para-gatos-blancos.jpg'  
let list = (await axios.get(`https://raw.githubusercontent.com/ChatUnity/chatunity-bot-premium-v1/master/src/JSON/frase2.json`)).data  
let contenido = await list[Math.floor(list.length * Math.random())]
let frase = contenido.motivasi
let frase2 = await translate(`${frase}`, { to: lenguajeGB.lenguaje(), autoCorrect: true })
let texto = `
・☘️・》・》・》

*ღ ${frase2.text}*

・☘️・》・》・》`
conn.sendButton(m.chat, texto.trim(), wm, img, [
[lenguajeGB.smsFras(), `${usedPrefix + command}`],
[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], null, fkontak)} 
//conn.sendFile(m.chat, img, 'error.png', texto.trim(), m, fkontak)} 
//await conn.sendButton(m.chat, texto.trim(), wm, img, [[lenguajeGB.smsFras(), `${usedPrefix + command}`], [lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m, frep)} 
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = ['consejo', 'advice', 'frase2', 'phrase2']
handler.register = true
export default handler

global.motivation = [
  "Non parlare, agisci. Non dire, mostra. Non promettere, dimostra.",
  "Non smettere mai di dare il massimo solo perché qualcuno non ti dà riconoscimento.",
  "Lavora mentre loro dormono. Studia mentre loro festeggiano. Risparmia mentre loro spendono. Vivi come loro sognano.",
  "La chiave del successo è concentrare la mente su ciò che si desidera, non su ciò che si teme.",
  "Non aver paura di fallire. Teme di trovarti nello stesso posto tra un anno.",
  "Se continuiamo a fare ciò che stiamo facendo, continueremo a ottenere ciò che otteniamo.",
  "Se non sai gestire lo stress, non riuscirai a gestire il successo.",
  "Sii testardo con i tuoi obiettivi e flessibile nei metodi.",
  "Il duro lavoro batte il talento quando il talento non lavora sodo.",
  "Ricorda che le lezioni più grandi della vita si imparano nei momenti peggiori e dagli errori più grandi.",
  "La vita non è aspettare che passi la tempesta, ma imparare a ballare sotto la pioggia.",
  "Se un piano non funziona, cambia il piano, non l'obiettivo.",
  "Non temere che la tua vita finisca, teme che non inizi mai davvero.",
  "Le persone veramente grandi sono quelle che fanno sentire grandi anche gli altri.",
  "L'esperienza è un maestro severo perché prima ti mette alla prova, poi ti insegna la lezione.",
  "Sapere quanto c’è ancora da imparare è l’inizio del vivere.",
  "Il successo non è la fine, il fallimento non è fatale. Ciò che conta è il coraggio di andare avanti.",
  "Meglio fallire con originalità che avere successo imitando.",
  "Osa sognare, ma soprattutto, osa agire per realizzare i tuoi sogni.",
  "Punta in alto e non fermarti finché non ci arrivi.",
  "Costruisci il successo dai fallimenti. La disperazione e il fallimento sono le due pietre miliari più sicure per il successo.",
  "Il genio è un 1% ispirazione e 99% sudore.",
  "Il successo è il punto d’incontro tra preparazione e opportunità.",
  "La perseveranza fallisce 19 volte e trionfa al ventesimo tentativo.",
  "La strada per il successo e quella per il fallimento sono quasi identiche.",
  "Il successo arriva di solito a chi è troppo occupato a cercarlo.",
  "Non rimandare a domani ciò che puoi fare oggi.",
  "Tra 20 anni sarai più deluso dalle cose che non hai fatto che da quelle che hai fatto.",
  "Non perdere tempo a colpire un muro sperando di trasformarlo in una porta.",
  "Le opportunità sono come l'alba: se aspetti troppo, le perdi.",
  "La vita è per il 10% ciò che ti accade e per il 90% come reagisci.",
  "Ci sono tre modi per raggiungere il massimo successo: Il primo è essere gentili. Il secondo è essere gentili. Il terzo è essere gentili.",
  "La ragione principale per cui le persone falliscono è perché ascoltano amici, parenti e vicini.",
  "Il tempo è più prezioso del denaro. Puoi guadagnare più soldi, ma non puoi guadagnare più tempo.",
  "Stabilire obiettivi è il segreto per un futuro emozionante.",
  "Quando cerchiamo di migliorare noi stessi, tutto intorno a noi migliora.",
  "La crescita inizia quando accettiamo le nostre debolezze.",
  "Non arrenderti mai finché puoi ancora provarci. Non è finita finché non smetti di tentare.",
  "La volontà è la chiave del successo. Le persone di successo si sforzano sempre, superando apatia, dubbi e paure.",
  "Il primo passo del successo è vedere il fallimento come un segnale positivo per andare avanti.",
  "Il segno distintivo delle persone di successo è che cercano sempre di imparare cose nuove.",
  "Il successo è ottenere ciò che vuoi, la felicità è volere ciò che hai.",
  "Il pessimista vede la difficoltà in ogni opportunità. L’ottimista vede l’opportunità in ogni difficoltà.",
  "Il dubbio uccide più sogni del fallimento.",
  "Fai quello che devi finché non puoi fare quello che vuoi.",
  "L’ottimismo è una delle qualità più legate al successo e alla felicità.",
  "La ricompensa più grande per un lavoratore instancabile non è ciò che ottiene dal lavoro, ma ciò che diventa grazie al lavoro stesso.",
  "Il modo migliore per iniziare è smettere di parlare e cominciare a fare.",
  "Il fallimento non ti raggiungerà mai se la tua determinazione a vincere è abbastanza forte."
];

