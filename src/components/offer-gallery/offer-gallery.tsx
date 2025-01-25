import { useAppSelector } from '../../hooks';
import { selectOffer } from '../../store/offer-slice/selectors';
import OfferGalleryItem from './offer-gallery-item';

function OfferGallery(): JSX.Element{
  const offer = useAppSelector(selectOffer);
  return(
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offer?.images.map(
          (image)=> <OfferGalleryItem imgPath={image} key={image}/>)}
      </div>
    </div>
  );
}

export default OfferGallery;
