import FAVORITES_OPTIONS_MAP from './favorites-button-options';

type Props = {
    type: string;
}

function FavoritesButton({type}: Props):JSX.Element{
  const options = FAVORITES_OPTIONS_MAP[type];
  return (
    <button
      className={options.buttonClass}
      type="button"
    >
      <svg className={options.svgClass} width={options.width} height={options.height}><use xlinkHref="#icon-bookmark"></use></svg>
      <span className="visually-hidden">{options.text}</span>
    </button>
  );
}

export default FavoritesButton;
