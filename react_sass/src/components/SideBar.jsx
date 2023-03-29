import Avatar from '../image/profile.jpg';
import  '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import Information from './Information';


const SideBar = () => {
  return (
    <aside id = "sidebar">
      <img src={Avatar} alt="Nathã Wolff" />
      <p className="title">desenvolvedor</p>
      <SocialNetworks/>
      <Information/>
      <a href="" className="btn">Projetos</a>



    </aside>
  )
}

export default SideBar