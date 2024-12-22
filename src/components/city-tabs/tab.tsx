import { Link } from 'react-router-dom';

type Props = {
    cityName: string;
    isActive: boolean;
}

function Tab({cityName, isActive}: Props): JSX.Element{
  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive ? ' tabs__item--active' : ''}`} to="#">
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

export default Tab;
