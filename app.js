let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelup();
   
})
function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
    }
function levelup(){
    userSeq=[];
    level++;
    h2.innerHTML=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);  
   gameSeq.push(randColor)
   console.log(gameSeq)
    btnflash(randBtn);
}
function checkAns(idx){
    console.log("curr level:"+level)
   
    if(userSeq[idx]==gameSeq[idx]){
     if(userSeq.length==gameSeq.length){

       setTimeout(levelup,1000);
     }
    }
    else{
        document.querySelector("body").style.color="red";
        setTimeout(function(){
            document.querySelector("body").style.color="red";
        })
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> </br> Press any key to start.`;
         reset();
    }
}
function btnPress(){
    console.log(this);
   let btn=this;
 userflash(btn);
 userColor=btn.getAttribute("id");
 userSeq.push(userColor);
 console.log(userSeq)
 checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}