const lenguaje = () => { return 'es' } //Español

//AVISOS DE MENSAJE
const smsAvisoRG = () => { return `╰⊱✅⊱ *RISULTATO* ⊱✅⊱╮\n\n` } 
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *AVVERTIMENTO* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMAZIONE* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERRORE* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *AZIONE MAL USATA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *RAPPORTO* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *SUCCESSO* ⊱💚⊱╮\n\n` }

//PARAMETRI NEI COMANDI
const smsRowner = () => { return `\`\`\`¡¡QUESTO COMANDO PUÒ ESSERE USATO SOLO DA ME COME CREATORE DEL BOT!!\`\`\`` } //NUMERO DEL BOT
const smsOwner = () => { return `\`\`\`¡¡QUESTO COMANDO PUÒ ESSERE USATO SOLO DAL MIO CREATORE!!\`\`\`` } //PROPRIETARIO
const smsMods = () => { return `\`\`\`¡¡QUESTO COMANDO PUÒ ESSERE USATO SOLO DAI MODERATORI E DAL MIO CREATORE!!\`\`\`\`` } //MODERATORI
const smsPremium = () => { return `\`\`\`¡¡QUESTO COMANDO È DISPONIBILE SOLO PER GLI UTENTI PREMIUM E IL MIO CREATORE!! PER ESSERE PREMIUM ACQUISTA UN PASS USANDO #pass premium\`\`\`` } //UTENTI PREMIUM
const smsGroup = () => { return `\`\`\`¡¡QUESTO COMANDO PUÒ ESSERE UTILIZZATO SOLO NEI GRUPPI!!\`\`\`` } //PER GRUPPI
const smsPrivate = () => { return `\`\`\`¡¡QUESTO COMANDO PUÒ ESSERE UTILIZZATO SOLO IN PRIVATO!!\`\`\`` } //IN PRIVATO
const smsAdmin = () => { return `\`\`\`¡¡QUESTO COMANDO È SOLO PER GLI AMMINISTRATORI!!\`\`\`` } //AMMINISTRATORI
const smsBotAdmin = () => { return `\`\`\`¡¡HO BISOGNO DI ESSERE AMMINISTRATORE PER USARE QUESTO COMANDO!!\`\`\`` } //BOT CON AMMINISTRATORE
const smsUnreg = () => { return `\`\`\`¡¡DEVI ESSERE REGISTRATO(A) PER USARE QUESTO COMANDO, SCRIVI #verifica PER REGISTRARTI!!\`\`\`` } //VERIFICA
const smsRestrict = () => { return `\`\`\`¡¡QUESTO COMANDO È LIMITATO DAL MIO CREATORE!!\`\`\`` } //LIMITARE COMANDO


