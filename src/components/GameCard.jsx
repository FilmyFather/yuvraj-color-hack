import React from "react";

const GameCard = ({ title, description }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm mt-2">{description}</p>
        </div>
    );
};

export default GameCard;