'use strict';

var _gdsStack = require('gds-stack');

var _fluidChains = require('fluid-chains');

//import { SchoolResource } from './boundary/';

var PORT = process.env.PORT || 5000;
var DB = process.env.DB || 'cataloguing-module-db';
var DB_HOST = process.env.DB_HOST || 'localhost';
var DB_PORT = process.env.DB_PORT || 27017;
var DB_USER = process.env.DB_USER;
var DB_PASSWORD = process.env.DB_PASSWORD;

(0, _fluidChains.ExecuteChain)([_gdsStack.LoggerChains.LOGGER_CONFIG, _gdsStack.DatabaseChains.MONGO_CONFIG, _gdsStack.DatabaseChains.MONGO_CONNECT, _gdsStack.ServerChains.GDS_SERVER_CONFIG, _gdsStack.ServerChains.GDS_SERVER_HTTP_LISTENER], {
    mongo_databaseName: DB,
    mongo_host: DB_HOST,
    mongo_port: DB_PORT,
    mongo_user: DB_USER,
    mongo_password: DB_PASSWORD,
    mongo_retry: 5,
    logger_name: 'Cataloguing',
    logger_filePath: 'catalog-module.log',
    server_port: PORT
}, function (result) {
    if (!result.$err) {
        (0, _gdsStack.Logger)('Cataloguing').info('Server is connected in port ' + PORT);
        _gdsStack.ExpressApp.get('/api', function (req, res) {
            res.status(200).send('SUCCESS!!!');
        });
    }
});