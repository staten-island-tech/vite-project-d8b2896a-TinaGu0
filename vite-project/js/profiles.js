import { genshinCharacters } from "./chara";

const DOMSelectors = {
    charas: document.getElementById("charas")
};

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


document.querySelector(".mond").addEventListener("click", function() {
    console.log("hellO!")
});
