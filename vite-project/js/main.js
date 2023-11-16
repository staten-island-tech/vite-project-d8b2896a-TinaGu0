import "../styles/color.css";
import "./filters/";
import "./profiles/";


const regions = {
    mond: document.getElementById("mond"),
    liyue: document.getElementById("liyue"),
    inazuma: document.getElementById("inazuma"),
    sumeru: document.getElementById("inazuma"),
}

regions.mond.addEventListener("click", function(event) {
    event.preventDefault();

});

document.querySelector(".switchTheme").addEventListener("click", function() {
    if (document.body.classList.contains("normal-mode")) {
        document.body.classList.add("pain-mode");
        document.body.classList.remove("normal-mode");
    }
    else {
        document.body.classList.add("normal-mode");
        document.body.classList.remove("pain-mode");
    }
    
});



