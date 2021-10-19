//------------------< SAYA BUKAN MASTAH >-------------------

//SAYA HANYA KANG COPAS OUM #FAX
//AUTHOR : NINO
//RECODE : FAX
//THANKS TO JGN GNTI


const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')

const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]


let fakeimage = fs.readFileSync("./media/fake.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
//KALAU MAU EDIT NOMOR OWNER ADA DI SETTINGS

ownerNumbers = ["6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net"]
owner = setting.owner
gamewaktu = setting.gamewaktu
const ownerr = "6287705048235" //BIAR LU KE TAG
const thanks = "6287705048235" //Jangan Ubah Bng 

// Database
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = ikyy = async (ikyy, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        
        const botNumber = ikyy.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderr = mek.key.fromMe ? ikyy.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await ikyy.chats.all()
		const groupMetadata = isGroup ? await ikyy.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? ikyy.user.jid : ikyy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? ikyy.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        
        
        //WAKTU BY FAX
        const tahunbaru = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=31&bulan=12')
        
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        const hari = moment.tz("Asia/Jakarta").format("LLLL")
        const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const waktu = moment.tz('Asia/Jakarta').format('DD || MM')
		
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = ikyy.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return ikyy.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      ikyy.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           ikyy.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? ikyy.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/fake.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : ikyy.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/fake.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           ikyy.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/fake.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
        
        const fake = (txt, faketeks) => {
    let a = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "status@broadcast" })
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./media/mastah.png')
					},
					"title": faketeks,
					"description": "BOT-WHATSAPP",
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		    }
        }
	}
return ikyy.sendMessage(from, txt, text, {quoted: a})
}


const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: '🍂KirBotz', 
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./media/fake.jpg'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
        const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287705048235@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": "🍂KirBotz",
						"orderTitle": "KirBotz",
						"sellerJid": "6287705048235@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}
				

       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       ikyy.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await ikyy.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await ikyy.groupRemove(to, [i])
        } else {
           await ikyy.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       ikyy.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       ikyy.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await ikyy.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       ikyy.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           ikyy.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           ikyy.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       ikyy.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       ikyy.sendMessage(from, hasil, type, options).catch(e => {
	       ikyy.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await ikyy.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await ikyy.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await ikyy.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await ikyy.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = ikyy.contacts[from] != undefined ? ikyy.contacts[from].vname || ikyy.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}

     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
        
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`Kamu Nakal Si Di bilangin Jangan Ngirim Link Link Grup Masih Aeh ngeyel`)
                ikyy.groupRemove(from, [sender])
            }
        }
        
        // Sewa
             _sewa.expiredCheck(ikyy, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(ikyy, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                ikyy.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Auto Read
        ikyy.chatRead(from, "read")
        //Auto Vn
        await ikyy.updatePresence(from, Presence.composing)
        
       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
        if (budy.toLowerCase() === `5557`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
		    teks = `*• English 🇦🇺*
Verifikasi succes *${pushname}*


give a command to start bot example
*• ${prefix}menu*
*• ${prefix}rules*


and *thank you* for registering your bus data Bot

*• Indonesia 🇲🇨*
Verifikasi Berhasil *${pushname}*

*perhatian* : Berikan Sebuah Command Untuk Memulai Bot
Contoh : 
*• ${prefix}menu*
*• ${prefix}rules*
*• ${prefix}donasi*

dan *terima kasih* telah mendaftarkan data  Anda  DiBot`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    ikyy.sendMessage(from, teks, text, {quoted: ftroli })
}


const Levelnye = level.getLevelingLevel(sender, _level)
const Xpluu = level.getLevelingXp(sender, _level)
const requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
const menu =`\`\`\`KirBotz\`\`\`
\`\`\`Hai Kak @${senderr.split('@')[0]} ${ucapanWaktu}\`\`\`


*Tanggal* ›› *${tanggal}* 🥶
*Waktu* ›› *${time}*

*BOT STATS*
*Menuju Tahun Baru 2022  ↓↓↓*
*${tahunbaru.data.result}* 🥳*
❒͡ *Owner Bot = ↓↓↓*
*http://wa.me/6287705048235*
*its Contact my owner*
❒͡ *Prefix : [ MULTI MODE ]*
❒͡ *Stats : [ PUBLIC ]*
❒͡ *Link Grup : ↓↓↓*
*››› https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ ‹‹‹*

──「 *KirBotz* 」──
*You Info -*

𒍮 *Name : ${pushname}*
𒍮 *You Nomer : wa.me/${senderr.split('@')[0]}*

𒍮 *Level : ${Levelnye}*
𒍮 *XP : ${Xpluu} / ${requiredXplu}*
𒍮 *Join ››› https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ*
───「 *INFORMATION* 」───

Hit Total KirBotz ›› ${totalhit}*

*⌕ Spesial Thanks @${ownerr}*

*• Catatan*
Perilakukan Bot Dengan Baik - Jangan Spam Bot
*KirBotz* Tidak Bertanggung Jawab Atas Fitur Apapun Yang Ada
*KirBotz* tidak Menerimah Foto & Video Yang Anda Kirim`


const Faxx =`*── 「 PRICE LIST 」 ──*

*Welcome To KirBotz*


Hai Kak @${sender.split('@')[0]} 🙌🏻 ${ucapanWaktu} Mau Sewabot Ya? berikut Harga Sewabot

*LIST HARGA BOT;*
IDR + 15.000,00 -  *PERBULAN*
IDR + 30.000,00 -  *PERTAHUN*
IDR + 100.000,00 -  *PERMANEN*

*PAYMENT BISA MELALUI*
• Ovo • Dana • Pulsa

Kontak *Admin* : 
• tesheroku123@gmail.com
• @${ownerr}

Spesial Thanks @${ownerr}`
const fardan =`*────── 「 SCAN QR DI ATAS 」 ──────*

*TUTORIAL*

*1. TEKEN 3 TITIK ATAS*
*2. TEKEN SETELAN*
*3. CARI KODE QR*
*4. TEKEN PINDAI KODE*

*🚮OK SCAN STAH - BACA PERATURAN OWNER KAMI*

*- PERATURAN SEBELUM CHAT OWNER*
*1. BUDAYAKAN SALAM*
*2. JANGAN SPAM*
*3. JANGAN TELPON / VC*
*4. JANGAN TOXIS / PANSOS*
*5. JANGAN MINTA SCRIPT*

*KALAU DAH PAHAM SILAHKAN CHAT OWNER*`

groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
const Fax1 =`\`\`\`KirBotz\`\`\`
\`\`\`Hai Kak @${senderr.split('@')[0]}\`\`\`

*⌕ 𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂𝒔 𝑻𝒊𝒎𝒆 ☪︎*
✗⃝🌐 *Time*: ${ucapanWaktu}* 😳
   _${time} Wib_ 
   _${timeWita} Wita_ 
   _${timeWit} Wit_ 


✗⃝🎩 *Thanks* : @${thanks} 🤡
✗⃝🔋 *Battrey* : _${charging} %_
✗⃝🖌️ *Prefix* : _Multi - Prifex_
✗⃝🍂 *Private Chat* : _${privat.length}_
✗⃝📙 *Total Chat* : _${totalChat.length}_
✗⃝💫 *Speed* : _${latensie.toFixed(4)} Second_
✗⃝🛰️ *Lib* : _Nodejs_`
  
switch(command){

case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Anu Bang >_<')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!sourcecode',buttonText:{displayText: 'SCRIPT'},type:1},{buttonId:'!infoig',buttonText:{displayText:'INFO'},type:1},{buttonId:`${prefix}sewabot`,buttonText:{displayText:'SEWA'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Created *@${ownerr}*',
               buttons: buttons,
               headerType: 1
}

               prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{})
               ikyy.relayWAMessage(prep)
               break
               const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ikyy.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: buttons,
   headerType: 4
}
ikyy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

case 'menu': // flink by lord royco
case 'Menu':
case '?':
if (!isRegister) return reply(mess.regits)
parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
buttons = [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'🌹COMMAND🌹'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'🌹RULES🌹'},type:1},{buttonId:`${prefix}sewabot`,buttonText:{displayText:'🌹SEWABOT🌹'},type:1}]

               imageMsg = (await ikyy.prepareMessageMedia(fs.readFileSync(`./media/fake.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/fake.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${Fax1}`,
               footerText: '𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : _*Akira*_', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ mentionedJid: parseMention(Fax1), externalAdReply: {
							title: `Hai ${pushname} 👋`,
							body: `${tanggal}`,
							previewType: 1,
							thumbnailUrl: "https://ibb.co/FzLx165/Nakano.jpg",
							thumbnail: fs.readFileSync('./media/fake.jpg'), }, forwardingScore:508, isForwarded:true, mentionedJid:[thanks + '@s.whatsapp.net', senderr]}})
               ikyy.relayWAMessage(prep)
             
