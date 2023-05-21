import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import UseTitle from '../../utilities/UseTitle';

const Blogs = () => {

  UseTitle('Blogs');


  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className='px-5 md:px-36'>
      <div className='p-5 md:p-10 py-10 md:py-16'>
        <div className='grid grid-cols-1 gap-8 drop-shadow-md'>
          <div className='border p-3 md:p-5 rounded-lg bg-gray-100' data-aos="fade-right" data-aos-duration="600">
            <p className='font-bold tracking-wider mb-4'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p className='mt-3'><span className='font-semibold'>Answer:</span> Similar to a unique key, an access token grants you access to restricted resources. A refresh token will replace your key after it has expired. To ensure that you remain signed in and are able to perform the tasks that are permitted of you, these tokens are kept secure on your device, either in a cookie or storage.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-gray-100' data-aos="fade-left" data-aos-duration="600">
            <p className='font-bold tracking-wider mb-4'>Compare SQL and NoSQL databases</p>
            <p className='mt-3'><span className='font-semibold'>Answer:</span>An ordered filing cabinet with labels on each file is how SQL databases operate. To search for and manage data, they employ the SQL language. NoSQL databases are more akin to a cluttered drawer where anything can be thrown in. They are versatile and can handle many data formats. NoSQL is better for handling large amounts of disorganized data, whereas SQL is better for complicated queries and transactions.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-gray-100' data-aos="fade-right" data-aos-duration="800">
            <p className='font-bold tracking-wider mb-4'>What is express js? What is Nest JS?</p>
            <p className=''><span className='font-semibold'>Answer:  </span>A well-liked web application framework for Node.js is called Express.js. By offering a collection of tools and utilities, it makes the process of creating web servers and APIs simpler. On top of Express.js, NestJS is a TypeScript-based framework. To improve code structure and scalability, it includes further capabilities like dependency injection and architectural patterns.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-gray-100' data-aos="fade-left" data-aos-duration="1000">
            <p className='font-bold tracking-wider mb-4'>What is MongoDB aggregate and how does it work?</p>
            <p className=''><span className='font-semibold'>Answer:</span>Aggregate in MongoDB is a strong function that lets you do complex operations on your data. It works by combining multiple stages like grouping, filtering, sorting, and calculating to process and transform your data. It's like a pipeline where data flows through different stages to produce the desired results, enabling you to perform complex queries and analysis on your MongoDB data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;