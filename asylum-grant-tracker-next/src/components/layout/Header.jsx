import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  // TODO: Replace me
  const { isAuthenticated } = useAuth0();

 return (
    <header className='flex flex-col items-center w-full primary-c px-14 py-4'>
      <div className='flex justify-between items-center w-full'>
        <NavLink to='https://www.humanrightsfirst.org/'>
          <img className='w-[100px]' src={Logo} alt='HRF logo white' />
        </NavLink>
        <div className='flex items-center gap-16'>
          <NavLink to='/' className='nav-btn'>
            Home
          </NavLink>
          <NavLink to='/graphs' className='nav-btn'>
            Graphs
          </NavLink>
          {isAuthenticated && (
            <NavLink to='/profile' className='nav-btn'>
              Profile
            </NavLink>
          )}
          <LoggingButtons />
        </div>
      </div>

      {/* ✅ Centered Title Below Nav */}
      <h1 className='mt-8 text-3xl font-bold text-black text-center'>
        Asylum Office Grant Rate Tracker
      </h1>
    </header>
  );
}
