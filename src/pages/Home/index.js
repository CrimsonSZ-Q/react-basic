import Header from '../../components/Header';
import Content from './fragments/content/index';
import Sidebar from './fragments/sidebar/sidebar';
import './style.css';
function Home() {
    //consr
    
    var nama = 'React JS adalah library JavaScript yang biasa digunakan saat membangun UI suatu website atau aplikasi web.';

   

    return (
      <div className='container'>
  
          <section className='content-container'>
          <Content nama={nama} />
          <Sidebar />
          </section>
          

      </div>
    );
  }
  
  export default Home;