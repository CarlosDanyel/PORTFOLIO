import { motion, useScroll } from "framer-motion";

import style from "./style.module.scss"

const Scroll = () => {
    
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
        className={style.progresso_line}
        style={{ scaleX: scrollYProgress }}
      />
    );
};

export default Scroll;