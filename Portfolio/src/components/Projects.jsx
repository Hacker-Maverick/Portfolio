import { useSelector } from "react-redux";
import { motion } from "motion/react";

function Project() {

    //states 
    const info = useSelector((state) => state.userdata.value)
    const project = info.projects
    const col = useSelector((state) => state.colour.value)

    //Framer Variants
    const line = {
        initial: { scale: 0, },
        animate: { scale: 1, transition: { duration: 0.5, when: "beforeChildren" } }
    }
    const itembox = {
        initial: { scale: 0, },
        animate: { scale: 1, transition: { duration: 0.5, when: "beforeChildren" } }
    }
    const title = {
        initial: {},
        animate: { textShadow: "-3px 3px 5px rgb(0,0,0)", transition: { duration: 0.1 } }
    }
    const checkout = {
        initial: { scale: 1 },
        hover: { scale: 1.05, boxShadow: "-10px 10px 30px rgb(0,0,0)", transition: { duration: 0.1 } },
        clc: { scale: 0.9, boxShadow: "10px -10px 10px rgb(0,0,0)", transition: { duration: 0.1 } }
    }

    return (
        <div className="m-10 sm:m-16">
            <motion.div className={"text-center text-" + col + "-600 font-bold text-7xl sm:text-8xl border-" + col + "-950 border-b-8"}
                variants={line} initial="initial" whileInView="animate">
                <motion.span variants={title} initial="initial" animate="animate">Projects</motion.span>
            </motion.div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] text-white justify-evenly items-center ">

                {project.map((item) => {
                    return (

                        <motion.div key={item._id} className={"w-80 h-96 border-2 border-black m-10 mx-auto p-5 bg-" + col + "-700 rounded-3xl"} variants={itembox} initial="initial" whileInView="animate">
                            <motion.div className={"text-2xl font-bold items-center justify-center flex mb-4 border-" + col + "-800 border-b-2 h-16"} initial={{}} animate={{ textShadow: "2px 2px 2px rgb(0,0,0)" }}><div className="text-center">{item.name}</div></motion.div>
                            <div className={"h-32 scrollbar-none overflow-y-scroll"}>{item.desc}</div>
                            <div className={"h-24 my-5"}>
                                <div className={"font-bold text-xl text-center text-" + col + "-200"}>Techstack:&nbsp;</div>
                                <div className="text-center scrollbar-none overflow-y-scroll">{item.techstack}</div>
                            </div>
                            <a href={item.link} target="_blank">
                                <motion.div className={"rounded-full text-center bg-" + col + "-400 border-black border-2 text-black"}
                                    initial="initial" whileHover="hover" whileTap="clc" variants={checkout}>
                                    Checkout
                                </motion.div>
                            </a>
                        </motion.div>
                    )
                })}

            </div>

        </div>
    )
}

export default Project;