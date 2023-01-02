import './App.css'


let day;
let month;
let year;
let userDay;

let today = new Date;

let result;



async function birthdayObtain(){
  day = document.getElementById("birthDay").value;
  month = document.getElementById("birthMonth").value
  year = document.getElementById("birthYear").value

  userDay = day + '/' + month + '/' + year

  birthdayCalc();
}

async function birthdayCalc() {
  var userBirthday = new Date(today.getFullYear(), month, day)
    if (today.getMonth() === month && today.getDate() > day) 
      userBirthday.setFullYear(userBirthday.getFullYear() + 1) 
  
  var diff_in_time = userBirthday.getTime() - today.getTime();
  var diff_in_days = diff_in_time / (1000*3600*24)

 
  result = diff_in_days.toFixed(0)

  mapData();
}

function mapData(){
 document.getElementById('birthday').innerHTML = `Your birthday is ${userDay}`;
 document.getElementById('daysUntil').innerHTML = `Your birthday is ${result} days`
}


function App() {
  return (
    <div className='container'>
      <div>
        <text> Birthday Calculator </text>
        <text> Please enter your birthday </text>
      </div>
      <div>
      <input placeholder='day' type='string' id='birthDay' />
      <input placeholder='month' type='string' id='birthMonth' />
      <input placeholder='year' type='string' id='birthYear' />
      </div>

      <button onClick={birthdayObtain}> Calculate </button>
      <text id='birthday'></text>
      <text id='daysUntil'></text>
    </div>
  );
}

export default App;
