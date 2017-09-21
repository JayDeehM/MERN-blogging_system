const config = {
  mongoURL: process.env.MONGO_URL || 'mongo "mongodb://mern-shard-00-00-drrlv.mongodb.net:27017,mern-shard-00-01-drrlv.mongodb.net:27017,mern-shard-00-02-drrlv.mongodb.net:27017/test?replicaSet=MERN-shard-0" --authenticationDatabase admin --ssl --username jaydeeh --password <tukmul>',
  port: process.env.PORT || 8000,
};

export default config;
