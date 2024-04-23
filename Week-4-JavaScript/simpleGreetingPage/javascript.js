let userName = prompt(
  "Hello and welcome to my Greeting page. Please enter your name : "
);

document.getElementById("userName").innerText = userName;

// Saat ve tarih bilgisini güncelleme fonksiyonu
function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.toLocaleDateString("tr-TR", { weekday: "long" });
  let date = now.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Update Time
  let timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  document.getElementById("myClock").innerText = timeString;

  // Update Date
  let dateString = `${day}, ${date}`;
  document.getElementById("myDate").innerText = dateString;
}

// Refresh every second to display correct time.
setInterval(updateTime, 1000);

updateTime();
