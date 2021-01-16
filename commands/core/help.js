module.exports = {
    help: {
        command: "help",
        name: "help",
        description: "Commands list"
    },
    conf: {
        aliases: []
    },
    run: async (bot, message, args) => {
        bot.sendMessage(message.chat.id, `JadiShort -- Commands -- List\n\n/ping\n/short <long url> [path]\n-- Example -> /short https://google.com or /short google.com google`);
    }
}