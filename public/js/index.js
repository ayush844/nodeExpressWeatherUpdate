const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name  = document.getElementById('city_name');
const temp = document.getElementById('temp');
const tempStatus = document.getElementById('tempStatus');


const getInfo = async(Event) => {
    Event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = 'plz write the name before you search';
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=97a6adc890ab9f8d7091677513bb286c`;

            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            temp.innerText = `${arrData[0].main.temp}°c`;

            if(tempMood == 'Clear'){
                tempStatus.innerHTML = '<i class="fa-solid fa-sun fa-6x" style="color: #ecf00f;"></i>';
            }else if(tempMood == 'Clouds'){
                tempStatus.innerHTML = '<i class="fa-solid fa-cloud fa-6x" style="color: #dfe2e7;"></i>';
            }else if(tempMood == 'Rain'){
                tempStatus.innerHTML = '<i class="fa-solid fa-cloud-rain fa-6x" style="color: #84aef5;"></i>'
            }else{
                tempStatus.innerHTML = '<i class="fa-solid fa-sun fa-6x" style="color: #ecf00f;"></i>';
            }

            

            console.log(data);
            

        }catch{
            city_name.innerText = 'plz enter the correct city name';
        }





    }

}


submitBtn.addEventListener('click', getInfo);







setInterval(update, 1);

function update(){

    const myLabel = document.getElementById("todayDate");
    const mySecondLabel = document.getElementById("day");
    let myDate = new Date();
    myLabel.innerHTML = formatDate(myDate);
    mySecondLabel.innerHTML = formatday(myDate);


    function formatDate(myDate){

        let year = myDate.getFullYear();

        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        let month = months[myDate.getMonth()];

        let date = myDate.getDate();

        let day = days[myDate.getDay() - 1];

        // Mon | 29 May,2023
        return(`${date} ${month}, ${year}`);

    }

    function formatday(myDate){
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let day = days[myDate.getDay() - 1];

        return day;
    }
    


}
