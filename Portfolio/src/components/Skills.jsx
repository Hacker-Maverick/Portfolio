import { useSelector } from "react-redux";
import { motion } from "motion/react";

function Skills() {

    //states
    const info = useSelector((state) => state.userdata.value);
    const col = useSelector((state) => state.colour.value);

    const Skills = info.skills;

    //Framer variants
    const maindiv = {
        initial: { opacity: 0, scale: 0.75, },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5, when: "beforeChildren" } }
    }
    const domain = {
        initial: { opacity: 0, scale: 1.5, x: -50 },
        animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } }
    }
    const subdomain = {
        initial: { opacity: 0, scale: 1.5, x: 50 },
        animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } }
    }
    const skillsdiv = {
        initial: { opacity: 0, scale: 0, x: -100 },
        animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } }
    }

    return (
        <motion.div className={"sm:flex sm:m-16 m-10 sm:bg-gradient-to-r bg-gradient-to-b from-" + col + "-900 via-black to-" + col + "-600 lg:rounded-tl-full lg:rounded-br-full rounded-tl-3xl rounded-br-3xl"}
            initial="initial" whileInView="animate" variants={maindiv}>

            <motion.div variants={skillsdiv} className={"w-full md:rounded-tl-full rounded-tl-3xl flex justify-center items-center min-h-52"}>
                <span className={"text-" + col + "-200 font-extrabold text-8xl"}>Skills</span>
            </motion.div>

            <div className={"w-full md:rounded-br-full rounded-br-3xl text-white "}>
                <div className=" w-full sm:p-10 p-5">
                    <div className="lg:rounded-br-full rounded-br-3xl overflow-y-scroll scrollbar-none sm:pe-10 max-h-96">
                        {Skills.map((skill) => {
                            return (<div key={skill._id} className="flex">
                                <motion.div className="font-bold" key={() => { return skill._id.slice(0, 5) }} variants={domain}>{skill.domain}:&nbsp;</motion.div>
                                <motion.div className="" key={() => { return skill._id.slice(5, 10) }} variants={subdomain}>{skill.subdomain}</motion.div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            
        </motion.div>
    )
}

export default Skills;