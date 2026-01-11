import { useEffect, useState } from "react";
import "./TestimonialMinimal.css";
import peanutImg from "../../assets/testimonialBG.png";

const reviews = [
  {
    name: "Aditi Sharma",
    rating: 5,
    date: "12 Jan 2025",
    text:
      "This peanut butter feels indulgent yet clean. The texture and flavour make it a daily staple.",
  },
  {
    name: "Rahul Mehta",
    rating: 4,
    date: "18 Jan 2025",
    text:
      "Smooth, balanced, and not overly sweet. It fits perfectly into my breakfast routine.",
  },
  {
    name: "Sneha Verma",
    rating: 5,
    date: "25 Jan 2025",
    text:
      "You can tell this is made with care. The consistency stays the same every time.",
  },
  {
    name: "Karan Patel",
    rating: 4,
    date: "02 Feb 2025",
    text:
      "The chatpata flavour adds a unique twist without overpowering the peanut taste.",
  },
  {
    name: "Neha Kapoor",
    rating: 5,
    date: "06 Feb 2025",
    text:
      "I love how natural it tastes. It doesn’t feel processed or artificial at all.",
  },
  {
    name: "Arjun Singh",
    rating: 4,
    date: "11 Feb 2025",
    text:
      "Great balance of flavour and texture. Works well with toast, smoothies, and fruits.",
  },
  {
    name: "Pooja Nair",
    rating: 5,
    date: "18 Feb 2025",
    text:
      "This has replaced my regular peanut butter. The taste feels more authentic.",
  },
  {
    name: "Vikram Joshi",
    rating: 4,
    date: "23 Feb 2025",
    text:
      "Consistent quality and smooth spread. You can rely on this brand.",
  },
  {
    name: "Ananya Roy",
    rating: 5,
    date: "01 Mar 2025",
    text:
      "The flavour profile feels well thought out. Subtle, rich, and satisfying.",
  },
  {
    name: "Rohit Malhotra",
    rating: 5,
    date: "06 Mar 2025",
    text:
      "A premium take on peanut butter. Simple ingredients, great taste.",
  },
];

const TestimonialsMinimal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHidden(true);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
        setIsHidden(false);
      }, 1000); 
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const review = reviews[activeIndex];

  return (
    <section className="minimal-section">
      <div
        className="minimal-bg"
        style={{ backgroundImage: `url(${peanutImg})` }}
      >
        <div
          className={`minimal-card ${
            isHidden ? "hidden" : ""
          }`}
        >
          <div className="minimal-stars">
            {"★".repeat(review.rating)}
          </div>

          <p className="minimal-text">{review.text}</p>

          <p className="minimal-name">{review.name}</p>

          <p className="minimal-date">{review.date}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMinimal;
