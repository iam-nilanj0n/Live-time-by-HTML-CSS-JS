let Ptime = document.createElement('p');
let Pdate = document.createElement('p')
const body = document.querySelector('body');


let weekDays = {
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
    '7': 'Sunday',
}

let months = {
    '0': "January",
    '1': 'February',
    '2': "March",
    '3': 'April',
    '4': 'May',
    '5': 'June',
    '6': 'July',
    '7': 'August',
    '8': 'September',
    '9': "October",
    '10': 'November',
    '11': 'December'
}

const timer = setInterval(()=>{
    let date = new Date()
    let tHour = date.getHours()
    let t;
    let dayNo = `${date.getDay()}`;
    let month = `${date.getMonth()}`
    let tsec = date.getSeconds();
    let tminute = date.getMinutes();

    if(tminute<10){
        tminute = `0${tminute}`
    }

    if(tsec<10){
        tsec = `0${tsec}`
    }
    if(Number(tHour)>12){
        tHour = `${tHour%12}`
        t = `Time: 0${tHour} : ${date.getMinutes()} : ${tsec} PM`
    }else{
        tHour = `${tHour} `
        t = `Time: ${tHour} : ${date.getMinutes()} : ${date.getSeconds()} AM`
    }
    let d = `Date: ${months[month]} ${date.getDate()}  ${date.getFullYear()} ${weekDays[dayNo]}`
    Ptime.textContent = t
    Pdate.textContent = d
    body.appendChild(Ptime)
    body.appendChild(Pdate)
},1000)
