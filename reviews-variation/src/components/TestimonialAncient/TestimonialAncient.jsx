import "./TestimonialAncient.css";

const reviews = [
  {
    name: "Aditi Sharma",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "The flavour feels authentic and well-balanced. It reminds me of homemade preparations rather than commercial spreads.",
  },
  {
    name: "Rahul Mehta",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "Smooth texture and consistent quality. It fits well into my daily breakfast routine without feeling artificial.",
  },
  {
    name: "Sneha Verma",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "You can tell care has gone into making this. The taste stays consistent across jars, which builds trust over time.",
  },
];

const TestimonialAncient = () => {
  return (
    <section className="ancient-section">
      <h2 className="ancient-title">Customer Reviews</h2>

      <div className="ancient-summary">
        <div className="ancient-stars">★★★★★</div>
        <div className="ancient-rating">4.8 out of 5</div>
        <div className="ancient-trust">
          Trusted by customers over time
        </div>
      </div>

      <div className="ancient-reviews">
        {reviews.map((review, index) => (
          <div
            className="ancient-review animate-ancient"
            style={{ animationDelay: `${index * 0.15}s` }}
            key={index}
          >
            <p className="ancient-text">“{review.text}”</p>

            <div className="ancient-footer">
              <div className="ancient-user">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="ancient-avatar"
                />
                <span className="ancient-name">{review.name}</span>
              </div>

              <span className="ancient-rating-small">
                {"★".repeat(review.rating)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialAncient;
