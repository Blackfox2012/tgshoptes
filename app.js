const tg = window.Telegram.WebApp;

document.addEventListener("DOMContentLoaded", function() {
    showTab('stock'); // Default to 'Cars in Stock' tab
    displayUserInfo(); // Display user info on page load

    tg.onEvent('mainButtonClicked', function() {
        if (selectedCar) {
            tg.sendData(selectedCar); // send selected car data to the bot
        }
    });
});

let selectedCar = '';

function showTab(tabName) {
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function orderCar(carName) {
    selectedCar = carName;
    tg.MainButton.setText(`Order ${carName}`);
    tg.MainButton.show();
}

function displayUserInfo() {
    const usercard = document.getElementById("usercard");
    const p = document.createElement("p");
    p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
    usercard.appendChild(p);
}
