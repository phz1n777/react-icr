import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    if (response.profileObj) {
      const { profileObj: { name, email, imageUrl } } = response;
      setName(name);
      setEmail(email);
      setProfilePic(imageUrl);
      setIsLoggedIn(true);
    } else {
      console.error('Google login failed:', response);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId='342431898176-k90oga2r9t0fq0jblqhrjt15ki8s4le0.apps.googleusercontent.com'
        buttonText='Continuar com o Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      { isLoggedIn ? (
        <div>
          <h1>Informação do Usuário</h1>
          <img className="profile" src={profilePic} alt='Profile' />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      ) : '' }
    
    </div>
  );
};

export default App;