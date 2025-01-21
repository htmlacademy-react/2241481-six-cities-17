import Star from './star';

type Props = {
    value: number;
    onChangeHandler: (e: number) => void;
}

function Rating({value, onChangeHandler}: Props): JSX.Element{
  return(
    <div className="reviews__rating-form form__rating">
      {Array.from(Array(5).keys()).reverse().map((index) => {
        const starIndex = index + 1;
        return (
          <Star
            index ={starIndex}
            isChecked={value === starIndex}
            key={starIndex}
            onChangeHandler={onChangeHandler}
          />);
      })}
    </div>
  );
}

export default Rating;
