export default async function Details({ params }) {
  const PostID = params.PostID;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${PostID}`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });
  const data = await response.json();

  // Simulate a delay (optional, remove if not needed)
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  return (
    <div>
      <h1>Details:</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Username: {data.username}</p>
    </div>
  );
}