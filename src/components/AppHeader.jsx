import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function AppHeader () {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-slate-200 shadow-md sticky top-0 ...'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap text-transform: capitalize'>
            <span className='text-slate-500'>jobify</span>
            <span className='text-slate-700'>job board</span>
          </h1>
        </Link>
        <ul className='flex gap-4'>

          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline text-transform: capitalize'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline text-transform: capitalize'>
              About
            </li>
          </Link>
          <Link to='/contact'>
            <li className='hidden sm:inline text-slate-700 hover:underline text-transform: capitalize'>
              Contact
            </li>
          </Link>
        </ul>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4 align-middle'>

          <Link to='/add-job'>
            <li className='hidden sm:inline text-slate-700 hover:underline text-transform: capitalize'>
              job posts
            </li>
          </Link>
          <Link to='/add-company'>
            <li className='hidden sm:inline text-slate-700 hover:underline text-transform: capitalize'>
              Companies
            </li>
          </Link>
          <Link to='/users'>
            <li className='hidden sm:inline text-slate-700 hover:underline text-transform: capitalize'>
              users
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <div className='flex gap-2 items-center'>
                <span className='w-3 h-3 rounded-full bg-green-700'></span>
                <img
                  className='rounded-full h-7 w-7 object-cover'
                  src={currentUser.avatar}
                  alt='profile'
                />
              </div>
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
