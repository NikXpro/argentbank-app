import "@pages/Home/Home.scss";
import { Feature, Hero } from "../../components/Pages/Home";

export function Home() {
  return (
    <div className="main">
      <Hero />
      <Feature />
    </div>
  );
}
