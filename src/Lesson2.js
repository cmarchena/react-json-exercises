import React from 'react';
const MediaCard = ({ title, body, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageUrl} alt="" />
    </div>
  );
};
const Gate = ({ isOpen }) => {
  return isOpen ? <p>open</p> : <p>closed</p>;
};
const Lesson2 = () => {
  return (
    <div>
      <MediaCard
        title="tarjeta"
        body="blablabla"
        imageUrl="https://images.unsplash.com/photo-1532691403316-d08a19730ed9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=023978c489e57f6bf88909b39f11fbdb&auto=format&fit=crop&w=750&q=80"
      />
      <Gate isOpen="open" />
    </div>
  );
};
export default Lesson2;
