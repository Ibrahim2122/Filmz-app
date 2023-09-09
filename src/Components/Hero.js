import React from "react";
import "./Hero.css";
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="hero">
            <motion.div>
                <h1>Home of all movies<br/>Here at <span>Filmz</span></h1>
                <motion.a href="#movies" whileHover={{scale: 1.1}}>Check it out</motion.a>
            </motion.div>
        </section>
    )
}

export default Hero;