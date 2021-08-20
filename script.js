// console.log(document)
// console.log(document.getElementsByClassName("plus"))
// console.log(document.querySelector("#total"))
// console.log(document.getElementById("total"))
// console.log(document.getElementsByTagName("img"))
const btnAddTag=document.getElementsByClassName("plus");
const checktag=document.getElementsByClassName("check")
// console.log(checkTag)
for (var i=0;i<btnAddTag.length;i++){
    btnAddTag[i].addEventListener("click",add)
    checktag[i].addEventListener("click",total)
};
function add(event){
// console.log(event)
var btnAdd=event.target;
// console.log(btnAdd)
var divElt=btnAdd.parentElement;
// console.log(divElt)
var quentityTag=divElt.querySelector("p");
// console.log(quentity)
var quentity=Number(quentityTag.innerHTML);
// console.log(typeof(quentity))
quentity++;
// console.log(quentity)
quentityTag.innerHTML=quentity;
var trElt=divElt.parentElement.parentElement
// console.log(trElt)
var unitePrice=Number(trElt.querySelector(".unitPrice").innerHTML)
// console.log(typeof(unitePrice))
var priceTag=trElt.querySelector(".price")
// console.log(priceTag)
var price =Number(priceTag.innerHTML)

price=quentity*unitePrice
// console.log(price)
priceTag.innerHTML=price
};
function total(e){
// console.log(e)
var checktag=e.target;
//console.log(checktag)
var price= Number(checktag.parentElement.parentElement.querySelector(".price").innerHTML)
// console.log(price)
var totaltag =document.querySelector("#total")

var total = Number(totaltag.innerHTML)
//console.log(total)
if(checktag.checked===true){
    total+=price
//console.log(total);
}else{
    total-=price
}
totaltag.innerHTML=total
var btnAddTag=checktag.parentElement.parentElement.querySelector(".plus")
var btnaddminus=checktag.parentElement.parentElement.querySelector(".minus")
if(checktag.checked===true){
    btnAddTag.setAttribute("disabled",true)
}else{btnaddminus.RemoveAttribute}
if(checktag.checked===true){
    btnaddminus.setAttribute("disabled",true)
}else{btnaddminus.RemoveAttribute}

}

const btnaddminus=document.getElementsByClassName("minus");
//.console.log(btnaddminus)
for (var i=0;i<btnaddminus.length;i++){
    btnaddminus[i].addEventListener("click",minus)
};
function minus(event){
   //. console.log(event)
   var btnAdd=event.target;
  //. console.log(btnAdd)
  var divElt=btnAdd.parentElement;
 //. console.log(divElt)
 var quentityTag=divElt.querySelector("p");
//. console.log(quentity)
var quentity=Number(quentityTag.innerHTML);
//.console.log(typeof(quentity))
if(quentity>0){
quentity--;
}
//.console.log(quentity)
quentityTag.innerHTML=quentity;
var trElt=divElt.parentElement.parentElement
//.console.log(trElt)
var unitePrice=Number(trElt.querySelector(".unitPrice").innerHTML)
//.console.log(typeof(unitePrice))
var priceTag=trElt.querySelector(".price")
//.console.log(priceTag)
var price =Number(priceTag.innerHTML)
price=quentity*unitePrice
//.console.log(price)
priceTag.innerHTML=price
};
var btndelete =document.querySelectorAll(".delete")
//console.log(btndelete);
for(i=0;i<btndelete.length;i++){
    btndelete[i].addEventListener("click",function boutondelete(e){
        btndelete=e.target
       //console.log(btndelete);
       var tr=btndelete.parentElement.parentElement.parentElement
       //console.log(tr);
       var tr2=tr.parentElement
      // console.log(tr2);     
        tr2.remove()
    }) 
}
var btnlike =document.querySelectorAll(".like")

//console.log(btnlike);
for(j=0 ;j<btnlike.length ; j++)
{
    var likeboton=btnlike[j]
    console.log(likeboton);
    likeboton.addEventListener("click",function boutonlike(e){
      var boton =e.target
        
        boton.style.color ='red'
        })
        
}
