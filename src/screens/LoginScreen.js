import React from 'react';

import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img 
          className='loginScreen__logo'
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
          alt="" 
        />
        <button 
          className='loginScreen__button'
        >
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          <>
            <h1>Фильмы, сериалы и многое другое без ограничений.</h1>
            <h2>Смотрите где угодно. Отменить подписку можно в любое время.</h2>
            <h3>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</h3>
            <div className="loginScreen__input">
              
            </div>
          </>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
