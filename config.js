const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "yyh2CBxT#yPJ2b2m_JJ8RoBX3ZenpsHosoFVLZ_Y5x1FWzW_n5gw",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb://mongo:EPFIYNcKWdSVoMSaZGhcnFNoKnTryKFY@junction.proxy.rlwy.net:34409",

    
 
};
