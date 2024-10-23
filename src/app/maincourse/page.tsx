import Image from 'next/image';
import React from 'react';

// Define types for DishItem and MenuCategories
type DishItem = {
  name: string;
  description: string;
  price: number;
  image: string; // Add an image property
};

type MenuCategories = {
  mainDishes: DishItem[];
  quickBites: DishItem[];
  grilledItems: DishItem[];
  wraps: DishItem[];
  pizzaOptions: DishItem[];
};

const menuItems: MenuCategories = {
  mainDishes: [
    {
      name: "Biryani",
      description: "A fragrant rice dish made with aromatic spices and tender meat, often garnished with fried onions and served with raita.",
      price: 800,
      image: "/biryani.jpg", 
    },
    {
      name: "Chicken Karahi",
      description: "A spicy chicken curry cooked in a wok with tomatoes, green chilies, and a blend of spices, garnished with coriander.",
      price: 700,
      image: "/chicken-karahi.jpeg",
    },
    {
      name: "Nihari",
      description: "A slow-cooked beef stew, traditionally eaten for breakfast, simmered with spices and served with naan.",
      price: 900,
      image: "/nehari.jpg",
    },
    {
      name: "Haleem",
      description: "A rich, savory dish made with wheat, barley, and meat, slow-cooked to perfection and garnished with fried onions and lemon.",
      price: 600,
      image: "/haleem.jpeg",
    },
    {
      name: "Mutton Korma",
      description: "Mutton cooked in a creamy sauce made with yogurt and a blend of spices, served with naan or rice.",
      price: 1100,
      image: "/mutton-korma.jpeg",
    },
    {
      name: "Paya",
      description: "A traditional dish made with trotters, cooked in spices and served with naan or roti, perfect for meat lovers.",
      price: 750,
      image: "/paya.jpg",
    },
    {
      name: "Aloo Gosht",
      description: "Tender meat cooked with potatoes and spices for a hearty dish, often enjoyed with rice.",
      price: 650,
      image: "/aloo-ghosht.jpeg",
    },
    {
      name: "Butter Chicken",
      description: "A rich and creamy chicken curry made with a buttery tomato sauce, best served with naan.",
      price: 850,
      image: "/butter-chicken.jpeg",
    },
    {
      name: "Daal Chawal",
      description: "A comforting dish of lentils served with steamed rice, often accompanied by pickles and salad.",
      price: 400,
      image: "/daal-chawal.jpeg",
    },
  ],
  quickBites: [
    {
      name: "Bun Kebab",
      description: "Spicy meat patty served in a bun with chutney and salad, a popular street food.",
      price: 200,
      image: "/bun-kabab.jpeg",
    },
    {
      name: "Samosa",
      description: "Crispy pastry filled with spiced potatoes and peas, served with mint chutney.",
      price: 100,
      image: "/samosa.jpeg",
    },
    {
      name: "Pakora",
      description: "Fried fritters made with besan (gram flour) and vegetables, a perfect snack with tea.",
      price: 150,
      image: "/pakora.jpg",
    },
    {
      name: "Chaat",
      description: "A tangy and spicy snack made with a mix of potatoes, chickpeas, and yogurt, topped with chutney.",
      price: 250,
      image: "/chaat.jpg",
    },
    {
      name: "Dahi Puri",
      description: "Crispy puris filled with yogurt, tamarind chutney, and spices, a refreshing treat.",
      price: 300,
      image: "/dahi-puri.jpeg",
    },
    {
      name: "French Fries",
      description: "Crispy and golden fried potatoes, a classic snack loved by all.",
      price: 150,
      image: "/french-fries.webp",
    },
    {
      name: "Tikki (Cutlet)",
      description: "Spiced potato patties, shallow-fried until crispy, served with chutney.",
      price: 200,
      image: "/cutlet.jpeg",
    },
    {
      name: "Chili Chicken",
      description: "Spicy chicken pieces stir-fried with bell peppers and soy sauce, a popular Indo-Chinese dish.",
      price: 600,
      image: "/chilli-chicken.jpg",
    },
    {
      name: "Paneer Tikka",
      description: "Marinated paneer cubes grilled and served with mint chutney, a delightful vegetarian option.",
      price: 400,
      image: "/paneer-tikka.jpg",
    },
  ],
  grilledItems: [
    {
      name: "Chicken Tikka",
      description: "Marinated chicken pieces grilled to perfection, served with naan and chutney.",
      price: 700,
      image: "/chicken-tikka.jpg",
    },
    {
      name: "Seekh Kebabs",
      description: "Minced meat skewers flavored with spices and grilled, served with salad and sauces.",
      price: 800,
      image: "/seekh-kabab.jpeg",
    },
    {
      name: "Malai Boti",
      description: "Tender chicken marinated in creamy yogurt and spices, grilled for a rich flavor.",
      price: 850,
      image: "/malai-boti.jpeg",
    },
    {
      name: "Bihari Kebabs",
      description: "Spicy beef kebabs marinated in traditional spices, grilled and served with mint chutney.",
      price: 900,
      image: "/behari-kabab.jpeg",
    },
    {
      name: "Tandoori Chicken",
      description: "Whole chicken marinated in yogurt and spices, cooked in a clay oven for smoky flavor.",
      price: 1000,
      image: "/tandoori-chicken.jpeg",
    },
    {
      name: "Fish Tikka",
      description: "Fish marinated in spices and grilled, served with salad and sauces, a seafood delight.",
      price: 800,
      image: "/fish.avif",
    },
    {
      name: "Paneer Tikka",
      description: "Grilled paneer marinated in spices and yogurt, served with green chutney, a vegetarian favorite.",
      price: 600,
      image: "/paneer-tikka.jpg",
    },
    {
      name: "Kofta Kebabs",
      description: "Minced meat balls flavored with spices, grilled or fried, served with sauce.",
      price: 750,
      image: "/kofta-kebab.jpg",
    },
    {
      name: "Barbecue Platter",
      description: "A mix of assorted grilled meats, served with naan, salad, and sauces, perfect for sharing.",
      price: 1500,
      image: "/barbeque-platter.jpeg",
    },
  ],
  wraps: [
    {
      name: "Chicken Roll",
      description: "Spiced chicken wrapped in a soft flatbread, perfect for a quick meal.",
      price: 300,
      image: "/chicken-roll.jpg",
    },
    {
      name: "Seekh Kebab Roll",
      description: "Grilled seekh kebab wrapped in roti, served with chutney.",
      price: 350,
      image: "/seekh-kabab-roll.jpeg",
    },
    {
      name: "Paneer Roll",
      description: "Grilled paneer wrapped in flatbread with salad and chutney, a vegetarian delight.",
      price: 300,
      image: "/paneer-roll.jpg",
    },
    {
      name: "Chapli Kebab Roll",
      description: "A spicy minced meat patty rolled in bread, perfect for on-the-go snacking.",
      price: 350,
      image: "/chapli-kabab-roll.webp",
    },
    {
      name: "Egg Roll",
      description: "Rolled flatbread filled with a spiced omelet, garnished with onions and sauces.",
      price: 250,
      image: "/egg-roll.jpg",
    },
    {
      name: "Veg Roll",
      description: "A fresh vegetable roll with salad and sauces, ideal for vegetarians.",
      price: 200,
      image: "/veg-roll.webp",
    },
    {
      name: "Fish Roll",
      description: "Spiced fish fillet wrapped in flatbread, served with tartar sauce.",
      price: 350,
      image: "/fish-roll.webp",
    },
    {
      name: "Zinger Roll",
      description: "Crispy chicken fillet with lettuce and sauce wrapped in a roll.",
      price: 400,
      image: "/zinger-roll.jpg",
    },
    {
      name: "Chicken Tikka Roll",
      description: "Grilled chicken tikka wrapped in bread with salad and sauces.",
      price: 350,
      image: "/chicken-tikka-roll.jpg",
    },
  ],
  pizzaOptions: [
    {
      name: "Chicken Tikka Pizza",
      description: "Topped with spicy chicken tikka, bell peppers, and cheese.",
      price: 900,
      image: "/chicken-tikka-pizza.jpg",
    },
    {
      name: "Vegetable Pizza",
      description: "A delightful mix of seasonal vegetables topped with cheese.",
      price: 800,
      image: "/veg-pizza.jpeg",
    },
    {
      name: "Malai Chicken Pizza",
      description: "Flavors of tandoori chicken topped with fresh herbs and cheese.",
      price: 1100,
      image: "/malai-boti-pizza.jpg",
    },
  ],
};

