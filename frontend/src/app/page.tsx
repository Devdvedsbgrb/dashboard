import Image from "next/image";
import styles from "./page.module.css";
import One from "./Component/One/one"
import TopPanel from "./Component/Top/TopPanel";
import Chart from "./Component/Chart/Chart";
import Product from "./Component/Product/Product";
import SideBar from "./Component/SideBar/SideBar";

export default function Home() {
  return (
      <div >
            <One/>
            <SideBar/>
            <TopPanel/>
            <Product/>
    </div>
  );
}
