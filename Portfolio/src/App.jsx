import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setuser } from "./redux/colour/userSlice.js";
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Createnew from './components/Createnew'
import { setcolour } from './redux/colour/colourSlice.js';

function Getdata() {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {

    //Online mode
    fetch(id ? `REPLACE_ME_WITH_SERVERS_LINK/${id}` : 'REPLACE_ME_WITH_SERVERS_LINK/')
      .then((response) => { return response.json() })
      .then((data) => { dispatch(setuser(data)); dispatch(setcolour(data.color)) })
      .catch((err) => { console.log(err) })
      
  }, [])

  const info = useSelector((state) => state.userdata.value)

  if (!info) { ;const data = {
    "_id": {
      "$oid": "6788e7587d1c1beede3d66fd"
    },
    "basicinfo": {
      "name": "Saurav Sagar",
      "email": "bigsagar18@gmail.com",
      "linkedin": "https://www.linkedin.com/in/saurav-sagar-25a286290",
      "github": "https://github.com/Hacker-maverick",
      "insta": "https://www.instagram.com/alive_homo_sapiens_",
      "degree": "B.Tech in Computer Science",
      "college": "IIIT Bhopal",
      "age": 20,
      "designation": [
        "Student",
        "Computer Science Engineer",
        "Software Developer",
        "Cybersecurity Enthusiast",
        "Full Stack Developer"
      ],
      "telegram": "https://t.me/saurav_sagar_19_09_2003"
    },
    "skills": [
      {
        "domain": "Languages",
        "subdomain": "C, C++, Java, Python, JavaScript, HTML, CSS",
        "_id": {
          "$oid": "6788e7587d1c1beede3d66fe"
        }
      },
      {
        "domain": "Frameworks/Libraries",
        "subdomain": "Node.js, Express.js, EJS, ReactJS, Tailwind CSS, Framer-Motion",
        "_id": {
          "$oid": "6788e7587d1c1beede3d66ff"
        }
      },
      {
        "domain": "Cybersecurity",
        "subdomain": "BurpSuite, Metasploit, Nmap, Hydra, Wifite",
        "_id": {
          "$oid": "6788e7587d1c1beede3d6700"
        }
      },
      {
        "domain": "Developer tools",
        "subdomain": "VS Code, Postman",
        "_id": {
          "$oid": "6788e7587d1c1beede3d6701"
        }
      },
      {
        "domain": "Databases",
        "subdomain": "MongoDB",
        "_id": {
          "$oid": "6788e7587d1c1beede3d6702"
        }
      }
    ],
    "achievements": [
      "Cleared JEE Mains securing rank under 30k out of 8 lakh students",
      "AIR 29 in National Entrepreneurship Olympiad 2021 hosted by IIT Bombay",
      "Qualified in internal Smart India Hackathon in IIIT Bhopal consecutively in 2023 and 2024",
      "Stood among top 4000 out of 20,000+ candidates in Algo-University Coding Contest stage 1"
    ],
    "projects": [
      {
        "name": "Banking Management",
        "desc": "A comprehensive system handling various banking operations like account management, deposits, withdrawals, and balance inquiries.",
        "link": "https://github.com/Hacker-Maverick/Banking-management-system",
        "techstack": "C++",
        "_id": {
          "$oid": "6788e7587d1c1beede3d6703"
        }
      },
      {
        "name": "Tic Tac Toe",
        "desc": "Developed a two-player Tic Tac Toe game with HTML, CSS, and JavaScript.",
        "link": "https://github.com/Hacker-Maverick/Tic_Tac_Toe",
        "techstack": "HTML, CSS, JavaScript",
        "_id": {
          "$oid": "6788e7587d1c1beede3d6704"
        }
      },
      {
        "name": "Tile Puzzle Game",
        "desc": "A picture tile game where players unscramble the scrambled image.",
        "link": "https://github.com/Hacker-Maverick/Puzzle_game",
        "techstack": "HTML, CSS, JavaScript, Node.js, Express.js, EJS",
        "_id": {
          "$oid": "6788e7587d1c1beede3d6705"
        }
      },
      {
        "name": "Hospital Management",
        "desc": "Backend-only hospital management system capable of real-time updates for beds, ambulance, doctor availability, patient queue, and more.",
        "link": "https://github.com/Hacker-Maverick/Hospital_management_SIH",
        "techstack": "Node.js, Express.js, MongoDB, Passport.js",
        "_id": {
          "$oid": "6788e7587d1c1beede3d6706"
        }
      }
    ],
    "color": "amber",
    "__v": 0
  };
  dispatch(setuser(data)); dispatch(setcolour(data.color)) }
  else { return (<><Navbar id={info.basicinfo.email}/><Home /></>) }
}

function App() {

  const info = useSelector((state) => state.userdata.value)
  let navprop;
  if(info){navprop=info.basicinfo.email}
  else{navprop=""}

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Getdata /> </>,
    },
    {
      path: '/:id',
      element: <><Getdata /> </>,
    },
    {
      path: '/createyourportfolio',
      element: <><Navbar id={navprop}/><Createnew /></>,
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
