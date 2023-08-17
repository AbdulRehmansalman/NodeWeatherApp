const submitbtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const output = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const adddInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === '') {
    output.innerText = `Plz Write the name before Search`;
  } else {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=032129d33adb463a5a89e4dc70abc073`;
      const response = await fetch(url);
      //todo   console.log(response);  Response Received But IN Json: to Convert in js object:
      const data = await response.json();

      const arrData = [data];
      // console.log(arrData); Gets the Array Data
      output.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      const tem = arrData[0].main.temp;
      if (tem.value === '') {
        output.innerText = `No Temperature found of that City`;
      } else {
        const integerPart = Math.floor(tem) - 273;
        temp.innerText = integerPart;
      }
    } catch (err) {
      output.innerText = `Plz Write the Correct Name of City`;
      console.log(err);
    }
  }
};
// Click Btn:
submitbtn.addEventListener('click', adddInfo);
