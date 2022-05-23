import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <div className={styles.btn}>
        <Link href={`/pokemon/${pokemon.id}`}>
          <a>Detalhes</a>
        </Link>
      </div>
    </div>
  );
}
