import { OfferCard } from '../../components/offerCard';
import { OfferPreviewType } from '../../types/offer-type';
import { Link } from 'react-router-dom';

type Props = {
    cityName: string;
    offers: OfferPreviewType[];
}

function FavoriteGroup({cityName, offers}:Props): JSX.Element{
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map(
          (offerItem)=><OfferCard offer={offerItem} key={offerItem.id} isNearByCard={false}/>
        )};
      </div>
    </li>
  );
}

export default FavoriteGroup;
