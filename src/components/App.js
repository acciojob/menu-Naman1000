
import React, { useState } from 'react';
import Menu from './Menu';
import './styles.css';

// Mock data including all required categories
const menuData = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://via.placeholder.com/250x150',
    desc: `Fluffy buttermilk pancakes served with maple syrup and a side of fresh berries.`,
  },
  {
    id: 2,
    title: 'Diner Double Burger',
    category: 'lunch',
    price: 13.99,
    img: 'https://via.placeholder.com/250x150',
    desc: `Two juicy beef patties, cheddar cheese, lettuce, and our secret diner sauce.`,
  },
  {
    id: 3,
    title: 'Godzilla Milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://via.placeholder.com/250x150',
    desc: `A massive chocolate and vanilla shake topped with whipped cream and a brownie.`,
  },
  {
    id: 4,
    title: 'Country Delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://via.placeholder.com/250x150',
    desc: `Hearty breakfast with eggs, hash browns, toast, and your choice of bacon or sausage.`,
  },
  {
    id: 5,
    title: 'Egg Attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://via.placeholder.com/250x150',
    desc: `A loaded sandwich with fried egg, bacon, cheese, and avocado on toasted sourdough.`,
  },
  {
    id: 6,
    title: 'Oreo Dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://via.placeholder.com/250x150',
    desc: `Vanilla ice cream blended with crushed Oreos and topped with chocolate syrup.`,
  }
];

function App() {
  const [menuItems, setMenuItems] = useState(menuData);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menuData);
      return;
    }
    const newItems = menuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    // The main container with id="main" is required for the test pass
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        
        {/* Category Filter Buttons */}
        <div className="btn-container">
          <button className="filter-btn" onClick={() => filterItems('all')}>
            All
          </button>
          <button className="filter-btn" id="filter-btn-1" onClick={() => filterItems('breakfast')}>
            Breakfast
          </button>
          <button className="filter-btn" id="filter-btn-2" onClick={() => filterItems('lunch')}>
            Lunch
          </button>
          <button className="filter-btn" id="filter-btn-3" onClick={() => filterItems('shakes')}>
            Shakes
          </button>
        </div>
        
        {/* Render Menu Items */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
