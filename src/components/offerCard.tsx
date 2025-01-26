import { OfferPreviewType } from '../types/offer-type';
import { Link } from 'react-router-dom';
import { AppRoute } from './consts';
import { memo } from 'react';
import FavoritesButton from './common/favorites-button';

 type Props = {
   offer: OfferPreviewType ;
   onActiveOfferCardChanged?: (id: string | null) => void;
   isNearByCard: boolean;
}

function OfferCard({offer, onActiveOfferCardChanged, isNearByCard = false}: Props): JSX.Element {
  const offerRout = AppRoute.Offer.replace(':id', offer.id);
  const articleClass = isNearByCard ?
    'near-places__card place-card' :
    'cities__card place-card';

  const imageWrapperClass = isNearByCard ?
    'cities__image-wrapper place-card__image-wrapper' :
    'near-places__image-wrapper place-card__image-wrapper';

  return (
    <article className={articleClass}
      onMouseEnter={() => onActiveOfferCardChanged && onActiveOfferCardChanged(offer.id)}
      onMouseLeave={ () => onActiveOfferCardChanged && onActiveOfferCardChanged(null)}
    >
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        null }
      <div className={imageWrapperClass}>
        <Link to={offerRout}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton
            offerId={offer.id}
            type={isNearByCard ? 'NearBy' : 'OfferCard'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerRout}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

const MemoizedOfferCard = memo(OfferCard);
export {MemoizedOfferCard as OfferCard};
