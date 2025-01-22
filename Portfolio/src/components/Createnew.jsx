import { useState } from "react";
import { useSelector } from 'react-redux';

function Createnew() {
  //colour
  let col = useSelector((state) => state.colour.value)

  //variable
  const colorOptions = [
    "red", "orange", "amber", "yellow", "lime", "green",
    "emerald", "teal", "cyan", "sky", "blue", "indigo",
    "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "stone",
  ];

  //States
  const [formData, setFormData] = useState({
    basicinfo: {
      name: "",
      email: "",
      linkedin: "",
      github: "",
      insta: "",
      telegram: "",
      degree: "",
      college: "",
      age: "",
      designation: [],
    },
    skills: [],
    achievements: [],
    projects: [],
    color: "",
    image: null,
  });
  const [skillInput, setSkillInput] = useState({ domain: "", subdomain: "" });
  const [projectInput, setProjectInput] = useState({
    name: "",
    desc: "",
    link: "",
    techstack: "",
  });
  const [designationInput, setDesignationInput] = useState("");
  const [achievementInput, setAchievementInput] = useState("");

  //Change Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      basicinfo: {
        ...formData.basicinfo,
        [name]: value,
      },
    });
  };
  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setSkillInput({ ...skillInput, [name]: value });
  };
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectInput({ ...projectInput, [name]: value });
  };

  //Add button function
  const addSkill = () => {
    if (skillInput.domain && skillInput.subdomain) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput],
      });
      setSkillInput({ domain: "", subdomain: "" });
    }
  };
  const addProject = () => {
    if (projectInput.name && projectInput.desc && projectInput.link && projectInput.techstack) {
      setFormData({
        ...formData,
        projects: [...formData.projects, projectInput],
      });
      setProjectInput({ name: "", desc: "", link: "", techstack: "" });
    }
  };
  const addDesignation = () => {
    if (designationInput) {
      setFormData({
        ...formData,
        basicinfo: {
          ...formData.basicinfo,
          designation: [...formData.basicinfo.designation, designationInput],
        },
      });
      setDesignationInput("");
    }
  };
  const addAchievement = () => {
    if (achievementInput) {
      setFormData({
        ...formData,
        achievements: [...formData.achievements, achievementInput],
      });
      setAchievementInput("");
    }
  };

  //Image upload
  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  //Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("formData", JSON.stringify(formData));

    const res = await fetch(`http://localhost:3000/upload/${formData.basicinfo.email}`, {
      method: "POST",
      body: formDataToSend, // No Content-Type header set
    });
    const response = await res.json();
    if (res.ok) {
      alert(`${response.message}\nYour Portfolio link is: http://localhost:3000/${response.link}`);
      console.log(`${response.message}\nYour Portfolio link is: http://localhost:3000/${response.link}`);
    } else {
      alert("Failed to submit the form");
    }
  };

  return (<div className={"bg-"+col+"-200 pt-28 p-20"}>
    <div className={"max-w-4xl mx-auto p-8 bg-" + col + "-300 shadow-2xl shadow-black rounded-3xl"}>
      <h1 className={"text-2xl font-bold text-center text-" + col + "-800 mb-6"}>User Input Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Basic Info Section */}
        <div className="mx-10 my-8">
        <h2 className="text-lg font-semibold mb-2">Basic Info</h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6">
          <input
            type="text"
            name="name"
            value={formData.basicinfo.name}
            onChange={handleChange}
            placeholder="Name"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          <input
            type="number"
            name="age"
            value={formData.basicinfo.age}
            onChange={handleChange}
            placeholder="Age"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          <input
            type="email"
            name="email"
            value={formData.basicinfo.email}
            onChange={handleChange}
            placeholder="Email"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          <input
            type="text"
            name="insta"
            value={formData.basicinfo.insta}
            onChange={handleChange}
            placeholder="Instagram"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />

          <input
            type="text"
            name="degree"
            value={formData.basicinfo.degree}
            onChange={handleChange}
            placeholder="Degree"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          <input
            type="text"
            name="college"
            value={formData.basicinfo.college}
            onChange={handleChange}
            placeholder="College"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          <input
            type="text"
            name="linkedin"
            value={formData.basicinfo.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          <input
            type="text"
            name="github"
            value={formData.basicinfo.github}
            onChange={handleChange}
            placeholder="GitHub"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />

          <input
            type="text"
            name="telegram"
            value={formData.basicinfo.telegram}
            onChange={handleChange}
            placeholder="Telegram"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          {/* Color Picker Dropdown */}
          <div className="flex">
            <h2 className="text-lg font-semibold mr-5 m-2">Theme Colour</h2>
            <select
              name="color"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className={"border-2 rounded-md p-2 border-"+col+"-400"}
            >
              <option value="" className="">Select a colour</option>
              {colorOptions.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          </div>
        </div>
        <div className="mx-10 my-8">
          <h2 className="text-lg font-semibold mb-2">Designation</h2>
        {/* designation */}
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6">
          <input
            type="text"
            value={designationInput}
            onChange={(e) => setDesignationInput(e.target.value)}
            placeholder="Designation"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          <button
            type="button"
            onClick={addDesignation}
            className={"bg-"+col+"-500 text-white py-2 px-4 rounded-md"}
          >
            Add Designation
          </button>
          <ul className="flex px-2">
            {formData.basicinfo.designation.map((designation, index) => (
              <li key={index} className="text-black">{designation} &nbsp;</li>
            ))}
          </ul>
        </div>
        </div>
        <div className="mx-10 my-8">
          <h2 className="text-lg font-semibold mb-2">Achievements</h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6 ">
          {/* Achievements Section */}
          <input
            type="text"
            value={achievementInput}
            onChange={(e) => setAchievementInput(e.target.value)}
            placeholder="Achievement"
            className={"border-2 rounded-md p-2 border-"+col+"-400"}
          />
          <button
            type="button"
            onClick={addAchievement}
            className={"bg-"+col+"-500 text-white py-2 px-4 rounded-md"}
          >
            Add Achievement
          </button>
          <ul>
            {formData.achievements.map((achievement, index) => (
              <li key={index} className="text-black px-2">{achievement}</li>
            ))}
          </ul>
        </div>
        </div>
        {/* Skills Section */}
        <div className="mx-10 my-8">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6">
            <input
              type="text"
              name="domain"
              value={skillInput.domain}
              onChange={handleSkillChange}
              placeholder="Domain"
              className={"border-2 rounded-md p-2 flex-grow border-"+col+"-400"}
            />
            <input
              type="text"
              name="subdomain"
              value={skillInput.subdomain}
              onChange={handleSkillChange}
              placeholder="Subdomain"
              className={"border-2 rounded-md p-2 flex-grow border-"+col+"-400"}
            />

          </div>
          <button
            type="button"
            onClick={addSkill}
            className={"bg-"+col+"-500 text-white py-2 px-8 rounded-md mt-4"}
          >
            Add Skill
          </button>

          <ul className="mt-2">
            {formData.skills.map((skill, index) => (
              <li key={index} className="text-black px-2">
                {skill.domain} &nbsp;:&nbsp; {skill.subdomain}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div className="mx-10 my-8">
          <h2 className="text-lg font-semibold mb-2">Projects</h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6">
            <input
              type="text"
              name="name"
              value={projectInput.name}
              onChange={handleProjectChange}
              placeholder="Project Name"
              className={"border-2 rounded-md p-2 border-"+col+"-400"}
            />
            <input
              type="text"
              name="link"
              value={projectInput.link}
              onChange={handleProjectChange}
              placeholder="Project Link"
              className={"border-2 rounded-md p-2 border-"+col+"-400"}
            />
          </div>
          <div className="sm:pt-4 pt-8 flex">
            <input
              type="text"
              name="desc"
              value={projectInput.desc}
              onChange={handleProjectChange}
              placeholder="Description"
              className={"border-2 rounded-md p-2 flex-grow border-"+col+"-400"}
            />
          </div>
          <div className="sm:pt-4 pt-8 flex">
            <input
              type="text"
              name="techstack"
              value={projectInput.techstack}
              onChange={handleProjectChange}
              placeholder="Tech Stack"
              className={"border-2 rounded-md p-2 flex grow border-"+col+"-400"}
            />
          </div>
          <button
            type="button"
            onClick={addProject}
            className={"bg-"+col+"-500 text-white py-2 px-4 rounded-md mt-4"}
          >
            Add Project
          </button>
          <ul className="mt-2">
            {formData.projects.map((project, index) => (
              <li key={index} className="text-black">
                {project.name} - {project.desc} ({project.techstack})
              </li>
            ))}
          </ul>
        </div>
          
          {/*File Upload*/}
        <div className=" mx-10 my-8">
          <h2 className="text-lg font-semibold mb-2">Profile Pic</h2>
          <div className="flex">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            className={"rounded-md p-2 border-"+col+"-400 border-"+col+"-400"}
          />
          <div className="text-sm p-2">
            Please upload any 1x1 image for best results.
          </div>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className={`mt-4 w-full bg-${col}-800 text-white py-2 rounded-md`}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Createnew;
