const TelegramError = require("../handler/TelegramError");

module.exports = async (bot, message) => {
    if (message.from.is_bot) return; // just don't respond bot.
    if (message.chat.type === "group") {
        bot.sendMessage(message.chat.id, "This bot is currently maintenance.");
    } else if (message.chat.type === "private") {
        const msg = message.text.toLowerCase();
        if (msg === "/start") {
            bot.sendMessage(message.chat.id, `Hello, I am ${(await bot.getMe()).username}. My prefix is /, so you can use /help for see the commands list.`);
        }
        if (msg === `@${(await bot.getMe()).first_name.toLowerCase().split(" Bot")[0]}Bot`) {
            return bot.sendMessage(message.chat.id, `Hello, I am ${(await bot.getMe()).username}.Nice to meet you!`);
        }

        if (msg.startsWith(bot.config.prefix)) {
        try {
            require("../handler/CommandHandler")(bot, message);
        } catch (e) {
            throw new TelegramError(e.message);
        }
    }
    } else {
        bot.sendMessage("Maintenance.");
    }
}
