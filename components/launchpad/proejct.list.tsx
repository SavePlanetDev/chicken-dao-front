import lpProjectList from "../../styles/launchpad/LpProjectList.module.css";

type ProjectListProps = {
  children: JSX.Element;
};

function LpProjectList({ children }: ProjectListProps) {
  return <div className={lpProjectList.container}>{children}</div>;
}

export default LpProjectList;
