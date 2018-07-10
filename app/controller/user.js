'use strict';

const Controller = require('egg').Controller;
let i = 0;

class UserController extends Controller {
    async index() {
        const users = await this.ctx.model.User.find({});

        this.ctx.body = users;
    }

    /**
     * 新建用户
     * @return {[type]} [description]
     */
    async create() {
        // 先校验然后创建新用户
        const req = this.ctx.request.body;
        const cu = await this.ctx.service.user.query(req);

        try {
            if (cu.length > 0) {
                console.debug(cu);
                this.ctx.body = {
                    code: 1,
                    msg: '该用户名已经被注册过！'
                };
            } else {
                const res = await this.ctx.service.user.create(req);

                this.ctx.body = {
                    code: 0,
                    msg: '',
                    user: res
                };
            }
        } catch (err) {
            console.debug('register error: ', err);
        }
    }

    async login() {
        let cu;
        const req = this.ctx.query;

        cu = await this.ctx.service.user.query(req);

        console.debug(cu);
        if (cu.length > 0) {
            this.ctx.body = {
                code: 0,
                msg: '',
                user: cu
            };
        } else {
            this.ctx.body = {
                code: 1,
                msg: '用户名或密码不正确！'
            };
        }
    }

    async checkLogin() {
        const scu = await this.app.redis.get('user');
    }
}

module.exports = UserController;
