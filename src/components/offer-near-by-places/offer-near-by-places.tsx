import { OfferPreviewType } from '../../types/offer-type';
import NearByItem from '../offer-near-by-item/offer-near-by-item';

type Props = {
    places: OfferPreviewType[];
}

function NearByPlaces({places}: Props):JSX.Element{
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map(
          (item) => <NearByItem item={item} key={item.id}/>
        )}
      </div>
    </section>
  );
}

export default NearByPlaces;
