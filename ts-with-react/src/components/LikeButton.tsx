import React, { useState, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    const positions = useMousePosition()
    useEffect(
        () => {
            console.log('document title effect is running')
            document.title = `点击了多少次${ like }`
        }, [like]
    )

    return ( 
       <>
        <p>X: {positions.x}, Y: {positions.y}</p>
        <button onClick={() => {setLike(like + 1)}}>
            { like } 棒棒的
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'ON' : 'OFF' }
        </button>
       </>
    )
}

export default LikeButton;
