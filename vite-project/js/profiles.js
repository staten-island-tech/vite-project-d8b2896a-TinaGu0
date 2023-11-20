import { genshinCharacters } from "./chara";

const DOMSelectors = {
    charas: document.getElementById("charas")
};

allChara()

function allChara() {
    let names = genshinCharacters.forEach((genshinCharacters) => console.log(genshinCharacters.name));
    DOMSelectors.charas.insertAdjacentHTML("beforeend", 
    `
    <div class="profile">
        <h2>${names}</h2>    
    </div>
    `
    
    )
};

