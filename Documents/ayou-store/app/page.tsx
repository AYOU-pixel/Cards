import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Stack from '@mui/material/Stack';

const products = [
  {
    id: 1,
    name: "Apple Watch Series 7",
    description:
      "This product is not Apple certified, but has been professionally inspected and tested by Amazon-qualified suppliers. The product may have minimal scratches or dents, and a battery with at least 80% capacity.",
    price: 109.99,
    imageUrl: "https://cdn.pixabay.com/photo/2015/05/07/13/43/watch-756487_960_720.jpg", // Ensure this path is valid
  },
  {
    id: 2,
    name: "PlayStation 5 Digital Edition",
    description:
      "The PlayStation 5 (PS5) is Sony's latest gaming console, which launched in November 2020. It comes in two models: the Standard Edition and the Digital Edition.",
    price: 399.99,
    imageUrl: "https://cdn.pixabay.com/photo/2021/10/07/20/46/playstation-6689793_1280.jpg", // Ensure this path is valid
  },
  {
    id: 3,
    name: "Kindle Paperwhite",
    description:
      "8 GB storage, built-in adjustable light, and waterproof. Great for reading anywhere, anytime.",
    price: 89.99,
    imageUrl: "https://cdn.pixabay.com/photo/2016/08/01/09/53/kindle-update-1560728_960_720.jpg", // Fixed typo from "kindel.png"
  },
  {
    id: 4,
    name: "iPhone 13",
    description:
      "The phone is powered by the A15 Bionic chip, which ensures fast and efficient performance for all your tasks.",
    price: 799.50,
    imageUrl: "https://cdn.pixabay.com/photo/2021/09/25/17/43/iphone-13-6655518_1280.jpg", // Fixed typo from "fabrit.jpg"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 text-white">
      <Header />
      <main className="container mx-auto py-12 px-6 flex-grow">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
          flexWrap="wrap"
        >
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Stack>
      </main>
      <Footer />
    </div>
  );
}
