// selectionner le champs de formulaire 
const backgroundColor1 = document.querySelector("#background1")
const backgroundColor2 = document.querySelector("#background2")
const backgroundColor3 = document.querySelector("#background3")
// recuper la valeur de formulaire (la couleur)

let num1
backgroundColor1.addEventListener("input", ()=>{
   num1 = backgroundColor1.value ;
   console.log(num1)
})
let num2
backgroundColor2.addEventListener("input", ()=>{
   num2 = backgroundColor2.value ;
   console.log(num2)
})
let num3
backgroundColor3.addEventListener("input", ()=>{
   num3 = backgroundColor3.value ;
   console.log(num3)
})

document.querySelector("form").addEventListener("submit", (event) => {
 event.preventDefault(); 
  // mettre la valeur recuperee comme couleur de fond d'ecran 
document.body.style=`background:rgb(${num1},${num2}, ${num3});`

});  

