import lpContainerModule from "../../styles/launchpad/lpContainer.module.css";

function LpContainer({ children }) {
  return <div className={lpContainerModule.container}>{children}</div>;
}

export default LpContainer;
