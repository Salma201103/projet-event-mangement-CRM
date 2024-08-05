// axios houa l wijh mta3 l front ye9bel w yab3eth 

import axios from 'axios';

// njibou tri9=serveur mta3 l backend (win l blasa li ta3ti e reponse):
const apiUrl ='http://localhost:5000/users';

// functio bch traja3 l users lkol sous forme JSON 
export async function getAllUsers(){
    // les protocloes mil bachend :get post delete put 
    return await axios.get(`${apiUrl}/getAllUsers`) // instead of axios.get(`http://localhost:5000/users/users`) bch ken tbadel l url matsirich mochkla 
}
// meme principe pour les autres fcts :
export async function deleteUser(id){ 
    return await axios.delete(`${apiUrl}/deleteUser/${id}`) // instead of axios.get(`http://localhost:5000/users/users`) bch ken tbadel l url matsirich mochkla 
}

// Async await: bch ki tabda 7aja feha wa9t yimchi yi5dem l7ajet lo5rin madem hiya tcharjet
