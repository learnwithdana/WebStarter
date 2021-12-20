window.onload = function () {
    let btn = document.getElementById("greetBtn");
    btn.onclick = onGreetBtnClicked;
};

function onGreetBtnClicked() {
    let name = document.getElementById("name").value;
    alert("Hello " + name);
}
