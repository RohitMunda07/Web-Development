// static property is like a privet member of c++ 
// it does not allow the property of inheritace and direct access

class user {
    constructor(username) {
        this.username = username
        console.log(`username is ${this.username}`);
    }

    static idSet() {
        return `123`
    }
}

class employe extends user {
    constructor(username, pass) {
        super(username)
        //    only the parent can have acess to idSet()
        console.log(`id is ${user.idSet()}`);
    }
}

const e1 = new employe('harry', 'pqr')

