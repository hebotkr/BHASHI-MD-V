const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "Q0IQ2Z7S#T7hi_MrPRnTbSftp1vqblPVTER9mCrN-if5HY751Qew",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb://mongo:EPFIYNcKWdSVoMSaZGhcnFNoKnTryKFY@junction.proxy.rlwy.net:34409",

    
 
};
