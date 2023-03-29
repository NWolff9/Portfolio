import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
 
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, info:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, info:"Cascading Style Sheets é um mecanismo para adicionar estilos a uma página Web" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, info:"JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, info:"testeNode" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, info:"testeMYSQL" },
    { id: "react", name: "React", icon: <DiReact />, info:"testeReact" },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;