let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • support 〕
├ cukup gunakan saia dengan 
├ bijak 😀
├
├ No : 081808882889
├
├ saya harap kamu menyukai bot 
├ saya dan jangan lupa untuk 
├ mensupport saya karena saya 
├ sangat menyukai Kiko :D
└────
`.trim(), '© HaruBotz', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
