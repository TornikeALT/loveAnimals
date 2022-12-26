import './AnimalShow.css';

import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const animalsImageMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setCliks] = useState(0);
  const handleClicks = () => {
    setCliks(clicks + 1);
  };
  return (
    <>
      <div onClick={handleClicks} className="animal_show">
        <img
          src={animalsImageMap[type]}
          alt="animal image"
          className="animal"
        />

        <img
          src={heart}
          alt="photo"
          style={{ width: 10 + 10 * clicks + 'px' }}
          className="heart"
        />
      </div>
    </>
  );
};

export default AnimalShow;
