import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/picture/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">

        {/* ------------------------ 
        dropdown for small device */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold decoration-stone-950" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toys"
                className={({ isActive }) =>
                  isActive ? "font-bold decoration-stone-950" : ""
                }
              >
                All Toys
              </NavLink>
            </li>
            {
              user &&
              <li>
                <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  My Toys
                </NavLink>
              </li>
            }
            {
              user &&
              <li>
                <NavLink
                  to="/addToy"
                  className={({ isActive }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  Add Toy
                </NavLink>
              </li>
            }
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "font-bold decoration-stone-950" : ""
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='ml-2'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold decoration-stone-950 " : ""
            }
          >
            <div className='flex justify-center items-center gap-2'>
              <img className='h-14 w-14 rounded-full' src={logo} alt="" />
              <p>Toy Safari</p>
            </div>
          </NavLink>
        </div>
      </div>

      {/* --------------------
      navbar for large screen */}
      <div className='flex'>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold decoration-stone-950" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toys"
                className={({ isActive }) =>
                  isActive ? "font-bold decoration-stone-950" : ""
                }
              >
                All Toys
              </NavLink>
            </li>
            {
              user &&
              <li>
                <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  My Toys
                </NavLink>
              </li>
            }
            {
              user &&
              <li>
                <NavLink
                  to="/addToy"
                  className={({ isActive }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  Add Toy
                </NavLink>
              </li>
            }
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "font-bold decoration-stone-950" : ""
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className='flex justify-end'>
          {
            user ?
              <button onClick={handleLogOut} className='hidden lg:flex btn btn-ghost px-5 py-0' >Log out</button>
              :
              <Link to='/login' className="btn btn-ghost px-5 py-0">
                login
              </Link>
          }
          {
            user &&
            <>
              <div className="dropdown dropdown-end">
                <div className="tooltip tooltip-bottom" data-tip={user.displayName || ''}>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-14 rounded-full">
                      <img src={'https://i.ibb.co/q5hwqD5/photo-1573547429441-d7ef62e04b63.jpg'} />
                    </div>
                  </label>
                </div>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/user-profile'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log out</button>
                  </li>

                </ul>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;