import { NavLink, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { motion } from "motion/react"
import { useSelector, useDispatch } from "react-redux";
import { setcolour } from "../redux/colour/colourSlice.js"

const tailwindColors = [
    'red', 'orange', 'amber', 'yellow', 'lime', 'green',
    'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo',
    'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'stone'
];

function Navbar(props) {

    //Redux elements
    let col = useSelector((state) => state.colour.value)
    const dispatch = useDispatch()

    //States
    const [Ham, setHam] = useState(false)
    const [colbut, setcolbut] = useState(false)
    const [home1, sethome1] = useState(false)

    //Framer variants
    const navvar = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren" } }
    }
    const titlevar = {
        initial: { x: -100 },
        animate: { x: 0, transition: { duration: 0.2, type: "spring", stiffness: 250 } },
    }
    const linkvar = {
        hover: { textShadow: "10px 10px 10px rgb(0,0,0)" },
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.2, type: "ease" } }
    }
    const colvar = {
        hover: { textShadow: "-12px 8px 8px rgb(0,0,0)", boxShadow: "-10px 10px 30px rgb(0,0,0)", scale: 1.1 },
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", stiffness: 250 } },
        clc: { scale: 0.8 }
    }

    return (

        <div className={"bg-" + col + "-200"}>

            {/*Nav Bar*/}
            <motion.nav
                className={"flex bg-" + col + "-700 h-10 justify-between text-white w-full fixed top-0 z-50"}
                variants={navvar}
                initial="initial"
                animate="animate"
                key={col}
            >
                <motion.div className="text-xl m-1 mx-3" variants={titlevar} key={col}>
                    Welcome!
                </motion.div>
                <div className="sm:flex mx-4 w-fit hidden">
                    <NavLink id="Home" className={(e) => { sethome1(!e.isActive); return e.isActive ? "bg-" + col + "-500 p-2" : "hidden p-2" }} to='/' ><motion.span variants={linkvar} whileHover="hover">Home</motion.span></NavLink>
                    {home1 && <NavLink id="Home" className={(e) => { return e.isActive ? "bg-" + col + "-500 p-2" : "p-2" }} to={`/${props.id}`} ><motion.span variants={linkvar} whileHover="hover">Home</motion.span></NavLink>}
                    <NavLink id="Create" className={(e) => { return e.isActive ? "bg-" + col + "-500 p-2" : "p-2" }} to="/createyourportfolio" ><motion.span variants={linkvar} whileHover="hover">Create Portfolio</motion.span></NavLink>
                    <motion.button variants={linkvar} whileHover="hover" className="p-2" onClick={() => { setcolbut(!colbut) }}>Theme</motion.button>
                </div>

                {/* Hamburger icon */}
                <button className={!Ham ? "sm:hidden px-4 rounded-t-lg flex" : "sm:hidden px-4 rounded-t-lg text-2xl flex bg-" + col + "-500"} onClick={() => { setHam(!Ham); if (colbut) { setcolbut(!colbut); setHam(false) } }}>
                    <div className=" h-10 w-10 py-1.5">
                        <motion.div initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, stiffness: 250 }} className="h-0.5 bg-white max-w-5 mx-2.5 my-1.5"></motion.div>
                        <motion.div initial={{ x: 15, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, stiffness: 250 }} className="h-0.5 bg-white max-w-5 mx-2.5 my-1.5"></motion.div>
                        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, stiffness: 250 }} className="h-0.5 bg-white max-w-5 mx-2.5 my-1.5"></motion.div>
                    </div>
                </button>
            </motion.nav>

            {/* Hamburger Menu */}
            <div className={Ham ? "sm:hidden border border-" + col + "-400 grid-rows-3 bg-" + col + "-300 mt-10 fixed top-0 z-20 w-full" : "hidden"}>
                <Link onClick={() => { setHam(!Ham) }} className="" to={`/${props.id}`}><motion.div variants={linkvar} key={Ham} whileHover="hover" initial="initial" animate="animate" className={"flex justify-center items-center w-full border-y border-" + col + "-500 h-9"}>Home</motion.div></Link>
                <Link onClick={() => { setHam(!Ham) }} className="" to="/createyourportfolio"><motion.div variants={linkvar} key={Ham} whileHover="hover" initial="initial" animate="animate" className={"flex justify-center w-full border-y items-center border-" + col + "-500 h-9"}>Create_Portfolio</motion.div></Link>
                <motion.button variants={linkvar} key={Ham} whileHover="hover" initial="initial" animate="animate" className={"flex justify-center w-full border-y items-center border-" + col + "-500 h-9"} onClick={() => { setcolbut(!colbut); setHam(!Ham) }}>Theme</motion.button>
            </div>

            {/* Colour list */}
            {colbut && <div className={"z-10 sm:w-1/5 sm:max-h-96 sm:overflow-x-hidden max-sm:grid grid-cols-4 gap-4 max-sm:p-2 mt-10 fixed top-0 sm:right-0 w-full scrollbar-none"}>
                {tailwindColors.map((color) => (
                    <motion.button
                        key={color}
                        variants={colvar} whileHover="hover" initial="initial" animate="animate" whileTap="clc"
                        className={"justify-center items-center w-full border border-" + color + "-400 rounded-3xl sm:rounded h-9 bg-" + color + "-300"}
                        onClick={(e) => {
                            setcolbut(!colbut);
                            dispatch(setcolour(e.target.value));
                        }}
                        value={color}
                    >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </motion.button>
                ))}
            </div>
            }

        </div>
    )
}

export default Navbar;