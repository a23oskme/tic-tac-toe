var button = document.querySelectorAll(".table_btn");
var button_reset = document.getElementById("reset_button");
var player1_name = document.getElementById("player_one_name");
var player2_name = document.getElementById("player_two_name");

var your_turn = true;
var your_counter = 0;
var opp_counter = 0;
var game_done = false;

// var your_name = prompt("Player 1 name");
// var opp_name = prompt("Player 2 name");
var your_name = "Oskar";
var opp_name = "Filip";

writeNames();

button.forEach(function(knapp) {
    knapp.addEventListener("click", function(){
        console.log("Knapp tryckt");

        var color = knapp.style.backgroundColor;

        if (your_turn && !game_done) {

            if (your_counter < 3) {
                if (color != "green" && color != "blue") {
                    knapp.style.backgroundColor = "green";
                    your_counter++;
                    checkWinner();
                    your_turn = false;
                }
                else {
                    console.log("den får du inte trycka på");
                }
            }
            else {
                // console.log("du har tre");
                if (color != "green") {
                    console.log("den får inte trycka på");
                }
                else {
                    knapp.style.backgroundColor = "white";
                    your_counter--;
                }
            }

        }
        else if (!your_turn && !game_done) {

            if (opp_counter < 3) {
                if (color != "green" && color != "blue") {
                    knapp.style.backgroundColor = "blue";
                    opp_counter++;
                    checkWinner();
                    your_turn = true;
                }
                else {
                    console.log("den får du inte trycka på");
                }
            }
            else {
                // console.log("du har tre");
                if (color != "blue") {
                    console.log("den får inte trycka på");
                }
                else {
                    knapp.style.backgroundColor = "white";
                    opp_counter--;
                }
            }
        }

    });
});

button_reset.addEventListener("click", function() {
    console.log("ÅTERSTÄLL");
    button.forEach(function(knapp) {
        knapp.style.backgroundColor = "white";
        your_counter = 0;
        opp_counter = 0;
        game_done = false;
        your_turn = true;
    })
});

function checkWinner() {
    var A1 = document.getElementById("A1");
    var A2 = document.getElementById("A2");
    var A3 = document.getElementById("A3");
    var B1 = document.getElementById("B1");
    var B2 = document.getElementById("B2");
    var B3 = document.getElementById("B3");
    var C1 = document.getElementById("C1");
    var C2 = document.getElementById("C2");
    var C3 = document.getElementById("C3");

    // HORISONTALT
    if (A1.style.backgroundColor == "green" && 
        B1.style.backgroundColor == "green" && C1.style.backgroundColor == "green" || A1.style.backgroundColor == "blue" && 
        B1.style.backgroundColor == "blue" && C1.style.backgroundColor == "blue") {
        whoWon();
    }
    else if (A2.style.backgroundColor == "green" && 
        B2.style.backgroundColor == "green" && C2.style.backgroundColor == "green" || A2.style.backgroundColor == "blue" && 
        B2.style.backgroundColor == "blue" && C2.style.backgroundColor == "blue") {
        whoWon();
    }
    else if (A3.style.backgroundColor == "green" && 
        B3.style.backgroundColor == "green" && C3.style.backgroundColor == "green" || A3.style.backgroundColor == "blue" && 
        B3.style.backgroundColor == "blue" && C3.style.backgroundColor == "blue") {
        whoWon();
    }
    // VERTIKALT
    else if (A1.style.backgroundColor == "green" && 
        A2.style.backgroundColor == "green" && A3.style.backgroundColor == "green" || A1.style.backgroundColor == "blue" && 
        A2.style.backgroundColor == "blue" && A3.style.backgroundColor == "blue") {
        whoWon();
    }
    else if (B1.style.backgroundColor == "green" && 
        B2.style.backgroundColor == "green" && B3.style.backgroundColor == "green" || B1.style.backgroundColor == "blue" && 
        B2.style.backgroundColor == "blue" && B3.style.backgroundColor == "blue") {
        whoWon();
    }
    else if (C1.style.backgroundColor == "green" && 
        C2.style.backgroundColor == "green" && C3.style.backgroundColor == "green" || C1.style.backgroundColor == "blue" && 
        C2.style.backgroundColor == "blue" && C3.style.backgroundColor == "blue") {
        whoWon();
    }
    // X OF DOOM
    else if (A1.style.backgroundColor == "green" && 
        B2.style.backgroundColor == "green" && C3.style.backgroundColor == "green" || A1.style.backgroundColor == "blue" && 
        B2.style.backgroundColor == "blue" && C3.style.backgroundColor == "blue") {
        whoWon();
    }
    else if (C1.style.backgroundColor == "green" && 
        B2.style.backgroundColor == "green" && A3.style.backgroundColor == "green" || C1.style.backgroundColor == "blue" && 
        B2.style.backgroundColor == "blue" && A3.style.backgroundColor == "blue") {
        whoWon();
    }


}

function whoWon() {
    game_done = true;
    if (your_turn) {
        console.log("green wins!");
    }
    else if (!your_turn) {
        console.log("blue wins!");
    }
}

function writeNames() {
    player1_name.innerText = your_name;
    player2_name.innerText = opp_name;
}