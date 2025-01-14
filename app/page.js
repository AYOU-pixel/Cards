import Link from "next/link";

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todo = await response.json();

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#4A90E2',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          margin: '2rem 0',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Welcome to My Beautiful Store
      </h1>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/articels">
          <button
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#fff',
              backgroundColor: '#4A90E2',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
            }}
            className="hover-button"
          >
            Click to View Articles
          </button>
        </Link>
        <h1>{todo.title}</h1>
      </div>
    </div>
  );
}