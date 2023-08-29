//
// This file is part of the RBLTracker Node Wrapper package.
//
// (c) Mike Pultz <mike@mikepultz.com>
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

'use strict';

var request = require('request');
var promise = require('./Promise');
var Client = require('./Client');

//
// global settings
//
var defaults = {

    api_url: 'https://api.rbltracker.com/3.0/',
    api_format: 'json'
};

//
// the main client
//
Client = function(_account_sid, _api_token, _options)
{
    if ( (!_account_sid) || (!_api_token) )
    {
        throw 'invalid API account SID or auth token provided.';
    }

    //
    // set up the local object
    //
    this.optionss       = _options;
    this.api_url        = defaults.api_url;
    this.api_format     = defaults.api_format;
    this.account_sid    = _account_sid;
    this.api_token      = _api_token;

    //
    // the resources
    //
    this.acls                = require('./API/ACLs')(this);
    this.listings            = require('./API/Listings')(this);
    this.host                = require('./API/Host')(this);
    this.hosts               = require('./API/Hosts')(this);
    this.contact             = require('./API/Contact')(this);
    this.contacts            = require('./API/Contacts')(this);
    this.contact_group       = require('./API/Contact_Groups')(this);
    this.contact_groups      = require('./API/Contact_Groups')(this);
    this.rbl                 = require('./API/RBL')(this);
    this.rbls                = require('./API/RBLs')(this);
    this.rbl_profile         = require('./API/RBL_Profile')(this);
    this.rbl_profiles        = require('./API/RBL_Profiles')(this);
    this.monitoring_profile  = require('./API/Monitoring_Profile.js')(this);
    this.monitoring_profiles = require('./API/Monitoring_Profiles.js')(this);
    this.check               = require('./API/Check')(this);
};

Client.prototype.request = function(_options, _callback)
{
    //
    // build the URI based on the request URL
    //
    _options.uri = this.api_url + _options.uri + "." + this.api_format;

    //
    // response data is always JSON
    //
    _options.json = true;

    //
    // build the auth headers
    //
    var auth = "Basic " + new Buffer(this.account_sid + ":" + this.api_token).toString("base64");
    _options.headers = {

        "Authorization": auth
    };

    //
    // always use strict SSL
    //
    _options.strictSSL = true;

    //
    // used gzip
    //
    _options.gzip = true;

    //
    // make the request and handle the call-back
    //
    return new promise(function(_resolve, _reject)
    {
        request(_options, function(_err, _res, _body)
        {
            if (_err)
            {
                _reject(_err);

            } else if (_body.status_code != 200)
            {
                _reject(_body.status_message);

            } else
            {
                _resolve(_body);
            }
        });

    }).run_callback(_callback);
};
Client.prototype.get = function(_options, _callback)
{
    _options.method = 'GET';
    return this.request(_options).run_callback(_callback);
};
Client.prototype.post = function(_options, _callback)
{
    _options.method = 'POST';
    return this.request(_options).run_callback(_callback);
};

module.exports = Client;
