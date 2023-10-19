import React, { useState, useEffect } from "react";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from "@env";
import SInfo from "react-native-sensitive-info";
import Auth0 from "react-native-auth0";
import jwtDecode from "jwt-decode";

const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
});

const AuthContext = React.createContext();

const AuthContextProvider = (props) => { 

    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(null);
    const [userData, setUserData] = useState(null);

    const getUserData = async id => {
        const idToken = id ? id : await SInfo.getItem('idToken', {});
        const {name, picture, exp, sub} = jwtDecode(idToken);

        //get the provider name and id from the jwtToken
        const arrSub = sub.split('|')  
        const providerType = arrSub[0];
        const providerId = arrSub[1];

        //If there is a token set the loading to false
        if(idToken){
          setLoading(false);
        }

        if (exp < Date.now() / 1000) {
          throw new Error('ID token expired!');
        }
    
        return {
          name,
          picture,
          providerId,
          providerType
        };
      };


      // Executed whenever the component is rendered
      useEffect(() => {
        (async () => {
          try {
            const user_data = await getUserData();
            if (user_data) {
              setLoggedIn(true);
              setUserData(user_data);
            }
          } catch (err) {
            setLoggedIn(false);
            //If the user is not logged in redirect them to the login page
            login();
          }
        })();
      }, []);

    // Executed just after the user logs in
    useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const user_data = await getUserData();
          if (user_data) {
            setLoggedIn(true);
            setUserData(user_data);
          }
        }
      } catch (err) {
        alert('Error logging in');
      }
    })();
  }, [loggedIn]);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      await SInfo.setItem('idToken', credentials.idToken, {});
      const user_data = await getUserData(credentials.idToken);
      setLoggedIn(true);
      setUserData(user_data);
    } catch (err) {
      alert('Error logging in');
    }
  };

  const logout = async () => {
    try {
      setLoggedIn(false);
      setUserData(null);
      setLoading(true);

      await auth0.webAuth.clearSession({});
      await SInfo.deleteItem('idToken', {});
      //If the user is not logged in redirect them to the login page
      login();
    } catch (err) {
      alert('Error logging in');
    }
  };

  const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };