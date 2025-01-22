import { useSelector } from "react-redux";
import { motion } from "motion/react";

function Achieve() {

    //states
    const info = useSelector((state) => state.userdata.value)
    const col = useSelector((state) => state.colour.value)
    const achieve = info.achievements

    //Framer variants
    const maindiv = {
        initial: { opacity: 0, scale: 0.75, y: -80 },
        animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, when: "beforeChildren" } }
    }
    const achive = {
        initial: { opacity: 0, scale: 1.5 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }
    const bullet = {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.1, type: "spring", stiffness: "250" } }
    }
    const points = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }

    return (
        <motion.div className="m-10 sm:m-16" initial='initial' whileInView="animate" variants={maindiv}>

            <div className={"max-md:border rounded-tr-full rounded-bl-full max-md:rounded-tl-full max-md:rounded-br-full h-40 bg-gradient-to-r from-" + col + "-800 via-black to-" + col + "-900 flex justify-center items-center"}>
                <motion.div className={"font-bold md:text-7xl sm:text-6xl text-4xl text-" + col + "-300"} variants={achive}>Achievements</motion.div>
            </div>

            <div className={"md:rounded-tl-full md:rounded-br-full rounded-3xl bg-gradient-to-r from-" + col + "-800 via-black to-" + col + "-900 flex items-center justify-center"}>
                <div className="md:min-h-40 md:max-h-80 md:h-40 md:mx-32 my-3 py-5 md:my-0 sm:mx-20 mx-10 overflow-y-scroll scrollbar-none text-white">
                    {achieve.map((point) => {
                        return (
                            <div key={Math.random()} className={"flex"}>
                                <motion.div key={Math.random()} className={""} variants={bullet}>⦿&nbsp;&nbsp;</motion.div>
                                <motion.div key={Math.random()} className={""} variants={points}>{point}</motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </motion.div>
    )
}

export default Achieve;