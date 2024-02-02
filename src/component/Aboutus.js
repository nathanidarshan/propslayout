import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import '../App.css';

function Aboutus() {
    return (
        <div className='section2 section overflow-hidden'>
                <Row>
                    <Col>
                        <div className='s2-info-box'>
                            <div className='sleft-info'>
                                <div className='s-head'>
                                    <h4>ABOUT US</h4>
                                    <h2>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h2>
                                </div>
                                <div className='s-info'>
                                    <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                                </div>
                                <div className='s-butn'>
                                    <button>Enroll Now..! <FaLongArrowAltRight></FaLongArrowAltRight></button>
                                </div>
                            </div>
                            <div className='sright-info'>
                                <div className='simg-box'>
                                    <img src={require(`../images/10.webp`)}></img>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
export default Aboutus;