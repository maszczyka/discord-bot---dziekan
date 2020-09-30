module.exports = {
    name: 'link',
    description: 'wysyła link do forum',
    execute(message, args){
        message.channel.send('https://story-of-magic.forumpolish.com');
    }
}