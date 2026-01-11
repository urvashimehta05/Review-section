import { useEffect, useState } from "react";
import "./TestimonialEvergreen.css";

const reviews = [
  {
    name: "Aditi Sharma",
    profession: "Nutritionist",
    lastBuy: "Purchased 2 days ago",
    text: "Clean ingredients and consistent taste. Easy recommendation.",
  },
  {
    name: "Rahul Mehta",
    profession: "Fitness Coach",
    lastBuy: "Purchased 5 days ago",
    text: "Great protein source with a balanced flavour.",
  },
  {
    name: "Sneha Verma",
    profession: "Food Blogger",
    lastBuy: "Purchased 1 week ago",
    text: "Chatpata flavour adds a unique twist.",
  },
  {
    name: "Arjun Singh",
    profession: "Software Engineer",
    lastBuy: "Purchased 3 days ago",
    text: "Smooth texture and reliable quality.",
  },
  {
    name: "Neha Kapoor",
    profession: "Wellness Consultant",
    lastBuy: "Purchased 6 days ago",
    text: "Tastes natural and feels premium.",
  },
  {
    name: "Karan Patel",
    profession: "Gym Owner",
    lastBuy: "Purchased yesterday",
    text: "Clients love the taste and consistency.",
  },
  {
    name: "Pooja Nair",
    profession: "Yoga Instructor",
    lastBuy: "Purchased 4 days ago",
    text: "Light on the stomach and very satisfying.",
  },
  {
    name: "Vikram Joshi",
    profession: "Startup Founder",
    lastBuy: "Purchased 1 week ago",
    text: "Good macros and clean flavour profile.",
  },
  {
    name: "Ananya Roy",
    profession: "Dietitian",
    lastBuy: "Purchased 2 weeks ago",
    text: "Perfect for clients looking for clean nutrition.",
  },
  {
    name: "Rohit Malhotra",
    profession: "Marketing Consultant",
    lastBuy: "Purchased 3 days ago",
    text: "Feels premium and tastes authentic.",
  },
  {
    name: "Mehul Jain",
    profession: "CrossFit Athlete",
    lastBuy: "Purchased 5 days ago",
    text: "Excellent post-workout option.",
  },
  {
    name: "Isha Gupta",
    profession: "Lifestyle Influencer",
    lastBuy: "Purchased 1 week ago",
    text: "My audience loves this flavour.",
  },
  {
    name: "Siddharth Rao",
    profession: "Product Manager",
    lastBuy: "Purchased 2 days ago",
    text: "Consistent quality across batches.",
  },
  {
    name: "Nikita Desai",
    profession: "Home Baker",
    lastBuy: "Purchased 6 days ago",
    text: "Works beautifully in desserts and spreads.",
  },
  {
    name: "Aman Khurana",
    profession: "Sales Lead",
    lastBuy: "Purchased yesterday",
    text: "Good taste without being overpowering.",
  },
  {
    name: "Rhea Malhotra",
    profession: "Content Strategist",
    lastBuy: "Purchased 4 days ago",
    text: "Feels like a thoughtful product.",
  },
  {
    name: "Harsh Vardhan",
    profession: "Supply Chain Analyst",
    lastBuy: "Purchased 1 week ago",
    text: "Reliable packaging and great consistency.",
  },
  {
    name: "Tanvi Kulkarni",
    profession: "Clinical Nutritionist",
    lastBuy: "Purchased 3 days ago",
    text: "Easy to recommend to patients.",
  },
  {
    name: "Mohit Agarwal",
    profession: "Business Owner",
    lastBuy: "Purchased 2 weeks ago",
    text: "Customers keep coming back for this.",
  },
  {
    name: "Shalini Iyer",
    profession: "Health Coach",
    lastBuy: "Purchased 5 days ago",
    text: "Balances flavour and nutrition really well.",
  },
];

const TestimonialEvergreen = () => {
  const [active, setActive] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === 0 ? -100 : 0));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="evergreen-section">
      <div
        className="evergreen-track"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`evergreen-card ${
              active === index ? "active" : ""
            }`}
            onClick={() => setActive(index)}
          >
            <p className="evergreen-text">{review.text}</p>

            <div className="evergreen-meta">
              <span className="evergreen-name">{review.name}</span>
              <span className="evergreen-profession">
                {review.profession}
              </span>
            </div>

            <span className="evergreen-date">{review.lastBuy}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialEvergreen;
