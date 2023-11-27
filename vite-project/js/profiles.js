import { genshinCharacters } from "./chara";
import { genshinFilters } from "./filters";

const DOMSelectors = {
    charas: document.getElementById("charas"),
    regMond: document.getElementById("charas"),
    regLiyue: document.getElementById("charas"),
    regInazuma: document.getElementById("charas"),
    regSumeru: document.getElementById("charas"),
};

//all charas
function charas(arr) {
    genshinCharacters.forEach((genshinCharacters) => DOMSelectors.charas.insertAdjacentHTML("beforeend", 
`
    <div class="profile">
        <h2>${genshinCharacters.name}</h2>    
        <h3>${genshinCharacters.region}</h3>
        <h3>${genshinCharacters.vision}</h3>
        <h3>${genshinCharacters.height}</h3>
    </div>
`

));
};


charas(genshinCharacters);

`
document.querySelector("#mond").addEventListener("click", function() {

    charas(genshinFilters.mondstadt)
});

`

function clearfields() {
    charas()
};

let buttons = document.querySelectorAll('button')

buttons.forEach((btn)=> btn.addEventListener("click", function(){
    let arrays = btn.textContent.toLowerCase()
    let newArr = genshinCharacters.filter((genshinCharacters)=>genshinCharacters.region === arrays)
    clearfields();
    charas(newArr);
}));