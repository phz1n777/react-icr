import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false); //

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
    <div class="flex flex-col items-center justify-center mt-64">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Faça Login</h1>
        <div class="flex justify-center mt-8">
          <GoogleLogin
            clientId='342431898176-k90oga2r9t0fq0jblqhrjt15ki8s4le0.apps.googleusercontent.com'
            buttonText='Continuar com o Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className='w-full'
          />
        </div>
        {isLoggedIn ? (
          <div class="mt-8 text-center">
            <h1 class="text-xl font-semibold">Informação do Usuário</h1>
            <img className="w-24 h-24 rounded-full mx-auto mt-4" src={profilePic} alt='Profile' />
            <p class="mt-4 text-lg">Name: {name}</p>
            <p class="mt-2 text-lg">Email: {email}</p>
          </div>
        ) : ''}
      </div>
    </div>

  );
};

export default App;