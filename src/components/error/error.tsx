import { CSSProperties } from 'react';

// const errorStyle: CSSProperties = {
//   position: 'fixed', // Фиксируем на экране
//   top: 0,
//   left: 0,
//   width: '100vw', // Растягиваем на всю ширину окна
//   height: '100vh', // Растягиваем на всю высоту окна
//   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный черный фон
//   display: 'flex', // Используем flexbox для центрирования
//   justifyContent: 'center',
//   alignItems: 'center',
//   zIndex: 1000, // Устанавливаем высокий z-index, чтобы перекрывать другие элементы
// };

const errorStyle1: CSSProperties = {
  position: 'fixed',
  top: '30px',
  right: '30px',
  padding: '10px',
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '5px'
};

type Props = {
  error: string | null;
}

function ErrorBlock({error}: Props): JSX.Element | null{
  return(
    error ? <div style={errorStyle1}>{error}</div> : null
  );
}

export default ErrorBlock;