//MENU LISTA
const smsTime = () => { return `Tempo Attuale`}
const smsUptime = () => { return `Funzionando Da`}
const smsVersion = () => { return `Versione di ${global.gt}`}
const smsTotalUsers = () => { return `Totale Utenti`}
const smsMode = () => { return `È in Modalità`}
const smsModePublic = () => { return `PUBBLICO`}
const smsModePrivate = () => { return `PRIVATO`}
const smsBanChats = () => { return `Chat Proibite`}
const smsBanUsers = () => { return `Utenti Proibiti`}
const smsPareja = () => { return `Partner`}
const smsResultPareja = () => { return `Non ha un Partner`}
const smsSaludo = () => { return `👋 Ciao! Benvenuto(a) 👋`}
const smsDia = () => { return `🌇 Buongiorno ⛅`}
const smsTarde = () => { return `🏙️ Buon Pomeriggio 🌤️`}
const smsTarde2 = () => { return `🌆 Buon Pomeriggio 🌥️`}
const smsNoche = () => { return `🌃 Buonanotte 💫`}
const smsListaMenu = () => { return `⊹ LISTA DEL MENU ⊹`}
const smsLista1 = () => { return `🌟 INFORMAZIONI SU Chatunity-bot 🌟`}
const smsLista2 = () => { return `💖 CREATORE 💖`}
const smsLista3 = () => { return `🎁 DONARE 🎁`}
const smsLista4 = () => { return `🚀 VELOCITÀ 🚀`}
const smsLista5 = () => { return `💡 INFORMAZIONI SUL MENU 💡`}
const smsLista6 = () => { return `🌀 MENU COMPLETO 🌀`}
const smsLista7 = () => { return `💬 INSTALLARE Chatunity-bot 💬`}
const smsLista8 = () => { return `🍄 ESSERE SUB BOT 🍄`}
const smsLista9 = () => { return `📄 TERMINI, CONDIZIONI E PRIVACY 📄`}
const smsLista10 = () => { return `🌟 AVVENTURA 🌟`}
const smsLista11 = () => { return `🏆 TOP GLOBALE 🏆`}
const smsLista12 = () => { return `🏅 UTENTI PREMIUM 🏅`}
const smsLista13 = () => { return `🎟️ ESSERE UTENTE PREMIUM 🎟️`}
const smsLista14 = () => { return `🛣️ MISSIONI GIORNALIERE 🛣️`}
const smsLista15 = () => { return `⚗️ MENU RPG ⚗️`}
const smsLista16 = () => { return `🏪 NEGOZIO DI ACQUISTO E VENDITA 🏪`}
const smsLista17 = () => { return `🎒 INVENTARIO 🎒`}
const smsLista18 = () => { return `🌟 MULTIMEDIA 🌟`}
const smsLista19 = () => { return `📲 MENU DI DOWNLOAD 📲`}
const smsLista20 = () => { return `🔍 MENU DI RICERCA 🔍`}
const smsLista21 = () => { return `🛰️ MENU CONVERTITORE 🛰️`}
const smsLista22 = () => { return `🧰 MENU MODIFICATORE DI AUDIO 🧰`}
const smsLista22_1 = () => { return `🔩 MENU DEGLI STRUMENTI 🔩`}
const smsLista23 = () => { return `🌟 DIVERTIMENTO 🌟`}
const smsLista24 = () => { return `🎡 GIOCHI DINAMICI 🎡`}
const smsLista25 = () => { return `🔊 MENU DEGLI AUDIOS 🔊`}
const smsLista26 = () => { return `🎈 MENU DEGLI STICKERS E FILTRI 🎈`}
const smsLista27 = () => { return `✨ MENU DEGLI EFFETTI E LOGOS ✨`}
const smsLista28 = () => { return `🌅 MENU DEI LOGOS 2 🌅`}
const smsLista29 = () => { return `⛩️ MEMES RANDOMS : ANIME ⛩️`}
const smsLista30 = () => { return `🔞 MENU DEI COMANDI +18 🔞`}
const smsLista31 = () => { return `🌟 IMPOSTAZIONI 🌟`}
const smsLista32 = () => { return `🔰 MENU PER GRUPPI 🔰`}
const smsLista33 = () => { return `📑 LISTE DISPONIBILI 📑`}
const smsLista34 = () => { return `⚙️ CENTRO DI CONFIGURAZIONE ⚙️`}
const smsLista35 = () => { return `💎 MENU PER IL PROPRIETARIO(A) 💎`}

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BENVENUTO(A)!!*\n┊💖 @user\n┊📄 *LEGGI LA DESCRIZIONE DEL GRUPPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *NON SAI COME STARE NEL GRUPPO, CIAO!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user ORA È AMMINISTRATORE IN QUESTO GRUPPO!!*'}
const smsSdemote = () => { return '*@user NON È PIÙ AMMINISTRATORE IN QUESTO GRUPPO!!*'}
const smsSdesc = () => { return '*LA NUOVA DESCRIZIONE DEL GRUPPO È:*\n\n@desc'}
const smsSsubject = () => { return '*IL NUOVO NOME DEL GRUPPO È:*\n\n@subject'}
const smsSicon = () => { return '*LA FOTO DEL GRUPPO È STATA CAMBIATA!!*'}
const smsSrevoke = () => { return '*ORA QUESTO È IL NUOVO LINK DEL GRUPPO!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 CONNESSIONE ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ CONNESSIONE RIUSCITA CON WHATSAPP  💬\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`} 
const smsCargando = () => { return `✨ CARICAMENTO...\n`} 
const smsCodigoQR = () => { return `\n✅ SCANSIONA IL CODICE QR SCADE IN 45 SECONDI ✅`}
const smsConexionOFF = () => { return `\n⚠️ NESSUNA CONNESSIONE, ELIMINA LA CARTELLA ${global.authFile} E SCANSIONA IL CODICE QR ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 MULTIMEDIA 🟢\n│→ FILE DELLA CARTELLA TMP ELIMINATI\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│→ SESSIONI NON ESSENZIALI ELIMINATE\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 FILE 🟠\n│→ FILE RESIDUI ELIMINATI\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 ChatUnityJadiBot 🟡\n│→ NULLA DA ELIMINARE \n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ ChatUnityJadiBot ⚪\n│→ FILE NON ESSENZIALI ELIMINATI\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 ChatUnityJadiBot 🔴\n│→ SI È VERIFICATO UN ERRORE\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 FILE 🟣\n│→`} 
const smspurgeOldFiles2 = () => { return `ELIMINATO CON SUCCESSO\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 FILE 🔴\n│→`} 
const smspurgeOldFiles4 = () => { return `NON È STATO POSSIBILE ELIMINARE\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️❌\n`}
const smsConexioncerrar = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹\n┆ ⚠️ CONNESSIONE CHIUSA, RICONNESSIONE IN CORSO....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹`}
const smsConexionperdida = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂\n┆ ⚠️ CONNESSIONE PERDUTA CON IL SERVER, RICONNESSIONE IN CORSO....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂`}
const smsConexionreem = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗\n┆ ⚠️ CONNESSIONE SOSTITUITA, È STATA APERTA UNA NUOVA SESSIONE, PER FAVORE, CHIUDI PRIMA LA SESSIONE ATTUALE.\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗`}
const smsConexionreinicio = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓\n┆ ❇️ CONNESSIONE AL SERVER IN CORSO...\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓`}
const smsConexiontiem = () => { return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸\n┆ ⌛ TEMPO DI CONNESSIONE ESAURITO, RICONNESSIONE IN CORSO....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗ MOTIVO DELLA DISCONNESSIONE SCONOSCIUTO: ${reason || ''} >> ${connection || ''}`}
const smsMainBot = () => { return "SE ACTUALIZÓ 'main.js' CON ÉXITO"}

//_allantilink.js
const smsTextoYT = () => { return '💬 𝗦𝘂𝗽𝗲𝗿 chatunity-bot-premium-v1 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ DISATTIVARE'} 
const smsEncender = () => { return '✅ ATTIVARE'} 
const smsEnlaceTik = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceYt = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTel = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceFb = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceIg = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTw = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsAllAdmin = () => { return `𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 �𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼)`}
const smsSoloOwner = () => { return `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗙𝗔𝗟𝗟𝗔𝗡𝗗𝗢 🔴*`}
const smsCont2 = () => { return `*⚠️ 𝗣𝗟𝗨𝗚𝗜𝗡:*`}
const smsCont3 = () => { return `*⚠️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:*`}
const smsCont4 = () => { return `*⚠️ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:*`}
const smsCont5 = () => { return `*⚠️ 𝗘𝗥𝗥𝗢𝗥:*`}
const smsCont6 = () => { return `*❗ 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 𝗘𝗦𝗧𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 #reporte 𝗣𝗔𝗥𝗔 𝗦𝗢𝗟𝗨𝗖𝗜𝗢𝗡𝗔𝗥𝗟𝗢*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NON HAI DIAMANTI!! 💎 PUOI ANDARE AL NEGOZIO CON IL COMANDO*`}
const smsCont8 = () => { return ` *DIAMASTE(S) 💎 USATO(S)*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*NECESSITA IL LIVELLO ➡️*`}
const smsCont10 = () => { return `*PER USARE QUESTO COMANDO. IL TUO LIVELLO ATTUALE È ➡️*`}
const smsCont11 = () => { return `*AGGIORNA CON IL COMANDO*`}
const smsCont12 = () => { return `UN GRUPPO FANTASTICO!! 😼`}
const smsCont13 = () => { return `QUALCUNO SI È UNITO !! 🥳`}
const smsCont14 = () => { return `QUALCUNO È ANDATO VIA!! 🧐`}
const smsCont15 = () => { return `𝙃𝙊𝙇𝘼`}
const smsCont16 = () => { return `𝙇𝘼𝙎 𝙑𝙄𝘿𝙀𝙊𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📲`}
const smsCont17 = () => { return `𝙇𝘼𝙎 𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📞`}
const smsCont18 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼𝙉 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝘼𝙎 𝙋𝙊𝙍 𝙇𝙊 𝙌𝙐𝙀 𝙏𝙀𝙉𝘿𝙍𝙀 𝙌𝙐𝙀 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍𝙏𝙀\n\n𝙎𝙄 𝙇𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙋𝙊𝙍 𝘼𝘾𝘾𝙄𝘿𝙀𝙉𝙏𝙀 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝙏𝙀 𝘾𝙊𝙉 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊/𝘼 𝘿𝙀 𝙀𝙎𝙏𝙀 𝘽𝙊𝙏\n𝙎𝙄 𝙀𝙎 𝙐𝙉𝘼 𝘾𝙐𝙀𝙉𝙏𝘼 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 𝘿𝙄𝙍𝙄𝙂𝙀𝙏𝙀 𝘼 𝙇𝘼 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼 𝙋𝙊𝙍 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝙏𝙍𝘼𝙏𝙄𝙍 𝙎𝙐 𝘾𝘼𝙎𝙊\n*${global.ig}*`}
const smsCont19 = () => { return `𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍`}
const smsCont20 = () => { return `*┃✤ Nome:*`}
const smsCont21 = () => { return `*┃✤ Invio del messaggio eliminato...*`}

//_anti-internacional.js
const smsInt1 = () => { return `𝙀𝙎𝙏𝙀 𝙉𝙐𝙈𝙀𝙍𝙊`}
const smsInt2 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}𝘾𝙊𝙈𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙉𝙊 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼)`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝙌𝙐𝙀 𝘾𝙊𝙉𝙏𝙄𝙀𝙉𝙀 𝙃𝙏𝙏𝙋𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}

