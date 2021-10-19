const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (nino, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await nino.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await nino.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            if (anu.action == 'add' && mem.includes(nino.user.jid)) {
            nino.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(nino.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await nino.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                teks = `「 *WELCOME* 」Hai Kak ${anu_user} 👋 \nSalam Kenal Dari Kami Semuanya, Jangan Lupa Perkenalkan Diri dan Semoga Betah Di Grup🤗`
	            buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
buttons = [{buttonId: `!sewabot`,buttonText:{displayText: 'SEWA BOT'},type:1},{buttonId:`!menu`,buttonText:{displayText:'LIST MENU'},type:1}]

imageMsg = (await nino.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage

buttonsMessage = {
               contentText: `${teks}`,
               footerText: 'Made With By ©Akira', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await nino.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
               nino.relayWAMessage(prep)
}
            if (anu.action == 'remove' && !mem.includes(nino.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await nino.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `「 *LEAVE* 」${anu_user} Beban Group Keluar🗿😱`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
                buttons = [{buttonId: `!nice`,buttonText:{displayText: 'Beban Ahkirnya Keluar Brek😂'},type:1}]

imageMsg = (await nino.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage

buttonsMessage = {
               contentText: `${out}`,
               footerText: 'Made With By ©Akira', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await nino.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
               nino.relayWAMessage(prep)
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}