//
// This file is part of the RBLTracker Node Wrapper package.
//
// (c) Mike Pultz <mike@mikepultz.com>
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

'use strict';

module.exports = function(_client)
{
    const api = 'check';

    var object = {

        start: function(_options, _callback)
        {
            var options = {
                uri: api + '/start/',
                form: _options
            };

            return _client.post(options).run_callback(_callback);
        },
        status: function(_id, _options, _callback)
        {
            var options = {
                uri: api + '/status/' + _id,
                qs: _options
            };

            return _client.get(options).run_callback(_callback);
        }
    };

    return object;
};
