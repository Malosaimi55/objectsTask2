function getCourses(student)
// {
//     let unique = [];

//     student.forEach((student) => {
//         student.courses.forEach((course) =>{
//             if(unique.includes(course)){

//             }else{
//                 unique.push(course)
//             }
//         })
//     }
//     )

//     return unique;
// }

// function listAllCourses(students) {
  
//     let newArray = [];
//     let subject = students[0].courses[0];


//     for(i = 0; i < students.length; i++)
//     {
//         if(students[i].courses != subject)
//         {
//             newArray.push(students[i].courses);
//         }
//     }
//     return newArray;
// }

// function filterRepeatedSubjects(students)
// {
//     let newArray = listAllCourses(students);
//     let subject = newArray[0].courses[0];
//     for(i = 0; i < students.length; i++)
//     {
//         if(newArray[i].courses[i] === subject)
//         {
//             newArray[i].courses[i].pop();
//             subject = newArray[i].courses[i];
//         }
//     }
//     return newArray;
// }

// console.log(filterRepeatedSubjects(students));