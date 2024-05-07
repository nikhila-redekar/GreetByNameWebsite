window.onload = init;

function init() {
    // Step 4
    const greetButton = document.getElementById("greetUserBtn");
    greetButton.onclick = onGreetUserBtnClicked;
}

// Step 5
function onGreetUserBtnClicked() {
    const nameField = document.getElementById("nameField");
    const userName = nameField.value;

    const messageDiv = document.getElementById("messageDiv");
    messageDiv.textContent = "Hello, " + userName + "!";
}
