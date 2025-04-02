// ══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   DRK MD 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：1.0.1                                                      //


//   $$$$$$$\  $$$$$$$\  $$\   $$\       $$\      $$\ $$$$$$$\  
//   $$  __$$\ $$  __$$\ $$ | $$  |      $$$\    $$$ |$$  __$$\ 
//   $$ |  $$ |$$ |  $$ |$$ |$$  /       $$$$\  $$$$ |$$ |  $$ |
//   $$ |  $$ |$$$$$$$  |$$$$$  /$$$$$$\ $$\$$\$$ $$ |$$ |  $$ |
//   $$ |  $$ |$$  __$$< $$  $$< \______|$$ \$$$  $$ |$$ |  $$ |
//   $$ |  $$ |$$ |  $$ |$$ |\$$\        $$ |\$  /$$ |$$ |  $$ |
//   $$$$$$$  |$$ |  $$ |$$ | \$$\       $$ | \_/ $$ |$$$$$$$  |
//   \_______/ \__|  \__|\__|  \__|      \__|     \__|\_______/ 


// ══════════════════════════════════════════════════════════════════════════════════════════════════════//
// *
//  * @project_name : © DRK MD 💚
//  * @version      : 1.0.1
//  * @author       : ARSIYAN
//  * @license      : MIT
//  * @description  : © DRK-MD A Multi-functional WhatsApp bot created by Janith Rashmika.
// *
// *
// Base by Arsiyan
// GitHub: @Arsiyan4400C
// WhatsApp: +94771464482
//   * Created By GitHub: @Arsiyan4400C
//   * Credit To DRK_ARSIYAN
//   * © 2025 © DRK MD V1💚
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Add your session id here",
PORT: process.env.PORT || "8000"
};
