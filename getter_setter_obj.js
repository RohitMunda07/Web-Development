// get and set is used to overwrite the the data of memory
const user = {
    _email: 'h@itesh.com',
    _password: 'abc',

    get email(){
        // in memory it is present in _email form
        // this will get overwrite to email
        // now it is accessible with new name 
        return this._email
    },
    set email(value){
        // value automatically taken form the argument which we are passing
        this._email = value
    }
}

// new constructor function
// creating Object using factory function
const object1 = Object.create(user)

// it is matching from get email
console.log(object1.email); 
