const tg = window.Telegram.WebApp;

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded");
    showTab('stock'); // Default to 'Cars in Stock' tab
    displayUserInfo(); // Display user info on page load

    tg.onEvent('mainButtonClicked', function() {
        console.log("Main button clicked");
        if (selectedCar) {
            console.log("Sending data: ", selectedCar);
            tg.sendData(selectedCar); // send selected car data to the bot
        }
    });

    // Additional logging for initialization
    console.log("Telegram WebApp initialized: ", tg.initDataUnsafe);
});

let selectedCar = '';

function showTab(tabName) {
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    console.log("Showing tab: ", tabName);
}

function orderCar(carName) {
    selectedCar = carName;
    tg.MainButton.setText(`Order ${carName}`);
    tg.MainButton.show();
    console.log("Car selected: ", carName);
}

function displayUserInfo() {
    const usercard = document.getElementById("usercard");
    const p = document.createElement("p");
    p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
    usercard.appendChild(p);
    console.log("User info displayed: ", tg.initDataUnsafe.user);
}
