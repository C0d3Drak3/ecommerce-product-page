import Navbar from "./components/navbar";
import Product from "./components/product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50">
      <div className="z-10 max-w-5xl w-full items-center  md:flex md:flex-col">
        <Navbar />
        <Product />
      </div>
      {/*Footer*/}
      <div className="mt-auto mb-4 text-[11px] md:text-[16px] w-[290px] md:w-[430px] place-self-center text-black ">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Martín Otero
        </a>
        .
      </div>
    </main>
  );
}
