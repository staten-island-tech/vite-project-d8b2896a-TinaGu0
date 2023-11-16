import { genshinCharacters } from "./chara";

let charaName = genshinCharacters.name
let charaRegion = genshinCharacters.region
charas.insertAdjacentHTML("beforeend", 
`
<div class="parent">
<div class="profile">
<h2>${charaName}</h2>
<h3>${charaRegion}</h3>
</div>
</>
`
);