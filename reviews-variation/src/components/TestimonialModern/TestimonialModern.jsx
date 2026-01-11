import { useEffect, useState } from "react";
import "./TestimonialModern.css";

const reviews = [
  {
    name: "Aditi Sharma",
    title: "Verified Buyer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "The flavour is bold yet balanced. It feels thoughtfully made and not overly processed.",
  },
  {
    name: "Rahul Mehta",
    title: "Regular Customer",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "Smooth texture and great consistency. This works perfectly with my breakfast routine.",
  },
  {
    name: "Sneha Verma",
    title: "Verified Buyer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "A unique take on peanut butter. The chatpata taste genuinely stands out.",
  },
  {
    name: "Karan Patel",
    title: "Fitness Enthusiast",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text:
      "Great protein source and tastes amazing. Doesn’t feel heavy or artificial.",
  },
  {
    name: "Neha Kapoor",
    title: "Health Conscious",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    text:
      "Clean ingredients and a really balanced flavour. I use it every morning.",
  },
  {
    name: "Arjun Singh",
    title: "Daily User",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    text:
      "Consistent quality and smooth texture. Goes well with almost everything.",
  },
  {
    name: "Pooja Nair",
    title: "Verified Buyer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    text:
      "One of the best peanut butters I’ve tried. The chatpata flavour is unique.",
  },
];

const TestimonialModern = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [liked, setLiked] = useState(reviews.map(() => false));
  const [starCounts, setStarCounts] = useState(reviews.map(() => 1));

  useEffect(() => {
    const starInterval = setInterval(() => {
      setStarCounts((prev) =>
        prev.map((count, idx) =>
          count < reviews[idx].rating ? count + 1 : count
        )
      );
    }, 400);

    const resetInterval = setInterval(() => {
      setStarCounts(reviews.map(() => 1));
    }, 5000);

    return () => {
      clearInterval(starInterval);
      clearInterval(resetInterval);
    };
  }, []);

  const toggleLike = (index) => {
    setLiked((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <section className="modern-section">
      <div className="modern-bg">
        <div className="modern-zigzag">
          {reviews.slice(0, visibleCount).map((review, index) => (
            <div className="modern-card" key={index}>
<div
  className="modern-avatar-wrapper"
  onClick={() => toggleLike(index)}
>
  <img
    src={review.image}
    alt={review.name}
    className="modern-avatar"
  />

  <span
    className={`modern-heart ${
      liked[index] ? "liked animate" : ""
    }`}
  >
    ♥
  </span>
</div>


              <div className="modern-stars animated">
                {"★".repeat(starCounts[index])}
              </div>

              <p className="modern-text">{review.text}</p>

              <div className="modern-footer">
        <p className="modern-name">{review.name}</p>
              <p className="modern-title">{review.title}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < reviews.length && (
          <div className="modern-view-more-wrapper">
            <button
              className="modern-view-more"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + 2, reviews.length)
                )
              }
            >
              View more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialModern;

