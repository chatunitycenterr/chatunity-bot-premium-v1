let numerosPrefijos, contenido, reply

const handler = async (m, { conn, command, text, usedPrefix, isOwner, isROwner, isAdmin }) => {
if (!isOwner || !isROwner || !isAdmin) return m.reply(mid.mAdvertencia + `*Non hai i permessi per usare questo comando*`)

if (!text || !/\d/.test(text)) {
m.reply(mid.mInfo + `Aggiungi il prefisso del codice paese, tagga o scrivi il numero di un utente specifico.\n\n> Se sono più, separali con una virgola (,)\n\n*Esempio:*\n- *${usedPrefix + command}* +57\n- *${usedPrefix + command}* +57, +212, @tag, +num\n\n${mid.mAdvertencia}> *Configurando questo, verranno rimossi gli utenti con prefissi configurati o numeri specifici; sia quando qualcuno entra che quando scrive nel gruppo*`)
return
}
await obtenerPrefijos(text)

handler.before = async function (m, { conn, isOwner, isROwner, isAdmin }) {
let chat = global.db.data.chats[m.chat]
if (!chat.sCondition || chat.sCondition.length === 0) {
return 
}

if (m.quoted && m.quoted.id === reply && ['a', '1', 'combinar'].includes(m.text.toLowerCase())) {
if (!isOwner || !isROwner || !isAdmin) return m.reply(mid.mError + `*Questa azione non ti è consentita*`)
chat.sCondition = [...new Set([...chat.sCondition, ...numerosPrefijos])]
const prefijosConSigno = chat.sCondition.map(prefijo => `+${prefijo}`)
m.reply(mid.mExito + `I prefissi sono stati *combinati* correttamente.\n\n*Nuova configurazione:* \`\`\`${prefijosConSigno.join(', ')}\`\`\``)
}

if (m.quoted && m.quoted.id === reply && ['b', '2', 'reemplazar'].includes(m.text.toLowerCase())) {
if (!isOwner || !isROwner || !isAdmin) return m.reply(`*Questa azione non ti è consentita*`)
chat.sCondition = [...numerosPrefijos]
const prefijosConSigno = chat.sCondition.map(prefijo => `+${prefijo}`)
m.reply(mid.mExito + `I prefissi sono stati *sostituiti* correttamente.\n\n*Nuova configurazione:* \`\`\`${prefijosConSigno.join(', ')}\`\`\``)
}

if (m.quoted && m.quoted.id === reply && ['c', '3', 'eliminar'].includes(m.text.toLowerCase())) {
if (!isOwner || !isROwner || !isAdmin) return m.reply(`*Questa azione non ti è consentita*`)
chat.sCondition = []
m.reply(mid.mExito + 'La configurazione personalizzata è stata 🗑️ *eliminata* correttamente.\n\n> *Verrà utilizzata la configurazione predefinita*')
}

if (m.quoted && m.quoted.id === reply && ['d', '4', 'cancelar'].includes(m.text.toLowerCase())) {
if (!isOwner || !isROwner || !isAdmin) return m.reply(`*Questa azione non ti è consentita*`)
m.reply('*Nessuna modifica è stata effettuata.*')
return
}}}

handler.command = /^(editarantifake|editarfake|editantifake|editfake)$/i
handler.register = true
handler.group = true
export default handler

async function obtenerPrefijos(input) {
const prefijos = input.split(',').map(prefijo => prefijo.trim())
const prefijosLimpios = prefijos.map(prefijo => {
let prefijoLimpio = prefijo.replace(/[^0-9+]/g, '')
if (prefijoLimpio.startsWith('+')) {
prefijoLimpio = prefijoLimpio.slice(1)
}
return `+${prefijoLimpio}`
})
numerosPrefijos = prefijosLimpios.map(prefijo => parseInt(prefijo.replace(/\D/g, ''), 10)).filter((valor, indice, self) => self.indexOf(valor) === indice)

let chat = global.db.data.chats[m.chat]
if (!chat.sCondition) {
chat.sCondition = []
}
chat.sCondition.push(...numerosPrefijos)
chat.sCondition = [...new Set(chat.sCondition)]

const prefijosConSigno = chat.sCondition.map(prefijo => `+${prefijo}`)
m.reply(mid.mExito + `Configurazione salvata: *${prefijosConSigno.join(', ')}*\n\n> Puoi aggiungerne altri se lo desideri`)
}