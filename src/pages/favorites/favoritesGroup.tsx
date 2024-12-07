import OfferCard from '../../components/offerCard';
import OfferType from '../../types/offerType';

type Props = {
    cityName: string;
    offers: OfferType[];
}

function FavoriteGroup({cityName, offers}:Props): JSX.Element{
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map(
          (offerItem)=><OfferCard offer={offerItem} key={offerItem.id}/>
        )};
      </div>
    </li>
  );
}

export default FavoriteGroup;