
import MainPage from '../pages/main/mainPage';

type AppProps = {offersCount: number};

export default function App(props: AppProps): JSX.Element{
  return (
    <MainPage offersCount={props.offersCount}/>
  );
}
