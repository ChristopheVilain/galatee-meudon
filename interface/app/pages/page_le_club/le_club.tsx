import { Header } from "../../composants/header/header";
import { Navbar } from "../../composants/nav/navbar";
import { Footer } from "../../composants/footer/footer";
import { MenuCarre } from "../../composants/menu_carre/menu_carre";

export function LeClub() {

    const menuItems = [
        {
            titre: "Les Bénévoles",
            image: "",
            linkTo: "/le-club/les-benevoles",
        },
        {
            titre: "Lieux et Entrainements",
            image: "",
            linkTo: "/le-club/lieux-et-entrainements",
        },
        {
            titre: "Inscriptions et Contact",
            image: "",
            linkTo: "/le-club/inscriptions-et-contact",
        },
        {
            titre: "Dans les médias, autres",
            image: "",
            linkTo: "/le-club/dans-les-medias-autres",
        }
    ]

    return (
        <div className="conteneur-page-generale">
            <Header />
            <Navbar />
            <main className="conteneur-principal">
                <div className="div-principale-page">
                    <h1 className="titre-div-principale">Présentation de notre Club</h1>
                </div>
                <div className="div-secondaire-standard">
                    <p className="content-post-texte">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum eget lorem tristique viverra. Phasellus rutrum nisi at odio condimentum interdum. Mauris imperdiet purus ac mauris luctus aliquet. Aliquam laoreet malesuada condimentum. Aliquam id orci auctor, malesuada urna a, convallis diam. Pellentesque aliquet urna diam, eget venenatis odio viverra quis. Phasellus sagittis lorem a accumsan mollis. Duis quis enim pulvinar, vulputate augue id, porta ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec ex tellus. Sed egestas, nibh quis consectetur porta, nulla augue condimentum magna, at interdum mi ex id tellus. Donec sapien felis, bibendum at finibus a, sollicitudin fermentum felis. Quisque pharetra iaculis massa a porta.
                    </p>
                </div>
                <MenuCarre menuElements={menuItems} />
                <div className="div-principale">
                    <h1 className="titre-div-principale">Tarifs</h1>
                </div>
                <div className="div-secondaire-standard">
                    <p className="content-post-texte">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum eget lorem tristique viverra. Phasellus rutrum nisi at odio condimentum interdum. Mauris imperdiet purus ac mauris luctus aliquet. Aliquam laoreet malesuada condimentum. Aliquam id orci auctor, malesuada urna a, convallis diam. Pellentesque aliquet urna diam, eget venenatis odio viverra quis. Phasellus sagittis lorem a accumsan mollis. Duis quis enim pulvinar, vulputate augue id, porta ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec ex tellus. Sed egestas, nibh quis consectetur porta, nulla augue condimentum magna, at interdum mi ex id tellus. Donec sapien felis, bibendum at finibus a, sollicitudin fermentum felis. Quisque pharetra iaculis massa a porta.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
