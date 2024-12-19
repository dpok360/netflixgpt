import { useEffect } from 'react';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) navigate('/');
  }, []);

  return (
    <div>
      <Logo />
    </div>
  );
};

export default Header;
