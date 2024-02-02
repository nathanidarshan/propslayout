import '../App.css';
import { Col, Container, Row } from "react-bootstrap";

function Whychoo(props) {
    return (
        <div className="section5 section">
            <Container>
                <Row>
                    <Col>
                        <div className='w-info'>
                            <div className='w-head'>
                                <h4>READ OUR DIFFERENCE</h4>
                                <h2>WHY CHOOSE CREATIVE</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        props.wh.map((ele) => {
                            return (
                                <Col lg={4}>
                                    <div className='b1'>
                                        <div className='b-img b1-img'>
                                            <img src={ele.img}></img>
                                        </div>
                                        <div className='b-info'>
                                            <h5>{ele.title}</h5>
                                            <p>{ele.info}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default Whychoo;