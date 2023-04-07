import UserInfo from '../components/UserInfo';
import Logo from '../assets/icon.png'
import AppLink from './Link';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-between h-16 md:h-20">
        <nav className="flex flex-grow">
          <Link to="/">
            <img src={Logo} alt="workabus" class="object-fill h-20 w-30 ..." />
          </Link>

          <ul className="flex flex-grow justify-end flex-wrap items-center">

            <li><AppLink to="/admin" text="Admin" /></li>
            <li>
              <UserInfo />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
