import styles from '../styles/cssModules/MainLayout.module.css'
import Footer from "../components/Footer"
import Header from "../components/Header"

const MainLayout = ({ children }) => {
    
    return <div    >
        <Header />
        <main className={styles.mainContent}>
            {children}
        </main>
        <Footer />
    </div>
}

export default MainLayout