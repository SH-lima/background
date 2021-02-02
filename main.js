// selectionner le champs de formulaire 
const backgroundColor = document.querySelector("#background")
// recuper la valeur de formulaire (la couleur)
backgroundColor.addEventListener("input", ()=>{
  let couleur = backgroundColor.value 
  console.log(couleur)
  // mettre la valeur recuperee comme couleur de fond d'ecran 
  document.body.style=`background:${couleur};`
})

