import React, { useState } from 'react';

// Интерфейс для пропсов попапа
interface RegisterPopupProps {
  onClose: () => void;
}

const RegisterPopup: React.FC<RegisterPopupProps> = ({ onClose }) => {
  // Состояния для полей регистрации
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // Обработчик submit формы регистрации
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Базовная валидация
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    // Логика регистрации
    console.log('Регистрация:', { username, email, password });
    
    // Закрытие попапа после регистрации
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Регистрация</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Имя пользователя</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>

          <div>
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div>
            <label>Пароль</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div>
            <label>Подтвердите пароль</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>

          <div className="popup-actions">
            <button type="submit">Зарегистрироваться</button>
            <button type="button" onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPopup;
