import { CSSProperties } from 'react';
import { TailSpin } from 'react-loader-spinner';


const overlayStyle: CSSProperties = {
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

function Spinner():JSX.Element{
  return (
    <div style={overlayStyle}>
      <TailSpin
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Spinner;
