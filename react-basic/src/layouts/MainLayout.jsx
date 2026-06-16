import styles from '../styles/cssModules/MainLayout.module.css'
import Footer from "../components/Footer"
import Header from "../components/Header"

const MainLayout = ({ children }) => {
    console.log("styles module", styles)
    return <div
        style={{ borderColor: "blue" }}
        className={styles.layoutWrapper}
    >
        <Header />
        <main className={styles.mainContent}>
            {children}
        </main>
        <Footer />
    </div>
}

export default MainLayout