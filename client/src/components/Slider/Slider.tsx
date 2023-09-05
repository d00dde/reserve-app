import { useState } from 'react';
import style from './Slider.module.css'

type TProps = {
  source: string[],
  isCircle?: boolean,
}

export function Slider ({ source, isCircle = true }: TProps) {
  const [current, setCurrent] = useState(0);
  const clickHandler = (change: 1 | -1)=>{
    setCurrent((prev)=> {
      if(prev + change < 0) return isCircle ? source.length - 1 : 0;
      if(prev + change > source.length - 1) return isCircle ? 0 : source.length - 1;
      return prev + change;
    })
  }
  return(
    <div className={style.slider}>
      <figure className={style.slide}>
        <img src={source[current]} alt={`photo#${current}`}/>
      </figure>
      <div
        className={style.btnLeft}
        onClick={()=> clickHandler(-1)}
      ></div>
      <div
        className={style.btnRight}
        onClick={()=> clickHandler(1)}
      ></div>
    </div>
  )
}
