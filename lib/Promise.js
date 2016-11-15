//
// This file is part of the RBLTracker Node Wrapper package.
//
// (c) Mike Pultz <mike@mikepultz.com>
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

'use strict';

Promise.prototype.run_callback = function(_callback)
{
    if (typeof _callback !== 'function')
    {
        _callback = noop;
    }

    return this.then((result) => {
    
        _callback(null, result);
        return this;
    }).catch((err) => {
    
        _callback(err);
    
        return this;
    });
};

function noop() {}

module.exports = Promise;
