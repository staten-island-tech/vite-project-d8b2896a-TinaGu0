import { genshinCharacters } from "./chara";
`import { genshinFilters } from "./filters";` //part of old code

const DOMSelectors = {
    charas: document.getElementById("charas"),
    buttons: document.querySelectorAll('button'),
};

function charas(arr) {
    arr.forEach((genshinCharacters) => DOMSelectors.charas.insertAdjacentHTML("beforeend", 
`
    <div class="profile">
        <h2>${genshinCharacters.name}</h2>    
        <h3>${genshinCharacters.region}</h3>
        <h3>${genshinCharacters.vision}</h3>
        <h3>${genshinCharacters.height}</h3>
    </div>
`

))};

charas(genshinCharacters);

function remove() {
    const div = document.querySelectorAll(".profile");
    div.forEach((bye)=> bye.remove());
};


DOMSelectors.buttons.forEach((btn)=> btn.addEventListener("click", function(){
    let arrays = btn.textContent
    let newArr = genshinCharacters.filter((genshinCharacters)=>genshinCharacters.region === arrays)
    remove();
    charas(newArr);
}));

//old inefficient code :(
`
document.querySelector("#mond").addEventListener("click", function() {
    remove();
    charas(genshinFilters.mondstadt);
});

document.querySelector("#liyue").addEventListener("click", function() {
    remove();
    charas(genshinFilters.liyue);
});

document.querySelector("#inazuma").addEventListener("click", function() {
    remove();
    charas(genshinFilters.inazuma);
});

document.querySelector("#sumeru").addEventListener("click", function() {
    remove();
    charas(genshinFilters.sumeru);
});
`