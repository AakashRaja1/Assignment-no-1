function GradesCalculator(){
  var prompt=require('prompt-sync')();
  var totalMarks=parseInt(prompt("Enter your total Marks"))
  var mathMarks=parseInt(prompt("Enter your Maths Marks"))
  var chemMarks=parseInt(prompt("Enter your chemistry Marks"))
  var phyMarks=parseInt(prompt("Enter your physics Marks"))
  var compMarks=parseInt(prompt("Enter your computer Marks"))
  var engMarks=parseInt(prompt("Enter your EnglishMarks"))
   var obtainMarks=mathMarks+chemMarks+phyMarks+compMarks+engMarks;

   var percentage=((obtainMarks/totalMarks)*100)

   if(percentage>90){
    console.log("A+")
   }
   else if(percentage>80){
    console.log("A")
   }
   else if(percentage>75){
    console.log("B+")
   }
   else if(percentage>70){
    console.log("B")
   }
   else if(percentage>65){
    console.log("C+")
   }
   else if(percentage>60){
    console.log("C")
   }
   else if(percentage>55){
    console.log("D+")
   }
   else if(percentage>50){
    console.log("D")
   }
   else{
    console.log("F")
   }

  
}
GradesCalculator();