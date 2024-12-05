import Image from "next/image";
import styles from "./page.module.css";
import Title from '@/components/Title.jsx'

export default function Home() {
  return (
    <div>
      <main className="home-main">
        <Title></Title>
      </main>
    </div>
  );
}
