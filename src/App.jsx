import "./App.css";
import { carData } from "./static/data";

function App() {
  return (
    <div className="px-6 py-[90px] lg:flex lg:h-screen lg:items-center lg:justify-center">
      <div className="flex h-auto flex-col items-center justify-center overflow-hidden rounded-lg lg:flex-row">
        {carData.map((item, index) => (
          <article
            className="flex w-full max-w-[325px] flex-col items-start justify-start p-12 text-[#f2f2f2]"
            style={{
              backgroundColor: item.color,
            }}
          >
            <img src={item.icon} alt="" />
            <h1 className="font-big-shoulders py-6 text-[40px] uppercase text-white text-opacity-75">
              {item.title}
            </h1>
            <p className="font-lexend-deca text-[15px] text-white text-opacity-55">
              {item.desc}
            </p>
            <button
              style={{
                color: item.color,
              }}
              className="font-lexend-deca mt-5 rounded-full bg-[#f2f2f2] px-7 py-3 lg:mt-20"
            >
              Learn More
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