break
                   case 'allmenu':
        case 'almenu':
if (!isRegister) return reply(mess.regits)
buttons = [{buttonId:`${prefix}collab`,buttonText:{displayText:'PATNERT'},type:1}]
let fyt = {
"title": `Hai Kak ${pushname}`,
"body": `${tanggal}`,
"mediaType": 2,
"thumbnailUrl": `https://i.ibb.co/YkLFWvJ/In-Shot-20210704-143226427.jpg`,
"mediaUrl": "https://youtu.be/fKJMOKfdWXg",
"thumbnail": fs.readFileSync('./media/Menu3.jpg')
}
Pprofil = await ikyy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              imageMsg = (await ikyy.prepareMessageMedia(fs.readFileSync(`./media/fake.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/fake.jpg`)})).imageMessage

            
              
               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '🍂KirBotz', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

buff = await getBuffer(Pprofil)
               prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[ownerr + '@s.whatsapp.net', senderr], externalAdReply: fyt}})
               ikyy.relayWAMessage(prep)
               
        
               list = []
               listmenu = [`islammenuu`,`teksmaker3`,`makerteks2`,`soundsad`,`makerteks`,`groupmenu`,`wibumenu`,`stickermenu`,`ownermenu`,`gamemenu`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`,`gc`,`sewabot`,`soundmenu`]
               listmenuu = [`ISLAM MENU`,`PHOTO OXY`,`EPHOTO MENU`,`SOUND SAD :(`,`MAKER MENU`,`GROUP MENU`,`WIBU MENU`,`STICKER MENU`,`OWNER MENU`,`GAME MENU`,`FUN MENU`,`DOWNLOAD MENU`,`INFO MENU`,`MENU LAINNYA`,`OWNER`,`GROUP BOT`,`SEWA BOT`,`SOUND MENU`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'LIST KE ->' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `Hai kak ${pushname}, Pilih Menu KirBotz Disini`, list)
               break
case 'command':
if (!isRegister) return reply(mess.regits)
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              ikyy.updatePresence(from, Presence.composing)
              try {
              profil = await ikyy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await ikyy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = ikyy.user
              uptime = process.uptime()
              menuu = `Hai @${senderr.split('@')[0]}

*BOT STATUS*
𒍮 *HIT TOTAL ›› ${totalhit}*
𒍮 *Link Grup : ↓↓↓*
*››› https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ ‹‹‹*
𒍮 *STATUS : PUBLIC MODE*
𒍮 *PRIFEX :「 MULTI PRIFEX 」*


╭──❉ *INFORMATION USER* ❉──
│❒͡ *Name : ${pushname}*
│❒͡ *You Nomer*
│wa.me/${senderr.split('@')[0]}*
│❒͡ *Level : ${Levelnye}*
│❒͡ *XP : ${Xpluu} / ${requiredXplu}*
│❒͡ *Join ››› https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ*
╰───「 *KirBotz* 」──

*INFORMATION*

╭─「 *LIST MENU* 」────
│❒͡ -> *teksmaker*
│❒͡ -> *islammenuu*
│❒͡ -> *soundsad*
│❒͡ -> *groupmenu*
│❒͡ -> *wibumenu*
│❒͡ -> *stickermenu*
│❒͡ -> *ownermenu*
│❒͡ -> *gamemenu*
│❒͡ -> *funmenu*
│❒͡ -> *downloadmenu*
│❒͡ -> *infomenu*
│❒͡ -> *othermenu*
╰─「 *KirBotz* 」──

*${ownerr} Thanks*

*• Catatan*
Perilakukan Bot Dengan Baik - *Jangan Spam Bot*
*KirBotz* Tidak Bertanggung Jawab Atas Fitur Apapun Yang Ada
*KirBotz* tidak Menerimah Foto & Video Yang Anda Kirim`
              buff = await getBuffer(profil)
              ikyy.sendMessage(from, buff, image, {quoted: ftroli, caption: menuu, mentionedJid:[ownerr + '@s.whatsapp.net', senderr]})
              break
        
case 'patner':
case 'collab':

       let ini_list = []
for (let i of ownerNumbers) {
const vname = ikyy.contacts[i] != undefined ? ikyy.contacts[i].vname || ikyy.contacts[i].notify : undefined
ini_list.push({
"displayName": 'KirBotz',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${ikyy.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await ikyy.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
ikyy.sendMessage(from,'Tuh Kak Patnert KirBotz >_<',text,{quoted: hehe})
break

                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegister) return reply(mess.regits)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira`)
                    ini_mn1k = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=genbotkey&text=${ini_mn1k}`)
                   ikyy.sendMessage(from, ini_buffer, MessageType.image, { quoted: ftroli, thumbnail: Buffer.alloc(0)})
                    break





                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegister) return reply(mess.regits)
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=genbotkey&text1=${txt1}&text2=${txt2}`)
                    ikyy.sendMessage(from, ini_buffer, MessageType.image, { quoted: ftroli, thumbnail: Buffer.alloc(0)})
                    break

                    // Photo Oxy // BY ALFA
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if (!isRegister) return reply(mess.regits)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira`)
                    ini_mn1k = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=genbotkey&text=${ini_mn1k}`)
                    ikyy.sendMessage(from, ini_buffer, MessageType.image, { quoted: ftroli, thumbnail: Buffer.alloc(0)})
                    break
case 'teksmaker3':
if (!isRegister) return reply(mess.regits)
fake(`*── 「 MAKER TEKS EPHOTO OXY 」 ──*

💚 *UNTUK MAKER PHOTO OXY*

🍀 *${prefix}carvedwood*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}carvedwood* _*Teks*_

🍀 *${prefix}harrypotter*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}harrypotter* _*teks*_

🍀 *${prefix}flamming*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}flamming* _*teks*_

🍀 *${prefix}glowingneon*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}glowingneon* _*teks*_

🍀 *${prefix}fallleaves*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}fallleaves* _*Teks*_

🍀 *${prefix}letterleaves*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}letterleaves*

🍀 *${prefix}summernature*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}summernature* _*Teks*_

🍀 *${prefix}golderrose*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}golderrose* _*Teks*_

🍀 *${prefix}underwater*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}underwater* _*teks*_

🍀 *${prefix}nature3d*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}nature3d* _*Teks*_

🍀 *${prefix}wolfmetal*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}wolfmetal* _*Teks*_

🍀 *${prefix}summer3d*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}summer3d* _*Teks*_

🍀 *${prefix}woodenboard*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}woodenboard* _*Teks*_

🍀 *${prefix}coffe*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}coffe* _*Teks*_

🍀 *${prefix}love*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}love* _*Teks*_`, `Sungkem Stah ${pushname}`)
break

                case 'tiktoktext':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                if (!isRegister) return reply(mess.regits)
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira`)
                    reply(mess.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=genbotkey&text1=${txt1}&text2=${txt2}`)
                    ikyy.sendMessage(from, ini_buffer, MessageType.image, { quoted: ftroli, thumbnail: Buffer.alloc(0)})
                    break

                    // Ephoto 360 // BY ALFA
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (!isRegister) return reply(mess.regits)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira`)
                    ini_mn1k = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=genbotkey&text=${ini_mn1k}`)
                    ikyy.sendMessage(from, ini_buffer, MessageType.image, { quoted: ftroli, thumbnail: Buffer.alloc(0)})
                    break
