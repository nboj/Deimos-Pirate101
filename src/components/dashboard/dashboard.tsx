import { Outlet } from "react-router-dom";
import styles from "./dashboard.module.css"
import Navbar from "./navbar";

const Dashboard = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Outlet />
    </main>
  )
}
export default Dashboard;
