const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./iky.js')
nocache('../iky.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))

const starts = async (nino = new WAConnection()) => {
	nino.logger.level = 'warn'
        nino.version = [2, 2143, 3]
	console.log(color(figlet.textSync('Akira', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[KirBotz]', 'cyan'), color('Mastah Akira PokokNya', 'green'))
	console.log(color('[KirBitz]', 'cyan'), color('Nih Dah Work Jangan Lupa Subrek : KirBotz', 'green'))
	nino.browserDescription = ["Akira", "Firefox", "3.0.0"];

	// Menunggu QR
	nino.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && nino.loadAuthInfo(`./${setting.sessionName}.json`)
	nino.on('connecting', () => {
		console.log(color('[ SYSTEM ]', 'yellow'), color(' ⏳ Connecting...'));
	})

	//connect
	nino.on('open', () => {
		console.log(color('[ SYSTEM ]', 'yellow'), color('Bot is now online!'));
	})

	// session
	await nino.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(nino.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	nino.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	nino.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	nino.on('group-participants-update', async (anu) => {
		await welcome(nino, anu)
	})

	nino.on('chat-update', async (message) => {
		require('./iky.js')(nino, message)
	})
}

starts()
