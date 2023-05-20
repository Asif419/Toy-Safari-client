import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from './SingleCategory';
import logo from '../../../assets/icon/categories.png'

const Category = () => {
  const [category, setCategory] = useState('Wild');
  const [toys, setToys] = useState([]);

  const handleCategory = (category) => {
    setCategory(category);
  }

  const showTable = (
    <>
      {
        <SingleCategory
          toys={toys}
        ></SingleCategory>
      }
    </>
  )

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
      })
  }, [category])

  return (
    <div className='p-5 my-5 border rounded-lg'>
      <div className='my-5'>
        <img className='h-16 w-16 mx-auto p-2' src={logo} alt="" />
        <p className='font-bold text-center my-2 text-3xl text-black'>Shop by Category</p>
      </div>
      {/* tabs started here */}
      <Tabs>
        <TabList>
          <Tab onClick={() => handleCategory('Wild')}>Wild</Tab>
          <Tab onClick={() => handleCategory('Domestic')}>Domestic</Tab>
          <Tab onClick={() => handleCategory('Bird')}>Bird</Tab>
        </TabList>

        <TabPanel>
          {showTable}
        </TabPanel>
        <TabPanel>
          {showTable}
        </TabPanel>
        <TabPanel>
          {showTable}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;