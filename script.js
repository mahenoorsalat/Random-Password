const button =  document.querySelector('.btnn');
const input = document.querySelector('input');
const copy = document.querySelector('.btn');

copy.addEventListener("click"  , ()=>{
    input.select();
    document.execCommand('copy');
    alert("Your password is copied to clipboard!")
})
button.addEventListener("click" , ()=>{
    let password = generatRandom(12);
   input.value = password;
})

function generatRandom (length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password  = '';
    for (let i = 0 ; i < length ; i ++){
       password += characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return password;
}