import type { NextPage } from "next";
import { SyntheticEvent } from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form[0] as HTMLInputElement;
    const subName = form[1] as HTMLInputElement;
    const price = form[2] as HTMLInputElement;
    const miles = form[3] as HTMLInputElement;
    const reg = form[4] as HTMLInputElement;
    const trans = form[5] as HTMLInputElement;
    const fuel = form[6] as HTMLInputElement;
    const seats = form[7] as HTMLInputElement;
    const engine = form[8] as HTMLInputElement;
    const bodyType = form[9] as HTMLInputElement;
    const exteriorColor = form[10] as HTMLInputElement;
    const driveType = form[11] as HTMLInputElement;
    const regNum = form[12] as HTMLInputElement;
    const previousOwner = form[13] as HTMLInputElement;
    const numOfKeys = form[14] as HTMLInputElement;
    const topSpeed = form[15] as HTMLInputElement;
    const acceleration = form[16] as HTMLInputElement;
    const power = form[17] as HTMLInputElement;
    const image1 = form[18] as HTMLInputElement;
    const image2 = form[19] as HTMLInputElement;
    const image3 = form[20] as HTMLInputElement;
    const image4 = form[21] as HTMLInputElement;
    const image5 = form[22] as HTMLInputElement;
    const image6 = form[23] as HTMLInputElement;
    const image7 = form[24] as HTMLInputElement;
    const image8 = form[25] as HTMLInputElement;
    const image9 = form[26] as HTMLInputElement;
    const image10 = form[27] as HTMLInputElement;
    const image11 = form[28] as HTMLInputElement;
    const image12 = form[29] as HTMLInputElement;
    console.log(name.value, image12.value);
  };
  return (
    <div className={styles.container} onSubmit={(e) => handleSubmit(e)}>
      <form>
        <input type="text" placeholder="car name"></input>
        <input type="text" placeholder="car sub name"></input>
        <input type="text" placeholder="price"></input>
        <input type="text" placeholder="miles"></input>
        <input type="text" placeholder="registration year"></input>
        <input type="text" placeholder="transition(manual/automatic)"></input>
        <input type="text" placeholder="Fuel type(petrol/electric)"></input>
        <input type="text" placeholder="seats"></input>
        <input type="text" placeholder="engine size(0 if electric)"></input>
        <input type="text" placeholder="body type"></input>
        <input type="text" placeholder="exterior colour"></input>
        <input type="text" placeholder="drive type"></input>
        <input type="text" placeholder="registration number"></input>
        <input type="text" placeholder="number of previous owners"></input>
        <input type="text" placeholder="number of keys"></input>
        <input type="text" placeholder="top speed (MPH)"></input>
        <input type="text" placeholder="acceleration (0-60)"></input>
        <input type="text" placeholder="power (BHP)"></input>
        <input type="text" placeholder="image 1 (URL)"></input>
        <input type="text" placeholder="image 2 (URL)"></input>
        <input type="text" placeholder="image 3 (URL)"></input>
        <input type="text" placeholder="image 4 (URL)"></input>
        <input type="text" placeholder="image 5 (URL)"></input>
        <input type="text" placeholder="image 6 (URL)"></input>
        <input type="text" placeholder="image 7 (URL)"></input>
        <input type="text" placeholder="image 8 (URL)"></input>
        <input type="text" placeholder="image 9 (URL)"></input>
        <input type="text" placeholder="image 10 (URL)"></input>
        <input type="text" placeholder="image 11 (URL)"></input>
        <input type="text" placeholder="image 12 (URL)"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
