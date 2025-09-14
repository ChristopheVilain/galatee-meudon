import { Header } from "../../composants/footer/header";
import { Navbar } from "../../composants/nav/navbar";

export function Bienvenue() {
    return (
        <>
            <Header />
            <Navbar />
            <main className="conteneur-principal">
                <div className="div-principale">
                    <h1>Bienvenue sur le site web du club de plongée Galatée Meudon !</h1>
                </div>
                <div className="div-secondaire">
                    Nous sommes un club de plongée qui a été fondé en 1975.
                </div>
            </main>
        </>
    )
}
