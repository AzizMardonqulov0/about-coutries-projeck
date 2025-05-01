let mode = document.getElementById("mode");
let countriesIn = document.getElementById("countriesIn");
let  body = document.body;
let result = []
const div = document.createElement("div");
const p = document.createElement("p")
let searchInput = document.getElementById("searchInput");
fetch('data.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    for(i=1; i < data.length;i++){
        let img = document.createElement("img")
        let div = document.createElement("div")
        let divImg = document.createElement("div")
        let divLable = document.createElement("div")
        let divLable1 = document.createElement("div")
        let divLable2 = document.createElement("div")
        let divLable3 = document.createElement("div")
        console.log(i)

        p.textContent += data[i].name
        div.className="countries-1";
        divImg.className="countries-img";
        img.src=data[i].flag;
        divLable1.textContent=data[i].name
        divLable2.textContent=`population: ${data[i].population}`
        divLable3.textContent=`capital: ${data[i].capital}`
        divLable.className="countries-lable";
        divLable1.className="countries-lable-1";
        divLable2.className="countries-lable-2";
        divLable3.className="countries-lable-2";
        countriesIn.appendChild(div);
        div.appendChild(divImg);
        div.appendChild(divLable);
        divLable.appendChild(divLable1);
        divLable.appendChild(divLable2);
        divLable.appendChild(divLable3);
        divImg.appendChild(img)
      }
})
.catch(error => console.error('Xatolik:', error));

searchInput.addEventListener("keypress" , function(event){

})

function DarkMode(){
    mode.classList.toggle("DarkMode")
    body.classList.toggle("DarkBody")
}