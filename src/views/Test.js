import React from "react";
import CardBook from "../components/Cards/CardBook"; // Update the path as needed
import CardBooks from "../components/Cards/CardBooks";
export default function Test() {
  // Example props for the CardBook component
  const cardProps = {
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image source
    title: "Book Title",
    text: "This is a description of the book.",
    link: "#"
  };

  return (
    <div>
      <CardBook {...cardProps} />
      <CardBooks/>
    </div>
  );
}
