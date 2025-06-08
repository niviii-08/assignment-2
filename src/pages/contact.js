export default function About() {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h2 style={styles.heading}>Contact us at:</h2>
        <h3 style={styles.subheading}>📷 Instagram: <span style={styles.handle}>@Chatbot_ai</span></h3>
        <h3 style={styles.subheading}>📘 Facebook: <span style={styles.handle}>Chatbot_ai</span></h3>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2025 Chatbot Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right, #e0f7fa, #f1f8e9)',
    color: '#333',
    padding: '2rem',
  },
  main: {
    flex: 1,
    textAlign: 'center',
    paddingTop: '4rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#00796b',
  },
  subheading: {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
  },
  handle: {
    fontWeight: 'bold',
    color: '#004d40',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#c8e6c9',
    borderTop: '1px solid #ccc',
    fontSize: '0.9rem',
    color: '#555',
  },
};
