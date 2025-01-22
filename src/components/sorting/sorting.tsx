import { memo, useEffect, useRef, useState } from 'react';
import { SortItem } from '../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSortingType } from '../../types/store/selectors';
import { setSotringType } from '../../store/app-slice/app-slice';

function PlacesSorting(): JSX.Element{
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const sortRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(selectSortingType);

  useEffect(()=>{
    const hideSortList = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement && sortRef.current && !sortRef.current.contains(evt.target)){
        setIsMenuOpened(false);
      }
    };
    document.addEventListener('click', hideSortList);

    return () =>{
      document.removeEventListener('click', hideSortList);
    };
  }, []);

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        ref={sortRef}
        tabIndex={0}
        onClick={() => setIsMenuOpened((lastOpened) => !lastOpened)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref ="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isMenuOpened ? ' places__options--opened' : ''}`}>
        {Object.values(SortItem).map((item)=>(
          <li className={`places__option${item === currentSort ? ' places_option--active' : ''}`}
            key={item}
            onClick={() => dispatch(setSotringType(item))}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}
const MemorizedPlaceSorting = memo(PlacesSorting);
export {MemorizedPlaceSorting as PlacesSorting};

