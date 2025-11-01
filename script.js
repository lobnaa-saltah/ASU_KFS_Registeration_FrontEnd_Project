// Title Writing in the website
const text = "Welcome in the Student Union of the Faculty of Artificial Intelligence at Kafr El-Sheikh University";

const title = document.getElementById('title');
let i = 0;
function typing(){
    if(i < text.length){
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}
setTimeout(typing, 300)