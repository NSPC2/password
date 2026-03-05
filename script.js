//Loading screen off timer
setTimeout(() => {
    document.getElementById("loading").style.display = "none";
}, 4500);

let a = 0;
document.getElementById("includeNum").addEventListener("change", function () {
    a = this.checked ? 1 : 0;
});

let b = 0;
document.getElementById("includeSym").addEventListener("change", function () {
    b = this.checked ? 1 : 0;
});

let laters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let numbers = [
    ...laters, '0','1','2','3','4','5','6','7','8','9'
];

let symbols = [
    ...laters, '!','@','#','$','%','^','&','*','(',')','_','+'
];

let all = [
    ...laters, ...numbers.slice(laters.length), ...symbols.slice(laters.length)
];

let NU = document.getElementById("Number");
let NUM = 0;
NU.addEventListener("change", () => {
    NUM = parseInt(NU.value); // just length, no *1000
    if(NU.value>=30){
        NU.value=30;
    }else if(NU.value<=4){
        NU.value=4;
    }
});

// Generator Password
let m = '';
document.getElementById("Generator").addEventListener("click", () => {
    let chars;

    if(a === 0 && b === 0) chars = laters;
    else if(a === 1 && b === 0) chars = numbers;
    else if(a === 0 && b === 1) chars = symbols;
    else if(a === 1 && b === 1) chars = all;

    m = '';
    for(let u = 0; u < NUM; u++){
        let index = Math.floor(Math.random() * chars.length);
        m += chars[index];
    }

    document.getElementById("input").value=m; // final password
});

document.getElementById("copy").addEventListener("click",()=>{
    navigator.clipboard.writeText(document.getElementById("input").value);
})