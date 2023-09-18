import Chart from "../chart/Chart";
import { PriceOption } from "./PriceOption";
import { Audio, BallTriangle, CirclesWithBar } from 'react-loader-spinner'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


function PriceOptions() {

    const gimOptions = [
        {
            "id": "1",
            "name": "Basic Gim",
            "description": "A budget-friendly choice for beginners.",
            "price": 199.99,
            "currency": "USD",
            "features": [
                "Stabilized Gimbal",
                "720p HD Camera",
                "2-axis Rotation",
                "Remote Control"
            ]
        },
        {
            "id": "2",
            "name": "Gim Pro",
            "description": "Perfect for enthusiasts and hobbyists.",
            "price": 399.99,
            "currency": "USD",
            "features": [
                "Advanced Stabilized Gimbal",
                "4K UHD Camera",
                "3-axis Rotation",
                "Wireless Remote Control"
            ]
        },
        {
            "id": "3",
            "name": "Gim Ultimate",
            "description": "The top-of-the-line model with advanced features.",
            "price": 799.99,
            "currency": "USD",
            "features": [
                "Professional-grade Stabilized Gimbal",
                "8K Ultra HD Camera",
                "4-axis Rotation",
                "Smartphone App Control"
            ]
        }
    ];



    return (
        <div>
            <h1 className="text-4xl text-center py-7">Price Options</h1>
            <div className="flex gap-7 justify-center">
                {
                    gimOptions.map( option => <PriceOption key={option.id} option={option}/> )
                }
            </div>
            <div>
                <Chart/>
            </div>
            <div className="flex gap-7 justify-center">
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color='green'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClass
                />

                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                />
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                />
            </div>
            <div>
                const slider = (
                <AwesomeSlider>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </AwesomeSlider>
                )
            </div>
        </div>
    )
}

export default PriceOptions;