const db = require('..util/database');

module.exports = class user {
    constructor(name, email, password) {

    this.name = name;
    this.email = email;
    this.password = password
}

    static find(name) {
        return db.execute('SELECT * FROM db_custlogin WHERE cl_username = ?', [name]);
        
    }
    static save(user) {
        return db.execute(
            'INSERT INTO users (name, email, password) VALUES(?, ?, ?)', 
            [user.name, user.email, user.password]

        )
    }
};

