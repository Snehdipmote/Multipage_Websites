// 4} Highest Marks
// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks
// program for Highest Marks
let Marks=[9,40,1500,10,888];
var highest=Marks[0];
for (i=0;i<4;i++)
{
    highest>Marks[i+1]?highest:highest=Marks[i+1];
}
console.log(highest);
