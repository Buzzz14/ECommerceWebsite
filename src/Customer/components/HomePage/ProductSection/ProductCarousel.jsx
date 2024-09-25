import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCard from '../HomeCard/HomeCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';

function OtherCarousel({data, sectionName}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = data.map((item) => <HomeCard product={item} />)
    const visibleItems = 6;

    const slidePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    const slideNext = () => {
        if (activeIndex < items.length - visibleItems) {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };

    const syncActiveIndex = (item) => setActiveIndex(item);

    const responsive = {
        0: { items: 1},
        700: { items: 2},
        1000: { items: 3},
        1200: { items: 4},
        1400: { items: 5},
    };

    const currentItems = items.slice(activeIndex, activeIndex + visibleItems);

    return (
        <div className="">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>

            <div className='relative p-5'>
                <AliceCarousel
                    items={currentItems}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={0}
                />

                {activeIndex < items.length - visibleItems && (
                    <Button
                        onClick={slideNext}
                        variant="contained"
                        className="z-50"
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            background: 'rgb(126, 34, 206)'
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                    </Button>
                )}

                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50"
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(90deg)',
                            background: 'rgb(126, 34, 206)'
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)' }} />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default OtherCarousel