const MainCourse = () => {
  return (
    <div className="menu-section">
      <h1 className='sectionTitle'>Main Course</h1>
      <div className="menu-category">
        <h2>Main Dishes</h2>
        <div className="menu-items">
          {menuItems.mainDishes.map((dish, index) => (
            <div key={index} className="dish-item">
              <Image src={dish.image} alt={dish.name} width={300} height={200} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className='price'>Price: PKR {dish.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="menu-category">
        <h2>Quick Bites</h2>
        <div className="menu-items">
          {menuItems.quickBites.map((dish, index) => (
            <div key={index} className="dish-item">
              <Image src={dish.image} alt={dish.name} width={300} height={200} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className='price'>Price: PKR {dish.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="menu-category">
        <h2>Grilled Items</h2>
        <div className="menu-items">
          {menuItems.grilledItems.map((dish, index) => (
            <div key={index} className="dish-item">
              <Image src={dish.image} alt={dish.name} width={300} height={200} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className='price'>Price: PKR {dish.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="menu-category">
        <h2>Wraps</h2>
        <div className="menu-items">
          {menuItems.wraps.map((dish, index) => (
            <div key={index} className="dish-item">
              <Image src={dish.image} alt={dish.name} width={300} height={200} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className='price'>Price: PKR {dish.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="menu-category">
        <h2>Pizza Options</h2>
        <div className="menu-items">
          {menuItems.pizzaOptions.map((dish, index) => (
            <div key={index} className="dish-item">
              <Image src={dish.image} alt={dish.name} width={300} height={200} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className='price'>Price: PKR {dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCourse;
