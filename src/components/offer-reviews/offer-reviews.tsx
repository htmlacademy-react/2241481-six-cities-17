import AddCommentForm from '../../pages/offer/addCommentForm';
import reviewType from '../../types/reivew-type';
import ReviewItem from './offer-review-item';

type Props = {
    reviews: reviewType[];
}

function OfferReviwesList({reviews}: Props): JSX.Element{
  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map(
          (reviewItem) => <ReviewItem review={reviewItem} key={reviewItem.id}/>
        )};
      </ul>
      <AddCommentForm />
    </section>
  );
}

export default OfferReviwesList;
