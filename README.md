<a href="https://rbltracker.com" target="_blank">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://portal.rbltracker.com/assets/3.14/images/rbltracker_logo_dark.svg" width="400">      
        <img src="https://portal.rbltracker.com/assets/3.14/images/rbltracker_logo_light.svg" width="400">                                                                                 
    </picture>
</a>

[Sign up][rbltracker sign up] for a RBLTracker account and visit our [developer site][rbltracker dev site] for even more details.

# Node.js Client Library

The official Node.js binding for your RBLTracker service.

## Prerequisites

Before using this library, you must have:

* A RBLTracker Account, [sign up for a new account][rbltracker sign up] or [login to RBLTracker](https://portal.rbltracker.com/login/)
* a valid RBLTracker account SID and auth token, available from the [RBLTracker Portal](https://portal.rbltracker.com/login/)

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

Full API documentation is available from the [RBLTracker developer site.][rbltracker dev site]

## Release History

### v1.1.0
* updated to the use the new API endpoint URL
* added support for Monitoring Profiles, moving away from RBL Profiles 
* added support for the ACLs endpoint to pull the list of DNS servers used for checks 

### v1.0.1
* updated to support the RBLTracker API v3.6
* added manual RBL check support

### v1.0.0
* initial release

[rbltracker sign up]:   https://portal.rbltracker.com/signup/
[rbltracker dev site]:  https://rbltracker.com/docs/api/
