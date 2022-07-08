import React, { useCallback, useEffect, useState } from 'react';
import { baeCafeS2, language, baeKey } from './FilterData';

interface FilterProps {}

const GalleryFilter: React.FC<FilterProps> = React.memo(
  function GalleryFilter({}) {
    const generateProperties = (data) =>{
        console.log('data: ', data);
        return Object.keys(data).map((key, index)=>{
            return <div key={index}>{language[key]}({data[key]})</div>
        })
    }
    const generateKey = () => {
      return baeKey.map((item) =>{
        if(baeCafeS2[item]){
          return generateProperties(baeCafeS2[item]);
        }
        return <div key={item}>{item}</div>
      })
    };
    return (<div>{generateKey()}</div>);
  }
);

export default GalleryFilter;
