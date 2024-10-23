import React from 'react';
import Image from 'next/image';  // Importing Next.js Image component

const menuItems = [
    {
        id: 1,
        title: "Chicken or Beef Reshmi Kebab",
        description: "Soft and tender kebabs made from minced chicken or beef, delicately spiced and grilled.",
        price: "600 PKR",
        image: "/beef-seekh-kabab.jpg",
        alt: "Chicken or Beef Reshmi Kebab"
    },
    {
        id: 2,
        title: "Prawn Tempura",
        description: "Lightly battered and deep-fried prawns, typically served with a tangy dipping sauce.",
        price: "750 PKR",
        image: "/prawn-tampura.jpg",
        alt: "Prawn Tempura"
    },
    {
        id: 3,
        title: "Chicken Tikka",
        description: "Boneless, marinated pieces of chicken cooked on a grill or tandoor, served with raita and naan.",
        price: "550 PKR",
        image: "/chicken-tikka.jpg",
        alt: "Chicken Tikka"
    },
    {
        id: 4,
        title: "Stuffed Chicken Wings",
        description: "Chicken wings filled with a savory stuffing of minced meat or vegetables, then fried or baked.",
        price: "500 PKR",
        image: "/stuffed-wings.webp",
        alt: "Stuffed Chicken Wings"
    },
    {
        id: 5,
        title: "Malai Boti",
        description: "Creamy, melt-in-your-mouth chicken pieces marinated with cream and mild spices, grilled to perfection.",
        price: "600 PKR",
        image: "/malai-boti.jpeg",
        alt: "Malai Boti"
    },
    {
        id: 6,
        title: "Cream of Mushroom Soup",
        description: "A rich, creamy soup made from fresh mushrooms, cream, and delicate seasoning.",
        price: "400 PKR",
        image: "/mushroom-soup.jpeg",
        alt: "Cream of Mushroom Soup"
    },
    {
        id: 7,
        title: "Chicken Corn Soup",
        description: "A popular, thick chicken and sweet corn soup, served with soy sauce, chili sauce, and vinegar on the side.",
        price: "450 PKR",
        image: "/corn-soup.webp",
        alt: "Chicken Corn Soup"
    },
    {
        id: 8,
        title: "Dynamite Shrimps",
        description: "Crispy fried shrimp tossed in a spicy, creamy sauce, served in a stylish presentation.",
        price: "850 PKR",
        image: "/dynamite-shrimps.jpeg",
        alt: "Dynamite Shrimps"
    },
    {
        id: 9,
        title: "Mozzarella Sticks",
        description: "Golden-fried breaded mozzarella cheese, served with a tangy marinara sauce for dipping.",
        price: "450 PKR",
        image: "/mozzarella-sticks.jpeg",
        alt: "Mozzarella Sticks"
    },
    {
        id: 10,
        title: "Grilled Paneer Tikka",
        description: "Grilled cubes of paneer cheese marinated in spices, a great vegetarian starter option.",
        price: "500 PKR",
        image: "/grilled-paneer-tikka.jpeg",
        alt: "Grilled Paneer Tikka"
    },
    {
        id: 11,
        title: "Loaded Nachos",
        description: "Tortilla chips topped with cheese, jalapeños, salsa, and sour cream, sometimes with an addition of meat like chicken or beef.",
        price: "600 PKR",
        image: "/loaded-nachos.jpg",
        alt: "Loaded Nachos"
    },
    {
        id: 12,
        title: "Garlic Bread with Cheese",
        description: "Crispy garlic-flavored bread, baked with a generous layer of melted cheese on top.",
        price: "350 PKR",
        image: "/garlic-bread.jpg",
        alt: "Garlic Bread with Cheese"
    },
];


const Starters = () => {
    return (
        <div className="starters-container">
            <h1 className='sectionTitle'>Starters Menu</h1>
            <p className="page-description">Explore our delicious variety of appetizers and light meals.</p>
            
            <div className="menu-list">
                {menuItems.map(item => (
                    <div className="menu-item" key={item.id}>
                        <Image 
                            src={item.image} 
                            alt={item.alt} 
                            className="menu-item-img" 
                            width={500}  
                            height={300} 
                            layout="responsive" 
                        />
                        <h3 className="menu-item-title">{item.id}. {item.title}</h3>
                        <p className="menu-item-description">{item.description}</p>
                        <p className='price'>Price: {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Starters;
