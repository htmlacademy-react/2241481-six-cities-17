import { Fragment, memo } from 'react';
import { RATIMG_MAP } from '../../components/consts';

type Props = {
    index: number;
    isChecked: boolean;
    onChangeHandler: (e: number) => void;
}

function Star({onChangeHandler, index, isChecked}: Props): JSX.Element{
  return(
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={index}
        id={`${index}-stars`}
        checked={isChecked}
        type="radio"
        onChange={() => onChangeHandler(index)}
      />
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={RATIMG_MAP[index]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

const MemoizedStar = memo(Star);
export {MemoizedStar as Star};
