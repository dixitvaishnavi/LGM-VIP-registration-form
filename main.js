var row = 1;
function displayDetails() {
  var Firstname = document.getElementById("firstname").value;
  var Lastname = document.getElementById("lastname").value;
  var Email = document.getElementById("email").value;
  var Course = document.getElementById("Course").value;
  if(!Firstname || !Lastname || !Email || !Course)
  {
      alert("Please fill all the entries");
      return;
  }
  var display = document.getElementById("display");
  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  cell1.innerHTML = Firstname;
  cell2.innerHTML = Lastname;
  cell3.innerHTML = Email;
  cell4.innerHTML = Course;
  Firstname.innerHTML = "";
  Lastname.innerHTML = "";
  Email.innerHTML = "";
  Course.innerHTML = "";
  row++;
}
