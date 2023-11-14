const ask = confirm("Do you want to Play This Game ? (y/n)")
if(ask==true){
const swgMain="SWG";
const swgS=swgMain.charAt(0);
const swgW=swgMain.charAt(1);
const swgG=swgMain.charAt(2);
let numRan;
let swgSwg;
const change=()=>{
 numRan= Math.round(Math.random() * swgMain.length);
 swgSwg =swgMain.charAt(numRan);
}
change();
let round = 1;
let  draw=0;
let  win=0;
let  lose=0;
  console.warn("By default its take 2 matches");
let tmatches = prompt("How many Matches do you want in this game","2");
  tmatches = Number.parseInt(tmatches);
let runmatches = 1;
let  sdraw=0;
let  swin=0;
let  slose=0;
let sstatus;
const show=()=>{
  
    if(swin > slose){
    sstatus="Win";
    }else if(swin <slose){
    sstatus="Lose";
    }else{
    sstatus="Draw";
    }
  
}
const showchange=()=>{
 sdraw= sdraw*0;
 swin = swin*0;
 slosre= slose*0;
 sstatus= sstatus*0
  
}

let swgUser =prompt("Enter s,w or g");
swgUser = swgUser.toUpperCase();
  console.log(swgUser);
  while(swgUser<=0){
  console.error("Inter valid input")
   swgUser =prompt("Enter s,w or g - Error : Inter valid input")
    swgUser = swgUser.toUpperCase();
}

while(swgUser>0){
if(swgUser ===swgS){
 console.log(scan - s);
}else if(swgUser ===swgW){
  console.log(scan - w);
}else if(swgUser ===swgG){
  console.log(scan - g);
}else{
  console.error("Enter Valid Input - Enter only s,w or g ")
  swgUser =prompt("Enter s,w or g - Error : Inter valid input ")
  swgUser = swgUser.toUpperCase();
}
}
while(runmatches <=tmatches){
const game =()=>{
if(swgUser==swgS&&swgW==swgSwg){
  console.log("Win");
  win++;
  swin++;
}else if(swgUser==swgS&&swgG==swgSwg){
  console.log("Lose");
  lose++;
  slose++;
}else if(swgUser==swgS&&swgS==swgSwg){
  console.log("Draw")
  draw++;
  sdraw++;
}else if(swgUser==swgW&&swgS==swgSwg){
  console.log("Lose");
  lose++;
  slose++;
}else if(swgUser==swgW&&swgG==swgSwg){
  console.log("Win");
   win++;
  swin++;
}else if(swgUser==swgW&&swgW==swgSwg){
  console.log("Draw")
  draw++;
  sdraw++;
}else if(swgUser==swgG&&swgW==swgSwg){
  console.log("Lose");
   lose++;
  slose++;
}else if(swgUser==swgG&&swgS==swgSwg){
  console.log("Win");
   win++;
  swin++;
}else if(swgUser==swgG&&swgG==swgSwg){
  console.log("Draw")
  draw++;
  sdraw++;
}else{
  console.error("Enter valid Input - Enter only s,w or g")
   swgUser = swgUser.toUpperCase();
  swgUser = prompt("Enter s,w or g - Error : Inter valid input ");
   swgUser = swgUser.toUpperCase();
  // manyerror();
  game();
}
  }
  game();
const showa=()=>{
  show();
  alert(("Round : "+round)+"\n"+
       ("computer : "+swgSwg)+"\n"+
       ("You : "+swgUser)+"\n"+
       ("Game status : "+sstatus))
  showchange();
}
  showa();
  
  runmatches++
  if(runmatches <=tmatches){
  swgUser =prompt("Enter s,w or g");
    swgUser = swgUser.toUpperCase();
    while(swgUser<=0){
      console.error("Inter valid input")
       swgUser =prompt("Enter s,w or g - Error : Inter valid input")
      swgUser = swgUser.toUpperCase();
    }
  change();
    }
  round++
}
console.log("");
console.log("Total Round : " +(round-1));
console.log("Win : "+win);
console.log("Lose : "+lose);
console.log("Draw : "+draw);
console.log("Game status : ",((win+draw)>=lose)?"Win":"Lose");

  
const endstatus=(((win+draw)>=lose)?"Win":"Lose")
alert(("Total Round :    "+(round-1))+"\n"+
      ("Win :    "+win)+"\n"+
      ("Lose :    "+lose)+"\n"+
      ("Draw :    "+draw)+"\n"+
      ("Game status :    "+endstatus))
  
   }



  

