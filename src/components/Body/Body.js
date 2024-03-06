
import slide1 from '../../assets/carousel-slide-1.avif';
import slide2 from '../../assets/carousel-slide-2.avif';
import slide3 from '../../assets/carousel-slide-3.avif';
import './Body.css';

const Body = () => {

    return (
        <section className="body">

            <div className="carousel">

                <div className="slides">
                    <div className="slide">
                        <img alt="" src={slide1}></img>
                    </div>
                    <div className="slide">
                        <img alt="" src={slide2}></img>
                    </div>
                    <div className="slide">
                        <img alt="" src={slide3}></img>
                    </div>
                </div>

                {/* <div className='buttons'>
                    <button  className='prev-slide'><i class="fa-solid fa-backward"></i></button>
                    <button onClick={handleNextSlide} className='next-slide'><i class="fa-solid fa-forward"></i></button>
                </div> */}

            </div>

        </section>
    )
}

export default Body;
