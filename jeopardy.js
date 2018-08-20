let submitButton = document.getElementById("submit")
let input = document.getElementById("answer")
let response;
let points = 0; 
let newElement; 
let destination = document.getElementById("questionDiv");

function getQuestion(){
    fetch("http://jservice.io/api/random.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        newElement = document.createElement("p");
        response = myJson[0];
        console.log(response.answer)
        let newText = document.createTextNode(response.question);
        
        newElement.appendChild(newText);
        destination.appendChild(newElement);
        
    })
} 

getQuestion();



submitButton.addEventListener("click", function (event) {

    let userAnswer = input.value
    if (response) {
        let isCorrect = response.answer === userAnswer
        if (isCorrect){
        points = points + response.value
        alert(`correct: ${isCorrect} \n points: ${points}`)    
        }

    } else {
        console.log("questionNotReady")
    }

    destination.removeChild(newElement);    
getQuestion();

})