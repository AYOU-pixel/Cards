import Link from "next/link";
export default function Articles() {
    return (
      <div
        style={{
          maxWidth: '800px', // Limit width for better readability
          margin: '0 auto', // Center the container
          padding: '2rem', // Add padding inside the container
          backgroundColor: '#f9f9f9', // Light background color
          borderRadius: '16px', // Rounded corners
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Subtle shadow
          fontFamily: '"Poppins", sans-serif', // Modern font
          textAlign: 'center', // Center-align text
        }}
      >
        <h1
          style={{
            fontSize: '3rem', // Large font size
            fontWeight: '800', // Extra bold
            color: '#2c3e50', // Dark text color
            marginBottom: '1rem', // Space below the title
            background: 'linear-gradient(45deg, #6a11cb, #2575fc)', // Gradient background
            WebkitBackgroundClip: 'text', // Clip background to text
            WebkitTextFillColor: 'transparent', // Transparent text to show gradient
            textTransform: 'uppercase', // Uppercase text
            letterSpacing: '2px', // Spacing between letters
          }}
        >
          This is my project
        </h1>
        <h2
          style={{
            fontSize: '1.5rem', // Medium font size
            fontWeight: '600', // Semi-bold
            color: '#34495e', // Slightly lighter text color
            marginTop: '0.5rem', // Space above the subtitle
            fontStyle: 'italic', // Italic for emphasis
            opacity: '0.8', // Slightly transparent
          }}
        >
          I'm very proud
        </h2>
        <h2>am very happy</h2>
        <div style={{ marginTop: '2rem' }}>
            <Link href= "/">
          <button
            style={{
              padding: '0.75rem 1.5rem', // Padding for button size
              fontSize: '1rem', // Font size
              fontWeight: '600', // Semi-bold
              color: '#fff', // White text color
              backgroundColor: '#6a11cb', // Purple background color
              border: 'none', // Remove default border
              borderRadius: '8px', // Rounded corners
              cursor: 'pointer', // Pointer cursor on hover
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
              transition: 'background-color 0.3s ease', // Smooth transition
            }}
            className="hover-button" // Add a class for hover effects
          >
            Back Home
          </button>
          </Link>
        </div>
      </div>
    );
  }