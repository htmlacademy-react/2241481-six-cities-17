import { TailSpin } from 'react-loader-spinner';
import { spinnerStyle } from '../../types/style-types';

function Spinner():JSX.Element{
  return (
    <div style={spinnerStyle}>
      <TailSpin
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Spinner;
