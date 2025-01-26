import { OfferPreviewType } from '../../types/offer-type';
import { groupByCityName } from '../../utils/utils';
import FavoriteGroup from './favorites-group';

type Props = {
  favorites: OfferPreviewType[];
}

function FavoritesContainer({favorites}: Props):JSX.Element{
  const favoritesGroups: Record<string, OfferPreviewType[]> = groupByCityName(favorites);
  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoritesGroups).map(
              ([city, offers]) => <FavoriteGroup cityName={city} offers={offers} key={city}/>
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesContainer;
