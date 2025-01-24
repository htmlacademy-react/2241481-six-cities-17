import CITIES_MAP from '../../data/cities';
import { Tab } from './tab';

type Props = {
    currentCity: string;
}

function CityTabs({currentCity}: Props): JSX.Element{
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(CITIES_MAP).map(
            (name)=>(
              <Tab cityName={name} isActive={name === currentCity} key={name}/>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
