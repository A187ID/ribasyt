exports.donate = (id, RBSBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${RBSBOT}*
╠════════════════════
║├≽️⚜ *OVO*: _0816-4917-5378_
║├≽️⚜ *PULSA*: (http://wa.me/6281649175378)
║├≽️⚜ *GOPAY*: _0816-4917-5378_
╠════════════════════
║  *${RBSBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${RBSBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY RBSBOT*
╚════════════════════`
}

