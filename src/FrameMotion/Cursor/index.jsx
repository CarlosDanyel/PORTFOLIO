import { motion } from "framer-motion";

import style from "./style.module.scss";
import { useEffect, useState } from "react";

const Cursor = () => {

    const [mousePosition, SetMousePosition] = useState({
        x:0,
        y:0
    });

    const [cursorVariant] =  useState("default");

    useEffect(() =>{

        const mouseMove = (e) => {
            SetMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        } 

        window.addEventListener("mousemove", mouseMove);

        return () =>{
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []); 

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16     
        }
    }
 
    return (
 
             <>
             <motion.div 
            className={style.cursor}
            variants={variants}
            animate={cursorVariant}
            />
             </>
    );
};

export default Cursor;