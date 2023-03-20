import button from "../styles/Button.module.css";
import Link from "next/link";

export type ButtonProps = {
  children: JSX.Element;
};

export default function Button({ children }: ButtonProps) {
  return (
    <Link href="/privilage">
      <div className={button.container}>
        <div className={button.content}>{children}</div>
      </div>
    </Link>
  );
}
