// part1

const scores = [5,3,35,25,9];
const [firstScore,secondScore] = scores;

console.log(firstScore, secondScore);

const student = {
    name: "Aypara",
    age: 19,
    isEnrolled: true
}

const {name,age} = student;
console.log(name,age)

//part2

console.log(typeof scores, typeof student)
console.log(scores.length)

//part3

console.log(firstScore+secondScore)
console.log(firstScore-secondScore)
console.log(firstScore>secondScore)
console.log(firstScore<secondScore)
console.log(firstScore>secondScore && student.age==secondScore)
console.log(firstScore>secondScore || student.age==secondScore)
console.log(!student.isEnrolled)


























