import Logo from '../assets/logo.png';
import LogoReact from '../assets/react.svg';

export default function Header() {
  return (
    <header>
      <img src={Logo} className="logo" alt="logo" />
      My Meme Generator in <img src={LogoReact} className="" alt="react" />
    </header>
  );
}
