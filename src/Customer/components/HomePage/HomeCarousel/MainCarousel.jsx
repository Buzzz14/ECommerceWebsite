import React from 'react'
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function MainCarousel() {
    const items = mainCarouselData.map((item) => <img className='cursor-pointer'
        role='presentation' src={item.image} />);
    return (
        <div className='z-0'>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={3000}
                infinite
            />
        </div>
    )
}

export default MainCarousel
