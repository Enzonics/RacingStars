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
  var userBirthday = new Date(today.getFullYear(), month - 1, day)
    if (today.getMonth() === month - 1 && today.getDate() > day) 
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
    <div className='container bg-white'>
      <div className='card bg-grey rounded-xl '>
        <div>
            <h1 className="text-white text-3xl text-center"> Birthday Calculator </h1>
            <h2 className="text-white text-l text-center"> Please enter your birthday </h2>
            <hr className='' />
        </div>
        

        <div className=' md:flex space-x-8 justify-center pt-5'>
          <input  max='31' placeholder='day' type='number' id='birthDay' />
          <input placeholder='month' type='number' id='birthMonth' />
          <input placeholder='year' type='number' id='birthYear' />
        </div>

        <div className=' md:flex justify-center pt-5' >
          <button className='bg-white rounded-lg  ' onClick={birthdayObtain}> Calculate </button>
        </div>

        <div className='md:flex justify-center pt-5 pb-5'>
         <text id='birthday'></text>
         <text id='daysUntil'></text>  
        </div>
      </div>
    </div>
  );
}

export default App;
