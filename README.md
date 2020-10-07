# discordjs-mini-games

[![](https://nodei.co/npm/discordjs-mini-games.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/discordjs-mini-games/)

> Пакет для мини-игр прямо в дискорде!


# Установка

```
$ npm install discordjs-mini-games
```


# Использование (Node.js)

```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", async (message) => {
    if(message.content === 'p.game'){

       require('discordjs-mini-games')(client, message, 'название игры') //Заместо "название-игры" надо указать любую игру на выбор | Доступные игры: snake

    }
})

client.login('токен-вашего-дискорд-бота');
```

# Проекты

- [PayziBot](https://discord.com/api/oauth2/authorize?client_id=576442351426207744&permissions=8&scope=bot)
- [GitHub discordjs-mini-games](https://github.com/Payzi/discordjs-mini-games/)
