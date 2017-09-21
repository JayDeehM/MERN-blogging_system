const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://jaydeeh:tukmul@mern-shard-00-00-drrlv.mongodb.net:27017,mern-shard-00-01-drrlv.mongodb.net:27017,mern-shard-00-02-drrlv.mongodb.net:27017/test?ssl=true&replicaSet=MERN-shard-0&authSource=admin',
  port: process.env.PORT || 8000,
};

export default config;
