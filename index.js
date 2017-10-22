var DiscordStreamer = require("discordstreamer");
var stream = new DiscordStreamer("MzcwMjAyNTM0NzU0NjQ4MDY0.DM4RPQ.5f-VC_t3bTHUBnZA8k5J8dEFojc", __dirname, {"vc": "369859313314824203", "feed": "369899380536246272", "djs": ["Someone's Discord user ID"], "masterUsers": ["258320080180477953"]});
stream.init();
module.exports = require('./lib/Worker.js');
