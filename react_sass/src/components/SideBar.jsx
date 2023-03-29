import Avatar from '../image/profile.jpg';
import  '../styles/components/sidebar.sass';


const SideBar = () => {
  return (
    <aside id = "sidebar">
      <img src={Avatar} alt="Nathã Wolff" />
      <p className="title">desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações para contato</p>
      <a href="" className="btn">Dowload Curriculo</a>



    </aside>
  )
}

export default SideBar