import logo from '../logo.svg';
import '../components/style.css';
function Header(prop) {
  const menu = ["Home", "Feature", "Doc"];
  const navigation = () => {
    return menu.map((item, idx) => {
      return <button onClick={() => prop.onClick(idx+1)} >{item}</button>
    }) 
  }
    return (
      <div>
        <header className='header-wrapper'>
          <img src={logo} className='logo'  alt="logo" />
          <h1 className='header-title'>
            TUTORIAL REACT
          </h1>
          <nav className='navigation'>{navigation()}</nav>
        </header>
      </div>
    );
  }
  
  export default Header;