var env = process.env.NODE_ENV || 'development';

exports.database = env === 'development' ? 'mongodb://rhianon:rhianon@paulo.mongohq.com:10087/buh-db' : process.env.MONGODB;
