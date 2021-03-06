module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('avempace');
var req = require('request-promise')




app.launch(function(request, response) {

    response.say('Welcome to avempace. With this skill ,you can listen to any radio station you want. try to say alexa ask avempace for help to get all skill features')
});


app.error = function(exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};




app.intent('play', {
        "slots": {
            "name": "AMAZON.LITERAL",

        },
        "utterances": [
            "play radio station {name}",
            "play {name} radio station ",
        ]

    },

    function(request, response) {
        var stationName = request.slot('name')
        console.log('station name', stationName)
        stream = {
            "url": "https://nfw.ria.ru/flv/audio.aspx?ID=6854085&amp;type=mp3",
            "token": "zef564ezf",
            "offsetInMilliseconds": 0

        }

        response.audioPlayerPlayStream("REPLACE_ALL", stream);
        response.send()


    }
);



app.intent('stop', {

        "utterances": [
            "stop "
        ]

    },

    function(request, response) {

        console.log('stop called')


        response.audioPlayerStop()
        response.send()


    }
);



module.exports = app;