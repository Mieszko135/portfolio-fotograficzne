import React from "react";
import {motion} from "framer-motion";

export function NavigationItem({category, delay}) {

    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    return (
    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: delay}} className="nav-menu__item">{category}</motion.li>
    )
}