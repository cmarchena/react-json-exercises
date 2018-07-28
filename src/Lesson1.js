import React from 'react';
import './index.css';

const Lesson1 = ({ name }) => {
  return (
    <div className="hello-world">
      <p>
        Hello <strong>{name}</strong>
      </p>
      <ul>
        <li>item1 {5 * 10}</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
      </ul>
    </div>
  );
};
export default Lesson1;
