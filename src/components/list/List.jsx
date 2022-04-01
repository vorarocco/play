// import React, { useState } from 'react'
import './list.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from "react";

function List({list}) {
    const [slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()

    const handleClick = (directions) =>{
        let distance = listRef.current.getBoundingClientRect().x-50

        if(directions=== 'left' && slideNumber > 0){
            setSlideNumber(slideNumber -1);
            listRef.current.style.transform =`translateX(${230 + distance}px)`
        }
        if(directions=== 'right' && slideNumber < 5){
            setSlideNumber(slideNumber +1);
            listRef.current.style.transform =`translateX(${-230 + distance}px)`
        }
    }
  return (
    <div className='list'>
        <span className='listTitle'>{list.title}</span>
        <div className='wrapper'>
            <ArrowBackIosNewIcon className='slideArrow left' onClick={()=>handleClick('left')} />

            <div className='container_list' ref={listRef}>
                {list.content.map((item,i) => (
                <ListItem index={i} item={item} key={item._id}/>
                ))}
            </div>
            <ArrowForwardIosIcon className='slideArrow right' onClick={()=>handleClick('right')} />
        </div>
    </div>
  )
}

export default List 