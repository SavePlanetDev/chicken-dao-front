import lpContainerModule from "../../styles/launchpad/lpContainer.module.css";

type ContainerProps = {
  children: JSX.Element;
};

function LpContainer({ children }: ContainerProps) {
  return <div className={lpContainerModule.container}>{children}</div>;
}

export default LpContainer;
