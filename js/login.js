// console.log('loing for button js')


// search: from submit reloading the page--> 

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

   const phoneNumber = document.getElementById('phone-number').value;
   const pinNumber = document.getElementById('pin-number').value;
   console.log(phoneNumber,pinNumber);
   if(phoneNumber=='5' &&pinNumber=='123'){
    console.log('you are logged in');
    window.location.href = '/home.html';
   }
   else{
    alert('wrong number or pin');
   }
})