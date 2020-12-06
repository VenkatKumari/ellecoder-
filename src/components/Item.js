import React from "react";

const Item = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return <motion.div layout>{isOpen && content}</motion.div>;
};

export default Item;
