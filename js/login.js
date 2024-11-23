// console.log('loing for button js')


// search: from submit reloading the page--> 

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
   console.log('loing button click') 

   const phoneNumber = document.getElementById('phone-number').value;
   console.log(phoneNumber);
})