## Installation

    npm install rbltracker

## Quickstart

### Get a list of hosts on your account

    var client = require('rbltracker')('Your Account SID', 'Your Auth Token');

    client.hosts.get({ page_size: 10 }).then(data => {

        data.data.forEach(function(host)
        {
            console.log("Host: " + host.host + ", Name: " + host.name);
        });

    }).catch(err => {

        console.log(err);
    });

## Documentation

Full API documentation is available here:

    https://rbltracker.com/docs/api/

## Release History

* 1.0.0 Initial release
