import React, { useEffect, useState } from 'react';
import Expression from "./Expression";

function ExpressionsList({ GetListUrl }) {
    const [data, setData] = useState([]);
    const [isConnected, setIsConnected] = useState(true);

    const fetchData = () => {
        fetch(GetListUrl)
            .then(response => {
                if (!response.ok) {
                    setIsConnected(false);
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsConnected(true);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setIsConnected(false);
            });
    };

    useEffect(() => {
        fetchData(); // Fetch data initially
        const interval = setInterval(fetchData, 3000); // Fetch data every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div>
            <h2>Expressions List</h2>
            {data.sort((a, b) => new Date(b["created_at"]) - new Date(a["created_at"])).map((item, index) => (
                <Expression key={item.id} Expression={item["expression"]} Status={item["status"]} Id={item["id"]} CreatedAt={item["created_at"]} Result={item["result"]} />
            ))}
        </div>
    );
}

export default ExpressionsList;
