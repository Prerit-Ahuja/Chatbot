const icon = document.querySelector(".chatBot");
const chat = document.querySelector(".container");
const close = document.querySelector(".container__header__objects--cross");

icon.addEventListener('click', ()=>{
    chat.classList.add("show");
    chat.classList.remove("hide");

    // icon.classList.add("hide");
    icon.classList.add("growDown");
})

close.addEventListener('click', ()=>{
    chat.classList.add("hide");
    chat.classList.remove("show");

    // icon.classList.add("show");
    icon.classList.add("growUp");
    icon.classList.remove("growDown");
})


const tempBtn = document.querySelector('.container__chat--options--button');
const tempContainer = document.querySelector('.container__temp');
const header = document.querySelector('.container__temp--header');
const nextBtn = document.querySelector('.container__btn--next');
const response = document.querySelector(".response");
const timeBtn = document.querySelector('.timeBtn');
const timeContainer = document.querySelector(".container__time");
const placeName = document.querySelector("#placeName")
const vv = document.querySelector(".container__time--cityName")

timeBtn.addEventListener('click', ()=>{
    timeContainer.classList.add("show");
    timeContainer.classList.remove("hide");

    tempContainer.classList.remove('show');
    tempContainer.classList.add('hide');

    response.classList.remove('hide');
    response.classList.add('show');

    input.classList.remove('hide');
    input.classList.add('show');

})

tempBtn.addEventListener('click', ()=>{
    tempContainer.classList.remove('hide');
    tempContainer.classList.add('show');
    response.classList.remove('hide');
    response.classList.add('show');

    timeContainer.classList.add('hide');

    input.classList.remove('hide');
    input.classList.add('show');

   
})



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd1f6e9238msh61977c0f6212a3cp16e7bajsn9981d638ba10',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// function to get temperature:
const getTemp = (city)=>{
cityName.innerHTML = city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {

        console.log(response)
        temp.innerHTML = response.temp
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
    })
	.catch(err => 
        console.error(err),
        // header.innerHTML = "Sorry, No results Found!"
        );    
}

const input = document.querySelector(".container__message__input--text");

getTemp("Noida");

// time

const getTime = (place)=>{
    // console.log(place)
    vv.innerHTML = place;
    // console.log(vv)
    // console.log(place)
fetch(`https://api.api-ninjas.com/v1/timezone?city=${place}`, {
headers: { "X-Api-Key": "Dksa3tssete0dvoYFAuEU7Mxamzj2hNJ5FNNKq9P" },
 contentType: "application/json",
 })

 .then(response => response.json())
 .then(response => {

    console.log(response);
    var time = new Date().toLocaleString("en-IN", {
        timeZone: response.timezone,
        timeStyle: "short",
         hourCycle: "h24",
        })

        const mytime = document.querySelector("#mytime");
        mytime.innerHTML = time;
        console.log(time);

})
}
getTime("Noida");

input.addEventListener("change", (city)=>{
    city.preventDefault();
    getTemp(city.target.value)
    getTime(city.target.value)
    city.target.value = "";
})

input.addEventListener("change", (place)=>{
    place.preventDefault();
    let val = input.value;
    getTime(val)
    place.target.value = "";
})


 