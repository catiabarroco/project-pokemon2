import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";
import Link from "next/dist/client/link";

export const getStaticPaths = async () => {
  const maxPokemons = 251; //nro maximo de pokemons
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //precisamos retornar um parametro
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { id: (index + 1).toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>
          Número: <span className={styles.pokemon_id}>#{pokemon.id}</span>
        </h3>
      </div>
      <div className={styles.type_title_container}>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles[`type_` + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
      <div className={styles.btn}>
        <Link href="\">
          <a>Return</a>
        </Link>
      </div>
    </div>
  );
}
