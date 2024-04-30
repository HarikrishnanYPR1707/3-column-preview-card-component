import "./App.css";
import { carData } from "./static/data";

function App() {
  return (
    <div className="">
      {carData.map((item, index) => (
        <article className="">
          <img src={item.icon} alt="" />
          <h1 className="">{item.title}</h1>
          <p className="">{item.desc}</p>
          <button className="">Learn More</button>
        </article>
      ))}
    </div>
  );
}

export default App;
