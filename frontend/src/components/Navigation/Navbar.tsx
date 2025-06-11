import styles from './Navbar.module.css';
import React, { useState } from 'react';

interface NavbarProps {
onLoginClick: () => void;
onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onRegisterClick }) => {
const [isAfishaDropdownOpen, setAfishaDropdownOpen] = useState(false);

const categories = [
  { id: 'cinemas', name: 'Кинотеатры' },
  { id: 'master-classes', name: 'Мастер-классы' },
  { id: 'theatre', name: 'Театры' },
  { id: 'exhibitions', name: 'Выставки' },
  { id: 'concerts', name: 'Концерты' }
];

return (
  <nav className={styles.navbar}>
    <div className={styles.dropdown}>
      <button 
        onClick={() => setAfishaDropdownOpen(!isAfishaDropdownOpen)}
        className={styles.dropbtn}
      >
        АФИША
      </button>
      {isAfishaDropdownOpen && (
        <div className={styles.dropdownContent}>
          <input 
            type="text" 
            placeholder="Поиск..." 
            className={styles.searchInput}
          />
          <div className={styles.categoryButtons}>
            {categories.map(category => (
              <button 
                key={category.id} 
                onClick={() => {/* Открытие попапа категории */}}
              >
                {category.name}
              </button>
            ))}
          </div>
          <button onClick={() => {/* Логика добавления события */}}>
            Добавить мероприятие
          </button>
        </div>
      )}
    </div>

    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>ВОЙТИ НА САЙТ</button>
      <div className={styles.dropdownContent}>
        <button onClick={onLoginClick}>Авторизация</button>
        <button onClick={onRegisterClick}>Регистрация</button>
      </div>
    </div>
  </nav>
);
};

export default Navbar;