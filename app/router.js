'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;

	router.get('/', controller.user.index);
	router.post('/create', controller.user.create);
	router.get('/login', controller.user.login);
};
