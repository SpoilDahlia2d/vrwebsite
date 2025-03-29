import { useRouter } from 'next/router';
import styles from '../../styles/Album.module.css';

const albumData = {
  Latex: { images: ['/images/latex1.jpg', '/images/latex2.jpg'], premium: false },
  'Evening Dress': { images: ['/images/evening1.jpg', '/images/evening2.jpg'], premium: false },
  Nude: { images: ['/images/nude1.jpg', '/images/nude2.jpg'], premium: true, throneLink: 'https://throne.com/dahliastar/item/cafd7438-a896-4f57-bebb-4729abfd715f' },
  Shower: { images: ['/images/shower1.jpg', '/images/shower2.jpg'], premium: true, throneLink: 'https://throne.com/dahliastar/item/cafd7438-a896-4f57-bebb-4729abfd715f' },
  City: { images: ['/images/city1.jpg', '/images/city2.jpg'], premium: false },
  Sport: { images: ['/images/sport1.jpg', '/images/sport2.jpg'], premium: false },
};

export default function Album() {
  const router = useRouter();
  const { name } = router.query;

  const album = albumData[name];

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name} Album</h1>
      {album.premium ? (
        <div className={styles.paywall}>
          <p>Accedi a questo album per 20€</p>
          <a href={album.throneLink} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>Sblocca Album con Throne</button>
          </a>
        </div>
      ) : (
        <div className={styles.gallery}>
          {album.images.map((img, idx) => (
            <img key={idx} src={img} alt={`photo ${idx}`} className={styles.image} />
          ))}
        </div>
      )}
    </div>
  );
}