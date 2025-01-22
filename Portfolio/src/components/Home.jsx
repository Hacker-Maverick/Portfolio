import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'motion/react';
import Footer from './Futer';
import Home1 from './Home1';
import Skills from './Skills';
import Achieve from './Achieve';
import Project from './Projects';
import emaillogo from '../public/email.jpg';
import instalogo from '../public/insta.jpg';
import telegramlogo from '../public/telegram.jpg';
import githublogo from '../public/github.png';
import linkedinlogo from '../public/linkedin.jpg';

function Home() {

    //states
    let col = useSelector((state) => state.colour.value);
    const info = useSelector((state) => state.userdata.value);

    //remove it
    console.log(info)

    //framer variants
    const icons = {
        initial: { opacity: 0, scale: 0, y: -50 },
        animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
        hover:{ scale: 1.1, boxShadow: "-10px 10px 30px rgb(0,0,0)", transition: { duration: 0.1 } },
        clc:{ scale: 0.8, boxShadow: "-10px 10px 8px rgb(0,0,0)", transition: { duration: 0.1 } }
    }

    return (<div className={"w-full bg-" + col + "-200 pt-10"}>

        <Home1 />

        <div className='sm:h-16 h-12 flex justify-between sm:px-20 md:px-32 px-10'>
            <motion.div className='sm:h-16 sm:w-16 h-12 w-12 rounded-full overflow-hidden' initial="initial" whileInView="animate" whileHover="hover" whileTap="clc" variants={icons}><a href={"mailto:" + info.basicinfo.email} target='_blank'><img src={emaillogo}></img></a></motion.div>
            <motion.div className='sm:h-16 sm:w-16 h-12 w-12 rounded-full overflow-hidden' initial="initial" whileInView="animate" whileHover="hover" whileTap="clc" variants={icons}><a href={info.basicinfo.linkedin} target='_blank'><img src={linkedinlogo}></img></a></motion.div>
            <motion.div className='sm:h-16 sm:w-16 h-12 w-12 rounded-full overflow-hidden' initial="initial" whileInView="animate" whileHover="hover" whileTap="clc" variants={icons}><a href={info.basicinfo.github} target='_blank'><img src={githublogo}></img></a></motion.div>
            <motion.div className='sm:h-16 sm:w-16 h-12 w-12 rounded-full overflow-hidden' initial="initial" whileInView="animate" whileHover="hover" whileTap="clc" variants={icons}><a href={info.basicinfo.insta} target='_blank'><img src={instalogo}></img></a></motion.div>
            <motion.div className='sm:h-16 sm:w-16 h-12 w-12 rounded-full overflow-hidden' initial="initial" whileInView="animate" whileHover="hover" whileTap="clc" variants={icons}><a href={info.basicinfo.telegram} target='_blank'><img src={telegramlogo}></img></a></motion.div>
        </div>

        <Skills />
        
        <Achieve />
        
        <Project />

        <Footer link1={{ name: 'Create portfolio', link: '/createyourportfolio' }}/>
    </div>
    )
}

export default Home;