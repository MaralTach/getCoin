import "./scss/style.scss"
import { getCoins } from "./src/getCoins";

const form = document.querySelector('header form');
// console.log(form);

form.addEventListener('submit',(e) => {
  console.log(e);
  e.preventDefault()
  getCoinData()
  e.target.reset()
})

const getCoinData = () =>{
  const input = document.querySelector('header form input').value;
  console.log(input);
  if(!input.trim()){
    alert('Input should not be empty')
  }else{
    getCoins()
  }
}
