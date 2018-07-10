'use strict';

// had enabled by egg
// exports.static = true;

exports.session = true;

exports.mongoose = {
	enable: true,
	package: 'egg-mongoose'
}

exports.cors = {
	enable: true,
  	package: 'egg-cors'
}

exports.redis = {
	enable: true,
	package: 'egg-redis'
}