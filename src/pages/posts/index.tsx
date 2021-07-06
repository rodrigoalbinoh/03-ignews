import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="/">
            <time>12 de março de 2030</time>
            <strong>Um titulo bem grande</strong>
            <p>Um parágrafo do texto bem criativo ou talvez não porque to com preguiça de entrar no lipsum.com</p>
          </a>

          <a href="/">
            <time>12 de março de 2030</time>
            <strong>Um titulo bem grande</strong>
            <p>Um parágrafo do texto bem criativo ou talvez não porque to com preguiça de entrar no lipsum.com</p>
          </a>

          <a href="/">
            <time>12 de março de 2030</time>
            <strong>Um titulo bem grande</strong>
            <p>Um parágrafo do texto bem criativo ou talvez não porque to com preguiça de entrar no lipsum.com</p>
          </a>

          <a href="/">
            <time>12 de março de 2030</time>
            <strong>Um titulo bem grande</strong>
            <p>Um parágrafo do texto bem criativo ou talvez não porque to com preguiça de entrar no lipsum.com</p>
          </a>

          <a href="/">
            <time>12 de março de 2030</time>
            <strong>Um titulo bem grande</strong>
            <p>Um parágrafo do texto bem criativo ou talvez não porque to com preguiça de entrar no lipsum.com</p>
          </a>

          <a href="/">
            <time>12 de março de 2030</time>
            <strong>Um titulo bem grande</strong>
            <p>Um parágrafo do texto bem criativo ou talvez não porque to com preguiça de entrar no lipsum.com</p>
          </a>

          <a href="/">
            <time>12 de março de 2030</time>
            <strong>Um titulo bem grande</strong>
            <p>Um parágrafo do texto bem criativo ou talvez não porque to com preguiça de entrar no lipsum.com</p>
          </a>

          <a href="/">
            <time>12 de março de 2030</time>
            <strong>Um titulo bem grande</strong>
            <p>Um parágrafo do texto bem criativo ou talvez não porque to com preguiça de entrar no lipsum.com</p>
          </a>
        </div>
      </main>
    </>
  );
}