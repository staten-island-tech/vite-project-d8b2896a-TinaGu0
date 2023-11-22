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

//mond only 
document.querySelector("#mond").addEventListener("click", function() {
genshinFilters.mondstadt.forEach((genshinFilters) => DOMSelectors.regMond.insertAdjacentHTML("beforeend", 
    `
        <div class="profile">
            <h2>${genshinFilters.mondstadt.name}</h2>    
            <h3>${genshinFilters.mondstadt.region}</h3>
            <h3>${genshinFilters.mondstadt.vision}</h3>
            <h3>${genshinFilters.mondstadt.height}</h3>
        </div>
    `
    
    ));

    document.body.idList.add("#regMond");
        document.body.idList.remove("#charas");
});

