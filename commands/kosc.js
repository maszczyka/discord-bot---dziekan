module.exports = {
    name: 'kosc',
    description: 'koteczki',
    execute(message, args) {
        var i = 0;
        var rzuty = 'Wyniki:';

            if (Math.abs(args[0]) > 200) {
                message.channel.send("Weź nie znęcaj się nad botem :("); 
                return;
            }

            if (Math.abs(args[1]) > 200) {
                message.channel.send("Weź nie znęcaj się nad botem :("); 
                return;
            }

            if(isNaN(args[0]) || isNaN(args[1])) {  //Co się dzieje jak użyszkodnik da tekst zamiast numerka 
                message.channel.send("Weź nie znęcaj się nad botem :("); 
                return;
            }

            while (Math.abs(args[0]) > i) {
                let rzut = Math.floor((Math.random() * Math.abs(args[1])) + 1);
                i++;
                if (Math.abs(args[0]) == i) {rzuty += ` ${rzut}`;}          
                else {rzuty += ` ${rzut},`;}
            }

            message.channel.send(rzuty);
    }
}