//_antispam.js
const smsNoSpam = () => { return `🤨 NON FARE SPAM, NON POTRAI USARE ${global.packname} PER ${60000 / 1000 - 59} MINUTO`}

//_antispam_.js
const smsNoSpam2 = () => { return `FUE DESBANEADO DESPUÉS DE ${60000 / 1000 - 59} MINUTO. POR FAVOR NO HAGA SPAM!!`}

//Texto
const smsConMenu = () => { return `☘️ 𝗠 𝗘 𝗡 𝗨`} //🟡 NO CAMBIAR 

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SI È VERIFICATO UN ERRORE IMPREVISTO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SI È VERIFICATO UN PROBLEMA. RIPROVA.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`QUALCOSA È ANDATO MALE, RIPORTA QUESTO COMANDO USANDO:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `𝙉𝙊𝙊!!! 🤬 𝘿𝙄𝘾𝙄𝙍 𝙀𝙎𝙏𝘼 𝙋𝘼𝙇𝘼𝘽𝙍𝘼`}
const smsToxic2 = () => { return `𝙀𝙎𝙏𝘼 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝘼 𝙉𝙊 𝙎𝙀𝘼𝙎 𝙏𝙊𝙓𝙄𝘾𝙊(𝘼)`}
const smsToxic3 = () => { return `*ADVERTENCIA*\n⚠️`}
const smsToxic4 = () => { return `😭 𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊`} //🟡 NO CAMBIAR 
const smsToxic5 = () => { return `☢️ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾`} //🟡 NO CAMBIAR 
const smsToxic6 = () => { return `𝙏𝙀 𝙇𝙊 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿 𝙑𝘼𝙍𝙄𝘼𝙎 𝙑𝙀𝘾𝙀𝙎!!`}
const smsToxic7 = () => { return `𝙎𝙐𝙋𝙀𝙍𝘼𝙎𝙏𝙀 𝙇𝘼𝙎 4 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎 𝘼𝙃𝙊𝙍𝘼 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼) 🙄`}

//Tienda
const eExp = () => { return '⚡ Esperienza' } 
const eDiamante = () => { return '💎 Diamante' } 
const eDiamantePlus = () => { return '💎+ Diamante+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Smeraldo' } 
const eJoya = () => { return '♦️ Gioiello' }
const eMagia = () => { return '🌀 Magia' } 
const eOro = () => { return '👑 Oro' } 
const eGataCoins = () => { return '🐱 GataCoins' }
const eGataTickers = () => { return '🎫 Gata Tickets' } 
const eEnergia = () => { return '✨ Energia' }
const ePocion = () => { return '🥤 Pozione' }
const eAgua = () => { return '💧 Acqua' }
const eBasura = () => { return '🗑 Spazzatura' }
const eMadera = () => { return '🪵 Legno' }
const eRoca = () => { return '🪨 Roccia' }
const ePiedra = () => { return '🥌 Pietra' }
const eCuerda = () => { return '🕸️ Corda' }
const eHierro = () => { return '⛓️ Ferro' }
const eCarbon = () => { return '⚱️ Carbone' }
const eBotella = () => { return '🍶 Bottiglia' }
const eLata = () => { return '🥫 Lattina' }
const eCarton = () => { return '🪧 Cartone' } 
const eEletric = () => { return '💡 Elettricità' }
const eBarraOro = () => { return '〽️ Barra d Oro' }
const eOroComun = () => { return '🧭 Oro Comune' }
const eZorroG = () => { return '🦊🌫️ Volpe Grande' }
const eBasuraG = () => { return '🗑🌫️ Super Spazzatura' }
const eLoboG = () => { return '🐺🌫️ Super Lupo' }
const eMaderaG = () => { return '🛷🌫️ Super Legno' }
const eEspada = () => { return '⚔️ Spada' }
const eCarnada = () => { return '🪱 Esca' }
const eBillete = () => { return '💵 Banconote' }
const ePinata = () => { return '🪅 Piñata' }
const eGancho = () => { return '🪝 Gancio' }
const eCanaPescar = () => { return '🎣 Canna da Pesca' } 
const eCComun = () => { return '📦 Scatola Comune' }
const ePComun = () => { return '🥡 Scatola Poco Comune' }
const eCMistica = () => { return '🗳️ Scatola Mistica' }
const eCMascota = () => { return '📫 Scatola di Animali Domestici' }
const eCJardineria = () => { return '💐 Scatola di Giardinaggio' }
const eClegendaria = () => { return '🎁 Scatola Leggendaria' } 
const eUva = () => { return '🍇 Uva' }
const eManzana = () => { return '🍎 Mela' }
const eNaranja = () => { return '🍊 Arancia' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Platano' } 
const eSUva = () => { return '🌾🍇 Semi di uva' }
const eSManzana = () => { return '🌾🍎 Semi di mela' }
const eSNaranja = () => { return '🌾🍊 Semi di arancia' }
const eSMango = () => { return '🌾🥭 Semi di Mango' }
const eSPlatano = () => { return '🌾🍌 Semi di platano' } 
const eCentauro = () => { return '🐐 Centauro' }
const eAve = () => { return '🦅 Uccello' }
const eGato = () => { return '💬 Gatto' }
const eDragon = () => { return '🐉 Drago' }
const eZorro = () => { return '🦊 Volpe' }
const eCaballo = () => { return '🐎 Cavallo' }
const eFenix = () => { return '🕊️ Fenice' }
const eLobo = () => { return '🐺 Lupo' }
const ePerro = () => { return '🐶 Cane' } 
const eAMascots = () => { return '🍖 Cibo per Animali Domestici' }
const eCCentauro = () => { return '🐐🥩 Cibo di Centauro' }
const eCAve = () => { return '🦅🥩 Cibo di Uccello' }
const eCMagica = () => { return '🌀🥩 Cibo Magico' }
const eCDragon = () => { return '🐉🥩 Cibo di Drago' }
const eACaballo = () => { return '🐎🥩 Cibo per Cavalli' }
const eCFenix = () => { return '🕊️🥩 Cibo di Fenice' } 

//config-on y off.js
const smsWel1 = () => { return `🎉 BENVENUTO`}
const smsWel2 = () => { return `Messaggio di Benvenuto per nuovi Membri in Gruppi`}
const smsDete1 = () => { return `🔔 AVVISI`}
const smsDete2 = () => { return `Avvisi di azioni dentro il Gruppo`}
const smsANivel1 = () => { return `🆙 LIVELLO AUTOMATICO`}
const smsANivel2 = () => { return `Salire di livello a tutti in modo automatico; (Applica ricompense per salire di Livello)`}
const smsRestri1 = () => { return `⛔ RESTRINGERE`}
const smsRestri2 = () => { return `Abilitare funzione per aggiungere o eliminare persone in Gruppi`}
const smsLlamar1 = () => { return `🚫 ANTI CHIAMATE`}
const smsLlamar2 = () => { return `Blocca Persone che fanno chiamate`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Bannare l'Uso di Comandi quando qualcuno fa qualche tipo di Spam`}
const smsModP1 = () => { return `🌐 MODO PUBBLICO`}
const smsModP2 = () => { return `Abilitare funzione per far usare Chatunity-bot a tutti`}
const smsModAd1 = () => { return `🛂 MODO ADMIN`}
const smsModAd2 = () => { return `Solo gli Admin potranno usare Chatunity-bot in Gruppi`}
const smsLect1 = () => { return `✅ LETTURA AUTOMATICA`}
const smsLect2 = () => { return `Lasciare i messaggi o chat come Letti`}
const smsTempo1 = () => { return `💬 BOT TEMPORANEO`}
const smsTempo2 = () => { return `Funzione che permette di stare temporaneamente in Gruppi`}
const smsStik1 = () => { return `🎠 STICKER`}
const smsStik2 = () => { return `Abilitare l'invio automatico di Sticker a tutti`}
const smsStickA1 = () => { return `🪄 STICKER AUTOMATICI`}
const smsStickA2 = () => { return `I video, Gif, immagini, link jpg o jpeg; Si convertiranno in Sticker Automaticamente`}
const smsReacc1 = () => { return `🤡 REAZIONE `}
const smsReacc2 = () => { return `Abilitare l'invio automatico di Reazioni a messaggi`}
const smsAudi1 = () => { return `🔊 AUDIO`}
const smsAudi2 = () => { return `Abilitare l'invio automatico di Audio a tutti`}
const smsModHor1 = () => { return `🔞 MODO HORNY`}
const smsModHor2 = () => { return `Mostrare contenuto per Adulti nei Chat`}
const smsAntitoc1 = () => { return `☢️ ANTI TOSSICI`}
const smsAntitoc2 = () => { return `Inviare Avvisi a quelle persone che insultano`}
const smsModOb1 = () => { return `👀 MODO OSSERVARE`}
const smsModOb2 = () => { return `Permettere che le immagini, Gif e Video si possano vedere per tutti`}
const smsAntiEli1 = () => { return `🗑️ ANTI ELIMINARE`}
const smsAntiEli2 = () => { return `Tutto messaggio eliminato sarà reinviato al Chat o Gruppo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNAZIONALE`}
const smsAntiInt2 = () => { return `Eliminare Numeri internazionali considerati falsi`}
const smsAntiE1 = () => { return `🔗 ANTI LINK`}
const smsAntiE2 = () => { return `Eliminare Persone che inviano link di Gruppi di WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI LINK 2`}
const smsAntiEE2 = () => { return `Eliminare Persone che inviano link che contengono https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIKTOK`}
const smsAntiTT2 = () => { return `Eliminare Persone che inviano link di TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Eliminare Persone che inviano link di YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Eliminare Persone che inviano link di Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Eliminare Persone che inviano link di Facebook`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Eliminare Persone che inviano link di Instagram`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Eliminare Persone che inviano link di Twitter`}
const smsSOLOP1 = () => { return `⚜️ SOLO PRIVATI`}
const smsSOLOP2 = () => { return `Permettere che si usi solo in Chat Privati`}
const smsSOLOG1 = () => { return `⚜️ SOLO GRUPPI`}
const smsSOLOG2 = () => { return `Permettere che si usi solo in Chat di Gruppo`}
const smsConfi1 = () => { return `IMPOSTAZIONI`}
const smsConfi2 = () => { return `*Ciao!*`}
const smsConfi3 = () => { return `┃ *Seleziona un'opzione dalla lista*`}
const smsConfi4 = () => { return `┃ *Per iniziare a Configurare*`}
const smsConfi5 = () => { return `┃● *Avvisi della Configurazione:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Funzione Attivata*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *Funzione Disattivata*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Questa Chat non è un Gruppo*`}
const smsConfi9 = () => { return `┃ *Raccomandazione: Per vedere la configurazione*\n┃ *Completa usa questo Menù in Gruppo*\n┃`}
const smsConfi10 = () => { return `*~ CENTRO DI CONFIGURAZIONE*`}
const smsParaAdmins = () => { return `PER ADMINS E CREATORE(A) : GRUPPI`}
const smsParaAdYOw = () => { return `PER ADMINS E CREATORE(A) : CHAT`}
const smsParaOw = () => { return `PER CREATORE(A) : CHAT`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMANDO`} 
const smsMens2 = () => { return `ATTUALMENTE`} 
const smsMens3 = () => { return `IN QUESTO`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `CHAT`} 

//Error2
const smsMensError1 = () => { return `❕ RIPORTARE COMANDO ❕`} 
const smsMensError2 = () => { return `Sta Fallando il seguente comando`} 

//_antiviewonce.js
const smsAntiView = () => { return `*𝙈𝘼𝙎𝙏𝙀𝙍 𝙔𝙊 𝙇𝙊 𝙑𝙀𝙊 𝙏𝙊𝙐𝙏𝙊 𝘼𝙌𝙐Í* 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ NUOVO LIVELLO 🎖️`} 
const smsAutoLv2 = () => { return `LIVELLO PRECEDENTE:`} 
const smsAutoLv3 = () => { return `LIVELLO ATTUALE:`} 
const smsAutoLv4 = () => { return `RANGO:`} 
const smsAutoLv5 = () => { return `DATA:`} 
const smsAutoLv6 = () => { return `Hai raggiunto un Nuovo Livello!!!`} 
const smsAutoLv7 = () => { return `🥳 RICOMPENSA PER IL TUO NUOVO LIVELLO`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()}*IL VIDEO NON DEVE DURARE PIÙ DI 7 SECONDI.*`} 

