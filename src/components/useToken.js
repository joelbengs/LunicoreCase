//A custom hook for login
import { useState } from 'react';

export default function useToken() {
    //collects the token from sessionStorage
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token //optional chaining because undefined at first login
      }

    //connects our custom hook to useState hook
    const [token, setToken] = useState(getToken()); //inital state = sessionstorage

    //Save token in storage AND update state to trigger rerender
    const saveToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    //returns a value and a function to change that value, just as any hook would
    return {
        setToken: saveToken, //name "setToken" contains function saveToken, so the user can se normal naming conventions.
        token
      }
  }