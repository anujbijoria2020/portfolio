'use client'
import React, { useEffect, useState } from 'react'
import { SmoothCursor } from './ui/smooth-cursor';

const DesktopCursorWrapper = () => {
    const [isDesktop, setIsDesktop]  = useState(false);
    
    useEffect(()=>{
        const checkDesktop = ()=>{
            setIsDesktop(window.innerWidth>1025);
        }
        checkDesktop();
        window.addEventListener('resize',checkDesktop);

        return ()=>{
            window.removeEventListener('resize',checkDesktop);
        }
    },[]);

  if(!isDesktop) return null;
 return <SmoothCursor/>
}

export default DesktopCursorWrapper

