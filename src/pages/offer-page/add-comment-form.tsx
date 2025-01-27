import { ChangeEvent, memo, useState } from 'react';
import { RATING_THRESHOLD, REVIEW_THRESHOLD } from '../../components/consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postComment } from '../../store/action-api';
import { OfferType } from '../../types/offer-type';
import { PostCommentType } from '../../types/comment-type';
import { Rating } from './rating-block';
import SubmitTip from './submit-tip';
import { selectIsCommentsRequestRunning } from '../../store/comments-slice/selectors';

type ReviewFormDataType = {
    review: string;
    rating: number;
}

type Props = {
  offer: OfferType | null;
  onAddComment: () => void;
}

function AddCommentForm({offer, onAddComment}: Props): JSX.Element {

  const initialState: ReviewFormDataType = {
    review: '',
    rating: 0
  };

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<ReviewFormDataType>(initialState);
  const isRequestRunning = useAppSelector(selectIsCommentsRequestRunning);

  const isValidRating = formData.rating >= RATING_THRESHOLD.MIN && formData.rating <= RATING_THRESHOLD.MAX;
  const isValidReview = formData.review.length > REVIEW_THRESHOLD.MIN && formData.review.length < REVIEW_THRESHOLD.MAX;
  const isDataValid = isValidReview && isValidRating;

  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      review: e.target.value,
    }));
  };

  const handleRatingChange = (value: number) => {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleSubmitForm = (e: ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const commentPayload: PostCommentType = {
      comment: formData.review,
      rating: formData.rating
    };

    dispatch(postComment({
      offerId: offer?.id ?? '',
      payload: commentPayload
    })).then((response)=>{
      if (response.meta.requestStatus === 'fulfilled'){
        onAddComment();
        setFormData(initialState);
      }
    });
  };

  return(
    <form onSubmit={handleSubmitForm} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating
        value={formData.rating}
        onChangeHandler={handleRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(e)=>handleReviewChange(e)}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        {!isDataValid && <SubmitTip />}
        <button className="reviews__submit form__submit button" type="submit" disabled={!isDataValid || isRequestRunning} >Submit</button>
      </div>
    </form>
  );
}

const MemoizedAddCommentForm = memo(AddCommentForm);
export { MemoizedAddCommentForm as AddCommentForm };
export type {ReviewFormDataType};
