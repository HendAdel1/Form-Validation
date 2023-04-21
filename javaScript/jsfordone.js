let getUsername = localStorage.getItem("UserName");
let emoji = String.fromCodePoint(0x1F970)
document.getElementById("user").innerText= `Welcome ${getUsername} ${emoji}`;
