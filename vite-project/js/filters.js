import { genshinCharacters } from "./chara";

const mondstadt = genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Mondstadt"));
console.log(mondstadt);

const liyue = genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Liyue"));
console.log(liyue);

const inazuma = genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Inazuma"));
console.log(inazuma);

const sumeru = genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Sumeru"));
console.log(sumeru);
