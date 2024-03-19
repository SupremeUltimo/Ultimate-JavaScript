// const tinderUser = new Object();

const tinderUser = {}
tinderUser.id = "123ddcc"
tinderUser.name = "salman"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log("---------------------------------------------");

const course = {
    CourseName : "JavaScript",
    price:"999",
    CourseInstructor: "Ultimo",
} 

// console.log(course.CourseInstructor);

// Object desturcturing 
const {CourseInstructor: Instructor} = course

console.log(Instructor);
 