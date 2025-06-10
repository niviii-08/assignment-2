// src/App.js
import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  // Initialize feedback from localStorage, or an empty array if none exists
  const [feedbackItems, setFeedbackItems] = useState(() => {
    const savedFeedback = localStorage.getItem('chatbotFeedback');
    return savedFeedback ? JSON.parse(savedFeedback) : [];
  });

  // Use useEffect to save feedback to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chatbotFeedback', JSON.stringify(feedbackItems));
  }, [feedbackItems]); // Dependency array: run this effect when feedbackItems changes

  // Function to add new feedback
  const handleAddFeedback = (newFeedback) => {
    setFeedbackItems((prevItems) => [...prevItems, newFeedback]);
  };

  // Function to delete feedback
  const handleDeleteFeedback = (indexToDelete) => {
    setFeedbackItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div style={appStyles.container}>
      <h1 style={appStyles.heading}>🤖 Chatbot Feedback</h1>
      <p style={appStyles.subheading}>Help us improve your experience!</p>

      <FeedbackForm onAddFeedback={handleAddFeedback} />
      <FeedbackList
        feedbackItems={feedbackItems}
        onDeleteFeedback={handleDeleteFeedback}
      />
    </div>
  );
}

// Basic inline styles for App.js (global layout)
const appStyles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7f6',
    minHeight: '100vh',
    padding: '40px 20px',
    boxSizing: 'border-box', // Ensure padding doesn't cause overflow
  },
  heading: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '10px',
    fontSize: '2.5em',
  },
  subheading: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '40px',
    fontSize: '1.1em',
  },
};

export default App;