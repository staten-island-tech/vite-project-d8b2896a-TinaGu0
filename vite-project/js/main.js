import "../styles/color.css";
import "./filters/";
import { genshinCharacters } from "./chara";


const regions = {
    mond: document.getElementById("mond"),
    liyue: document.getElementById("liyue"),
    inazuma: document.getElementById("inazuma"),
    sumeru: document.getElementById("inazuma"),
}

regions.mond.addEventListener("click", function(event) {
    event.preventDefault();

});



let charaname = genshinCharacters.name
charas.insertAdjacentHTML("beforeend", 
`
<div>
<div class="profile">
<h2>${charaname}</h2>
</div>
</div>
`
);

document.querySelector(".switchTheme").addEventListener("click", function() {
    document.body.classList.add("pain");
});



