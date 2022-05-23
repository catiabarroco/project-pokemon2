import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Este site é uma prenda especial para o Leonardo e para o Dinis.</p>
      <p>
        Assim vocês podem descobrir um pouco mais sobre Pokemons, enquanto a
        vossa tia faz coisas chatas (o jantar, por exemplo)
      </p>
      <p>Beijinhos da Cátia... (da casa da Arvore)</p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
