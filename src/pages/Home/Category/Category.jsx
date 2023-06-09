import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from './SingleCategory';
import logo from '../../../assets/icon/categories.png'
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState('Wild');
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

  const handleSingleToy = id => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to login First',
      })
        .then(result => {
          if (result.isConfirmed) {
            navigate(`/toy/${id}`);
          }
        })
    }
    else {
      navigate(`/toy/${id}`);
    }
  }

  const handleCategory = (category) => {
    setCategory(category);
  }

  const showTable = (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
        {
          toys.map(toy => <SingleCategory
            key={toy._id}
            toy={toy}
            handleSingleToy={handleSingleToy}
          ></SingleCategory>)
        }
      </div>
    </>
  )

  useEffect(() => {
    fetch(`https://toy-safari-server.vercel.app/toys/${category}`)
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