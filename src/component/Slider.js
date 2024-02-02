import '../App.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider(props) {

    let sld = {
        items: 1,
        dots: false,
    }

    return (
        <OwlCarousel className='owl-theme' loop {...sld}>
            {
                props.url.map((ele) => {
                    return (
                        <div class='item'>
                            <div className="slider-box">
                                <div className='img-box'>
                                    <div className='img'>
                                        <img src={ele} />
                                    </div>
                                </div>
                            </div>
                        </div>)
                })
            }
        </OwlCarousel>
    )
}
export default Slider; 