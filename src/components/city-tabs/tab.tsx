import { memo, MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { changeCity } from '../../store/action';
import { useAppDispatch } from '../../hooks';

type Props = {
    cityName: string;
    isActive: boolean;
}

function Tab({cityName, isActive}: Props): JSX.Element{
  const dispatch = useAppDispatch();
  const cityTabClickHandler = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
  }, [cityName, dispatch]);

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive ? ' tabs__item--active' : ''}`}
        to="#"
        onClick={(evt)=> cityTabClickHandler(evt)}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
const MemorizedTab = memo(Tab);
export { MemorizedTab as Tab} ;

