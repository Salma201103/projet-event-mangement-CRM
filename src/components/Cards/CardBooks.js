import React from 'react';
import CardBook from './CardBook'; // Adjust the import path as needed

const CardBooks = () => {
  const cardData = [
    {
      imgSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/150',
      title: 'Card title 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/150',
      title: 'Card title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/150',
      title: 'Card title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/150',
      title: 'Card title 4',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/150',
      title: 'Card title 5',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#'
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {cardData.map((card, index) => (
        <CardBook
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardBooks;
