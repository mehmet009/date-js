
let guestName = prompt("lutfen isminizi giriniz")
 nonText = "lutfen bir deger giriniz"


if(guestName ){
let info = document.querySelector("#myName")

info.innerHTML = `${guestName}`
function tarih() {
    let date = new Date().toLocaleString(`tr-TR`)
    document.querySelector("#myClock").innerHTML = date }
    setInterval(tarih, 1000)  }
  
