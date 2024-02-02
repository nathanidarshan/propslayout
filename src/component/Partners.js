import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Partners(props) {

    let itm = {
        items: 6,
        dots: false,
        margin: 30
    }

    return (
        <div className="section6 section">
            <Container>
                <Row>
                    <Col>
                        <div className='p-head'>
                            <h4>STUDENT PLACEMENT</h4>
                            <h2>OUR RECRUITMENT PARTNERS</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-5'>
                        <OwlCarousel className='owl-theme' loop {...itm}>
                            {
                                props.img.map((ele) => {
                                    return (
                                        <div className='item'>
                                            <img src={ele} className='iga'></img>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='section6'>
                            <div className='container'>
                                <div className='place-box'>
                                    <div className='p-course'>
                                        <div className='pc-head'>
                                            <h2>Our Demanded Course -</h2>
                                            <div className='pc-info'>
                                                {
                                                    props.pl.map((ele)  => {
                                                        return(
                                                            <span>{ele}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Partners;