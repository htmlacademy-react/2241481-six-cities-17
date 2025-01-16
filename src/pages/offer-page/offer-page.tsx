import { useParams } from 'react-router-dom';
import Map from '../../components/map/map';
import { HostType } from '../../types/offer-type';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CITIES_MAP from '../../data/cities';
import { fetchComments, fetchNearByOffers, fetchOffer } from '../../store/action-api';
import { useEffect } from 'react';
import { selectComments, selectCurrentCity, selectIsOfferDataLoading, selectNearBys, selectOffer, selectOffers } from '../../types/store/selectors';
import Header from '../../components/common/header';
import Spinner from '../../components/spinner/spinner';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferReviewsList from '../../components/offer-reviews/offer-reviews';
import HostUser from '../../components/host-user/host-user';
import OfferGoods from '../../components/offer-goods/offer-goods';
import NearByPlaces from '../../components/offer-near-by-places/offer-near-by-places';
import { convertToOfferPreview } from '../../utils/utils';

export default function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isOfferDataLoading = useAppSelector(selectIsOfferDataLoading);

  const {id} = useParams<{id: string}>();
  const offerId = id ?? '';

  useEffect(() => {
    if (offerId){
      dispatch(fetchOffer(offerId));
      dispatch(fetchComments(offerId));
      dispatch(fetchNearByOffers(offerId));
    }

  }, [offerId, dispatch]);

  const emptyHost: HostType = {name: 'unknown host', avatarUrl: '', isPro: false};
  const currentCity = useAppSelector(selectCurrentCity);
  const offer = useAppSelector(selectOffer);
  const comments = useAppSelector(selectComments);
  const nearBysFull = useAppSelector(selectNearBys);
  const nearBysCropped = nearBysFull?.slice(0, 3) ?? [];
  const nearBysCorppedWithActive = [...nearBysCropped];

  if (offer){
    nearBysCorppedWithActive.push(convertToOfferPreview(offer));
  }

  return (
    <div className="page">
      <Header showUserLogin />
      {isOfferDataLoading && <Spinner />}
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer?.isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> :
                null }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer?.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${offer?.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${offer?.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferGoods goods={offer?.goods ?? []}/>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <HostUser host={offer?.host ?? emptyHost} />
                <div className="offer__description">
                  <p className="offer__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <OfferReviewsList reviews={comments} />
            </div>
          </div>
          <Map city={CITIES_MAP[currentCity]} offers={nearBysCorppedWithActive} activeOfferId={offer?.id ?? null} className='offer__map map' />
        </section>
        <div className="container">
          <NearByPlaces places={nearBysCropped}/>
        </div>
      </main>
    </div>
  );
}
