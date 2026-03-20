'use client';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HighlightsCarousel({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items?.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3200);
    return () => clearInterval(id);
  }, [items?.length]);

  if (!items?.length) return null;

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.map((item, idx) => (
          <div key={idx} className={`carousel-card ${idx === index ? 'active' : ''}`}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={prev} aria-label="Previous">
          <ChevronLeft size={18} />
        </button>
        <div className="carousel-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={i === index ? 'active' : ''}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Next">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
