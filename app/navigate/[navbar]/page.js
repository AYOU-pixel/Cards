// pages/navigate/[navbar].js
export async function generateStaticParams() {
    // Define the possible values for the `navbar` parameter
    return [
      { navbar: 'home' },
      { navbar: 'about' },
      { navbar: 'contact' },
    ];
  }
  
  export default function Navigate(props) {
    return (
      <div>
        <h1>nav</h1>
      </div>
    );
  }