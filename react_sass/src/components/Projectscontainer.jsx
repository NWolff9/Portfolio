import "../styles/components/projects.sass";

const ProjectsContainer = () => {
  return (

    <section id="projects-container">
      <h2>Projetos</h2>
      <view>

        <a href="https://rb-powerbi.bosch.com/reports/powerbi/PBI/Production/OfficialBI_708258?rs:embed=true" className="btn">
          America's Management Power BI
        </a>

        <a href="https://boschview.vercel.app/" className="btn">
          Bosch View
        </a>

        <a href="https://www.youtube.com/watch?v=0NFfNsZ1Tp4" className="btn">
          Mesa seletora de peças pneumatica
        </a>
        
      </view>
    </section>
  );
};

export default ProjectsContainer;