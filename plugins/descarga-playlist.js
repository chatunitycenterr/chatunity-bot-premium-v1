import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙎𝘾𝙍𝙄𝙑𝙄 𝙄𝙇 𝙉𝙊𝙈𝙀 𝘿𝙄 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙐𝙉 𝘾𝘼𝙉𝘼𝙇𝙀 𝘿𝙄 𝙔𝙊𝙐𝙏𝙐𝘽𝙀\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝘾𝙃𝘼𝙉𝙉𝙀𝙇`, fkontak,  m)
    try {
        let result = await yts(text);
        let ytres = result.videos;
      let teskd = `𝙍𝙞𝙘𝙚𝙧𝙘𝙖 𝙙𝙞 *${text}*`
        
    let listSections = [];
    for (let index in ytres) {
            let v = ytres[index];
            listSections.push({
             title: `${htki} 𝙍𝙄𝙎𝙐𝙇𝙏𝘼𝙏𝙄 ${htka}`,
                rows: [
                    {
                        header: '𝗔 𝗨 𝗗 𝗜 𝗢',
                        title: "",
                        description: `${v.title} | ${v.timestamp}\n`, 
                        id: `${usedPrefix}ytmp3 ${v.url}`
                    },
                    {
                        header: "𝗩 𝗜 𝗗 𝗘 𝗢",
                        title: "" ,
                        description: `${v.title} | ${v.timestamp}\n`, 
                        id: `${usedPrefix}ytmp4 ${v.url}`
                    }, 
                  {
                        header: "𝗔 𝗨 𝗗 𝗜 𝗢   𝗗 𝗢 𝗖",
                        title: "" ,
                        description: `${v.title} | ${v.timestamp}\n`, 
                        id: `${usedPrefix}ytmp3doc ${v.url}`
                    }, 
                    {
                        header: "𝗩 𝗜 𝗗 𝗘 𝗢   𝗗 𝗢 𝗖",
                        title: "" ,
                        description: `${v.title} | ${v.timestamp}\n`, 
                        id: `${usedPrefix}ytmp4doc ${v.url}`
                    }
                ]
            });
        }
    await conn.sendList(m.chat, `${htki} *𝙍𝙄𝙎𝙐𝙇𝙏𝘼𝙏𝙄* ${htka}\n`, `\n𝙍𝙞𝙘𝙚𝙧𝙘𝙖 𝙙𝙞: ${text}`, `𝗖 𝗘 𝗥 𝗖 𝗔`, listSections, fkontak);
    } catch (e) {
    await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], null, null, m)
    console.log(e) 
    }}
    
handler.help = ['playlist']
handler.tags = ['dl']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i
handler.limit = 1
handler.level = 3
export default handler
