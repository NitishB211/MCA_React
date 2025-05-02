import { useState } from 'react';
import axios from 'axios';

function ReviewForm({ itemId, onReviewSubmitted }) {
    const [review, setReview] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!review.trim()) return;

        try {
            setSubmitting(true);

            
            const newReview = {
                itemId,
                review,
                studentId: 1 
            };
            await axios.post('http://localhost:5001/reviews', newReview);

            // 2. Update SAP points
            const userRes = await axios.get('http://localhost:5001/users/1');
            const user = userRes.data;

            await axios.patch('http://localhost:5001/users/1', {
                sapPoints: (user.sapPoints || 0) + 5,     
                reviewsGiven: (user.reviewsGiven || 0) + 1
            });

            
            setReview('');
            onReviewSubmitted(newReview);

        } catch (error) {
            console.error("Error submitting review or updating SAP:", error);
            alert("Failed to submit review. Try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review"
                rows="3"
                style={{ width: "100%", marginTop: "10px" }}
            />
            <button type="submit" disabled={submitting || !review.trim()}>
                {submitting ? "Submitting..." : "Submit Review"}
            </button>
        </form>
    );
}

export default ReviewForm;
