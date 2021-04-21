import * as http from './http.js';
import * as view from './view.js';


const GET_IMG = `https://foodish-api.herokuapp.com/api/`;
var answer = '';
var submit_button = Object();
var play_again_button = Object();

async function startGame() {
    const json = await http.sendGETRequest(GET_IMG);
    const img_src = json["image"];
    answer = img_src.split('/')[4];
        
    view.mainView(img_src);
    submit_button = document.getElementById('submit-button');
    submit_button.addEventListener('click', display_results);
}


function activate_play_again(){
    play_again_button = document.getElementById('play-again');
    play_again_button.addEventListener('click', startGame);
}


function display_results(){
    var ele = document.getElementsByName('options');

    for (let i=0; i < ele.length; i++){
        if(ele[i].checked){
            if(ele[i].value == answer){
                document.getElementById("view").innerHTML += `<h4> You are correct! </h4>`;
            }
            else{
                document.getElementById("view").innerHTML += `<h4>Sorry, you are wrong. The correct answer is ${answer}.</h4>`;
            }
            document.getElementById("view").innerHTML += `<button id='play-again'>Play Again.</button>`;
            activate_play_again();
            return
        }
    }
    document.getElementById("view").innerHTML += `<h4>You did not choose an answer.</h4>`;
    document.getElementById("view").innerHTML += `<input class='btn btn-primary m-2' type='button' value='Play Again' id='play-again'>`;
    activate_play_again();
    return;
}


window.start = async () => {
    const json = await http.sendGETRequest(GET_IMG);
    const img_src = json["image"];
    answer = img_src.split('/')[4];
    
    view.mainView(img_src);
    submit_button = document.getElementById('submit-button');
    submit_button.addEventListener('click', display_results);
}


window.addEventListener('load', start);


