import Product from "./views/Product";
import { useState } from "react";
import "../styles/slider.css";
import "../styles/products.css";
import ex from "../assets/ex.jpg";
import ex2 from "../assets/ex2.jpg";
import ex3 from "../assets/ex3.jpg";
import ex4 from "../assets/ex4.jpg";
import ex5 from "../assets/ex5.jpg";
const array = [
  {
    title: "blouse",
    image: ex,
    price: 40,
  },
  {
    title: "blouse2",
    image: ex2,
    price: 50,
  },
  {
    title: "blouse3",
    image: ex3,
    price: 50,
  },
  {
    title: "blouse",
    image: ex4,
    price: 50,
  },
  {
    title: "blouse2",
    image: ex5,
    price: 50,
  },
  {
    title: "blouse3",
    image: "image3",
    price: 10,
  },
  {
    title: "blouse",
    image: "image",
    price: 40,
  },
  {
    title: "blouse2",
    image: "image2",
    price: 50,
  },
  {
    title: "blouse3",
    image: "image3",
    price: 50,
  },
  {
    title: "blouse",
    image: "image",
    price: 50,
  },
  {
    title: "blouse2",
    image: "image2",
    price: 50,
  },
  {
    title: "blouse3",
    image: "image3",
    price: 10,
  },
];

export default function Products() {
  const [sliderPosition, setSliderPosition] = useState(0);

  const slideLeft = () => {
    setSliderPosition(sliderPosition - 1);
  };

  const slideRight = () => {
    setSliderPosition(sliderPosition + 1);
  };

  return (
    <div className="products-container">
      <button onClick={slideLeft}>Previous</button>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${sliderPosition * 300}px)` }}
        >
          {array.map((product) => (
            <Product object={product} />
          ))}
        </div>
      </div>
      <button onClick={slideRight}>Next</button>
    </div>
  );
}
