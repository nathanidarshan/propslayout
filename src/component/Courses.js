import '../App.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLongArrowAltRight } from "react-icons/fa";



function Courses(props) {
    return (
        <div className='section1 section'>
            <Container>
                <Row>
                    <Col className='mb-4'>
                        <div className='heading'>
                            <h4>CREATIVE COURSE</h4>
                            <h1 className='sh-1'>OFFERED COURSES</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        props.cad.map((ele) => {
                            return (
                                <Col lg={4} className='px-5 mb-4'>
                                    <div className='box'>
                                        <Card>
                                            <Card.Img variant="top" src={ele.img} />
                                            <Card.Body>
                                                <Card.Title>{ele.head}</Card.Title>
                                                <Button variant="primary">Know More..!</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className='d-end'>
                    <div className='d-end-btn'>
                        <button>View All Courses  <FaLongArrowAltRight></FaLongArrowAltRight></button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Courses;