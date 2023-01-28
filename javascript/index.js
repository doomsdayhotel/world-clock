function updateTime() {
  //Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Hong Kong
  let hkElement = document.querySelector("#hk");
  if (hkElement) {
    let hkDateElement = hkElement.querySelector(".date");
    let hkTimeElement = hkElement.querySelector(".time");
    let hkTime = moment().tz("Asia/Hong_Kong");

    hkDateElement.innerHTML = hkTime.format("MMMM Do YYYY");
    hkTimeElement.innerHTML = hkTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  if (cityName === "London") {
    cityName = "🇬🇧 London";
  } else if (cityName === "Auckland") {
    cityName = "🇳🇿 Auckland";
  } else if (cityName === "Reykjavik") {
    cityName = "🇮🇸 Reykjavik";
  }
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  // innerHTML += is to append
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <div id="all-cities"><a href="index.html">All cities</a></div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
