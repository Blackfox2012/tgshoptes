let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded");
    showTab('stock'); // Default to 'Cars in Stock' tab
    displayUserInfo(); // Display user info on page load

    // Add event listeners for each button
    document.getElementById("btn1").addEventListener("click", () => orderCar('Car 1'));
    document.getElementById("btn2").addEventListener("click", () => orderCar('Car 2'));
    document.getElementById("btn3").addEventListener("click", () => orderCar('Car 3'));
    document.getElementById("btn4").addEventListener("click", () => orderCar('Car 4'));

    tg.onEvent('mainButtonClicked', function() {
        console.log("Main button clicked");
        if (item) {
            console.log("Sending data: ", item);
            tg.sendData(item); // send selected car data to the bot
        }
    });
});

function showTab(tabName) {
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    console.log("Showing tab: ", tabName);
}

function orderCar(carName) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`You selected ${carName}!`);
        item = carName;
        tg.MainButton.show();
        console.log("Car selected: ", carName);
    }
}

function displayUserInfo() {
    const user = tg.initDataUnsafe.user;
    if (user) {
        const usercard = document.getElementById("usercard");
        const p = document.createElement("p");
        p.innerText = `${user.first_name} ${user.last_name}`;
        usercard.appendChild(p);
        console.log("User info displayed: ", user);
    } else {
        console.error("User information is not available.");
    }
}
