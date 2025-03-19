import React from "react";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import RealTimeData from "../components/RealTimeData";

const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navbar />
            <div className="p-6 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6">Play & Win</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <GameCard title="Number Prediction" description="Predict a number from 0-9" />
                    <GameCard title="Color Prediction" description="Guess the right color" />
                    <GameCard title="Big or Small" description="Guess if the number is big or small" />
                </div>
                <RealTimeData />
            </div>
        </div>
    );
};

export default Home;
