import React, { useState } from 'react';
import FeedbackList from './components/FeedbackList'; // Adjust path if necessary

export default function About() {
  const [feedbackItems, setFeedbackItems] = useState([
    "Great chatbot, very helpful!",
    "Easy to use interface.",
    "Could use more features, but good start."
  ]);
  const [newFeedback, setNewFeedback] = useState('');

  const handleAddFeedback = () => {
    if (newFeedback.trim()) {
      setFeedbackItems([...feedbackItems, newFeedback.trim()]);
      setNewFeedback('');
    }
  };

  const handleDeleteFeedback = (indexToDelete) => {
    setFeedbackItems(feedbackItems.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h2 style={styles.heading}>Contact us at:</h2>
        <h3 style={styles.subheading}>📷 Instagram: <span style={styles.handle}>@Chatbot_ai</span></h3>
        <h3 style={styles.subheading}>📘 Facebook: <span style={styles.handle}>Chatbot_ai</span></h3>

        {/* --- Feedback Section --- */}
        <div style={styles.feedbackSection}>
          <h2 style={styles.heading}>Share Your Feedback!</h2>
          <div style={styles.feedbackInputContainer}>
            <textarea
              style={styles.feedbackTextarea}
              placeholder="Tell us what you think..."
              value={newFeedback}
              onChange={(e) => setNewFeedback(e.target.value)}
            />
            <button
              style={styles.feedbackButton}
              onClick={handleAddFeedback}
            >
              Submit Feedback
            </button>
          </div>
          <FeedbackList
            feedbackItems={feedbackItems}
            onDeleteFeedback={handleDeleteFeedback}
          />
        </div>
        {/* --- End Feedback Section --- */}

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
  // --- New styles for feedback section ---
  feedbackSection: {
    marginTop: '4rem',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: '4rem auto 2rem auto', // Center it and add more top margin
  },
  feedbackInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '30px',
  },
  feedbackTextarea: {
    width: '80%',
    padding: '15px',
    fontSize: '1.1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    minHeight: '100px',
    resize: 'vertical',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
  },
  feedbackButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  feedbackButtonHover: {
    backgroundColor: '#45a049',
    transform: 'scale(1.02)',
  }
};