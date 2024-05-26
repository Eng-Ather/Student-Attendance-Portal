
var studentData = [ {
    name: 'John Doe',
    fatherName: 'Richard Doe',
    age: 16,
    rollNo: '101',
    class: '10th Grade',
  },
  {
    name: 'Jane Smith',
    fatherName: 'Robert Smith',
    age: 15,
    rollNo: '102',
    class: '9th Grade',
  },
  {
    name: 'Michael Johnson',
    fatherName: 'James Johnson',
    age: 17,
    rollNo: '103',
    class: '11th Grade',
  },
  {
    name: 'Emily Davis',
    fatherName: 'William Davis',
    age: 14,
    rollNo: '104',
    class: '8th Grade',
  },
  {
    name: 'Jessica Brown',
    fatherName: 'Charles Brown',
    age: 16,
    rollNo: '105',
    class: '10th Grade',
  },
  {
    name: 'Daniel Wilson',
    fatherName: 'Thomas Wilson',
    age: 15,
    rollNo: '106',
    class: '9th Grade',
  },
  {
    name: 'Sarah Taylor',
    fatherName: 'Andrew Taylor',
    age: 17,
    rollNo: '107',
    class: '11th Grade',
  },
  {
    name: 'David Lee',
    fatherName: 'George Lee',
    age: 14,
    rollNo: '108',
    class: '8th Grade',
  },
  {
    name: 'Laura Martin',
    fatherName: 'Paul Martin',
    age: 16,
    rollNo: '109',
    class: '10th Grade',
  },
  {
    name: 'Kevin White',
    fatherName: 'Mark White',
    age: 15,
    rollNo: '110',
    class: '9th Grade',
  },
  {
    name: 'Anna Harris',
    fatherName: 'Steven Harris',
    age: 17,
    rollNo: '111',
    class: '11th Grade',
  },
  {
    name: 'Brian Clark',
    fatherName: 'Edward Clark',
    age: 14,
    rollNo: '112',
    class: '8th Grade',
  },
  {
    name: 'Sophia Lewis',
    fatherName: 'Henry Lewis',
    age: 16,
    rollNo: '113',
    class: '10th Grade',
  },
  {
    name: 'Christopher Walker',
    fatherName: 'Frank Walker',
    age: 15,
    rollNo: '114',
    class: '9th Grade',
  },
  {
    name: 'Grace Hall',
    fatherName: 'Peter Hall',
    age: 17,
    rollNo: '115',
    class: '11th Grade',
  },
  {
    name: 'Justin Allen',
    fatherName: 'Patrick Allen',
    age: 14,
    rollNo: '116',
    class: '8th Grade',
  },
  {
    name: 'Olivia Young',
    fatherName: 'Bruce Young',
    age: 16,
    rollNo: '117',
    class: '10th Grade',
  },
  {
    name: 'Nathan Hernandez',
    fatherName: 'Larry Hernandez',
    age: 15,
    rollNo: '118',
    class: '9th Grade',
  },
  {
    name: 'Mia King',
    fatherName: 'Joe King',
    age: 17,
    rollNo: '119',
    class: '11th Grade',
  },
  {
    name: 'Ethan Wright',
    fatherName: 'Stanley Wright',
    age: 14,
    rollNo: '120',
    class: '8th Grade',
  },
  {
    name: 'Ava Lopez',
    fatherName: 'Timothy Lopez',
    age: 16,
    rollNo: '121',
    class: '10th Grade',
  },
  {
    name: 'Jacob Scott',
    fatherName: 'Chris Scott',
    age: 15,
    rollNo: '122',
    class: '9th Grade',
  },
  {
    name: 'Samantha Green',
    fatherName: 'Shawn Green',
    age: 17,
    rollNo: '123',
    class: '11th Grade',
  },
  {
    name: 'Andrew Adams',
    fatherName: 'Jason Adams',
    age: 14,
    rollNo: '124',
    class: '8th Grade',
  },
  {
    name: 'Ella Baker',
    fatherName: 'Ryan Baker',
    age: 16,
    rollNo: '125',
    class: '10th Grade',
  },]

//***********************************  Student Data array ends here ***********************/


var table_data = document.getElementById("table_data")



