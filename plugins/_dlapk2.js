let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {

    if (!args[0]) throw `Inserisci il nome dell'applicazione che desideri scaricare. *Esempio:*\n${usedPrefix + command} Clash Royale`;

try {
    let res = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${encodeURIComponent(args[0])}`);
    let result = await res.json();

    if (!result || !result.dllink) throw "Applicazione non trovata. Prova con un altro nome.";

    let { name, size, lastUpdate, icon, package: packe, dllink: URL } = result;

    let testo = `${rg}
   *Nome* : ⇢ ${name} 📛
   *Dimensione* : ⇢ ${size} ⚖️
   *Pacchetto* : ⇢ ${packe} 📦
   *Aggiornato* : ⇢ ${lastUpdate} 🗓️
    
L'applicazione verrà inviata a breve...`;

} catch (error) {
    console.error("Errore durante il recupero dell'applicazione:", error);
    throw "Si è verificato un errore durante la ricerca dell'applicazione. Riprova più tardi.";
}


    await conn.sendFile(m.chat, icon, name + '.jpg', texto, m);

    await conn.sendMessage(m.chat, { 
        document: { url: URL }, 
        mimetype: 'application/vnd.android.package-archive', 
        fileName: name + '.apk', 
        caption: '' 
    }, { quoted: m });
}

handler.command = ['apk2', 'apkdl2', 'modapk2'];
handler.group = true;
export default handler;
