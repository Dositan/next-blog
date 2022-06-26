import Image from "next/image";
import Link from "next/link";
import cat from "../public/images/404.jpg";
import errorStyles from "../styles/error.module.css";

export default function Custom404() {
  return (
    <div className={errorStyles.container}>
      <div className={errorStyles.message}>
        <h1>Page doesn't exist.</h1>
        <Link href="/">
          <a>🏠 Back to Home</a>
        </Link>
      </div>
      <Image src={cat} width={500} height={400} />
    </div>
  );
}
