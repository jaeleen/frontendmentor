document.getElementById("rollDice").addEventListener("submit", getAdvice);

function getAdvice(event) {
    event.preventDefault();
    var xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var responseObj = JSON.parse(this.responseText);
            document.getElementById("quote").innerHTML = responseObj.slip.advice;
            document.getElementById("adNum").innerHTML = responseObj.slip.id;
        }
    };
    
    xml.open("GET", "https://api.adviceslip.com/advice", true);
    xml.send();
}
