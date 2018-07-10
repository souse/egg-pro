'use strict';

const Service = require('egg').Service;

/**
 * 用户相关操作
 * 注册，登陆，修改密码
 * ### 并没有做错误处理 ###
 */
class UserService extends Service {
	/**
	 * 注册
	 * @param  {Object} user [description]
	 * @return {Object}      [description]
	 */
	async create(obj) {
		const user = this.ctx.model.User(obj);

		await user.save(); // 这里存储

		return user;
	}

	/**
	 * 登陆
	 * @param  {Object} obj [description]
	 * @return {Object}     [description]
	 */
	async login(obj) {
		const user = await this.query(obj);

		return user;
	}

	async update(obj) {
		const user = await this.query(obj);

		console.log(user);
	}

	/** 公用查询方法 **/
	async query(obj) {
		return await this.ctx.model.User.find({
			$and: [
				{
					name: obj.name
				},
				{
					password: obj.password
				}
			]
		});
	}
}

module.exports = UserService;
