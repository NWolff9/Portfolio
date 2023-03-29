import Technologiescontainer from "./Technologiescontainer"
import AboutContainer from "./AboutContainer";
import Projectscontainer from "./Projectscontainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <Technologiescontainer />
      <Projectscontainer />
    </main>
  );
};

export default MainContent;