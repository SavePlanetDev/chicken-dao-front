import button from "../styles/Button.module.css";
import Link from "next/link";

export default function Button({ children }) {
  return (
    <Link href="/privilage">
      <div className={button.container}>
        <div className={button.content}>{children}</div>
      </div>
    </Link>
  );
}
