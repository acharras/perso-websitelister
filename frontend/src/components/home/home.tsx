import { Introduction } from "./introduction"
import { Pannel } from "./pannel"
import "./home.css"

export function Home() {

    return (
      <div className="HomePage" >
          <Pannel />
          <Introduction />
      </div>
    );
  }