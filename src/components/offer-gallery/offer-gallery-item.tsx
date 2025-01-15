type Prop = {
    imgPath: string;
}

function OfferGalleryItem({imgPath}: Prop): JSX.Element{
  return(
    <div className="offer__image-wrapper">
      <img className="offer__image" src={imgPath} alt="Photo studio" />
    </div>
  );
}

export default OfferGalleryItem;
