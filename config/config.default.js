'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528252989029_911';

  // add your config here
  config.middleware = [];

  // 安全
  config.security = {
    // csrf: {
    //   // ignoreJSON: true
    // },
    csrf: false,
    domainWhiteList: []
  };

  // 跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONs',
    credentials: true
  };

  // add mongo
  config.mongoose = {
  	clients: {
  	  	db: {
  	  		url: 'mongodb://127.0.0.1:27017/eggpro',
          // url: 'mongodb://souse:1qaz@111.231.89.136:27017/eggpro', 
  	    	options: {},
  	  	}	
  	}
  }

  // redis 基础配置
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'souse',
      db: 0
    }
  }

  return config;
};
