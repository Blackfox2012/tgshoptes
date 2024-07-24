document.addEventListener("DOMContentLoaded", function() {
    showTab('stock'); // Default to 'Cars in Stock' tab
});

function showTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function orderCar(carName) {
    // Implement the logic to redirect to the manager
    alert("Ordering " + carName);
    // For example, redirect to a manager's contact form or send a message
    // window.location.href = "manager.html?car=" + encodeURIComponent(carName);
}
