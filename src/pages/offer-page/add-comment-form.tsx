import { ChangeEvent, useState } from 'react';
import { RATING_THRESHOLD, REVIEW_THRESHOLD } from '../../components/consts';
import { useAppDispatch } from '../../hooks';
import { postComment } from '../../store/action-api';
import { OfferType } from '../../types/offer-type';
import { PostCommentType } from '../../types/comment-type';
import { convertToRating } from '../../utils/utils';
import ErrorBlock from '../../components/error/error';

type FormDataType = {
    review: string;
    rating: string | null;
}

type Props = {
  offer: OfferType | null;
}

function AddCommentForm({offer}: Props): JSX.Element {

  const initialState: FormDataType = {
    review: '',
    rating: null
  };

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isValidRating = convertToRating(formData.rating) >= RATING_THRESHOLD.MIN && convertToRating(formData.rating) <= RATING_THRESHOLD.MAX;
  const isValidReview = formData.review.length > REVIEW_THRESHOLD.MIN && formData.review.length < REVIEW_THRESHOLD.MAX;
  const isDataValid = isValidReview && isValidRating;

  const handleFormChange = (
    e: ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLInputElement>,
    inputName: keyof FormDataType,
  ) => {
    setFormData((prev)=>({
      ...prev,
      [inputName]: e.target.value
    }));
  };

  const handleSubmitForm = (e: ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault();

    setIsSubmitting(true);
    const commentPayload: PostCommentType = {
      comment: formData.review,
      rating: convertToRating(formData.rating)
    };

    dispatch(postComment({
      offerId: offer?.id ?? '',
      payload: commentPayload
    }))
      .then(()=>{
        setFormData(initialState);
      }).catch((error: Error) =>{
        setSubmitError(error.message);
      }).finally(() => {
        setIsSubmitting(false);
      });
  };

  return(
    <form onSubmit={handleSubmitForm} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={(e)=>handleFormChange(e, 'rating')}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={(e)=>handleFormChange(e, 'rating')}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={(e)=>handleFormChange(e, 'rating')}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={(e)=>handleFormChange(e, 'rating')}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={(e)=>handleFormChange(e, 'rating')}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(e)=>handleFormChange(e, 'review')}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isDataValid || isSubmitting} >Submit</button>
        {submitError && <ErrorBlock error={submitError} />}
      </div>
    </form>
  );
}

export default AddCommentForm;
