export const metadata = {
  title: "posts",
};

export default function Layout({ children }) {
    return (
      <div>
        <h1>Posts here 😇</h1>
        <div style={{ marginTop: "50px", background: "red", padding: "20px" }}>
          {children}
        </div>
      </div>
    );
  }
  