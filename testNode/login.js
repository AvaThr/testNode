// var fetchData = ( data )=>{
//     fetch('http://localhost:3000/login', {
//         method: 'POST', // or 'PUT'
//         body: data,
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
// }
var fetchData = ( data )=>{
    fetch('https://jsonplaceholder.typicode.com/users ')
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}



var submit = document.getElementById("subBtn") ;




var test = ()=>{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {username , password} ;
    var dataJSON = JSON.stringify(data) ;
    fetchData(dataJSON)

} 
submit.addEventListener('click' , (e)=>{
e.preventDefault();
test()
})