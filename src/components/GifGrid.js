import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async() => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=SehYrvVMKCk9VRuh9nyEK2w66JLEITpL&q=onepunchman&limit=10';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };
    });

    setImages(gifs);
  };

  return (
    <div>
      <h3>{ category }</h3>
      {
        images.map(img =>
          <GifGridItem
            key={img.id}
            {...img}
          />
        )
      }
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string
};
