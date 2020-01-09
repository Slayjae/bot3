console.log("lol");
const path = require('path');
var envFileLineError


const envFile = '../bot3.env'; /*EDIT TOKEN LOCATION BEFORE THIS COMMENT. CHANGE const envFile = '../bot3.env'; TO const envFile = 'RELATIVE_FILE_PATH';*/ var stack = new Error().stack
require('dotenv').config({ path: path.resolve(__dirname,envFile) });
const TOKEN = process.env.TOKEN
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Didn\'t crash instantly');
});
try{client.login(oops)}catch(err){
console.error("TOKEN was incorrect/missing. By default it is currently in "+ path.resolve(__dirname,envFile) + ". This may be modified by changing \'envFile\' on line "+ stack.split(path.resolve(__dirname,'./index.js'))[1].split(":")[1]);
}
