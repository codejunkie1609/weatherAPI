

/*let weather = fetch("http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=eefd75753d8a45c5552be93f0b8ea61d&units=metric");

// console.log(weather);
weather.then((results)=>{
    let finalRes = results.json();
    // console.log(finalRes);
    finalRes.then((res)=>{
        console.log(res.main.temp)
    })
})

*/
async function readWeather(){
    var city = document.getElementById("city").value;
    console.log(city);
    let x = await fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=eefd75753d8a45c5552be93f0b8ea61d&units=metric");
    let y = await x.json();
    return y;
}

async function getWeather(){
    let y = await readWeather();
 
    var dates =[];
    var temperature=[];
    let {list} = y
   

    for(x = 2; x < list.length; x+=8){
      
        let {main:{temp},dt_txt:date}=list[x]
        temperature.push(temp)
      
        dates.push(date.split(" ")[0]);
       
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: '5 day forecast for '+document.getElementById("city").value,
            data: temperature,
            
        }]
    }
});
}
/*async function readWeather(){
    var city = document.getElementById("city").value;
    console.log(city);
    let x = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=eefd75753d8a45c5552be93f0b8ea61d&units=metric");
    let y = await x.json();
    return y;
}

async function getWeather(){
    let response = await readWeather();
    console.log(response)
    if(response.cod=="404")
    {
        console.log("<center> ENTER VALID CITY NAME</center>")
    }
    else
        console.log("<center> "+response.name+"</center>");

   
}*/

// readWeather()