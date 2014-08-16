var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    uuid = require('node-uuid');

var UserSchema = new Schema({
    _id: { type: String, index: true, default: uuid.v4() },
    login: { type: String, index: true },
    hash: String,
    salt: String,
    session: { type: String, index: true, default: uuid.v4() }
});

mongoose.model('users', UserSchema);
