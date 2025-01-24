import { Link } from 'react-router-dom';
import { OfferPreviewType } from '../../types/offer-type';
import FavoritesButton from '../common/favorites-button';

type Prop = {
    item: OfferPreviewType;
}

function NearByItem({item}: Prop): JSX.Element{
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={item.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{item.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton type={'NearBy'}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{item.title}</Link>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
}

export default NearByItem;
