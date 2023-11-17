import { genshinCharacters } from "./chara";

const mondstadt = genshinCharacters.filter(genshinCharacters => genshinCharacters.region.includes("Mondstadt"));
console.log(mondstadt);
