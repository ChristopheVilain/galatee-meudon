import { Header } from "../../../composants/header/header";
import { Navbar } from "../../../composants/nav/navbar";
import { Footer } from "../../../composants/footer/footer";

export function LesBenevoles() {
    return (
        <div className="conteneur-page-generale">
            <Header />
            <Navbar />
            <main className="conteneur-principal">
                <div className="div-principale-page">
                    <h1 className="titre-div-principale">Les Bénévoles</h1>
                </div>
            </main>
            <Footer />
        </div>
    )
}