import { DatabaseChains, ExpressApp, Logger, LoggerChains, ServerChains } from 'gds-stack';

import { ExecuteChain } from 'fluid-chains';
//import { SchoolResource } from './boundary/';

const PORT = process.env.PORT || 5000;
const DB = process.env.DB || 'cataloguing-module-db';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

ExecuteChain([
    LoggerChains.LOGGER_CONFIG,
    DatabaseChains.MONGO_CONFIG,
    DatabaseChains.MONGO_CONNECT,
    ServerChains.GDS_SERVER_CONFIG,
    ServerChains.GDS_SERVER_HTTP_LISTENER], {
        mongo_databaseName: DB,
        mongo_host: DB_HOST,
        mongo_port: DB_PORT,
        mongo_user: DB_USER,
        mongo_password: DB_PASSWORD,
        mongo_retry: 5,
        logger_name: 'Cataloguing',
        logger_filePath: 'catalog-module.log',
        server_port: PORT
    }, (result) => {
        if (!result.$err) {
            Logger('Cataloguing').info(`Server is connected in port ${PORT}`);
            ExpressApp.get('/api', (req, res) => {
                res.status(200).send('SUCCESS!!!');
            });
        }
    });




