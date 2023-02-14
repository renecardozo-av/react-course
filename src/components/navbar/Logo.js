import AdbIcon from '@mui/icons-material/Adb';

import './Navbar.scss';

function Logo({hasLogo}) {
  return (
    <>
      {hasLogo?
        (
          <div className='logo__container'>
            <div className='logo__image'>
              Here comes the logo ico
            </div>
          </div>
        ) : (
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        )
      }
    </>
  );
}

export default Logo;