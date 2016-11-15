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
    const api = 'hosts';

    var object = {

        get: function(_options, _callback)
        {
            var options = {
                uri: api,
                qs: _options
            };

            return _client.get(options).run_callback(_callback);
        }
    };

    return object;
};
