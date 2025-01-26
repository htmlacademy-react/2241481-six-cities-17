import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleFavorite } from '../../store/action-api';
import { selectAuthorizationStatus } from '../../store/user-slice/selectors';
import { AppRoute, AuthorizationStatus } from '../consts';
import FAVORITES_OPTIONS_MAP from './favorites-button-options';
import { getFavoriteStatusById } from '../../store/favorites-slice/selectors';

type Props = {
    offerId: string;
    type: string;
}

function FavoritesButton({offerId, type}: Props):JSX.Element{
  const options = FAVORITES_OPTIONS_MAP[type];
  const authorizedStatus = useAppSelector(selectAuthorizationStatus);
  const isAuthorized = authorizedStatus === AuthorizationStatus.Auth;
  const isFavorite = useAppSelector((state) => getFavoriteStatusById(state, offerId));
  const disptch = useAppDispatch();
  const navigate = useNavigate();

  const buttonClickHandler = () =>{
    if (isAuthorized){
      disptch(toggleFavorite({offerId: offerId, wasFavorite: isFavorite}));
    } else {
      navigate(AppRoute.LogIn);
    }
  };

  return (
    <button
      className={(isFavorite && isAuthorized) ? options.buttonClassActive : options.buttonClass}
      type="button"
      onClick= {buttonClickHandler}
    >
      <svg className={options.svgClass} width={options.width} height={options.height}><use xlinkHref="#icon-bookmark"></use></svg>
      <span className="visually-hidden">{options.text}</span>
    </button>
  );
}

export default FavoritesButton;
