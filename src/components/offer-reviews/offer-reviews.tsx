import { useAppSelector } from '../../hooks';
import AddCommentForm from '../../pages/offer-page/add-comment-form';
import ReviewType from '../../types/reivew-type';
import { selectAuthorizationStatus, selectOffer } from '../../types/store/selectors';
import { AuthorizationStatus } from '../consts';
import ReviewItem from './offer-review-item';

type Props = {
    reviews: ReviewType[];
}

function OfferReviewsList({reviews}: Props): JSX.Element{
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const currentOffer = useAppSelector(selectOffer);

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map(
          (reviewItem) => <ReviewItem review={reviewItem} key={reviewItem.id}/>
        )}
      </ul>
      {isAuthorized && <AddCommentForm offer={currentOffer}/>}
    </section>
  );
}

export default OfferReviewsList;
