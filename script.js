/*var coeur=document.getElementsById("FAV");*/






/*var total=[0,0,0,0,0];
var nb=[,,,,];


var p1=document.getElementById('prix1');
var p2=document.getElementById('prix2');
var p3=document.getElementById('prix3');
var p4=document.getElementById('prix4');
var p5=document.getElementById('prix5');



p1.innerHTML=prixarti[0];
p2.innerHTML=prixarti[1];
p3.innerHTML=prixarti[2];
p4.innerHTML=prixarti[3];
p5.innerHTML=prixarti[4];


nb[0]=document.getElementById('nb-art1');
nb[1]=document.getElementById('nb-art2');
nb[2]=document.getElementById('nb-art3');
nb[3]=document.getElementById('nb-art4');
nb[4]=document.getElementById('nb-art5');

nb[0].innerHTML= 11;
/* button------------------------------
var comp =0;
var back1=document.getElementById('moin1');
var add1=document.getElementById('plus1');

add1.addEventListener("click",ajout(0));
back1.addEventListener("click",reduire(0));



function ajout(n){
    
    comp++;
    nb[n].innerHTML=comp;
    total[n]=total[n]*prixarti[n];
    

}

function reduire(n){
    if (comp==0) {
        total[n]=total[n]*prixarti[n];
        nb[n].innerHTML=comp;
        alert("erreur");
        
        
    }
    else{
        comp--;
        nb[n].innerHTML=comp;

    }

}


*/

var favs =Array.from(document.querySelectorAll('.fa-heart'));
var dels =Array.from(document.querySelectorAll('.del'));
var PRS = Array.from(document.querySelectorAll('.PR'));
var moins=Array.from(document.querySelectorAll('.moin'));
var pluss=Array.from(document.querySelectorAll('.plus'));



for (let fav of favs)
(
  fav.addEventListener("click",function(){
    if (fav.style.color== "black"){
        fav.style.color="red"
    }else{
        fav.style.color="black" 
    }
  })

)


for (let i in dels) // supprimer le produit
{
  dels[i].addEventListener("click",function(){
    PRS[i].remove();
    total()
    
  })

}


for (let m of moins) // reduire nbre de produit 
{
    m.addEventListener("click",function() {
        m.nextElementSibling.innerHTML==0 ?
        
        null :
        m.nextElementSibling.innerHTML--
        total()
    })
}

for (let p of pluss) // Ajout nbre de  produit
{
    p.addEventListener("click",function() {
        p.previousElementSibling.innerHTML++;
        total()
      
    })
}


function total(){

    var qtes = Array.from(document.querySelectorAll('.nb-art'));
    var prixs = Array.from(document.querySelectorAll(".prix"));

    var s=0;

    for( let i=0 ; i < qtes.length ; i++)
    {
        s=s+qtes[i].innerHTML*prixs[i].innerHTML;
        document.getElementById("Nb-pannier").innerHTML = s;


    }



}


















   