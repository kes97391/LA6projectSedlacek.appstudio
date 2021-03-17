
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnSubmitName.onclick=function(){
  if (members.includes(inptEnterName.value)) {
  lblDisplayName.value = "You are already a member!"
} else { 
  members.push(inptEnterName.value)
  lblDisplayName.value = "You have been added as a member!"}
}


