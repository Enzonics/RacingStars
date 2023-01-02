import './App.css'


let day;
let month;
let year;

let today = new Date;



function birthdayObtain(){
  day = document.getElementById("birthDay").value;
  month = document.getElementById("birthMonth").value
  year = document.getElementById("birthYear").value
  birthdayCalc();
}

function birthdayCalc() {

  var userBirthday = new Date(today.getFullYear(), month, day)
  console.log(userBirthday)

  if (today.getMonth() === month && today.getDate() > day) 
  userBirthday.setFullYear(userBirthday.getFullYear() + 1) 
  
  var diff_in_time = userBirthday.getTime() - today.getTime();
  var diff_in_days = diff_in_time / (1000*3600*24)

 
  var final_result = diff_in_days.toFixed(0)
  console.log(final_result)
}

function App() {
  return (
    <div>
      <text> Birthday Calculator </text>
      <text> Please enter your birthday </text>
      <input placeholder='day' type='string' id='birthDay' />
      <input placeholder='month' type='string' id='birthMonth' />
      <input placeholder='year' type='string' id='birthYear' />

      <button onClick={birthdayObtain}> Calculate </button>
    </div>
  );
}

export default App;
