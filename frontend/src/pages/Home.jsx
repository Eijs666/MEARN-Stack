import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import '../components/home/HomeStyle.css'; 

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>

      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
        ) : showType === 'table' ? (
          <BooksTable books={books} />
          ) : (
            <BooksCard books={books} />
            )}
            <br />
            <h1>Welcome to MEARN Stack Project</h1>
            <h2>(MongoDB, Express, React, Node.js).</h2><br /><br />
            <p>In my project, I immersed myself in the MERN stack, mastering MongoDB, Express, React, and Node.js. From building a Node.js project and setting up HTTP routes to integrating MongoDB with Mongoose for data management, I learned to create, retrieve, update, and delete books efficiently. <br /><br />

Refactoring our Node.js backend with Express Router improved code organization, while implementing CORS policies ensured secure cross-origin requests. Transitioning to the frontend, I built a React project using Vite and Tailwind CSS, creating a seamless Single Page Application (SPA) with React Router DOM.<br /><br />

I focused on enhancing user experience (UX) by presenting book lists as cards, encapsulating components for reusability, and integrating modal dialogs for adding and editing books. Beautiful alerts added finesse to user interactions, rounding out my skills in developing full-stack web applications.</p><br /><br />

    </div>
  );
};

export default Home
