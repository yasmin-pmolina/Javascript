import axios, {isCancel, AxiosError} from 'axios';

axios.get("https://pokeapi.co/api/v2/pokemon-form/132/")
.then( resp => {
  console.log(resp)
})
.catch( error => {
  console.log(error)
})


