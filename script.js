let boxes=document.querySelectorAll(".tic");
let reset=document.querySelector("#reset");

//to players
let player0=true;
let player1=false; 

const winpattern=[
    [0,1,2],
    [0,3,6],[0,4,8],
    [1,4,7],[2,5,8],
    [2,4,6],[3,4,5],[6,7,8],
];
  


boxes.forEach((box)=>{
   box.addEventListener("click",()=>{

        if(player0){
            box.innerHTML="X";
            player0=false;
        }else{
            box.innerHTML="O";
            player0=true;
        }
        box.disabled=true;
        checkwin();
   });
});
const checkwin=()=>{
    for( let patter of winpattern){
        // console.log(patter[0],patter[1],patter[2]);
        // console.log(boxes[patter[0]].innerHTML,boxes[patter[1]].innerHTML,boxes[patter[2]].innerHTML);
        let posval1=boxes[patter[0]].innerHTML;
        let posval2=boxes[patter[1]].innerHTML;
        let posval3=boxes[patter[2]].innerHTML;
        if(posval1!=""&& posval2!=""&& posval3!=""){
            if(posval1==posval2 && posval2==posval3 && posval3==posval1){
                console.log("Winner",posval1);
                winner(posval1);
            }
        }
    }
}
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
function winner(winnerval){
    document.getElementById("winner").innerHTML=`Congratulations, Winner is ${winnerval}`;
    disabledboxes();
}

reset.addEventListener("click",()=>{
    enable();
});

const enable=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerHTML="";
    }
    hide();
  }
  const hide=()=>{
    document.getElementById("winner").innerHTML="";
  }
