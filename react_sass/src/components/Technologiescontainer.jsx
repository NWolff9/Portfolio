import {
    DiHtml5,
    DiSass,
    DiJsBadge,
    DiMysql,
    DiReact,
    DiPython,
     
  } from "react-icons/di";

  import {
    SiNextdotjs,
  } from "react-icons/si";

  import{
    BsFileBarGraph
  } from "react-icons/bs"
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, info:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web" },
    { id: "sass", name: "Sass", icon: <DiSass />, info:"O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, info:"JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet" },
    { id: "python", name: "python", icon: <DiPython />, info:"Python é uma linguagem de programação de alto nível, interpretada, imperativa, orientada a objetos, funcional, de tipagem dinâmica" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, info:"O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface" },
    { id: "react", name: "React", icon: <DiReact />, info:"O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web" },
    { id: "next", name: "Next", icon: <SiNextdotjs/>, info: "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Verce"},
    { id: "BI", name: "PowerBI", icon: <BsFileBarGraph/>, info: "O Power BI é uma coleção de serviços de software que trabalham juntos para transformar dados em informações coerentes, visualmente envolventes e interativas."},
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