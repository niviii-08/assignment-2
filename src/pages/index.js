import Link from 'next/link';

const styles = {
  container: {
    padding: '50px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh', // Ensure container takes full height for background
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    backgroundColor: '#e0bbe4', // Example pastel background for the page
    // Or use a gradient like: background: 'linear-gradient(135deg, #e0bbe4 0%, #ffccb3 100%)',
    color: '#fff', // White text for better contrast with pastel background
  },
  main: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px', // Add some padding inside the main content area
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent white overlay
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#fff', // White heading
    marginBottom: '30px',
  },
  link: {
    display: 'inline-block',
    margin: '10px',
    padding: '12px 25px', // Slightly larger buttons
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '8px', // Slightly more rounded corners
    textDecoration: 'none',
    fontSize: '1.1rem', // Larger font size for links
    transition: 'background-color 0.3s ease, transform 0.2s ease', // Smooth transitions
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow for buttons
  },
  // Add hover effect for the link style
  linkHover: {
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)',
  }
};

export default function Home() {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1 style={styles.heading}>Welcome to Chatbot.ai</h1>

        {/* Existing Links */}
        <Link href="/contact" style={styles.link}>CONTACT</Link>
        <br />
        <Link href="/about" style={styles.link}>ABOUT</Link>
        <br />

        {/* New Links */}
        {/* Assuming your Traffic Simulator is at /simulator */}
        <Link href="/simulator" style={styles.link}>TRAFFIC SIMULATOR</Link>
        <br />
        {/* Assuming your Feedback Collector is at /feedback */}
        <Link href="/feedback" style={styles.link}>FEEDBACK COLLECTOR</Link>
      </main>
    </div>
  );
}