//***************************** UPDATING STUDENT DATA IN TABLE ****************************/
function insertdata(){
    table_data.innerHTML="";

    for(var i=0; i<studentData.length;i++)

{    table_data.innerHTML +=`<tr>
                             <td>${i+1}</td>
                             <td>${studentData[i].name}</td>
                             <td>${studentData[i].fatherName}</td>
                             <td>${studentData[i].rollNo}</td>
                             <td>${studentData[i].age}</td>
                             <td>${studentData[i].class}</td>
                             <td>
                             
  
                             <label>P</label>
                             <input type="checkbox" class="present" >
                             
                             <label>A</label>
                             <input type="checkbox" class="absent">
                             
                             <label>L</label>
                             <input type="checkbox" class="leave">
                             
                             
                             </td>
                             </tr>`}
}
//**************************** TABLE DATA FUNCTION END HERE ******************************/



//************************** Adding New Student Data ************************************/

// geting datafrom addData.html
var newStudentname = document.getElementById("name")
var newStudentfathername = document.getElementById("f_name")
var newStudentrollno = document.getElementById("rollno")
var newStudentage = document.getElementById("age")
var newStudentclass = document.getElementById("clas")
var nuewaddition = document.getElementById("submit")

function addnewstudent(){


  var obj ={ //creat an object with new student data
    name : newStudentname.value,
    fatherName : newStudentfathername.value,
    age : newStudentage.value,
  rollNo : newStudentrollno.value,
  class : newStudentclass.value,
  }
console.log(obj);

  studentData.push(obj) // putting newlly created object in main array that hold all student data
console.log(studentData);
  insertdata()// to display all data newly add and old both
}


insertdata();




//***************************** ATTENDANCE MARKING FUNCTION ******************************/

//grtting element to apply function 
var pre = document.getElementsByClassName("present");
var abs = document.getElementsByClassName("absent");
var lea = document.getElementsByClassName("leave");

//getting element to display Attandence status
var tota_present = document.getElementById("total_present")
var total_absent = document.getElementById("total_absent")
var total_leave = document.getElementById("total_leave")

//variable use for calculation in function
var present_counter = 0;
var absent_couter = 0;
var leave_counter = 0;


//********************************** to count presnt student *******************************/

for (var i = 0; i < pre.length; i++) {  //for loop to check all elemment in array
  pre[i].addEventListener("click", function () { //create function to get and chechk either check box is checked or not
  
    if (this.checked === true) //if P is checked increment in present counter and disable absent and leave checkbox
      {present_counter = present_counter + 1;
        var absent_ckeck_box = this.parentElement.children[3].disabled = true;
        var leave_ckeck_box = this.parentElement.children[5].disabled = true;

    
      } 
    else if (this.checked === false && present_counter > 0) //if P is un-checked decrement in present counter and enable absent and leave checkbox
         {present_counter = present_counter - 1;
          var absent_ckeck_box = this.parentElement.children[3].disabled = false;
          var leave_ckeck_box = this.parentElement.children[5].disabled = false;
         }

    console.log("present = " + present_counter);
    tota_present.innerText = `Present = ${present_counter}`// updating value in display card
  });
}

//********************************** to count absent student *******************************/

for (var i = 0; i < abs.length; i++) {  //for loop to check all elemment in array
    abs[i].addEventListener("click", function () { //create function to get and chechk either check box is checked or not
      
      if (this.checked === true) //if A is checked increment in absent_counter and disable present and leave checkbox
        {absent_couter = absent_couter + 1;
        var present_check_box = this.parentElement.children[1].disabled = true;
        var leave_ckeck_box = this.parentElement.children[5].disabled = true; 
        }

      else if (this.checked === false && absent_couter > 0) //if A is un-checked decrement in absent_counter and enable present and leave checkbox
           {absent_couter = absent_couter - 1;
            var present_check_box = this.parentElement.children[1].disabled = false;
           var leave_ckeck_box = this.parentElement.children[5].disabled = false;
           }
  
      console.log("absent = " + absent_couter);
      total_absent.innerText = ` Absent = ${absent_couter}`
    });
  }


  //****************************** to count leave **********************************/
  for(var k=0; k<lea.length;k++){
lea[k].addEventListener("click",function(){

if(this.checked === true)
  { leave_counter = leave_counter+1
    var present_check_box = this.parentElement.children[1].disabled = true;
    var absent_ckeck_box = this.parentElement.children[3].disabled = true;

  }

else if(this.checked === false && leave_counter_couter > 0)
  { leave_counter = leave_counter-1
    var present_check_box = this.parentElement.children[1].disabled = true;
    var absent_ckeck_box = this.parentElement.children[3].disabled = true;
  }

console.log("leave = " + leave_counter);
total_leave.innerText = ` Leave = ${leave_counter}`
})
 }
