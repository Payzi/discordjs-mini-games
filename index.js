'use strict';
module.exports = (client, msg, game) =>{
const Discord = require('discord.js');
//А что ты тут делаешь? Этот модуль в открытом доступе... https://www.npmjs.com/package/discord-mini-games
if(game == 'snake'){
const Snake = require('./src/snake.js');
const snake = new Snake(client);
snake.start(msg);
}else{
    throw new Error(`Данная игра не найдена!\nДоступные игры: snake`);
};
};