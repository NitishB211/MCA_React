import { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "./ReviewForm";


function ShowItem() {
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState({}); 

  useEffect(() => {
    axios.get("http://localhost:5001/items")
      .then(res => setItems(res.data))
      .catch(err => console.error("Error fetching items:", err));

    axios.get("http://localhost:5001/reviews")
      .then(res => {
        const grouped = {};
        res.data.forEach(r => {
          if (!grouped[r.itemId]) grouped[r.itemId] = [];
          grouped[r.itemId].push(r.review);
        });
        setReviews(grouped);
      })
      .catch(err => console.error("Error fetching reviews:", err));
  }, []);

  const handleReviewSubmitted = (itemId, newReview) => {
    setReviews(prev => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), newReview.review]
    }));
  };

  return (
    <div>
      <h1>Show Items</h1>
      <div className="items-container">
        {items.length > 0 ? items.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.Name} width="100" />
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
            <p>Price: ${item.price}</p>
            <p>Size: {item.size}</p>

            <h5>Reviews:</h5>
            <ul>
              {(reviews[item.id] || []).map((rev, idx) => (
                <li key={idx}>{rev}</li>
              ))}
            </ul>

            <ReviewForm
              itemId={item.id}
              onReviewSubmitted={(newReview) => handleReviewSubmitted(item.id, newReview)}
            />
          </div>
        )) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
}

export default ShowItem;
