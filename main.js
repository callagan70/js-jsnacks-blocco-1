let primo = prompt ("Dammi il primo numero")
let secondo = prompt ("Dammi il secondo numero")

if (primo > secondo) {
    document.getElementById("fuori").innerHTML = "Il primo numero è maggiore del secondo";
  }
else{
    document.getElementById("fuori").innerHTML = "Il secondo è maggiore del primo";
  }
