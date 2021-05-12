import axios from 'axios';


// function that takes in the token, if the token is there, send it to the header, if not, then delete
const setAuthToken = token => {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;

    } else {
      delete axios.defaults.headers.common['x-auth-token'];
    }
  };
  
  export default setAuthToken;