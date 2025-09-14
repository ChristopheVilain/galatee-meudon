import { Header } from "../../composants/header/header";
import { Navbar } from "../../composants/nav/navbar";
import { Footer } from "../../composants/footer/footer";

export function LeClub() {
    return (
        <div className="conteneur-page-generale">
            <Header />
            <Navbar />
            <main className="conteneur-principal">
                <div className="div-principale">
                    <h1 className="titre-div-principale">Présentation de notre Club</h1>
                </div>
                <div className="div-secondaire">
                </div>
            </main>
            <Footer />
        </div>
    )
}
