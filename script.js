let random = Math.floor(Math.random() * 6) + 1
console.log(random)


document.getElementById('1').addEventListener('click', function() {
      
   let Button1 = Number(this.value)
   console.log(Button1)
   if(Button1 === random){
      alert('Ты угадал')
   }
   else{
      alert('ты не угадал')
   }
})
document.getElementById('2').addEventListener('click', function() {
   
   let Button2 = Number(this.value)
   console.log(Button2)
   if(Button2 === random){
      alert('Ты угадал')
   }
   else{
      alert('ты не угадал')
   }
})
document.getElementById('3').addEventListener('click', function() {
   
   let Button3 = Number(this.value)
   console.log(Button3)
   if(Button3 === random){
      alert('Ты угадал')
   }
   else{
      alert('ты не угадал')
   }
})
document.getElementById('4').addEventListener('click', function() {
   
   let Button4 = Number(this.value)
   console.log(Button4)
   if(Button4 === random){
      alert('Ты угадал')
   }
   else{
      alert('ты не угадал')
   }
})
document.getElementById('5').addEventListener('click', function() {
   
   let Button5 = Number(this.value)
   console.log(Button5)
   if(Button5 === random){
      alert('Ты угадал')
   }
   else{
      alert('ты не угадал')
   }
})
document.getElementById('6').addEventListener('click', function() {
   
   let Button6 = Number(this.value)
   console.log(Button6)
   if(Button6 === random){
      alert('Ты угадал')
   }
   else{
      alert('ты не угадал')
   }
})

document.getElementById('reloadButton').addEventListener('click', function() {
   location.reload();
});