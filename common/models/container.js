'use strict';

module.exports = function(Container) {

	Container.test = function() {
        }
    
    Container.remoteMethod('test', { 

        http: {
            path: '/catchFile',
            verb: 'post'
        },
        accepts: [{
            arg: 'csvFile',
            type: 'string',
            required: true
        }, {
            arg: 'nomCabinet',
            type: 'string',
            required: false
        }],
        returns: {
            arg: 'response',
            type: 'string'
        },
        description: "Méthode test"       
    });

};
