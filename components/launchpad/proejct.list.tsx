import lpProjectList from "../../styles/launchpad/LpProjectList.module.css";

function LpProjectList({ children }) {
  return <div className={lpProjectList.container}>{children}</div>;
}

export default LpProjectList;
