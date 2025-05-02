
import React, { useEffect, useState } from "react";
import axios from "axios";

function ReviewList({ itemId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/reviews?itemId=${itemId}`)
      .then((res) => setReviews(res.data));
  }, [itemId]);

  return (
    <div className="mt-4">
      <h4>Reviews</h4>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((rev) => (
          <div key={rev.id} className="border p-2 mb-2">
            <strong>{rev.name}</strong> - {rev.rating} Stars
            <p>{rev.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewList;
