import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { changeCity, setOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterOffers } from '../../utils/utils';
import OfferType from '../../types/offer-type';

type Props = {
    cityName: string;
    isActive: boolean;
}

function Tab({cityName, isActive}: Props): JSX.Element{
  const dispatch = useAppDispatch();
  const offers: OfferType[] = useAppSelector((store) => store.offers);

  const cityTabClickHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const filteredOffers = filterOffers(offers, cityName);
    dispatch(setOffers(filteredOffers));
    dispatch(changeCity(cityName));
  };

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

export default Tab;
