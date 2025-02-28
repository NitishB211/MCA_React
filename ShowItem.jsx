import { useEffect, useState } from "react";
import axios from "axios";

function ShowItem() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/items")
            .then((res) => {
                setItems(res.data);
            })
            .catch((error) => {
                console.error("Error fetching items:", error);
            });
    }, []);

    return (
        <div>
            <h1>Show Items</h1>
            <div className="items-container">
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} className="item-card">
                            <img src={item.image} alt={item.Name} width="100" />
                            <h3>{item.Name}</h3>
                            <p>{item.Description}</p>
                            <p>Price: ${item.price}</p>
                            <p>Size: {item.size}</p>
                        </div>
                    ))
                ) : (
                    <p>No items available</p>
                )}
            </div>
        </div>
    );
}

export default ShowItem;
