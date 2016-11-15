//
// This file is part of the RBLTracker Node Wrapper package.
//
// (c) Mike Pultz <mike@mikepultz.com>
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

'use strict';

var promise = require('./Promise');
var Client = require('./Client');

function initializer(_account_sid, _api_token, _options)
{
    return new Client(_account_sid, _api_token, _options);
}

initializer.Client = Client;

module.exports = initializer;
