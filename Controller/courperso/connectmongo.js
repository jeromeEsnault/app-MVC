/*
 *  dependance
 ***************************/
/*
 *
 *  connect mongo
 ***************************/
// travail avec le systeme de session ...

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'foo',
    store: new MongoStore(options)
}));

/**********************************
 * const mongoose = require('mongoose');
 * 
 * Basic usage
 * mongoose.connect(variable chemin de connection);
 *
 * app.use(session({
 *    store: new MongoStore({ mongooseConnection: mongoose.connection })
 * }));
 * 
 * Advanced usage
 * const connection = mongoose.createConnection(variable chemin de connection);
 * 
 * app.use(session({
 *    store: new MongoStore({ mongooseConnection: connection })
 * }));
 *
 *******************************************************************/

/*
 * app.use(session({
 *    store: new MongoStore({
 *        url: 'mongodb://localhost/test-app',
 *        ttl: 14 * 24 * 60 * 60 // = 14 days. Default
 *    })
 *}));
 *
 *************************************************************/