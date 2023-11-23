const image = document.querySelector("#image");
const title = document.querySelector("#name");
const boton = document.querySelector("#boton");

const url = "https://www.mmobomb.com/api1/game";

// https://www.mmobomb.com/api1/game?id=452
async function getGame(){
    let num = getRandom();
    try {
        const element = await axios.get("https://api.thecatapi.com/v1/images/search");
        //console.log(element.data[0].url);
        image.setAttribute("src",element.data[0].url);
    } catch (error) {
        console.error(error+ ": " + url);
    }
}

function getRandom(){
    let num = parseInt(Math.random() * ((400-1) +1) + 1);
    return num;
}
getGame();
boton.addEventListener('click',getGame);


