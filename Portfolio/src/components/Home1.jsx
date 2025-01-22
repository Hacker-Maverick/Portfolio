import { useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "motion/react";
import Typer from "./Typer";

function Home1() {

    //Framer variants
    const maindiv = {
        initial: { opacity: 0, scale: 0.75, y: -100 },
        animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, when: "beforeChildren" } }
    }
    const text = {
        initial: { opacity: 0, scale: 0.75, x: -100 },
        animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } }
    }
    const pic = {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }
    const picborder = {
        initial: { scale: 0 },
        hover: { scale: 1.15, transition: { duration: 0.1 } },
        clc: { scale: 0.8 }
    }

    //states
    let col = useSelector((state) => state.colour.value);
    const info = useSelector((state) => state.userdata.value);

    return (
        <motion.div className={"sm:m-16 m-10 bg-" + col + "-900 rounded-3xl sm:flex"}
            initial="initial" whileInView="animate" variants={maindiv}>

            {/* Texts */}
            <motion.div className="sm:w-1/2 w-full h-80 text-white" variants={text}>
                <div className="m-auto w-60 pt-14">
                    <div className=" p-0.5"><span className="text-xl">Hey there, I'm</span></div>
                    <div className=""><h1 className={"text-4xl text-" + col + "-200 font-bold "}>{info.basicinfo.name},</h1></div>
                    <div className="py-2"><motion.span className={"text-" + col + "-300 "} initial={{}} animate={{ textShadow: "2px 2px 0.5px rgb(0,0,0)" }}><Typer /></motion.span></div>
                    <div className=""><p>Currently pursuing {info.basicinfo.degree} from {info.basicinfo.college}.</p></div>
                </div>
            </motion.div>

            {/* Picture */}
            <motion.div className="sm:w-1/2 w-full h-80" variants={pic}>
                <motion.div className={"m-auto w-60 h-60 border-x-8 border-" + col + "-300 rounded-full sm:mt-10 flex"} variants={picborder} whileHover="hover" whileTap="clc">
                    <motion.div className={"m-auto w-48 h-48 rounded-full overflow-hidden"}>
                        <img src={`http://localhost:3000/image/${info.basicinfo.email}.jpg`} className="h-48"></img>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Home1;
