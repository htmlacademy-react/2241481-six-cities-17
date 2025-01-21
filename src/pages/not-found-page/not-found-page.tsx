import {Link} from 'react-router-dom';


function PageNotFoundPage (): JSX.Element{
  return(
    <>
      <h1>Страница не найдена (ошибка 404)</h1>
      <Link to='/'>Вернуться на главную</Link>
    </>
  );
}

export default PageNotFoundPage;
