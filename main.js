nameofstudent = [];
function submit()
{
    var number_1 = document.getElementById("student1").value;
    var number_2 = document.getElementById("student2").value;
    var number_3 = document.getElementById("student3").value;
    var number_4 = document.getElementById("student4").value;
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
    document.getElementById("submit_button").style.display = "none";
     document.getElementById("Sort_button").style.display = "inline-block";
}
function sort()
{
    nameofstudent.sort();
     console.log(nameofstudent);
      document.getElementById("names").innerHTML = nameofstudent;
}