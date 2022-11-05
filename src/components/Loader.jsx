import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <RotatingLines
    strokeColor="#313649"
    strokeWidth="5"
    animationDuration="0.75"
    width="100"
    visible={true}
  />
);
