import Avatar from '../image/profile.jpg';
import  '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';


const SideBar = () => {
  return (
    <aside id = "sidebar">
      <img src={Avatar} alt="Nathã Wolff" />
      <p className="title">desenvolvedor</p>
      <SocialNetworks/>
      <p>informações para contato</p>
      <a href="" className="btn">Dowload Curriculo</a>



    </aside>
  )
}

export default SideBar