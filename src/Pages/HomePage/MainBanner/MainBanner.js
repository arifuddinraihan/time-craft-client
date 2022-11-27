import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MainBanner = () => {
    return (
        <div>
            <div className="bg-base-100 pt-0 xl:py-16">
                <div className="container px-6 mx-auto">
                    <div className="items-center flex flex-col justify-items-center lg:flex-row-reverse gap-6">
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <Player src={'https://assets6.lottiefiles.com/private_files/lf30_zegucavd.json'}
                                className="player w-full h-full lg:max-w-2xl"
                                loop
                                autoplay></Player>
                        </div>
                        <div className="w-full lg:w-1/2 justify-center">
                            <div className="flex flex-col gap-4 lg:max-w-lg justify-items-center justify-center">
                                <h1 className="text-3xl lg:text-6xl font-bold text-center lg:text-start text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary">
                                    Best preowned <br className='block md:hidden lg:block'/> Online Watch Market
                                </h1>

                                <p className="mt-2 font-bold md:text-lg lg:text-xl text-primary text-center lg:text-start text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary">
                                    We are an online market where you can buy or sell <br className='hidden md:block lg:hidden'/> preowned, used or second hand watches.</p>

                                <Link to={'/register'} className='justify-self-center self-center lg:self-start'>
                                    <button className='flex flex-row md:my-8 justify-between items-center gap-2 font-bold btn sm:btn-block md:btn-lg bg-gradient-to-r from-warning to-primary text-accent'>
                                        Join Seller Community Today <FaArrowRight></FaArrowRight>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MainBanner;