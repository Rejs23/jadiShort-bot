const shortio = require("short.io");

module.exports = {
    help: {
        command: "short",
        name: "short",
        description: "Short the long url"
    },
    conf: {
        aliases: []
    },
    run: async (bot, message, args) => {
        const short = new shortio(
            bot.config.SHORTIOdomain,
            bot.config.SHORTIOdomainid,
            bot.config.SHORTIOapi
        );

        if (!args[0]) {
            return bot.sendMessage(message.chat.id, `Please provide link`)
        }
        if (!args[1]) {
            short.createLink({
                originalURL: `${args[0]}`
            }).then(link => {
                bot.sendMessage(message.chat.id, `JadiShort -- Shorten\n\n❯ URL : ${args[0]}\n❯ Link ID : ${link.id}\n❯ Shortlink : ${link.shortURL}`);
            })
        } else {
            short
                .createLink({
                    originalURL: `${args[0]}`,
                    path: `${args[1]}`
                })
                .then(link => {
                    bot.sendMessage(message.chat.id, `JadiShort -- Shorten\n\n❯ URL : ${args[0]}\n❯ Link ID : ${link.id}\n❯ Shortlink : ${link.shortURL}`);

                })

        }
    }
}