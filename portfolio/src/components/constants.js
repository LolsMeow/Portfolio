import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaPython, FaJava, FaHtml5} from "react-icons/fa";
import { SiCplusplus, SiBootstrap, SiSwift, SiSelenium, SiJunit5, SiCucumber, SiDjango, SiCss3, SiMysql} from "react-icons/si";
import { ImGit } from "react-icons/im";
import cedus from "../images/cedus.png";
import nutritionix from "../images/nutritionx.png";

export const languages = [
    {
        key: 1,
        icon: <SiCplusplus></SiCplusplus>,
        name: "C++",
    },
    {
        key: 2,
        icon: <IoLogoJavascript></IoLogoJavascript>,
        name: "Javascript",
    },
    {
        key: 3,
        icon: <FaPython></FaPython>,
        name: "Python",
    },
    {
        key: 4,
        icon: <SiSwift></SiSwift>,
        name: "Swift",
    },
    {
        key: 5,
        icon: <FaJava></FaJava>,
        name: "Java",
    },
    {
        key: 6,
        icon: <FaHtml5></FaHtml5>,
        name: "HTML"
    },
    {
        key: 7,
        icon: <SiCss3></SiCss3>,
        name: "CSS",
    }
  ];

  export const technologies = [
    {
        key: 1,
        icon: <ImGit></ImGit>,
        name: "Git",
    },
    {
        key: 2,
        icon: <IoLogoNodejs></IoLogoNodejs>,
        name: "Nodejs",
    },
    {
        key: 3,
        icon: <IoLogoReact></IoLogoReact>,
        name: "React",
    },
    {
        key: 4,
        icon: <SiSelenium></SiSelenium>,
        name: "Selenium",
    },
    {
        key: 5,
        icon: <SiJunit5></SiJunit5>,
        name: "Junit5",
    },
    {
        key: 6,
        icon: <SiCucumber></SiCucumber>,
        name: "Cucumber",
    },
    {
        key: 7,
        icon: <SiDjango></SiDjango>,
        name: "Django",
    },
    {
        key: 8,
        icon: <SiBootstrap></SiBootstrap>,
        name: "Bootstrap",
    },
    {
        key: 9,
        icon: <SiMysql></SiMysql>,
        name: "MySQL"
    }
  ];
  
  export const projects = [
    {
      key: 1,
      image: cedus,
      title: "Cedus",
      description:
        "Cedus is a medical passport web application, aimed to provide a place for all of a patient's medical information.",
      link: "https://github.com/LolsMeow/Cedus",
      link2: "https://cedus.herokuapp.com/",
      tech: ["Python", "Django", "HTML", "CSS", "Javascript", "SQL"],
    },
    {
      key: 2,
      image: nutritionix,
      title: "Nutritionix",
      description:
        "Nutritionx is an iOS application that takes the location of a user and shows them restaurants in their vicinity. After selecting a restaurant they can see the items on the menu and the nutritional information of the menu items.",
      link: "https://github.com/LolsMeow/Nutritionx",
      link2: "",
      tech: ["Swift", "iOS Storyboard"],
    },
  ];