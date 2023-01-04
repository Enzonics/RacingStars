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


  switch (true) {
    case day > 31:
      document.getElementById('birthday').innerHTML = 'Invalid day, please try again'
      document.getElementById('daysUntil').innerHTML = ''
    break;
    case month > 12:
      document.getElementById('birthday').innerHTML = 'Invalid month, please try again'
      document.getElementById('daysUntil').innerHTML = ''
    break;
    default:
      birthdayCalc();
  }

  // switch(month === 2) {
  //   case day < 29:
  //       document.getElementById('birthday').innerHTML = 'The Febuary Complex'
  //       document.getElementById('daysUntil').innerHTML = 'Are you trying to trick me?'
  //   break;
  //   default:
  //     birthdayCalc();

  // }

}

async function birthdayCalc() {
  var userBirthday = new Date(today.getFullYear(), month - 1, day)
    if (today.getMonth() === month - 1 && today.getDate() > day) 
      userBirthday.setFullYear(userBirthday.getFullYear() + 1) 
  var diff_in_time = userBirthday.getTime() - today.getTime();
  var diff_in_days = diff_in_time / (1000*3600*24)
  result = diff_in_days.toFixed(0)

  mapData();
  clearFields();
}

function mapData(){
 document.getElementById('birthday').innerHTML = `Your birthday is ${userDay}`;
 document.getElementById('daysUntil').innerHTML = `Your birthday is ${result} days`
}

function clearFields() {
  document.getElementById('birthDay').value = '';
  document.getElementById('birthMonth').value = '';
  document.getElementById('birthYear').value = '';
}



function App() {
  return (
    <div className='container bg-white'>
      <div className='card bg-grey rounded-xl'>
        <div>
            <h1 className="text-white text-3xl text-center"> Birthday Calculator </h1>
            <h2 className="text-white text-l text-center"> Please enter your birthday </h2>
            <hr className=' ' />
        </div>
        

        <div className=' md:flex space-x-8 justify-center pt-5'>
          <input  min='1' max='31' placeholder='day' type='number' id='birthDay' />
          <input min='1' max='12' placeholder='month' type='number' id='birthMonth'  />
          <input min='1900' max='2023' placeholder='year' type='number' id='birthYear' />
        </div>

        <div className=' md:flex justify-center pt-5' >
          <button className='bg-white rounded-lg w-80 ' onClick={birthdayObtain}> Calculate </button>
        </div>

        <div className='flex flex-col justify-items-center pt-5 pb-5 '>
         <text className='flex justify-center text-white' id='birthday'></text>
         <text className='flex justify-center text-white'  id='daysUntil'></text>  
        </div>
      </div>
    </div>
  );
}

export default App;
