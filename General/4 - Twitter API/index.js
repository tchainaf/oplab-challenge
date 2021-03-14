require('dotenv').config();
var request = require('request');
var prompt = require('prompt-sync')({sigint: true});

function getTweets(searchedWord) {
    var url = 'https://api.twitter.com/2/tweets/search/recent?query=' + searchedWord + '&user.fields=username&tweet.fields=created_at,lang&max_results=10&expansions=author_id';

    var options = {
        'method': 'GET',
        'url': url,
        'headers': {
            'authorization': 'Bearer ' + process.env.TWITTER_BEARER_TOKEN
        }
    };

    request(options, function (error, resp) {
        if (error) throw new Error(error);
        var resp = JSON.parse(resp.body);
        if(resp.data == null) {
            console.log(resp);
            return;
        }

        //Include user data in the tweet data
        resp.data.forEach((item, index) => {
            let user = resp.includes.users[index];
            item.author_name = user.name;
            item.author_username = user.username;
        });

        console.log('These are the last '+ resp.meta.result_count + ' tweets containing the word "' + searchedWord + '":')
        console.log(resp.data);
        console.log('If you want to search another word, run the command "npm start" again.')
    });
}

let searchedWord = prompt('What word do you want to search for? ');
getTweets(searchedWord);