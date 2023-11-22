import { genshinCharacters } from "./chara";



const genshinFilters = {
    mondstadt: genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Mondstadt")),
    liyue: genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Liyue")),
    inazuma: genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Inazuma")),
    sumeru: genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Sumeru")),
};

console.log(genshinFilters.mondstadt);


export {genshinFilters};