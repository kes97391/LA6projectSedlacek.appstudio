
btnAdd.onclick=function(){
  int1 = parseInt(inptValueOne.value)
  int2 = parseInt(inptValueTwo.value)
  lblDisplay.value = int1 + int2
}

btnMult.onclick=function(){
  int1 = parseInt(inptValueOne.value)
  int2 = parseInt(inptValueTwo.value)
  lblDisplay.value = int1 * int2
}


btnClear.onclick=function(){
  lblDisplay.value = ""
}
