
let div = document.createElement("div");
let result = document.createElement("span"); // Moved the creation of 'result' span up
result.id = "result";

let input = document.createElement("input");
input.id = "input1";
input.type = "text";

document.body.appendChild(div); // Appended 'div' to the body
div.append(input, result); // Appended 'input' and 'result' to 'div'

input.addEventListener("input", function() {
    let inputValue = document.getElementById("input1").value;
    result.innerHTML = inputValue; // Updated the 'result' span's innerHTML when input changes
});


