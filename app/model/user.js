/**
 * User Model
 * @param  {[type]} app [description]
 * @return {[type]}     [description]
 */
module.exports = app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;
	const conn = app.mongooseDB.get('db'); 

	const UserSchema = new Schema({
	    name: { type: String  },
	    password: { type: String },
	    mobile: { type: String  },
	    sex: { type: Number },
	    birthday: { type: String }
	});

	return conn.model('User', UserSchema);
}
