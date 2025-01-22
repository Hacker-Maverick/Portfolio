import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

//framer variants
const copyrightbox = {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.75, when: "beforeChildren" } }
}

const copyright = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, textShadow: "0px 0px 5px rgb(255,255,255)", transition: { delay: 0.25, duration: 0.5, type: "ease" } }
}

const futerbox = {
    initial: { opacity: 0, },
    animate: { opacity: 1, transition: { duration: 1, when: "beforeChildren" } }
}

const futer1 = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.5, stiffness: 250 } }
}

const futer2 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5, stiffness: 250 } }
}

const futer3 = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.5, stiffness: 250 } }
}

//footer function
function Footer(props) {

    const info = useSelector((state) => state.userdata.value);
    const col = useSelector((state)=>state.colour.value);

    return (
        <div className="max-w-full overflow-hidden">

            {/* copyright */}
            <motion.div className={" flex h-12 justify-center items-center max-w-full bg-gradient-to-b from-"+col+"-950 to-black text-white overflow-hidden"}
                initial="initial" whileInView="animate" variants={copyrightbox}>
                <motion.div variants={copyright} >
                    © 2025 {info.basicinfo.name}. All Rights Reserved.
                </motion.div>
            </motion.div>

            {/* links */}
            <motion.div className={"grid grid-cols-3 gap-0 bg-gradient-to-b from-"+col+"-950 to-black text-white overflow-hidden"}
                initial="initial" whileInView="animate" variants={futerbox}>
                <div className="w-100 h-40 p-5 justify-center sm:flex">
                    <motion.div variants={futer1}>
                        <h1 className="text-xl font-bold pb-2">Quick Links</h1>
                        <ul className="list-none">
                            <Link to={props.link1.link}><li className="hover:text-lg">{props.link1.name}</li></Link>
                            <li className="hover:text-lg hover:cursor-pointer" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Back to top</li>
                        </ul>
                    </motion.div>
                </div>
                <div className="w-100 h-40 p-5 justify-center sm:flex">
                    <motion.div variants={futer2}>
                        <h1 className="text-xl font-bold pb-2">Social Media</h1>
                        <ul className="list-none">
                            <a href={info.basicinfo.insta} target="_blank"><li className={"hover:text-lg"}>Instagram</li></a>
                            <a href={info.basicinfo.linkedin} target="_blank"><li className={"hover:text-lg"}>LinkedIn</li></a>
                            <a href={info.basicinfo.github} target="_blank"><li className={"hover:text-lg"}>Github</li></a>
                        </ul>
                    </motion.div>
                </div>
                <div className="w-100 h-40 p-5 justify-center sm:flex">
                    <motion.div variants={futer3}>
                        <h1 className="text-xl font-bold pb-2">Contact Info</h1>
                        <ul className="list-none">
                            <a href={"mailto:" + info.basicinfo.email} target="_blank"><li className={"hover:text-lg"}>Email</li></a>
                            <a href={info.basicinfo.telegram} target="_blank"><li className={"hover:text-lg"}>Telegram</li></a>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </div>

    )
}

export default Footer;