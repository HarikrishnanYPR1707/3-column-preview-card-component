import "./App.css";
import { carData } from "./static/data";

function App() {
  return (
    <div className="px-6 py-[90px]">
      <div className="overflow-hidden rounded-lg">
        {carData.map((item, index) => (
          <article
            className="flex items-center justify-center p-12"
            style={{
              backgroundColor: item.color,
            }}
          >
            <img src={item.icon} alt="" />
            <h1 className="">{item.title}</h1>
            <p className="">{item.desc}</p>
            <button className="">Learn More</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
