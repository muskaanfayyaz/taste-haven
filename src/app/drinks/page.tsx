import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

// Define types for drink items
type DrinkItem = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
};

type DrinkCategory = {
  categoryName: string;
  drinks: DrinkItem[];
};

// Define drink categories
const drinkItems: DrinkCategory[] = [
  {
    categoryName: 'Hot Beverages',
    drinks: [
      {
        name: 'Chai (Tea)',
        description: 'Classic Pakistani tea with milk and sugar.',
        price: '150 PKR',
        imageUrl: '/chai.webp',
      },
      {
        name: 'Green Tea (Kahwa)',
        description: 'Fragrant green tea with cardamom.',
        price: '120 PKR',
        imageUrl: '/green-tea.webp',
      },
      {
        name: 'Doodh Patti',
        description: 'Strong tea with more milk than water.',
        price: '160 PKR',
        imageUrl: '/doodh-patti.webp',
      },
      {
        name: 'Kashmiri Chai',
        description: 'Pink tea with spices, served with nuts.',
        price: '250 PKR',
        imageUrl: '/kashmiri-chai.jpg',
      },
      {
        name: 'Coffee',
        description: 'Hot coffee with options like Cappuccino.',
        price: '300 PKR',
        imageUrl: '/coffee.jpg',
      },
    ],
  },
  {
    categoryName: 'Cold Beverages',
    drinks: [
      {
        name: 'Lassi (Sweet/Salty)',
        description: 'Refreshing yogurt drink available in sweet or salty.',
        price: '200 PKR',
        imageUrl: '/lassi.jpeg',
      },
      {
        name: 'Mint Lemonade',
        description: 'Refreshing lemonade with a hint of mint.',
        price: '180 PKR',
        imageUrl: '/mint-lemonade.jpeg',
      },
      {
        name: 'Cold Coffee',
        description: 'Chilled coffee with milk and cream.',
        price: '350 PKR',
        imageUrl: '/cold-cofee.jpg',
      },
      {
        name: 'Soft Drinks',
        description: 'Coca-Cola, Pepsi, Sprite, Fanta.',
        price: '100 PKR',
        imageUrl: '/soft-drinks.jpg',
      },
      {
        name: 'Juices (Orange, Mango)',
        description: 'Freshly squeezed juices.',
        price: '250 PKR',
        imageUrl: '/juice.jpg',
      },
    ],
  },
  {
    categoryName: 'Special Drinks',
    drinks: [
      {
        name: 'Falooda',
        description: 'Sweet milk-based drink with vermicelli, jelly, and ice cream.',
        price: '300 PKR',
        imageUrl: '/falooda.jpg',
      },
      {
        name: 'Pina Colada',
        description: 'A tropical blend of pineapple juice and coconut milk.',
        price: '400 PKR',
        imageUrl: '/pina-colada.jpg',
      },
      {
        name: 'Mango Shake',
        description: 'Creamy mango shake made with fresh mango pulp.',
        price: '350 PKR',
        imageUrl: '/mango-shake.png',
      },
    ],
  },
];

// Drinks component
function Drinks() {
  return (
    <div className="drinks-container">
      <h1 className='sectionTitle'>Our Drinks Menu</h1>
      <div className="drink-categories">
        {drinkItems.map((category) => (
          <div key={category.categoryName}>
            <h2 className="drink-category-title">{category.categoryName}</h2>
            <div className="drink-items-container">
              {category.drinks.map((drink) => (
                <div key={drink.name} className="drink-card">
                  <Image
                    src={drink.imageUrl}
                    alt={drink.name}
                    width={300}
                    height={200}
                    className="drink-image"
                  />
                  <div className="drink-details">
                    <h3 className="drink-name">{drink.name}</h3>
                    <p className="drink-description">{drink.description}</p>
                    <span className="drink-price">{drink.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drinks;
