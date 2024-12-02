// get and set is used to overwrite the the data of memory

// value automatically taken form the argument which we are passing
class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // used to access form outside the class
    // name will same as it is
    // prevent value form direct accessing
    get email(){
        return this._email.toUpperCase()
    }

    // used to overwrite the value inside the class
    set email(value){
        this._email = value
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const harry = new user("harry@gmail.com", 'abc123')
console.log(harry.email);
console.log(harry.password)

// Interfacing with APIs real-life use case  
class UserProfile {
    constructor(data) {
        this._data = data; // Raw API data
    }

    get name() {
        return `${this._data.firstName} ${this._data.lastName}`; // Format full name
    }

    set email(newEmail) {
        if (/\S+@\S+\.\S+/.test(newEmail)) {
            this._data.email = newEmail;
        } else {
            console.log("Invalid email address!");
        }
    }
}

const profile = new UserProfile({ firstName: "John", lastName: "Doe", email: "john@example.com" });
console.log(profile.name); // Output: John Doe

profile.email = "invalid-email"; // Invalid email address!
profile.email = "john.doe@example.com"; // Valid
