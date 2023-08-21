import { useState } from 'react';
import style from './Slider.module.css'
type TProps = {
    source: string[],
    isCircle?: boolean,
}

export function Slider (props: TProps) {
    const {source, isCircle = true} = props;
    const [current, setCurrent] = useState(0);
    const clickHandler = (dir: number)=>{
        setCurrent((prev)=> {
            if(prev+dir < 0) return isCircle ? source.length-1 : 0;
            if(prev+dir > source.length-1) return isCircle ? 0 : source.length-1;
            return prev + dir;
        })
    }
    return(
        <div className={style.slider}>
            <img className={style.content} src={source[current]} alt=''/>
            <div 
                className={style.btnLeft} 
                onClick={()=> clickHandler(-1)}
            >{"<"}
            </div>
            <div 
                className={style.btnRight}
                onClick={()=> clickHandler(1)}
            >{">"}
            </div>
        </div>
    )
}