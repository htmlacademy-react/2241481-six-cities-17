import { CSSProperties } from 'react';

const spinnerStyle: CSSProperties = {
  position: 'fixed', // Фиксируем на экране
  top: 0,
  left: 0,
  width: '100vw', // Растягиваем на всю ширину окна
  height: '100vh', // Растягиваем на всю высоту окна
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный черный фон
  display: 'flex', // Используем flexbox для центрирования
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000, // Устанавливаем высокий z-index, чтобы перекрывать другие элементы
};

export {spinnerStyle};
