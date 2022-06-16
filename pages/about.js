import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      	<h1>Marco Pinto</h1>
			<p>Este site é uma prenda especial para o Marco.</p>
			<p>
				Assim podes descobrir um pouco mais sobre Pokemons, enquanto os
				pais fazem coisas chatas (o jantar, por exemplo 😁)
			</p>
			<p>Beijinhos do João e da Cátia... Espero que gostes ❤️</p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
