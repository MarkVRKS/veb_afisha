import styles from './LoginPopup.module.css';
import React, { useState } from 'react';

interface LoginPopupProps {
onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Логика авторизации
  console.log('Login attempt', { username, password });
};

return (
  <div className={styles.overlayContainer}>
    <div className={styles.popupBox}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label htmlFor="loginName">Имя пользователя:</label>
        <input 
          type="text"
          placeholder="Введите ваше имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />

        <label htmlFor="loginPassword">Пароль:</label>
        <input 
          type="password"
          placeholder="Введите ваш пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />

        <button type="submit">Подтвердить</button>
      </form>
      <button onClick={onClose}>Закрыть</button>
    </div>
  </div>
);
};

export default LoginPopup;