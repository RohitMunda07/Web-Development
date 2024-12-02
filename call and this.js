// as soon as function finished it only affect its onw username inside the function but when we give our context the changes may remain permanetaly

function setUsername(username){
    // complex DB Calls
    this.username = username
    console.log('called');
    
}

function createUser(username, email, pass){
    // setUsername(username) // this function is called but can't change the username
    setUsername.call(this,username) // explicit call
    this.Email = email
    this.Password = pass
}

const gamer = new createUser("gamer", "gmail.com", "123")
console.log(gamer);
