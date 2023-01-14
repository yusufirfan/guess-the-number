const btn = document.querySelector(".btn");
const input = document.querySelector(".inp");
const p = document.querySelector(".ps");

// console.log(Math.random()*100);

const randoms = Math.random()*100;
const randoma = Math.floor(randoms);

console.log(randoms);
console.log(randoma);
console.log(btn);

let attempts = 0;
let pp = document.createElement("p");

btn.addEventListener("click", function(){
    let inputValue = input.value;
    if(inputValue < randoma){
        attempts++;
        pp.textContent = `Yukarı hata sayınız: ${attempts}`
        p.append(pp);
    }
    else if(inputValue > randoma){
        attempts++;
        pp.textContent = `Aşağı hata sayınız: ${attempts}`
        p.append(pp);
    }
    else{
        pp.textContent = `Tahmin doğru, toplam hata sayınız: ${attempts} `;
        p.append(pp);
    }
})