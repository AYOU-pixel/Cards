import Link from "next/link";

export default async function Home() {
  // Fetch data with revalidation every 10 seconds
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });
  const data = await response.json();

  // Map over the data to create JSX elements
  const PostJsx = data.map((dats) => {
    return (
      <Link href={`/card/${dats.id}`} key={dats.id} passHref>
        <div style={{
          width: "70%",
          padding: "10px",
          background: "pink",
          marginTop: "12px",
          cursor: "pointer" // Add pointer cursor to indicate it's clickable
        }}>
          <h1 style={{ color: "green" }}>{dats.email}</h1>
          <h2 style={{ color: "black" }}>{dats.username}</h2>
        </div>
      </Link>
    );
  });

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      {PostJsx}
    </div>
  );
}
