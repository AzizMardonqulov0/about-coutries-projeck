let mode = document.getElementById("mode");
let countriesIn = document.getElementById("countriesIn");
let  body = document.body;
let result = []
const div = document.createElement("div");
const p = document.createElement("p")
let searchInput = document.getElementById("searchInput");
let popApp = document.getElementById('popApp');
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


        p.textContent += data[i].name
        div.className="countries-1";
        div.id="country";
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
      let ContreDiv =  document.querySelectorAll(".countries-1")
      ContreDiv.forEach((div , index) =>{
            div.addEventListener("click" , ()=>{
                console.log(data[index + 1].name);
                popApp.classList.add("slider");
                console.log(i)
                popApp.innerHTML=
                `   
                <div class="popApp1">
                    <div class="popApp-button">
                        <div id="back" class="back">
                        <i class="fa-solid fa-left-long"></i> Back</div>
                    <div class="popApp-img">
                        <img src="${data[index + 1].flag}" alt="">
                    </div>
                    </div>
                    <div class="popApp-lable">
                       <div class="popApp-lable-1">${data[index + 1].name}</div> 
                       <div class="popApp-lable-1">${data[index + 1].nativeName}</div>
                        <div class="popApp-lable-1">${data[index + 1].population}</div> 
                       <div class="popApp-lable-1">${data[index + 1].demonym}</div>
                       <div class="popApp-lable-1">${data[index + 1].alpha3Code}</div> 
                       <div class="popApp-lable-1">${data[index + 1].callingCodes}</div>


                    </div>
                </div>
                `
                document.getElementById("back").addEventListener("click" , ()=>{
                    popApp.classList.remove("slider");
                })
                let backBtn = document.getElementById("back");
                backBtn.addEventListener('click', function () {
                    popApp.classList.remove("slider");
                });
            })

})
})
.catch(error => console.error('Xatolik:', error));

function DarkMode(){
    mode.classList.toggle("DarkMode")
    body.classList.toggle("DarkBody")
}