import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';

function Pannel(props) {
    return (
        <div className="section3">
            <Container>
                <Row>
                    {
                        props.inf.map((ele) => {
                            return (
                                <Col>
                                    <div className='a1 d-flex'>
                                        <div className='m-box white'>
                                            <div className="img">
                                                <img src={ele.img}></img>
                                            </div>
                                            <div className='nmb'>
                                                <h2>{ele.num}</h2>
                                            </div>
                                            <div className="titl">
                                                <p>{ele.title}</p>
                                            </div>
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
export default Pannel;