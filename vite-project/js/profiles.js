import { genshinCharacters } from "./chara";


genshinCharacters.forEach((chara => {
    

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

}));
