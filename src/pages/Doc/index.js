import './style.css';
import Content from './fragments/content';
import logo from '../../logo.svg';

function Doc() {
  let data = "ini adalah isi doc";

  return (
    <div>
      <section className='content-index-container'>
        <Content data={data} />
        <img src={logo} className='logo'  alt="logo" />
    
      </section>
    </div>
  );
}

export default Doc;