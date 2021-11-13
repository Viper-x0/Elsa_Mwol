let handler = async m => m.reply(`
╭─「 ᴅᴏɴᴀᴛᴇ • ʀᴇᴀᴄʜᴀʀɢᴇ 」
│ • ᴀɪʀᴛᴇʟ [7736703116]
│ • ɪᴅᴇᴀ [ᴠᴇʀᴇ sɪᴍ ᴇʟʟᴀ]
╰────

╭─「 ᴅᴏɴᴀᴛᴇ • ᴀᴄᴄᴏᴜɴᴅ 」
│ • ᴘᴀʏᴛᴍ [7356706681]
│ • ɢᴘᴀʏ [ɴᴏᴛ ᴀᴠɪʟᴀʙʟᴇ]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
