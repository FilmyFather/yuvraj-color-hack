import React, { useEffect, useState } from "react";

const RealTimeData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const futureTime = new Date(Date.now() + 30000).toLocaleTimeString();
            setData([
                { type: "Number", value: Math.floor(Math.random() * 10), time: futureTime },
                { type: "Color", value: Math.random() > 0.5 ? "Red" : "Green", time: futureTime },
                { type: "Big/Small", value: Math.random() > 0.5 ? "Big" : "Small", time: futureTime }
            ]);
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg text-white text-center">
            <h2 className="text-xl font-bold">Upcoming Results (30s Ahead)</h2>
            <ul className="mt-4 space-y-2">
                {data.map((item, index) => (
                    <li key={index} className="text-lg">
                        {item.type}: <span className="font-bold">{item.value}</span> (at {item.time})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RealTimeData;
