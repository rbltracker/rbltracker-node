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
    const api = 'host';

    var object = {

        get: function(_id, _callback)
        {
            var options = {
                uri: api + '/' + _id
            };

            return _client.get(options).run_callback(_callback);
        },
        add: function(_options, _callback)
        {
            var options = {
                uri: api + '/add/',
                form: _options
            };

            return _client.post(options).run_callback(_callback);
        },
        update: function(_id, _options, _callback)
        {
            var options = {
                uri: api + '/update/' + _id,
                form: _options
            };

            return _client.post(options).run_callback(_callback);
        },
        pause: function(_id, _callback)
        {
            var options = {
                uri: api + '/pause/' + _id
            };

            return _client.post(options).run_callback(_callback);
        },
        resume: function(_id, _callback)
        {
            var options = {
                uri: api + '/resume/' + _id
            };

            return _client.post(options).run_callback(_callback);
        },
        delete: function(_id, _callback)
        {
            var options = {
                uri: api + '/delete/' + _id
            };

            return _client.post(options).run_callback(_callback);
        }
    };

    return object;
};
