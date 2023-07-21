import './Menu.styles.css';
import Card from '../Card/Card';
 
const Menu = () => {
  return (
    <section name='menu' className='specials'>
       <div className='menu-header'>
        <h1 className='menu-title'>This weeks Specials!</h1>
        <button className='menu-button'>Online Menu</button>
      </div>
       <Card />
      </section>
  );
};

export default Menu;