case 'makerteks2':
if (!isRegister) return reply(mess.regits)
fake(`*── 「 MAKER TEKS EPHOTO 360 」 ──*

💚 *UNTUK MAKER PHOTO 360*

🌹. *${prefix}freefire*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}freefire* _*Teks*_

🌹. *${prefix}silverplaybutton*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna:  *${prefix}silverplaybutton* _*Teks*_

🌹. *${prefix}goldplaybutton*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}goldplaybutton* _*Teks*_

🌹. *${prefix}birthdayday*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}birthdayday* _*Teks*_

🌹. *${prefix}snow3d*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}snow3d* _*Teks*_

🌹. *${prefix}galaxybat*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}galaxybat* _*Teks*_

🌹. *${prefix}writegalacy*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}writegalacy* _*Teks*_

🌹. *${prefix}textbyname*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}textbyname* _*Teks*_

🌹. *${prefix}wooden3d*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}wooden3d* _*Teks*_

🌹. *${prefix}starsnight*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}starsnight* _*Teks*_

🌹. *${prefix}textcake*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}textcake* _*Teks*_

🌹. *${prefix}glittergold*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}glittergold* _*Teks*_

🌹. *${prefix}noeltext*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}noeltext* _*Teks*_

🌹. *${prefix}metallogo*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}metallogo* _*Teks*_

🌹. *${prefix}greenbush*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}greenbush* _*Teks*_

🌹. *${prefix}glossychrome*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}glossychrome* _*Teks*_

🌹. *${prefix}greenneon*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna:  *${prefix}greenneon* _*Teks*_

🌹. *${prefix}hologram3d*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna:  *${prefix}hologram3d* _*Teks*_

🌹. *${prefix}galaxystyle*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}galaxystyle* _*Teks*_

🌹. *${prefix}birthdaycake*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}birthdaycake* _*Teks*_

🌹. *${prefix}heartshaped*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}heartshaped* _*Teks*_

🌹. *${prefix}royaltext*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}royaltext* _*Teks*_

🌹. *${prefix}puppycute*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}puppycute* _*Teks*_

🌹. *${prefix}beautifulflower*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}beautifulflower* _*Teks*_

🌹. *${prefix}lighttext*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}lighttext* _*Teks*_


🌹. *${prefix}galaxywallpaper*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}galaxywallpaper* _*Teks*_

🌹. *${prefix}luxurygold*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}luxurygold* _*Teks*_

🌹. *${prefix}watercolor*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}watercolor* _*Teks*_

🌹. *${prefix}multicolor3d*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}multicolor3d* _*Teks*_

🌹. *${prefix}wetglass*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *${prefix}wetglass* _*Teks*_`, `Sungkem Stah ${pushname}`)
break
case 'makerteks':
if (!isRegister) return reply(mess.regits)
fake(`*── 「 MAKER TEKS 」 ──*

💚 *UNTUK MAKER NYA BANYAK TAPI MALES MGETIK*


🌹. *!neon*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!neon* _*teks*_

🌹. *!greenneon*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!greenneon* _*teks*_

🌹. *!advanceglow*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!advanceglow* _*teks*_

🌹. *!futureneon*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!futureneon* _*teks*_

🌹. *!sandwriting*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!sandwriting* _*teks*_

🌹. *!sandsummer*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!sandsummer* _*teks*_

🌹. *!sandengraved*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!sandengraved* _*teks*_

🌹. *!metaldark*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!metaldark* _*teks*_

🌹. *!neonlight*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!neonlight* _*teks*_

🌹. *!holographic*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!holographic* _*teks*_

🌹. *!text1917*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!text1917* _*teks*_

🌹. *!minion*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!minion* _*teks*_

🌹. *!deluxesilver*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!deluxesilver* _*teks*_

🌹. *!newyearcard*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!newyearcard* _*teks*_

🌹. *!bloodfrosted*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!bloodfrosted* _*tejs*_

🌹. *!halloween*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!halloween* _*teks*_

🌹. *!jokerlogo*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!jokerlogo* _*teks*_

🌹. *!fireworksparkle*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!fireworksparkle* _*teks*_

🌹. *!natureleaves*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!natureleaves* _*teks*_

🌹. *!bokeh*
Membagikan Logo *image* Dari Bot
Aliases: - 
Pengguna: *!bokeh* _*teks*_

🌹. *!toxic*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!toxic* _*teks*_

🌹. *!strawberry*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!strawberry* _*teks*_

🌹. *!box3d*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna:  *!box3d* _*teks*_

🌹. *!roadwarning*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!roadwarning* _*teks*_

🌹. *!breakwall*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!breakwall* _*teks*_

🌹. *!icecold*
Membagikan Logo *image* Dari Bot
Aliases: -
Pengguna: *!icecold* _*teks*_`, `Sungkem Stah ${pushname}`)
break
//------------------< sound sad menu >-------------------
case 'Pota':
case 'POTA':
case 'pota':
if (!isRegister) return reply(mess.regits)
const potamp3 = fs.readFileSync('./assets/pota.mp3');
ikyy.sendMessage(from, potamp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'inikitasayang':
case 'dj ini kita sayang':
if (!isRegister) return reply(mess.regits)
const sayangmp3 = fs.readFileSync('./assets/sayang.mp3');
ikyy.sendMessage(from, sayangmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'alone':
case 'Alone':
const inikitasayangmp3 = fs.readFileSync('./assets/alone.mp3');
ikyy.sendMessage(from, inikitasayangmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
//------------------< sound sad menu >------------------- BY FAX


case 'sad':
if (!isRegister) return reply(mess.regits)
const sadmp3 = fs.readFileSync('./sound/sad.mp3');
ikyy.sendMessage(from, sadmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sad1':
if (!isRegister) return reply(mess.regits)
const sad1mp3 = fs.readFileSync('./assets/sad1.mp3');
ikyy.sendMessage(from, sad1mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sad2':
if (!isRegister) return reply(mess.regits)
const sad2mp3 = fs.readFileSync('./sound/sad2.mp3');
ikyy.sendMessage(from, sad2mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sad3':
if (!isRegister) return reply(mess.regits)
const sad3mp3 = fs.readFileSync('./sound/sad3.mp3');
ikyy.sendMessage(from, sad3mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sad4':
if (!isRegister) return reply(mess.regits)
const sad4mp3 = fs.readFileSync('./sound/sad4.mp3');
ikyy.sendMessage(from, sad4mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sad5':
if (!isRegister) return reply(mess.regits)
const sad5mp3 = fs.readFileSync('./sound/sad5.mp3');
ikyy.sendMessage(from, sad5mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sad6':
if (!isRegister) return reply(mess.regits)
const sad6mp3 = fs.readFileSync('./sound/sad6.mp3');
ikyy.sendMessage(from, sad6mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
//------------------< sound menu >------------------- 
case 'sound1':
if (!isRegister) return reply(mess.regits)
const sound1mp3 = fs.readFileSync('./sound/sound1.mp3');
ikyy.sendMessage(from, sound1mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
if (!isRegister) return reply(mess.regits)
const sound2mp3 = fs.readFileSync('./sound/sound2.mp3');
ikyy.sendMessage(from, sound2mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
if (!isRegister) return reply(mess.regits)
const sound3mp3 = fs.readFileSync('./sound/sound3.mp3');
ikyy.sendMessage(from, sound3mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
if (!isRegister) return reply(mess.regits)
const sound4mp3 = fs.readFileSync('./sound/sound4.mp3');
ikyy.sendMessage(from, sound4mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
if (!isRegister) return reply(mess.regits)
const sound5mp3 = fs.readFileSync('./sound/sound6.mp3');
ikyy.sendMessage(from, sound5mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
if (!isRegister) return reply(mess.regits)
const sound6mp3 = fs.readFileSync('./sound/sound6.mp3');
ikyy.sendMessage(from, sound6mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
if (!isRegister) return reply(mess.regits)
const sound7mp3 = fs.readFileSync('./sound/sound7.mp3');
ikyy.sendMessage(from, sound7mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
if (!isRegister) return reply(mess.regits)
const sound8mp3 = fs.readFileSync('./sound/sound8.mp3');
ikyy.sendMessage(from, sound8mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
if (!isRegister) return reply(mess.regits)
const sound9mp3 = fs.readFileSync('./sound/sound9.mp3');
ikyy.sendMessage(from, sound9mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
if (!isRegister) return reply(mess.regits)
const sound10mp3 = fs.readFileSync('./sound/sound10.mp3');
ikyy.sendMessage(from, sound10mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
if (!isRegister) return reply(mess.regits)
const sound11mp3 = fs.readFileSync('./sound/sound11.mp3');
ikyy.sendMessage(from, sound11mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
if (!isRegister) return reply(mess.regits)
const sound12mp3 = fs.readFileSync('./sound/sound12.mp3');
ikyy.sendMessage(from, sound12mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
if (!isRegister) return reply(mess.regits)
const sound13mp3 = fs.readFileSync('./sound/sound13.mp3');
ikyy.sendMessage(from, sound13mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
if (!isRegister) return reply(mess.regits)
const sound14mp3 = fs.readFileSync('./sound/sound14.mp3');
ikyy.sendMessage(from, sound14mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
if (!isRegister) return reply(mess.regits)
const sound15 = fs.readFileSync('./sound/sound15.mp3');
ikyy.sendMessage(from, sound15, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
if (!isRegister) return reply(mess.regits)
const sound16 = fs.readFileSync('./sound/sound16.mp3');
ikyy.sendMessage(from, sound16, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
if (!isRegister) return reply(mess.regits)
const sound17 = fs.readFileSync('./sound/sound17.mp3');
ikyy.sendMessage(from, sound17, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
if (!isRegister) return reply(mess.regits)
const sound18 = fs.readFileSync('./sound/sound18.mp3');
ikyy.sendMessage(from, sound18, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
if (!isRegister) return reply(mess.regits)
const sound19 = fs.readFileSync('./sound/sound19.mp3');
ikyy.sendMessage(from, sound19, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
if (!isRegister) return reply(mess.regits)
const sound20 = fs.readFileSync('./sound/sound20.mp3');
ikyy.sendMessage(from, sound20, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
if (!isRegister) return reply(mess.regits)
const sound21 = fs.readFileSync('./sound/sound21.mp3');
ikyy.sendMessage(from, sound21, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
if (!isRegister) return reply(mess.regits)
const sound22 = fs.readFileSync('./sound/sound22.mp3');
ikyy.sendMessage(from, sound22, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
if (!isRegister) return reply(mess.regits)
const sound23 = fs.readFileSync('./sound/sound23.mp3');
ikyy.sendMessage(from, sound23, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
if (!isRegister) return reply(mess.regits)
const sound24 = fs.readFileSync('./sound/sound24.mp3');
ikyy.sendMessage(from, sound24, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
if (!isRegister) return reply(mess.regits)
const sound25 = fs.readFileSync('./sound/sound25.mp3');
ikyy.sendMessage(from, sound25, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
if (!isRegister) return reply(mess.regits)
const sound26 = fs.readFileSync('./sound/sound26.mp3');
ikyy.sendMessage(from, sound26, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
if (!isRegister) return reply(mess.regits)
const sound27 = fs.readFileSync('./sound/sound27.mp3');
ikyy.sendMessage(from, sound27, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
if (!isRegister) return reply(mess.regits)
const sound28 = fs.readFileSync('./sound/sound28.mp3');
ikyy.sendMessage(from, sound28, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
if (!isRegister) return reply(mess.regits)
const sound29 = fs.readFileSync('./sound/sound29.mp3');
ikyy.sendMessage(from, sound29, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
if (!isRegister) return reply(mess.regits)
const sound30 = fs.readFileSync('./sound/sound30.mp3');
ikyy.sendMessage(from, sound30, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
if (!isRegister) return reply(mess.regits)
const sound31 = fs.readFileSync('./sound/sound31.mp3');
ikyy.sendMessage(from, sound31, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
//------------------< WIBU BY FAX SU >------------------- 
case 'wibu':
if (!isRegister) return reply(mess.regits)
const wibump3 = fs.readFileSync('./assets2/wibu.mp3');
ikyy.sendMessage(from, wibump3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu2':
if (!isRegister) return reply(mess.regits)
const wibu2mp3 = fs.readFileSync('./assets2/wibu2.mp3');
ikyy.sendMessage(from, wibu2mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu3':
if (!isRegister) return reply(mess.regits)
const wibu3mp3 = fs.readFileSync('./assets2/wibu3.mp3');
ikyy.sendMessage(from, wibu3mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu4':
if (!isRegister) return reply(mess.regits)
const wibu4mp3 = fs.readFileSync('./assets2/wibu4.mp3');
ikyy.sendMessage(from, wibu4mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu5':
if (!isRegister) return reply(mess.regits)
const wibu5mp3 = fs.readFileSync('./assets2/wibu5.mp3');
ikyy.sendMessage(from, wibu5mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu6':
if (!isRegister) return reply(mess.regits)
const wibu6mp3 = fs.readFileSync('./assets2/wibu6.mp3');
ikyy.sendMessage(from, wibu6mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu7':
if (!isRegister) return reply(mess.regits)
const wibu7mp3 = fs.readFileSync('./assets2/wibu7.mp3');
ikyy.sendMessage(from, wibu7mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu8':
if (!isRegister) return reply(mess.regits)
const wibu8mp3 = fs.readFileSync('./assets2/wibu8.mp3');
ikyy.sendMessage(from, wibu8mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu9':
if (!isRegister) return reply(mess.regits)
const wibu9mp3 = fs.readFileSync('./assets2/wibu9.mp3');
ikyy.sendMessage(from, wibu9mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'wibu10':
if (!isRegister) return reply(mess.regits)
const wibu10mp3 = fs.readFileSync('./assets2/wibu10.mp3');
ikyy.sendMessage(from, wibu10mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'home':
if (!isRegister) return reply(mess.regits)
const home = fs.readFileSync('mp3/home.mp3')
ikyy.sendMessage(from, home, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
if (!isRegister) return reply(mess.regits)
const getting = fs.readFileSync('mp3/gettingold.mp3')
ikyy.sendMessage(from, getting, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad10':
if (!isRegister) return reply(mess.regits)
const sad1 = fs.readFileSync('mp3/sad.mp3')
ikyy.sendMessage(from, sad1, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad9':
if (!isRegister) return reply(mess.regits)
const sad2 = fs.readFileSync('mp3/sad2.mp3')
ikyy.sendMessage(from, sad2, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad8':
if (!isRegister) return reply(mess.regits)
const sad3 = fs.readFileSync('mp3/sad3.mp3')
ikyy.sendMessage(from, sad3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad7':
if (!isRegister) return reply(mess.regits)
const sad4 = fs.readFileSync('mp3/sad4.mp3')
ikyy.sendMessage(from, sad4, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
if (!isRegister) return reply(mess.regits)
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
ikyy.sendMessage(from, kursi, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
if (!isRegister) return reply(mess.regits)
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
ikyy.sendMessage(from, tilawah, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
if (!isRegister) return reply(mess.regits)
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
ikyy.sendMessage(from, nabi, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
ikyy.sendMessage(from, ngaji1, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
ikyy.sendMessage(from, ngaji2, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
ikyy.sendMessage(from, irimp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('assets/pale.mp3')
ikyy.sendMessage(from, pa, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
break

//------------------< Game >------------------- 
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
         if (!isRegister) return reply(mess.regits)
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               ikyy.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
        if (!isRegister) return reply(mess.regits)
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
        if (!isRegister) return reply(mess.regits)
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
        if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              ikyy.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
       case 'family100':
               if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)
              reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              ikyy.sendMessage(from, ini_buffer, audio, {quoted: mek}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              ikyy.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
       if (!isRegister) return reply(mess.regits)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyy.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              ikyy.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyy.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
      if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyy.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              ikyy.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              ikyy.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              ikyy.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (!isRegister) return reply(mess.regits)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              ikyy.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
       if (!isRegister) return reply(mess.regits)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyy.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
      
         if (!isRegister) return reply(mess.regits)
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
  if (!isRegister) return reply(mess.regits)
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}

              break
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
case 'islammenuu':
  if (!isRegister) return reply(mess.regits)
textImg(`*── 「 🕋ISLAM MENU 」 ──*

🌿. *${prefix}listsurah*
Membagikan *Data Islam* Dari Bot
Aliases: -
Pengguna: *${prefix}listsurah* 

🌿. *${prefix}alquran*
Membagikan *Data Islam* Dari Bot
Aliases: -
Pengguna: *${prefix}alquran*

🌿. *${prefix}alquranaudio*
Membagikan *Data Islam* Dari Bot
Aliases: -
Pengguna: *${prefix}alquranaudio*

🌿. *${prefix}asmaulhusna*
Membagikan *Data Islam* Dari Bot
Aliases: -
Pengguna: *${prefix}asmaulhusna*

🌿. *${prefix}kisahnabi*
Membagikan *Data Islam* Dari Bot
Aliases: -
Pengguna: *${prefix}kisahnabi* _*nama nabi*_

🌿. *${prefix}jadwalsholat*
Membagikan *Data Islam* Dari Bot
Aliases: -
Pengguna: *${prefix}jadwalsholat* _*Kota*_`)
break
case 'listsurah':
	  if (!isRegister) return reply(mess.regits)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                  if (!isRegister) return reply(mess.regits)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${setting.lolkey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':	
                  if (!isRegister) return reply(mess.regits)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${setting.lolkey}`)
                    ikyy.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                  if (!isRegister) return reply(mess.regits)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=genbotkey`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                  if (!isRegister) return reply(mess.regits)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':	
                  if (!isRegister) return reply(mess.regits)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
case 'cekbapak': // By Ramlan ID
  if (!isRegister) return reply(mess.regits)
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Fax Botz']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					ikyy.sendMessage(from, cek, text, { quoted: ftroli })
					break
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
       case 'belipremium':
       case 'buypremium':
       case 'sewabot':
        
               buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: 'OWNER'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'RULES'},type:1}]

               imageMsg = (await ikyy.prepareMessageMedia(fs.readFileSync(`./media/sewa.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/sewa.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${Faxx}`,
               footerText: '𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : _*Akira*_', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[ownerr + '@s.whatsapp.net', senderr]}})
               ikyy.relayWAMessage(prep)
               break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (!isOwner) return reply(mess.only.owner)
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
              if (!isOwner) return reply(mess.only.owner)
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       case 'igdl':
       case 'instagram':
         if (!isRegister) return reply(mess.regits)
              try {
              if (!isUrl(q)) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break 
       case 'igdl2':
       case 'instagram2':
         if (!isRegister) return reply(mess.regits)
              try {
              if (!q) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${setting.zekskey}&url=${args[0]}`)
              for(let i = 0; i < res.data.result.length; i++) {
              sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${res.data.owner}\`\`\`
\`\`\`▢ Caption : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
       case 'igdl3': 
       case 'instagram3':
         if (!isRegister) return reply(mess.regits)
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':
         if (!isRegister) return reply(mess.regits)
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
         if (!isRegister) return reply(mess.regits)
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
        if (!isRegister) return reply(mess.regits)
            if (args.length < 1) return reply(`Kirim .ytmp3 _link yt_

Contoh :
- .ytmp3 https://youtu.be/XhQ1YOi9QmE

*NOTE :*
- *#help-ytmp3* untuk petunjuk lebih lanjut`)
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
       if (!isRegister) return reply(mess.regits)
            if (args.length < 1) return reply(`Kirim .ytmp4 _link yt_

Contoh :
- .ytmp4 https://youtu.be/XhQ1YOi9QmE

*NOTE :*
- *#help-ytmp4* untuk petunjuk lebih lanjut`)
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
       if (!isRegister) return reply(mess.regits)
            if (!isPremium) return reply(mess.only.premium)
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas* : 720p\`\`\`
\`\`\`▢ Size* : ${filesizeF}\`\`\`
\`\`\`▢ Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas : 720p\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
        case 'google':
          if (!isRegister) return reply(mess.regits)
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
               ikyy.sendMessage(from, ss, image, {caption: vars, quoted : mek})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
          if (!isRegister) return reply(mess.regits)
               if (!isPremium) return reply(mess.only.premium)
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Nama : ${res[0].nama}\`\`\`
\`\`\`▢ Ukuran : ${res[0].size}\`\`\`
\`\`\`▢ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
       case 'tiktok': 
       case 'ttdl':
         if (!isRegister) return reply(mess.regits)
             if (!q) return reply(`Kirim #tiktok _link tiktok_

Contoh :
- #tiktok https://vt.tiktok.com/ZSJv15qXm/

*NOTE :*
- *#help-tiktok* untuk petunjuk lebih lanjut`)
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
      case 'ttnowm': 
      case 'tiktoknowm':
        if (!isRegister) return reply(mess.regits)
             if (!q) return reply(`Kirim #tiktoknowm _link tiktok_

Contoh :
- #tiktoknowm https://vt.tiktok.com/ZSJv15qXm/

*NOTE :*
- *#help-tiktok* untuk petunjuk lebih lanjut`)
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':
    if (!isRegister) return reply(mess.regits)
    
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                  if (!isRegister) return reply(mess.regits)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyy.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
                    break

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              case 'tiktok':
                if (!isRegister) return reply(mess.regits)
if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              buttons = [{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `VIDEO`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'SOUND'},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(fs.readFileSync(`./media/Menu3.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu3.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`Silahkan pilihan media yg mau di download kak:v`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              ikyy.relayWAMessage(prep)
              break
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
        if (!isRegister) return reply(mess.regits)
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${ini_link}`)
             ikyy.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break
      case 'fb':
      case 'facebook':
        if (!isRegister) return reply(mess.regits)
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
      case 'twitter':
        if (!isRegister) return reply(mess.regits)
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
        if (!isRegister) return reply(mess.regits)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':
        if (!isRegister) return reply(mess.regits)
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${setting.lolkey}&url=${ini_link}`)
             await ikyy.sendMessage(from, ini_buffer, image, { quoted: mek })
             break
       case 'nhentaipdf':
         if (!isRegister) return reply(mess.regits)
             if (!isPremium) return reply(mess.only.premium)
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `\n${get_result.title_romaji}\n\n${get_result.title_native}\n\nCharacter : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             ikyy.sendMessage(from, ini_image, image, { caption: teks, quoted: mek })
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${setting.lolkey}`)
             pdf = await getBuffer(anu.result)
             ikyy.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
       case 'nhentai':
         if (!isRegister) return reply(mess.regits)
              if (!isPremium) return reply(mess.only.premium)
              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
       case 'manga':
         if (!isRegister) return reply(mess.regits)
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              thumbnail = await getBuffer(get_result.coverImage.large)
              await ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
              break
       case 'doujindesu':
         if (!isRegister) return reply(mess.regits)
             if (!q) return reply(mess.wrongFormat)
             reply(mess.wait)
             try {
             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             ikyy.sendMessage(from, buffer, image, {caption: xixixai, quoted: mek})
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
      case 'anime':
        if (!isRegister) return reply(mess.regits)
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             await ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
             break
      case 'kusonime':
        if (!isRegister) return reply(mess.regits)
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
             break
       case 'otakudesu':
         if (!isRegister) return reply(mess.regits)
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
       case 'nekopoi':
         if (!isRegister) return reply(mess.regits)
              if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${setting.lolkey}&url=${ini_url}`)
              get_result = get_result.result
              ini_txt = `\`\`\`▢ Title : ${get_result.anime}\`\`\`\n`
              ini_txt += `\`\`\`▢ Porducers : ${get_result.producers}\`\`\`\n`
              ini_txt += `\`\`\`▢ Duration : ${get_result.duration}\`\`\`\n`
              ini_txt += `\`\`\`▢ Size : ${get_result.size}\`\`\`\n`
              ini_txt += `\`\`\`▢ Sinopsis : ${get_result.sinopsis}\`\`\`\n`
              link = get_result.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              ini_buffer = await getBuffer(get_result.thumb)
              await ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
              break
       case 'nekopoisearch':
         if (!isRegister) return reply(mess.regits)
              if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\`▢ Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`▢ Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`▢ Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              reply(ini_txt)
              break
       case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
         if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`).then((gambar) => {
              ikyy.sendMessage(from, gambar, image, { quoted: mek, thumbnail: Buffer.alloc(0) })
})
              break
       
       case 'hentai':
         if (!isRegister) return reply(mess.regits)
       if (!isPremium) return reply(mess.only.premium)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
              ikyy.sendMessage(from, gambar, image, { quoted: ftroli })
}) 
              break
       case 'nakanoitsuki':
       case 'nakanoikyy':
       case 'nakanomiku':
         if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: ftroli, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
              break
       case 'storyanime':
         if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=${setting.lolkey}`)
              buffer = await getBuffer(anu.result)
              ikyy.sendMessage(from, buffer, video, { quoted: ftroli })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
         if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
          if (!isRegister) return reply(mess.regits)
               reply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
          if (!isRegister) return reply(mess.regits)
               try {
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':
                 if (!isRegister) return reply(mess.regits)       
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
               ikyy.sendMessage(from, buff, image, {quoted: ftroli, caption: ot})
               break
            case 'waifu':
              if (!isRegister) return reply(mess.regits)
v = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
inifile = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await ikyy.prepareMessage(from, inifile, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
break
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
         if (!isRegister) return reply(mess.regits)
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await ikyy.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
        case 'playy':
case 'lagu':
  if (!isRegister) return reply(mess.regits)
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':  
                    if (!isRegister) return reply(mess.regits)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('*🌹𝑊𝑎𝑖𝑡...🌹*')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				ikyy.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:ftroli, caption: 'Nih Kak 🍂'})
					break  
					
					case 'ytdl':
					case 'play':
					  if (!isRegister) return reply(mess.regits)
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'AUDIO'},type:1}]

imageMessage = (await ikyy.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{})

ikyy.relayWAMessage(prep)
break
					
          case 'lirik':
            if (!isRegister) return reply(mess.regits)
               if (!q) return reply(mess.wrongFormat)
               reply(mess.wait)
               lirikLagu(q).then((res) => {
               let lirik = `Lirik Lagu ${q}

               ${res[0].result}
`
               reply(lirik)
})
               break
         case 'pinterest':
           if (!isRegister) return reply(mess.regits)
              if (args.length < 1) return reply(`${prefix}Nakano ikyy`)
              reply(mess.wait)
              teks = args.join(' ')
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${teks}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: ftroli, caption: `*Hasil Pencarian Dari : ${teks}*`})
              break
        case 'shopee':
          if (!isRegister) return reply(mess.regits)
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`▢ Nama : ${get_data[i].name}\`\`\`
\`\`\`▢ Harga : ${get_data[i].harga}\`\`\`
\`\`\`▢ Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`▢ Lokasi : ${get_data[i].location}\`\`\`
\`\`\`▢ Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`▢ Stok : ${get_data[i].stock}\`\`\`
\`\`\`▢ Informasi : ${get_data[i].information}\`\`\`
\`\`\`▢ Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
         if (!isRegister) return reply(mess.regits)
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`▢ Title : ${get_result[i].title}\`\`\`
\`\`\`▢ Harga : ${get_result[i].price}\`\`\`
\`\`\`▢ Rate : ${get_result[i].rating}\`\`\`
\`\`\`▢ Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':
         if (!isRegister) return reply(mess.regits)
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`▢ Title : ${i.title}\`\`\`
\`\`\`▢ Views : ${i.views}\`\`\`
\`\`\`▢ Upload : ${i.ago}\`\`\`
\`\`\`▢ Durasi : ${i.timestamp}\`\`\`
\`\`\`▢ Channel : ${i.author.name}\`\`\`
\`\`\`▢ Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: ftroli, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
  if (!isRegister) return reply(mess.regits)
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await ikyy.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
         if (!isRegister) return reply(mess.regits)
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  ikyy.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               ikyy.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai
                  if (!isRegister) return reply(mess.regits)
               if (!isPremium) return reply(mess.only.premium)
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        case 'nulis':
        case 'tulis':
          if (!isRegister) return reply(mess.regits)
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               ikyy.sendMessage(from, buff, image, {quoted: ftroli, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level': 
      
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await ikyy.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              ikyy.sendMessage(from, buffer, image, { caption: teks, quoted: mek})
              break
       case 'lb':
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
         if (!isRegister) return reply(mess.regits)
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
        if (!isRegister) return reply(mess.regits)
              if (args.length == 0) return reply(`Example: ${prefix + command} ikyy-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.name}\`\`\`
\`\`\`▢ Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`▢ Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Following : ${ini_result.following}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : ${ini_result.url}\`\`\`
`
             ikyy.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
        if (!isRegister) return reply(mess.regits)
             if (args.length == 0) return reply(`Example: ${prefix + command} ikyy.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.username}\`\`\`
\`\`\`▢ Nama : ${ini_result.fullname}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.following}\`\`\`
\`\`\`▢ Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : https://instagram.com/${ini_result.username}\`\`\`
`
             ikyy.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
        if (!isRegister) return reply(mess.regits)
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${get_result.username}\`\`\`
\`\`\`▢ Nama : ${get_result.nickname}\`\`\`
\`\`\`▢ Pengikut : ${get_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${get_result.followings}\`\`\`
\`\`\`▢ Likes : ${get_result.likes}\`\`\`
\`\`\`▢ Video : ${get_result.video}\`\`\`
\`\`\`▢ Deskripsi : ${get_result.bio}\`\`\`
`
              ikyy.sendMessage(from, pp_tt, image, { quoted: ftroli, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
         if (!isRegister) return reply(mess.regits)
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
  if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
        if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
         if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawrgura':
         if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
         if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
         if (!isRegister) return reply(mess.regits)
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              ikyy.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
         if (!isRegister) return reply(mess.regits)
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${setting.lolkey}`)
              await ikyy.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
              break
case 'ttp':
  if (!isRegister) return reply(mess.regits)
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('*Tunggu Permintaan Anda Sedang Kami proses*')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       case 'attp':
         if (!isRegister) return reply(mess.regits)
              if (args.length == 0) return reply(`Example: ${prefix + command} ikyy`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              ikyy.sendMessage(from, buffer, sticker, { quoted: ftroli })
              break
       case 'ttg':
         if (!isRegister) return reply(mess.regits)
              if (!q) return await reply(mess.wrongFormat)
              reply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
         if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
				    if (!isRegister) return reply(mess.regits)
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
       case 'take':
       case 'colong':
         if (!isRegister) return reply(mess.regits)
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, ikyy, mek, from)
              break
       case 'delwm':
         if (!isRegister) return reply(mess.regits)
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, ikyy, mek, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
         if (!isRegister) return reply(mess.regits)
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
        if (!isRegister) return reply(mess.regits)
              if (!isQuotedSticker) return reply(`Reply sticker dengan caption .toimg
*Note :*
- *#help-toimg* untuk petunjuk lebih lanjut`)
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              ikyy.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
       case 'smeme': 
         if (!isRegister) return reply(mess.regits)
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  ikyy.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':
                if (!isRegister) return reply(mess.regits)             
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await ikyy.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':
          if (!isRegister) return reply(mess.regits)
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await ikyy.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               ikyy.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
          if (!isRegister) return reply(mess.regits)
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await ikyy.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               ikyy.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
          if (!isRegister) return reply(mess.regits)
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await ikyy.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               ikyy.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break
//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
       case 'donate': 
       case 'donasi':
              textImg(setting.txtDonasi)
              break
       case 'sourcecode': 
       case 'sc': 
       case 'src':
       if (!isRegister) return reply(mess.regits)
              textImg(`*Anu Bang >_<*\n*Beli Di Owner Gua* @${ownerr}`)
              break
      case 'ping':
      case 'speed':
      if (!isRegister) return reply(mess.regits)
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
      case 'botstat':
      case 'status':
      case 'stats':
      if (!isRegister) return reply(mess.regits)
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`▢ Group Chats : ${groups.length}\`\`\`
\`\`\`▢ Private Chats : ${privat.length}\`\`\`
\`\`\`▢ Total Chats : ${totalChat.length}\`\`\`
\`\`\`▢ Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`▢ Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`▢ Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`▢ Ram Usage : ${ram2}\`\`\`
\`\`\`▢ Platform : ${os.platform()}\`\`\`
\`\`\`▢ Hostname : ${os.hostname()}\`\`\`
\`\`\`▢ Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`▢ Wa Version: ${ikyy.user.phone.wa_version}\`\`\`
\`\`\`▢ Os Version: ${ikyy.user.phone.os_version}\`\`\`
\`\`\`▢ Device Manufacturer: ${ikyy.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Device Model: ${ikyy.user.phone.device_model}\`\`\`
\`\`\`▢ Os Build Number: ${ikyy.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
      
             if (!q) return reply(`Kirim #join  _link Group_

Contoh :
- !join https://chat.whatsapp.com/J17gfDmyKHN33IyWnynzvh

*NOTE :*
- *#help-join* untuk petunjuk lebih lanjut`)
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = ikyy.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
      
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
      if (!isRegister) return reply(mess.regits)
      if (!isOwner) return  reply(mess.only.owner)
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
      case 'tes':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await ikyy.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await ikyy.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             ikyy.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*_✗✗✗_ ᗩᴋɪʀᴀᗷoтz々*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
ikyy.sendMessage(_.jid, 
	    {"contentText": `*_✗✗✗_ ᗩᴋɪʀᴀᗷoтz々*\n\n${body.slice(4)}`,
	    "footerText": '*_✗✗✗_ ᗩᴋɪʀᴀᗷoтz々*',
	    "buttons": [
	    {"buttonId": `!menu`,
	    "buttonText": {"displayText": "MENU"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess broadcast')
}
             break
      case 'bcc':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await ikyy.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await ikyy.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	ikyy.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `*_✗✗✗_ KirBotz*`, buttons: [{buttonId: `${prefix}sewabot`,buttonText:{displayText: 'SEWABOT'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: image, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             ikyy.sendMessage(_.jid, { contentText: `${textt}`, footerText: `*_✗✗✗_ KirBotz*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./AkiraBotz.jpg'), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
      case 'bc':
      case 'broadcast':
      if (!isRegister) return reply(mess.regits)
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await ikyy.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await ikyy.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             ikyy.sendMessage(_.jid, bc, image, {quoted:ftroli,caption: `*「 broadcast Bot 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
             reply('Suksess broadcast')
}
             break
      case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await ikyy.chats.all()
             ikyy.setMaxListeners(25)
             for (let _ of anu) {
             ikyy.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':
      if (!isRegister) return reply(mess.regits)
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
      if (!isRegister) return reply(mess.regits)
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
      if (!isRegister) return reply(mess.regits)
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
      if (!isRegister) return reply(mess.regits)
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = ikyy.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             ikyy.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick':
      if (!isRegister) return reply(mess.regits)
      if (!isGroupAdmins && !isOwner)return reply(mess.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
      if (!isRegister) return reply(mess.regits)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             ikyy.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupAdd(from, [entah])
}
             break
      case 'promote':
      if (!isRegister) return reply(mess.regits)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             ikyy.groupMakeAdmin(from, mems_ids)
             } else {
             ikyy.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
      if (!isRegister) return reply(mess.regits)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             ikyy.groupDemoteAdmin(from, mems_ids)
             } else {
             ikyy.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname':
       if (!isRegister) return reply(mess.regits)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              ikyy.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
       if (!isRegister) return reply(mess.regits)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              ikyy.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       if (!isRegister) return reply(mess.regits)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await ikyy.downloadMediaMessage(encmedia)
              ikyy.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
       if (!isRegister) return reply(mess.regits)
              let LLevelnye = level.getLevelingLevel(sender, _level)
              let XXpluu = level.getLevelingXp(sender, _level)
              let rrequiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              ikyy.updatePresence(from, Presence.composing)
              try {
              profil = await ikyy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await ikyy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = ikyy.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${LLevelnye}\n➸ *XP*: ${XXpluu} / ${rrequiredXplu}`
              buff = await getBuffer(profil)
              ikyy.sendMessage(from, buff, image, {quoted: ftroli, caption: profile})
              break
       case 'afk': 
       case 'turu':
       if (!isRegister) return reply(mess.regits)
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
       case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
       if (!isRegister) return reply(mess.regits)
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await ikyy.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              ikyy.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
       if (!isRegister) return reply(mess.regits)
       if (!isRegister) return reply(mess.regits)
       if (!isGroupAdmins && !isOwner)return reply(mess.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAGGAL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += ` @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned
if (!isRegister) return reply(mess.regits)
if (!isGroupAdmins && !isOwner)return reply(mess.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
       
       if (!isGroupAdmins && !isOwner)return reply(mess.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              ikyy.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':  
              if (!isRegister) return reply(mess.regits)       
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(ikyy.chats.get(ido).presences), ikyy.user.jid]
             ikyy.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: ftroli, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
      if (!isRegister) return reply(mess.regits)
      if (!isGroupAdmins && !isOwner)return reply(mess.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
      if (!isRegister) return reply(mess.regits)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await ikyy.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':
       if (!isRegister) return reply(mess.regits)
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
       if (!isRegister) return reply(mess.regits)
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
       if (!isRegister) return reply(mess.regits)
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
       if (!isRegister) return reply(mess.regits)
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
       if (!isRegister) return reply(mess.regits)
              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
       if (!isRegister) return reply(mess.regits)
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
        if (!isRegister) return reply(mess.regits)
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              ikyy.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: ftroli})
              break
       case 'apakah':
       if (!isRegister) return reply(mess.regits)
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ftroli })
              break
       case 'rate':
       case 'nilai':
       if (!isRegister) return reply(mess.regits)
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: ftroli })
              break
       case 'gantengcek':
       case 'cekganteng':
       if (!isRegister) return reply(mess.regits)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: ftroli })
              break
       case 'cantikcek':
       case 'cekcantik':
       if (!isRegister) return reply(mess.regits)
              cantik = body.slice(1)
              const can =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94€','75%','82%','41%','39%']
              const tik = can[Math.floor(Math.random() * can.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: ftroli })
              break
       case 'cekwatak':
       if (!isRegister) return reply(mess.regits)
              var namao = pushname
              var prfx = await ikyy.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
       if (!isRegister) return reply(mess.regits)
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              ikyy.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: ftroli })
              break
       case 'bisakah':
       if (!isRegister) return reply(mess.regits)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftroli })
              break
       case 'kapankah':
       if (!isRegister) return reply(mess.regits)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftroli })
              break
       case 'truth':
       if (!isRegister) return reply(mess.regits)
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              ikyy.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: ftroli })
              break
       case 'dare':
       if (!isRegister) return reply(mess.regits)
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              ikyy.sendMessage(from, buffer, image, { quoted: ftroli, caption: '*Dare*\n\n'+ der })
              break		
       case 'jadian':
       if (!isRegister) return reply(mess.regits)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
       if (!isRegister) return reply(mess.regits)
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
       if (!isRegister) return reply(mess.regits)
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
       if (!isRegister) return reply(mess.regits)
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
       if (!isRegister) return reply(mess.regits)
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
        case 'getpp':
        if (!isRegister) return reply(mess.regits)
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await ikyy.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await ikyy.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await ikyy.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
        if (!isRegister) return reply(mess.regits)
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               ikyy.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
        case 'tes':
               reply('Okeh nyala')
               break
        case 'info':  // Jangan Di Ubah Plise
               urlinfo = 'https://telegra.ph/file/321498f0cd9d24092d23f.jpg'
               thankslort = `*──「 INFORMATION 」──*
               
Nama Bot : KirBotz
Owner Name : Akira
Creator : Akira
Credits : Akira PokokNya

Thanks To Big
*››* Mhankbarbar
*››* Akira
*>>* KirBotz
*››* All creator Bot`
             ikyy.sendMessage(from, await getBuffer(urlinfo), image, {quoted: ftroli, caption: thankslort })
             break
case 'media':
if (!isRegister) return reply(mess.regits)
if (isBan) return reply(mess.ban)
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
if (!isRegister) return reply(mess.regits)
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
if (!isRegister) return reply(mess.regits)
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await ikyy.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             ikyy.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
       if (!isRegister) return reply(mess.regits)
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              ikyy.sendMessage(from, teks, text, {quoted: ftroli})
              break

       case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              pesan = args.join(' ')
              reply('Krim Pesan Telah Terkrim 🤣')
              ikyy.sendMessage(`${pesan}@s.whatsapp.net`,`Pesan Dari\nNama:${pushname}\nNomor: *wa.me/${senderr.split('@')[0]}\n\n ${pesan}`, text)
              break
       case 'readall':
       if (!isRegister) return reply(mess.regits)
              totalchat.map( async ({ jid }) => {
              await ikyy.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	
              
//------------------< buggc  >------------------
case 'buggcx':
if (!isOwner) return reply(mess.only.owner)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
ikyy.toggleDisappearingMessages(from)
break
case 'culik':
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply('Masukin id grupnya tolol')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              ikyy.groupAdd(args[0], pantek)
              break
//------------------< Enable/Disable >-------------------
       case 'leveling':
       if (!isRegister) return reply(mess.regits)
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilink':
       if (!isRegister) return reply(mess.regits)
        if (!isGroupAdmins && !isOwner)return reply(mess.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
       if (!isRegister) return reply(mess.regits)
        if (!isGroupAdmins && !isOwner)return reply(mess.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
        if (!isRegister) return reply(mess.regits)
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MODE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MODE OFF* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'setting':
        case 'grupsetting':
        case 'groupsetting':
        if (!isRegister) return reply(mess.regits)
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
case 'group':
case 'grup':
        if (!isRegister) return reply(mess.regits)
        txtt =`Hai Kak ${pushname}\nPilih Di bawah`

               buttons = [{buttonId: '!groupy enable',buttonText:{displayText: 'open'},type:1},{buttonId:'!groupy disable',buttonText:{displayText:'close'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Pilih open : Untuk Membuka\nPilih close : Untuk Menutup',
               buttons: buttons,
               headerType: 1
}

          prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               ikyy.relayWAMessage(prep)
               break
      case 'groupy':
      case 'grupy':
      if (!isRegister) return reply(mess.regits)
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             ikyy.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'disable'){
             ikyy.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             ikyy.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             ikyy.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih enable atau disable`)
}
             break
//------------------< Menunya Bang:v >-------------------
      case 'infoig':
          textImg(`Hai Kak *${pushname}*

Berikut Info Lengkap Owner Saya

*• Bio Data*

*Nama :* Akira
*Gender :* LAKI - LAKI
*Nomor :* https://wa.me/6287705048235


*• Bio Data Sosmed*

*YouTube* : KirBotz
Link : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg


*Group Bot 🌹*
Link : https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`)
break

      case 'Gc':
      case 'gc':
      case 'GC':
      if (!isRegister) return reply(mess.regits)
             reply('https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ')
             break
      case 'ownermenu':
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, ownerMenu(prefix), MessageType.text, {quoted: ftroli})
             break
      case 'downloadmenu':
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, downloadMenu(prefix), MessageType.text, {quoted: ftroli})
             break
      case 'gamemenu':
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, gameMenu(prefix), MessageType.text, {quoted: ftroli})
             break
case 'pentunjuk':
textImg(`Hai *${pushname}👋*

Masih Bingung Menggunakan Bot?? Ikuti Petunjuk Kami

Jadi Kali Ini Saya Memberikan Cara Menggunakan Bot *whatsapp*


Contoh Fiture Menu & Tampilan KirBotz
Command : ${prefix}menu

Contoh Fiture Downloader
Command : ${prefix}ytmp3
Aliases : Google Search
Pengguna Bot : -Kirim ${prefix}ytmp3 _link yt_

Contoh :
- ${prefix}ytmp3 https://youtu.be/XhQ1YOi9QmE

*NOTE :*
- *#help-ytmp3* untuk petunjuk lebih lanjut

💚 *BERIKUT BEBERAPA TUTORIAL MENGGUNAKAN BOT*`)
break
      case 'rules':
       textImg(`*BACA PETUNJUK BOT ALIN*

*RULES BOT*

1. _Jangan spam bot._
_Sanksi: *WARN/SOFT BLOCK*_

2. _Jangan telepon bot._
_Sanksi: *SOFT BLOCK*_

3. _Jangan Banding Bot._
_Sanksi: *PERMANENT BLOCK*_


_*Jika Sudah DiPahami Rules-Nya, Silakan Ketik *${prefix}menu* Untuk Mulai!*_

*SCRIPT INI DI SUSUN OLEH AKIRA*

Owner  BOTZ:
wa.me/6287705048235`)
break
      case 'wibumenu':
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, wibuMenu(prefix), MessageType.text, {quoted: ftroli})
             break
      case 'infomenu':
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, infoMenu(prefix), MessageType.text, {quoted: ftroli})
             break
      case 'stickermenu':
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, stickerMenu(prefix), MessageType.text, {quoted: ftroli})
             break
      case 'othermenu':
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, otherMenu(prefix), MessageType.text, {quoted: ftroli})
             break
      case 'groupmenu': 
      case 'grupmenu': 
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, groupMenu(prefix), MessageType.text, {quoted: ftroli})
             break
      case 'funmenu':
      if (!isRegister) return reply(mess.regits)
             ikyy.sendMessage(from, funMenu(prefix), MessageType.text, {quoted: ftroli})
             break
     
      case 'jadibot':
      if (!isRegister) return reply(mess.regits)
      if (!isPremium) return reply(mess.only.premium)
             const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(ikyy,from,sender,reply,mek);
             break
      case 'soundsad':
      if (!isRegister) return reply(mess.regits)
      fake(`*── 「 SOUND MENU 」 ──*

*SOUND SHORT SAD :(*


🌹. *${prefix}sad*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad*

🌹. *${prefix}sad2*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad2*

🌹. *${prefix}sad3*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad3*

🌹. *${prefix}sad4*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad4*

🌹. *${prefix}sad5*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad5*

🌹. *${prefix}sad6*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad6*

🌹. *${prefix}sad7*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad7*

🌹. *${prefix}sad8*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad8*

🌹. *${prefix}sad9*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad9*

🌹. *${prefix}sad10*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sad10*

*SOUND SHORT MUSLIM :)*

🌹. *${prefix}ngaji*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}ngaji*

🌹. *${prefix}ngaji2*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}ngaji2*

🌹. *${prefix}sholawatnabi*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sholawatnabi*

🌹. *${prefix}tilawah*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}tilawah*

🌹. *${prefix}ayatkursi2*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}ayatkursi2*`, `Sungkem Stah ${pushname}`)
break

      case 'soundmenu':
      if (!isRegister) return reply(mess.regits)
      fake(`*── 「 SOUND MENU 」 ──*

*SOUND SHORT*


🌹. *${prefix}sound1*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound1*

🌹. *${prefix}sound2*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound2*

🌹. *${prefix}sound3*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound3*

🌹. *${prefix}sound4*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound4*

🌹. *${prefix}sound5*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound5*

🌹. *${prefix}sound6*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound6*

🌹. *${prefix}sound7*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound7*

🌹. *${prefix}sound8*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound8*

🌹. *${prefix}sound9*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound9*

🌹. *${prefix}sound10*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound10*

🌹. *${prefix}sound11*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound11*

🌹. *${prefix}sound12*
Membagikan Music Dari Bot
Aliases: -
Pengguna:  *${prefix}sound12*

🌹. *${prefix}sound13*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound13*

🌹. *${prefix}sound14*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound14*

🌹. *${prefix}sound15*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound15*

🌹. *${prefix}sound16*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound16*

🌹. *${prefix}sound17*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound17*

🌹. *${prefix}sound18*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound18*

🌹. *${prefix}sound19*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound19*

🌹. *${prefix}sound20*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound20*

🌹. *${prefix}sound21*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound21*

🌹. *${prefix}sound22*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound22*

🌹. *${prefix}sound23*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound23*

🌹. *${prefix}sound24*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound24*

🌹. *${prefix}sound25*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound25*

🌹. *${prefix}sound26*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound26*

🌹. *${prefix}sound27*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound27*

🌹. *${prefix}sound28*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}sound28*



🎶 *SOUND SHORT WIBU ${pushname}*

🌹. *${prefix}wibu*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu*

🌹. *${prefix}wibu1*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu1*

🌹. *${prefix}wibu2*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu2*

🌹. *${prefix}wibu3*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu3*

🌹. *${prefix}wibu4*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu4*

🌹. *${prefix}wibu5*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu5*

🌹. *${prefix}wibu6*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu6*

🌹. *${prefix}wibu7*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu7*

🌹. *${prefix}wibu8*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu8*

🌹. *${prefix}wibu9*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu9*

🌹. *${prefix}wibu10*
Membagikan Music Dari Bot
Aliases: -
Pengguna: *${prefix}wibu10*`, `Sungkem Stah ${pushname}`)
break
      case 'stopjadibot':
      case 'stopbot':
             const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(ikyy,from,sender,mek);
             break
case 'nice':
textImg(`Yoii ${pushname}`)
break
//NIH UNTUK COMMAND --break
case 'help-join':
textImg(`Command ini berfungsi untuk Bot Masuk Ke Group Whatsapp

*Contoh penggunaan :*
- Reply Link Gc & Ketik  dengan caption ${prefix}join https://chat.whatsapp.com/J17gfDmyKHN33IyWnynzvh

*List option :*

*Alias :*
- ${prefix}Join

*NOTE :*
- Fitur ini Bisa Di Gunakan Oleh Owner Bot`)
break
case 'help-tiktok':
textImg(`Command ini berfungsi untuk merubah sticker menjadi image atau video

*Contoh penggunaan :*
- Reply sticker dengan caption ${prefix}tiktok & ${prefix}tiktoknowm  [Link Url]

*List option :*
- --doc _for send document file_
- --json _for see json result [webp gif]_
- --gif _for send gif [webp gif]_

*Alias :*
- ${prefix}tiktok
- ${prefix}tiktoknowm
- ${prefix}tiktokmusic

*NOTE :*
- Fitur ini menggunakan 1 limit harian`)
break
case 'help-toimg':
textImg(`Command ini berfungsi untuk merubah sticker menjadi image atau video

*Contoh penggunaan :*
- Reply sticker dengan caption ${prefix}toimg [option]

*List option :*
- --doc _for send document file_
- --json _for see json result [webp gif]_
- --gif _for send gif [webp gif]_

*Alias :*
- ${prefix}toimg
- ${prefix}togif
- ${prefix}tovideo

*NOTE :*
- Fitur ini menggunakan 1 limit harian`)
break
case 'help-ytmp3':
reply(`Command ini berfungsi untuk mendownload audio youtube

*Penggunaan :*
- .ytmp3 [link yt] [option]

*List option :*
- --json _for see result json_
- --doc _for send document file_
- --ptt _for send vn_

*Contoh Penggunaan :*
- .ytmp3 https://youtu.be/Mt76HHLAN_4

- .ytmp3 https://youtu.be/Mt76HHLAN_4 --ptt

*Fitur - fitur yang berkaitan :*
- .ytmp3


*NOTE :*
- Fitur ini menggunakan 1 limit harian`)
break
case 'help-ytmp4':
reply(`Command ini berfungsi untuk mendownload video youtube

*Penggunaan :*
- .ytmp4 [link yt] [option]

*List option :*
- --json _for see result json_
- --doc _for send document file_
- --ptt _for send vn_

*Contoh Penggunaan :*
- .ytmp4 https://youtu.be/Mt76HHLAN_4

- .ytmp4 https://youtu.be/Mt76HHLAN_4 --ptt

*Fitur - fitur yang berkaitan :*
- .ytmp4

*NOTE :*
- Fitur ini menggunakan 1 limit harian`)
break
const anjmp3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, anjmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`jancok`)){
const jancokmp3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, jancokmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`ngntd`)){
const ngntdmp3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, ngntdmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`ngentod`)){
const ngentodmp3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, ngentodmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`kntl`)){
const kntlmp3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, kntlmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`kontol`)){
const kontolmp3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, kontolmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`asu`)){
const asuump3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, asuump3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`tolol`)){
const tololmp3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, tololmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`memek`)){
const asump3 = fs.readFileSync('./assets/toxic.mp3');
ikyy.sendMessage(from, asump3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`by one`)){
const botmp3 = fs.readFileSync('./assets/bot.mp3');
ikyy.sendMessage(from, botmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`bewan`)){
const bot2mp3 = fs.readFileSync('./assets/bot.mp3');
ikyy.sendMessage(from, bot2mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`BY ONE`)){
const bot2mp3 = fs.readFileSync('./assets/bot.mp3');
ikyy.sendMessage(from, bot2mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`Assalamualaikum`)) {
                  reply(`walaikum salam Kak😁`)
                 }
if (budy.includes(`assalamualaikum`)) {
                  reply(`walaikum salam Kak😁`)
                 }
if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama Kak😁`)
                 }

if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama Kak😁`)
                 }

if (budy.includes(`SAD`)){
const sadmp3 = fs.readFileSync('./assets/sad.mp3');
ikyy.sendMessage(from, sadmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`Sad`)){
const sadmp3 = fs.readFileSync('./assets/sad.mp3');
ikyy.sendMessage(from, sadmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`sad`)){
const sadmp3 = fs.readFileSync('./assets/sad.mp3');
ikyy.sendMessage(from, sadmp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`Fisik`)){
const sound3mp3 = fs.readFileSync('./assets/sound3.mp3');
ikyy.sendMessage(from, sound3mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`Fsik`)){
const sound3mp3 = fs.readFileSync('./assets/sound3.mp3');
ikyy.sendMessage(from, sound3mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes(`fisik`)){
const sound3mp3 = fs.readFileSync('./assets/sound3.mp3');
ikyy.sendMessage(from, sound3mp3, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
}

if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   ikyy.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		ikyy.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  ikyy.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
ikyy.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
ikyy.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
ikyy.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
ikyy.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 ikyy.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}

	
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



