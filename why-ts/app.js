// api url
var url = 'https://jsonplaceholder.typicode.com/users/';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * 
 * @typedef {object} Address
 * @property {string} city
 */
/**
 * @typedef {object} user
 * @property {string} name
 * @property {string} email
 * @property {Address} address 
 **/

/**
 * @returns{Promise<user>}
 **/
function fetchUser(){
  return axios.get(url)
}

fetchUser().then(function (response){
  response.address.city
})
// function startApp() {
//   fetchUser()
//     .then(function (response) {
//       // console.log(response);
//       user = response.data;
//       // TODO: 이름, 이메일, 주소 표시하기
//       console.log(user)
//       username.innerText=user[0].name;
//       email.innerText=user[0].email;
//       address.innerText=user[0].address.city;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// startApp();
