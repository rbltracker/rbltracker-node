<a href="https://rbltracker.com" target="_blank"><img src="https://rbltracker.com/portal/static/3.4/images/rbl_logo_front.png"/></a>

[Sign up][rbltracker sign up] for a RBLTracker account and visit our [Developer Site](https://rbltracker.com/docs/api/) for even more details.

# Node.js Client Library

The official Node.js binding for your RBLTracker service.

## Prerequisites

Before using this library, you must have:

* A RBLTracker Account, [sign up for a new account][rbltracker sign up] or [login to RBLTracker](https://rbltracker.com/portal/login/)
* a valid RBLTracker account SID and auth token, available from the [RBLTracker Portal](https://rbltracker.com/portal/login/)

## Installation

```
npm install rbltracker
```

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

[rbltracker sign up]:   https://rbltracker.com/portal/signup/
