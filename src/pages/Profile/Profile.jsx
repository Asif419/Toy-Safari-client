import { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UseTitle from '../../utilities/UseTitle';

const Profile = () => {
  const { user } = useContext(AuthContext);

  UseTitle(`${user.displayName}`);


  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className='px-5 md:px-36'>
      <div className='p-5 md:p-10 py-10 md:py-16 relative'>
        <div className='flex justify-center'>
          <div className="-mb-16 z-20">
            <div className="avatar">
              <div className="w-24 mask mask-squircle" data-aos="fade-up" data-aos-duration="1000">
                <img src={user.photoURL} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='z-10'>
            <div className="card card-compact w-96 bg-gray-100 shadow-xl p-5" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="800">
              <div className="card-body mt-14">
                <h2 className="card-title">{user.displayName}</h2>
                <p>{user.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-black text-white">Edit profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;