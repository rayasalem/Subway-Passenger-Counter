const Savebtn=document.getElementById("Save-btn");
const Passengers=document.getElementById("passengers-count");
const saveCount=document.getElementById("save-count");
const totalCount=document.getElementById("total-count")
let counter=0;

function increment(){
    counter=counter+1;
    Passengers.textContent=counter;
}

function save(){
    let counterStr=counter +'-';
    saveCount.innerText+=counterStr;
    totalCount.textContent=counter;
    Passengers.textContent=0
    counter=0;
}

function reset(){
    window.location.reload();
}