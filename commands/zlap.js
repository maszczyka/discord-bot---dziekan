const fetch = require('node-fetch');
var parser = require('fast-xml-parser');

module.exports = {
    name: 'zlap',
    description: 'wyciąga z forum rzeczy',
    async execute(message, args) {
        message.channel.send("brawo");

        let data;

        promise = await fetch('https://nantescase.forumpolish.com/rss');
        data = await promise.text();
        console.log(data);
        var jsonObj = parser.parse(data);

        console.log(JSON.stringify(data));

        try {
            var jsonObj = parser.parse(data);
            console.log(jsonObj);

          } catch(error){
            console.log(error.message)
          }
    }
}
