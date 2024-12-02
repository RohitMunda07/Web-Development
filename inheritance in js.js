class student{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends student{
    constructor(username, email, password){
        // super keyword takes the parameter to it parent class by adding 'this' by default
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(course){
        this.course = course
        console.log(`New course ${this.course} was added by ${this.username}`);
    }
}

// creating object of teacher
const teacher1 = new teacher('Anup', 'anup@gamil.com', 'anup123')
const teacher2 = new teacher('Nidhi', 'nidhi@gamil.com', 'nidhi456')

// creating object of students
const student1 = new student('Aryan')
const student2 = new student('Rohit')

// calling object of techers
teacher1.addCourse('Maths')
teacher2.addCourse('English')

// calling object of students
student1.logMe()
student2.logMe()

// checking instanceof
console.log(student1 instanceof student);
console.log(teacher1 instanceof student);
console.log(teacher1 === student1);

