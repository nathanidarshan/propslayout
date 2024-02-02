import './App.css';
import Header from './component/Header';
import Courses from './component/Courses';
import Slider from './component/Slider';
import Aboutus from './component/Aboutus';
import Pannel from './component/Pannel';
import Student from './component/Student';
import Whychoo from './component/Whychoo';
import Partners from './component/Partners';
import Footer from './component/Footer';

let headermenu = ["HOME", "COURSES", "ACTIVITES", "BLOG", "KNOW US", "GET IN TOUCH", "STUDENT ZONE", ""];

let ur = [
  require('./images/2.jpeg'),
  require('./images/30.webp'),
  require('./images/31.webp'),
  require('./images/32.webp')
];

let cd = [
  { img: require(`./images/3.webp`), head: "Development Courses" },
  { img: require(`./images/4.webp`), head: "Design Courses" },
  { img: require(`./images/5.webp`), head: "Programming IT" },
  { img: require(`./images/6.webp`), head: "Trendy Courses" },
  { img: require(`./images/7.webp`), head: "Civil-Mech.Engineering" },
  { img: require(`./images/8.webp`), head: "Business Development" },
]
let st = [
  { img: require(`./images/bg1.png`), num: "18000+", title: "HAPPY STUDENTS" },
  { img: require(`./images/bg2.png`), num: "10+", title: "CERTIFICATION APPROVAL" },
  { img: require(`./images/bg3.png`), num: "100+", title: "CERTIFIED TEACHERS" },
  { img: require(`./images/bg4.png`), num: "12000+", title: "STUDENTS PLACED" }
]
let cre = [
  { img: require(`./images/22.png`), clr: "#f6475f", title: "Industry experts as Trainers", info: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time" },
  { img: require(`./images/23.png`), clr: "#ffbc06", title: "Latest Curriculum", info: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time." },
  { img: require(`./images/24.png`), clr: "#b3d369", title: "Latest technology", info: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
  { img: require(`./images/27.png`), clr: "#554da7", title: "Interview Assistance", info: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time" },
  { img: require(`./images/25.png`), clr: "#4382ff", title: "Free Upgradation", info: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time" },
  { img: require(`./images/26.png`), clr: "#f94fa4", title: "Free Upgradation", info: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time" }
]
let part=[
  require(`./images/15.png`),
  require(`./images/16.png`),
  require(`./images/17.png`),
  require(`./images/18.png`),
  require(`./images/19.png`),
  require(`./images/20.png`),
  require(`./images/33.png`),
  require(`./images/34.png`),
  require(`./images/35.png`),
]


let place=["Php institute in Katargam","Wordpress training course","Blender 3D Design Course","Laravel Training institute In Katargam","solidworks Training In mota varachha","Google Sketchup Civil Training Course","Laravel Training institute in Mota Varachha","Andriod Training In surat","Best Wordpress Training Institute"]

function App() {
  return (
    <>
      <Header man={headermenu}></Header>
      <Slider url={ur}></Slider>
      <Courses cad={cd}></Courses>
      <Aboutus></Aboutus>
      <Pannel inf={st}></Pannel>
      <Student></Student>
      <Whychoo wh={cre}></Whychoo>
      <Partners img={part} pl={place}></Partners>
      <Footer></Footer>
    </>
  )
}

export default App;
