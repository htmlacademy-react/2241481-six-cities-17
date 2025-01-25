type FavoritesOptionsType = {
  buttonClass: string;
  buttonClassActive: string;
  svgClass: string;
  width: number;
  height: number;
  text: string;
}

const FAVORITES_OPTIONS_MAP: { [key: string]: FavoritesOptionsType } = {
  OfferCard: {
    buttonClass: 'place-card__bookmark-button button',
    buttonClassActive: 'place-card__bookmark-button place-card__bookmark-button--active button',
    svgClass: 'place-card__bookmark-icon',
    width: 18,
    height: 19,
    text: 'To bookmarks'
  },
  Offer: {
    buttonClass: 'offer__bookmark-button button',
    buttonClassActive: 'offer__bookmark-button offer__bookmark-button--active button',
    svgClass: 'offer__bookmark-icon',
    width: 31,
    height: 33,
    text: 'To bookmarks'
  },
  NearBy: {
    buttonClass: 'place-card__bookmark-button button',
    buttonClassActive: 'place-card__bookmark-button place-card__bookmark-button--active button',
    svgClass: 'place-card__bookmark-icon',
    width: 18,
    height: 19,
    text: 'In bookmarks'
  }
};

export default FAVORITES_OPTIONS_MAP;
