import Link from 'next/link';

const styles = {
  container: {
    padding: '50px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  main: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
  },
  link: {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  }
};

export default function Home() {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1 style={styles.heading}>Welcome to Chatbot.ai</h1>

        <Link href="/contact" style={styles.link}>CONTACT</Link>
        <br />
        <Link href="/about" style={styles.link}>ABOUT</Link>
      </main>
    </div>
  );
}
