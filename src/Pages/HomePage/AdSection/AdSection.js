import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import SpinnerPrimary from '../../../components/Spinner/SpinnerPrimary';
const AdSection = () => {
    const url = `http://localhost:5000/advertisedProducts`;
    const { data: advertiseArray = [], isLoading } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    "content-type": "application/json"
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <SpinnerPrimary></SpinnerPrimary>
    }
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className='flex flex-col text-center justify-center mx-2 md:mx-0'>
            <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary py-6'>
                Product you may like</h2>
            <div>
                <AutoplaySlider
                    className="w-60"
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    {
                        advertiseArray.map(add => <div data-src={add.productImgURL} />)
                    }
                </AutoplaySlider>
            </div>
        </div>
    );
};

export default AdSection;