import Link from 'next/link';
import styles from '../styles/Home.module.css';

const albums = [
  { name: 'Latex', image: '/images/latex1.jpg', premium: false },
  { name: 'Evening Dress', image: '/images/evening1.jpg', premium: false },
  { name: 'Nude', image: '/images/nude1.jpg', premium: true, throneLink: 'https://throne.com/dahliastar/item/cafd7438-a896-4f57-bebb-4729abfd715f' },
  { name: 'Shower', image: '/images/shower1.jpg', premium: true, throneLink: 'https://throne.com/dahliastar/item/cafd7438-a896-4f57-bebb-4729abfd715f' },
  { name: 'City', image: '/images/city1.jpg', premium: false },
  { name: 'Sport', image: '/images/sport1.jpg', premium: false },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Photo Albums</h1>
      <div className={styles.grid}>
        {albums.map((album) => (
          <Link href={`/album/${album.name}`} key={album.name}>
            <div className={styles.album} style={{ backgroundImage: `url(${album.image})` }}>
              {album.premium && <div className={styles.overlay}>Sblocca per 20€</div>}
              <h2 className={styles.albumTitle}>{album.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}