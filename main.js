nameofstudent = [];
function submit()
{
    var number_1 = document.getElementById("student1").Value;
    var number_2 = document.getElementById("student2").Value;
    var number_3 = document.getElementById("student3").Value;
    var number_4 = document.getElementById("student4").Value;
    console.log(number_1);
    console.log(number_2);
    console.log(number_3);
    console.log(number_4);
    nameofstudent.push(number_1);
    nameofstudent.push(number_2);
    nameofstudent.push(number_3);
    nameofstudent.push(number_4);
    document.getElementById("names").innerHTML = nameofstudent;
    console.log(nameofstudent);
}