//_expired.js
const smsBottem1 = () => { return `*SE NE VA DAL GRUPPO!!! 🤝 SE VUOI CHE TORNI, USA IL COMANDO _#bottemporal_ PER FARLO TORNARE NEL GRUPPO!!*`} 
const smsBottem2 = () => { return `*💕 ASSISTENZA PER UTENTI*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `A PRESTO 💖`} 

//_premium.js
const smsPremI = () => { return `*IL TUO TEMPO PREMIUM È FINITO!* 🎟️\n*PER OTTENERE UN NUOVO PASS PREMIUM USA IL COMANDO:*\n*#pase premium*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `*HAI SMESSO DI ESSERE INATTIVO(A) AFK*`} 
const smsAfkM2 = () => { return `\n*IL MOTIVO DELL'INATTIVITÀ ERA:*\n`} 
const smsAfkM3 = () => { return `⏳ *TEMPO INATTIVO:*`} 
const smsAfkM4 = () => { return `*NON ETICHETTARE QUESTO(A) UTENTE!! È INATTIVO(A)*\n`} 
const smsAfkM5 = () => { return `*MOTIVO DELL'INATTIVITÀ AFK:*\n`} 
const smsAfkM6 = () => { return `*MOTIVO DELL'INATTIVITÀ AFK:\nNON HA SPECIFICATO IL MOTIVO DELL'INATTIVITÀ*`} 
const smsAfkTime = () => { return [['giorno(i)'], ['ora(e)'], ['minuto(i)'], ['secondo(i)']] }
const smsAfkResultTime = smsAfkTime()

//afk-afk.js
const smsAfkQ1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoMG']()}*SCRIVI IL MOTIVO PER CUI SARAI INATTIVO (AFK)*\n\n*ESEMPIO:*\n*${usedPrefix + command}* Vado a fare i compiti`} 
const smsAfkQ2 = () => { return `${lenguajeGB['smsAvisoMG']()}*MINIMO 10 CARATTERI DEVE ESSERE IL MOTIVO*`} 
const smsAfkM1A = () => { return `*NON ETICHETTARE*`} 
const smsAfkM1B = () => { return `*SARÀ INATTIVO(A) AFK*\n\n*MOTIVO DELL'INATTIVITÀ AFK:*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}*NON SEI IN CHAT ANONIMA*`} 
const smsChatAn2 = () => { return `*SE VUOI INIZIARE UNA CHAT ANONIMA USA IL COMANDO #start O USA IL PULSANTE QUI SOTTO*\n`} 
const smsChatAn3 = () => { return `⚡ INIZIA CHAT ANONIMA`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 *SEI USCITO DALLA CHAT ANONIMA*`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}*L'ALTRO UTENTE È USCITO DALLA CHAT ANONIMA*`}  
const smsChatAn6 = () => { return `*SE VUOI ANDARE IN UN'ALTRA CHAT ANONIMA USA IL COMANDO #start O USA IL PULSANTE QUI SOTTO*\n`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}*SEI ANCORA IN UNA CHAT ANONIMA O IN ATTESA CHE QUALCUNO SI UNISCA PER CHATTARE*`} 
const smsChatAn8 = () => { return `*SE VUOI USCIRE DALLA CHAT ANONIMA USA IL COMANDO #leave O PUOI USARE IL PULSANTE QUI SOTTO*\n`} 
const smsChatAn9 = () => { return `🍁 ESCI DALLA CHAT ANONIMA`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ *ORA POTETE CHATTARE*`} 
const smsChatAn11 = () => { return `*QUALCUNO SI È UNITO ALLA CHAT ANONIMA!!*`} 
const smsChatAn12 = () => { return `❇️ ALTRO(A) UTENTE(A)`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}💬 *IN ATTESA CHE QUALCUNO SI UNISCA ALLA CHAT ANONIMA, ABBI PAZIENZA PER FAVORE*`} 

//Bottoni di Menù 
const smsBotonM1 = () => { return `⚡ MENU DI INIZIO ⚡`} 
const smsBotonM2 = () => { return `💫 MENU COMPLETO 💫`} 
const smsBotonM3 = () => { return `🎒 INVENTARIO 🎒`} 
const smsBotonM4 = () => { return `UTENTI`}
const smsBotonM5 = () => { return `RANGO`}
const smsBotonM6 = () => { return `LIVELLO`}
const smsBotonM7 = () => { return `PREMIUM`}
const smsTex1 = () => { return '*MENU DI RICERCA*'}
const smsTex2 = () => { return '*MODIFICATORE DI AUDIO*'}
const smsTex3 = () => { return '*MENU +18*'}
const smsTex4 = () => { return '*CONTENUTO DINAMICO*'}
const smsTex5 = () => { return '*CERCA E SCARICA*'}
const smsTex6 = () => { return '*MENU +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ *Immagini +18 di qualità e varietà*\n⠇ *Video +18 solo per te*\n⠇ *Sticker +18 disponibili*'}
const smsTex8 = () => { return '*MENU CONVERTITORE*'}
const smsTex9 = () => { return '*MENU DI SCARICHI*'}
const smsTex10 = () => { return '*MENU GIOCHI DINAMICI*'}
const smsTex11 = () => { return '*MENU PER GRUPPI*'}
const smsTex12 = () => { return '*MENU DI STRUMENTI*'}
const smsTex13 = () => { return '*MENU DI INFORMAZIONE*'}
const smsTex14 = () => { return '*MENU DI EFFETTI E LOGHI*'}
const smsTex15 = () => { return '*MENU DI LOGHI 2*'}
const smsTex16 = () => { return 'MENU DI AUDIO'}
const smsTex17 = () => { return '*NON È NECESSARIO USARE PREFISSO IN AUDIO*'}
const smsTex18 = () => { return 'LISTA DI AUDIO'}
const smsTex19 = () => { return '*PUOI SELEZIONARE L AUDIO!!*'}
const smsTex20 = () => { return '*MENU PER PROPRIETARIO(A)*'}
const smsTex21 = () => { return '*MENU RPG*'}
const smsTex22 = () => { return '*MENU DI STICKER E FILTRI*'}
const smsTex23 = () => { return '*MENU DI MEME E ANIME RANDOM*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*SEI IN QUESTI GRUPPI:*_'}
const smsLisB = () => { return '*✦ Totale Gruppi:*'}
const smsLisC = () => { return '*✦ Gruppo:*'}
const smsLisD = () => { return '*✦ ID:*'}
const smsLisE = () => { return '*✦ Partecipanti:*'}
const smsLisF = () => { return '*✦ Admins:*'}
const smsLisG = () => { return '*✦ Link:*'}

//ad
const smsMalused = () => { return '⚡ *USARE IL COMANDO IN QUESTO MODO:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}💬 *DEVI USARE IL COMANDO COME IN QUESTO ESEMPIO:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}💬 *DEVI USARE IL COMANDO O RISPONDERE AL MESSAGGIO DI QUALCUNO COME IN QUESTO ESEMPIO:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_APRI GRUPPO IN UN ORA_*'}
const smsGrupoTime2 = () => { return '🔒 *_CHIUDI GRUPPO IN UN ORA_*'}
const smsGrupoTime3 = () => { return 'GRUPPO'}
const smsGrupoTime4 = () => { return 'CHIUSO'}
const smsGrupoTime5 = () => { return 'APERTO'}
const smsGrupoTime6 = () => { return 'DURANTE'}
const smsGrupoTime7 = () => { return '🔒 *IL GRUPPO È CHIUSO, SOLO ADMINS POSSONO INVIARE MESSAGGI*'}
const smsGrupoTime8 = () => { return '🔓 *IL GRUPPO È APERTO, TUTTI POSSONO INVIARE MESSAGGI*'}
const smsGrupoTime9 = () => { return '🔓 APRI GRUPPO DURANTE '}
const smsGrupoTime10 = () => { return '🔒 CHIUDI GRUPPO DURANTE '}
const smsGrupoTime11 = () => { return ' ORA'}
const smsGrupoTime12 = () => { return 'PERMETTERE CHE IL GRUPPO SI APRA PER '}
const smsGrupoTime13 = () => { return 'PERMETTERE CHE IL GRUPPO SI CHIUDA PER '}

//grupo-add.js
const smsAddB1 = () => { return `${lenguajeGB['smsAvisoFG']()}*NON SI PUÒ AGGIUNGERE IL NUMERO, VERIFICA CHE SIA CORRETTO, FORSE È USCITO RECENTEMENTE O LA SUA PRIVACY È CONFIGURATA.*`}
const smsAddB2 = () => { return `${lenguajeGB['smsAvisoFG']()}*NON SI PUÒ AGGIUNGERE IL NUMERO, VERIFICA CHE SIA CORRETTO, O AGGIUNGILO MANUALMENTE.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*NOTIFICA PER ADMINS*`}
const smsAddB4 = () => { return `*PRESENZA DI ADMINS*`}
const smsAddB5 = () => { return `*MESSAGGIO:*`}
const smsAddB6 = () => { return `Richiedo agli Admins per favore.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeGB['smsAvisoAG']()}*PUOI USARE SOLO SE È ATTIVA LA FUNZIONE:*\n`}
const smsAdveu2 = () => { return 'Motivo'}
const smsAdveu3 = () => { return `${lenguajeGB['smsAvisoMG']()}*RICORDA DI SCRIVERE IL MOTIVO DELL'AVVISO*\n`}
const smsAdveu4 = () => { return '*HAI RICEVUTO UN AVVISO IN QUESTO GRUPPO!!*'}
const smsAdveu5 = () => { return 'AVVISO'}
const smsAdveu6 = () => { return '🎒 INVENTARIO'} 
const smsAdveu7 = () => { return '*TI HO AVVISATO VARIE VOLTE!!*'}
const smsAdveu8 = () => { return '*ORA SARAI ELIMINATO(A)* 🙄'}
const smsAdveu9 = () => { return '😇 GRAZIE MILLE'}
const smsAdveu10 = () => { return '*TI È STATO RIMOSSO UN AVVISO IN QUESTO GRUPPO!!*'}
const smsAdveu11 = () => { return 'Prima:'}
const smsAdveu12 = () => { return 'Ora:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return '*IL NUMERO NON È VALIDO, RIPROVA A RISPONDERE AL MESSAGGIO DI QUALCUNO O USA COME IN QUESTO ESEMPIO:*\n'}
const smsDemott2 = () => { return '*ORA HAI POTERE NEL GRUPPO!!*'}
const smsDemott3 = () => { return '*NON HAI PIÙ POTERE NEL GRUPPO!!*'}

//grupo-info.js
const smsGI1 = () => { return '*INFORMAZIONI DEL GRUPPO*'}
const smsGI2 = () => { return '*ID DEL GRUPPO*'}
const smsGI3 = () => { return '*NOME DEL GRUPPO*'}
const smsGI4 = () => { return '*DESCRIZIONE DEL GRUPPO*'}
const smsGI5 = () => { return '*NON CÈ DESCRIZIONE*'}
const smsGI6 = () => { return '*NUMERO DI UTENTI*'}
const smsGI7 = () => { return '*Utenti*'}
const smsGI8 = () => { return '*CREATORE(A) DEL GRUPPO*'}
const smsGI9 = () => { return '*ADMINS DEL GRUPPO*'}
const smsGI10 = () => { return '⚙️ CONFIGURAZIONI DEL GRUPPO'}

//grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ETICHETTA LA PERSONA O RISPONDI AL MESSAGGIO DELLA PERSONA CHE VUOI ELIMINARE*\n\n*ESEMPIO: `}
const smskick2 = () => { return `ELIMINATO(A) 😼🫵`}
const smskick3 = () => { return `NON POSSO ELIMINARE IL CREATORE DEL GRUPPO 😆🫵`}
const smskick4 = () => { return `NON È IN QUESTO GRUPPO 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ INVOCANDO IL GRUPPO ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*L'ADDIO DEL GRUPPO È STATO CONFIGURATO*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_SCRIVI IL MESSAGGIO DI ADDIO_*\n*_OPZIONALE PUOI USARE QUELLO CHE C'È CON "@" PER AGGIUNGERE PIÙ INFORMAZIONI:_*\n\n*⚡ @user (Menzione all'utente(a))*\n\n*RICORDA CHE IL "@" È OPZIONALE*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*IL BENVENUTO DEL GRUPPO È STATO CONFIGURATO*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_SCRIVI IL MESSAGGIO DI BENVENUTO_*\n*_OPZIONALE PUOI USARE QUELLO CHE C'È CON "@" PER AGGIUNGERE PIÙ INFORMAZIONI:_*\n\n*⚡ @user (Menzione all'utente(a))*\n*⚡ @subject (Nome del gruppo)*\n*⚡ @desc (Descrizione del gruppo)*\n\n*RICORDA CHE I "@" SONO OPZIONALI*`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*LA DESCRIZIONE DEL GRUPPO È STATA CONFIGURATA*`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*IL NOME DEL GRUPPO È STATO CONFIGURATO*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 SCRIVI IL NUOVO NOME DEL GRUPPO*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*IL NOME DEL GRUPPO NON DEVE AVERE PIÙ DI 25 CARATTERI*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*IL LINK DEL GRUPPO È STATO RIPRISTINATO*`}

//Botón 
const smsSig = () => { return `➡️ SUCCESSIVO ➡️`}
const smsSigPrem = () => { return `❤️‍🔥 SUCCESSIVO ❤️‍🔥`}
const smsCont18Porn = () => { return `🔞 *CONTENUTO* 🔞`} //testo
const smsCont18Porn2 = () => { return `🔞 CONTENUTO 🔞`} //testo
const smsCont18PornP = () => { return `🌟 *CONTENUTO ❤️‍🔥 PREMIUM* 🌟`} //testo
const smsCont18PornP2 = () => { return `CONTENUTO ❤️‍🔥 PREMIUM`} //testo  

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n𝙀𝙎 𝙐𝙉 𝘽𝙊𝙏 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙌𝙐𝙀 𝙏𝙀 𝘼𝙔𝙐𝘿𝘼𝙍𝘼 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘿𝙄𝙁𝙀𝙍𝙀𝙉𝙏𝙀𝙎 𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿𝙀𝙎 🪄 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊 𝙊 𝙂𝙍𝙐𝙋𝙊 𝙔 𝙏𝘼𝙈𝘽𝙄𝙀𝙉 𝙏𝙀 𝙑𝘼𝙎 𝘼 𝘿𝙄𝙑𝙀𝙍𝙏𝙄𝙍 🎈 𝘾𝙊𝙉 𝙎𝙐𝙎 𝙈𝙐𝙇𝙏𝙄𝙋𝙇𝙀𝙎 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎, 𝘿𝙄𝙎𝙁𝙍𝙐𝙏𝘼 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏!!! 😸\n\n💖 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 𝙁𝙐𝙀 𝙄𝙉𝙑𝙄𝙏𝘼𝘿𝘼 𝙋𝙊𝙍:\n@${user}`}
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*INSERISCI IL LINK DI UN GRUPPO*\n*ESEMPIO:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*SI È UNITO AL GRUPPO ✅*`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*RISPONDI AL MESSAGGIO O SCRIVI IL MESSAGGIO USANDO ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*INVIO MESSAGGIO UFFICIALE, ATTENDI UN MOMENTO...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *IL MESSAGGIO È STATO INVIATO A ${totalPri} CHAT(S) PRIVATO(S)*\n\n*TEMPO TOTALE DI INVIO: ${time}*\n${totalPri >= 3000 ? '\n*NON SONO STATI INVIATI A TUTTE LE CHAT PER EVITARE SATURAZIONE*' : ''}`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *MESSAGGIO INVIATO:*`}
const smsBCbot2 = () => { return `PRIVATO`}
const smsBCbot3 = () => { return `GRUPPO`}
const smsBCbot4 = () => { return `TOTALE`}
const smsBCbot5 = () => { return `TEMPO TOTALE DI INVIO:`}
const smsBCbot6 = () => { return `NON SONO STATI INVIATI A TUTTE LE CHAT PRIVATE PER EVITARE SATURAZIONE`}
const smsBCbot7 = () => { return `✅ *COMUNICATO UFFICIALE* ✅`}

//propietario(a).js
const smsChatGP1 = () => { return "*INVIO MESSAGGIO, ATTENDI UN MOMENTO...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *COMUNICATO UFFICIALE* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *IL MESSAGGIO È STATO INVIATO A ${totalGP} GRUPPO(S)*`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*ETICHETTA QUALCUNO O RISPONDI AL MESSAGGIO DELL'UTENTE O SCRIVI IL NUMERO CHE VUOI BANNARE DAI COMANDI*\n\n*ESEMPIO:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} NON PUÒ ESSERE BANNATO CON QUESTO COMANDO* 😹`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *NON POSSO BANNARE IL PROPRIETARIO @${ownerNumber} DI ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*NON È NECESSARIO BANNARE DI NUOVO @${number} SE È GIÀ BANNATO* 😊`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}𝙀𝙇/𝙇𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙁𝙐𝙀 𝘽𝘼𝙉𝙀𝘼𝘿𝙊(𝘼) 🙀\n𝙉𝙊 𝙋𝙊𝘿𝙍𝘼 𝙐𝙎𝘼𝙍 𝘼 ${gt}`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} SEI BANNATO/A DA @${usr} NON PUOI USARE I COMANDI FINO A QUANDO QUALCUNO NON RIMUOVE IL BAN* 😿`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*SI È VERIFICATO UN ERRORE, FORSE L'UTENTE NON È NELLA MIA BASE DATI PROVA A SCRIVERE ${usedPrefix + command} ${number}*\n\`\`\`SE L'ERRORE PERSISTE RIPORTA QUESTO COMANDO\`\`\``}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • • ミ★ ${gt} ミ★• • • ⊹*\n\n*ღ Versione di ${gt} » _${global.vs}_*\n*ღ Versione di JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNZIONE SER SUB BOT_* 🟢\n\n*➡️ Con un altro telefono o al PC scansiona questo QR per diventare Sub Bot*\n\n*1️⃣ Vai ai tre punti in alto a destra*\n*2️⃣ Vai all'opzione Dispositivi collegati*\n*3️⃣ Scansiona questo codice QR per accedere*\n\n📢 *Questo codice QR scade in 45 secondi!*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${gt} ミ★• • • ⊹*\n\n*ღ Versione di ${gt} » _${global.vs}_*\n*ღ Versione di JadiBot » _${global.vsJB}_*\n\n🟢 *_NUOVA FUNZIONE DI DIVENTARE UN SUB BOT_* 🟢\n\n*1️⃣ Vai ai tre punti in alto a destra*\n*2️⃣ Vai all'opzione Dispositivi collegati*\n*3️⃣ Clicca su collega con codice di telefono*\n*4️⃣ Incolla il codice qui sotto*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*QUESTO COMANDO È DISATTIVATO DAL MIO PROPRIETARIO(A)*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *PER DIVENTARE SUB BOT VAI AL NUMERO PRINCIPALE*\n*ღ Inserisci il seguente link:*\n`}
const smsreenvia = () => { return `*🟢 REINVIA IL COMANDO...*`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *LA CONNESSIONE SI È CHIUSA IN MODO INASPETTATO, TENTEREMO DI RICONNETTERCI...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *LA CONNESSIONE SI È CHIUSA, DOVRAI CONNETTERTI MANUALMENTE USANDO IL COMANDO #serbot E SCANSIONARE IL NUOVO CODICE QR*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *LA CONNESSIONE SI È CHIUSA, DOVRAI RICONNETTERTI USANDO:*\n#deletesesion (Per cancellare i dati e poter richiedere di nuovo il QR o il code)`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONNESSIONE RIUSCITA!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONNESSIONE RIUSCITA!!! PUOI CONNETTERTI USANDO IL TUO (ID) O USARE:*`}
const smsJBCargando = () => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *SEI CONNESSO(A)!! PER FAVORE ATTENDI STO CARICANDO I MESSAGGI...*\n\n♻️ *OPZIONI DISPONIBILI:*\n*» #stop _(Ferma la funzione Sub Bot)_*\n*» #eliminarsesion _(Cancella ogni traccia di Sub Bot)_*\n*» #serbot _(Ottieni un nuovo codice QR per diventare Sub Bot)_*`}
const smsJBInfo1 = () => { return `💖 *LINK UTILE*`}
const smsJBInfo2 = () => { return `💖 *La funzione è stabile, se riscontri qualche problema contatta l'email: chatunitycenter@gmail.com*\n💝 *Puoi fare una Donazione volontaria su PayPal: ${global.paypal}*\n\n*Grazie mille per il supporto a ${global.packname}*`}

//jadibot-deleteSesion.js
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*USA QUESTO COMANDO AL BOT PRINCIPALE*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*TI MANCHERÒ ${global.packname} CIAO!! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*HAI CHIUSO LA SESSIONE E CANCELLATO OGNI TRACCIA*`}
const smsJBErr = () => { return `*HAI CHIUSO LA SESSIONE COME SUB BOT* ♻️`}

//comandos+18-adult.js
const smsContAdult = () => { return `${lenguajeGB['smsAvisoAG']()}*I COMANDI 🔞 SONO DISATTIVATI, SE SEI IL MIO CREATORE(A) USA #on modohorny*`}

//comandos+18-menu.js
const smsList1 = () => { return `Non hai abbastanza `}
const smsList2 = () => { return `\nPremi qui per comprare `}
const smsList3 = () => { return `Contenuto disponibile 😸`}
const smsList4 = () => { return `Contenuto non disponibile 😿\nPremi qui per comprare `}
const smsList5 = () => { return `*Seleziona un'opzione*\n*dalla lista per vedere il*\n*contenuto* 😋`}
const smsList6 = () => { return `👀 VEDI LISTA 👀`}

//descargas-consejos.js
const smsConj = () => { return `🍃 NUOVO CONSIGLIO`}
const smsFras = () => { return `🍃 NUOVA FRASE`}

//info-contacto.js
const smsContacto1 = () => { return ' Sono ' + packname + ' un Bot di WhatsApp dedicato ad aiutarti con quello che mi chiedi 😎'}
const smsContacto2 = () => { return 'Sono il proprietario di ' + packname + ' se hai qualche dubbio puoi dirmelo ✌️'}
const smsContacto3 = () => { return '👑 Proprietario'}
const smsContacto4 = () => { return 'Contatto Ufficiale di Chatunity-bot 💬'}
const smsContacto5 = () => { return '🐣 Posso aiutarti in qualcosa?'}
const smsContacto6 = () => { return 'Non ho email 🙏'}
const smsContacto7 = () => { return '🌎 Globale'}
const smsContacto8 = () => { return 'Questo account è un Bot 👀'}

export default { lenguaje, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsAvisoRG, smsJoin, smsJoin1, smsJoin2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5, smsPropban6, smsPropban7, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsChatGP1, smsChatGP2, smsChatGP3, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsAvisoAG, smsAvisoIIG, smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp, smsSig, smsSigPrem, smsCont18Porn, smsCont18Porn2, smsCont18PornP, smsCont18PornP2,
smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBCargando, smsJBInfo1, smsJBInfo2, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsJBErr, smsContAdult, smsList1, smsList2, smsList3, smsList4, smsList5, smsList6, smsConj, smsFras, smsContacto1, smsContacto2, smsContacto3, smsContacto4,
smsContacto5, smsContacto6, smsContacto7, smsContacto8, smsAfkQ1, smsAfkQ2, smsAfkTime, smsAfkResultTime, smsMainBot, smsLisF, smsLisG, smsIniJadi2, smsJBConexionClose2, smsreenvia}