import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <img src={Logo} className="logo" alt="logo" />
      My Meme Generator
    </header>
  );
}
