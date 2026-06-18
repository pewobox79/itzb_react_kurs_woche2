import styles from '../styles/cssModules/MainLayout.module.css'
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from 'react-router'

const MainLayout = ({ children }) => {
    // => children als prop im Context von REACT
    // => children über <Outlet/> im Context von React-Router
    return <div    >
        <Header />
        <main className={styles.mainContent}>
            {children}
            <hr/>
            <Outlet/>
        </main>
        <Footer />
    </div>
}

export default MainLayout