import { Header } from "../../composants/header/header";
import { Navbar } from "../../composants/nav/navbar";
import { Footer } from "../../composants/footer/footer";

import testPictureEcoleBulles from "../../composants/img/test_ecole_bulles.jpg";
import testPictureApneistes from "../../composants/img/test_apneistes.jpg";
import testPictureAnthony from "../../composants/img/test_fosse.jpg";
import testPictureInitiateurs from "../../composants/img/test_initiateurs.jpg";


export function Bienvenue() {
    const aLaUne = {
        name: "L'école des bulles avec Maritain Renan",
        date: "20250905",
        abstract: "Les bénévoles du club ont acceuillis les élèves de la classe de 5ème de l'école Maritain Renan pour une initiation à la plongée sous-marine.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum eget lorem tristique viverra. Phasellus rutrum nisi at odio condimentum interdum. Mauris imperdiet purus ac mauris luctus aliquet. Aliquam laoreet malesuada condimentum. Aliquam id orci auctor, malesuada urna a, convallis diam. Pellentesque aliquet urna diam, eget venenatis odio viverra quis. Phasellus sagittis lorem a accumsan mollis. Duis quis enim pulvinar, vulputate augue id, porta ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec ex tellus. Sed egestas, nibh quis consectetur porta, nulla augue condimentum magna, at interdum mi ex id tellus. Donec sapien felis, bibendum at finibus a, sollicitudin fermentum felis. Quisque pharetra iaculis massa a porta.",
        picture_ref: testPictureEcoleBulles,
    }

    const lesNews = [
        {
            name: "Les apnéistes à Bécon les Granits",
            date: "20250815",
            abstract: "Les apnéistes du club ont effectué une plongée à Bécon les Granits pour découvrir la fosse de la Grande Méchoui.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum eget lorem tristique viverra. Phasellus rutrum nisi at odio condimentum interdum. Mauris imperdiet purus ac mauris luctus aliquet. Aliquam laoreet malesuada condimentum. Aliquam id orci auctor, malesuada urna a, convallis diam. Pellentesque aliquet urna diam, eget venenatis odio viverra quis. Phasellus sagittis lorem a accumsan mollis. Duis quis enim pulvinar, vulputate augue id, porta ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec ex tellus. Sed egestas, nibh quis consectetur porta, nulla augue condimentum magna, at interdum mi ex id tellus. Donec sapien felis, bibendum at finibus a, sollicitudin fermentum felis. Quisque pharetra iaculis massa a porta.",
            picture_ref: testPictureApneistes,
        },
        {
            name: "Ré-ouverture de la fosse d'Anthony",
            date: "20250810",
            abstract: "La fosse d'Anthony a été ré-ouverte pour la plongée après des travaux de réparation.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum eget lorem tristique viverra. Phasellus rutrum nisi at odio condimentum interdum. Mauris imperdiet purus ac mauris luctus aliquet. Aliquam laoreet malesuada condimentum. Aliquam id orci auctor, malesuada urna a, convallis diam. Pellentesque aliquet urna diam, eget venenatis odio viverra quis. Phasellus sagittis lorem a accumsan mollis. Duis quis enim pulvinar, vulputate augue id, porta ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec ex tellus. Sed egestas, nibh quis consectetur porta, nulla augue condimentum magna, at interdum mi ex id tellus. Donec sapien felis, bibendum at finibus a, sollicitudin fermentum felis. Quisque pharetra iaculis massa a porta.",
            picture_ref: testPictureAnthony,
        },
        {
            name: "8 nouveaux initiateurs plongée !",
            date: "20250805",
            abstract: "8 nouveaux initiateurs plongée ont été accueillis par le club pour découvrir la plongée.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis ipsum eget lorem tristique viverra. Phasellus rutrum nisi at odio condimentum interdum. Mauris imperdiet purus ac mauris luctus aliquet. Aliquam laoreet malesuada condimentum. Aliquam id orci auctor, malesuada urna a, convallis diam. Pellentesque aliquet urna diam, eget venenatis odio viverra quis. Phasellus sagittis lorem a accumsan mollis. Duis quis enim pulvinar, vulputate augue id, porta ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec ex tellus. Sed egestas, nibh quis consectetur porta, nulla augue condimentum magna, at interdum mi ex id tellus. Donec sapien felis, bibendum at finibus a, sollicitudin fermentum felis. Quisque pharetra iaculis massa a porta.",
            picture_ref: testPictureInitiateurs,
        }
    ]


    return (
        <div className="conteneur-page-generale">
            <Header />
            <Navbar />
            <main className="conteneur-principal">
                <div className="div-principale">
                    <h1 className="titre-div-principale">Bienvenue sur le site web du club de plongée Galatée Meudon !</h1>
                </div>
                <div className="div-secondaire-bienvenue">
                    <div className="post-texte-photo">
                        <h3 className="titre-div-secondaire">A la une</h3>
                        <div className="post-texte-photo-header">
                            <h3 className="titre-post-texte-photo">{aLaUne.name}</h3>
                            <p className="date-post-texte-photo">{aLaUne.date}</p>
                        </div>
                        <div className="post-texte-photo-content">
                            <div className="abstract-post-texte-photo-container">
                                <p className="content-post-texte">
                                    {aLaUne.abstract}
                                </p>
                                <img src={aLaUne.picture_ref} alt={aLaUne.name} className="picture-post-texte-photo" />
                            </div>
                            <p className="content-post-texte">{aLaUne.content}</p>
                        </div>
                    </div>
                </div>
                <div className="div-secondaire-bienvenue">
                    <h3 className="titre-div-secondaire">Les news</h3>
                    {
                    lesNews.map((news) => (
                        <>
                            <div className="post-texte-photo">
                                <div className="post-texte-photo-header">
                                    <h3 className="titre-post-texte-photo">{news.name}</h3>
                                    <p className="date-post-texte-photo">{news.date}</p>
                                </div>
                                <div className="post-texte-photo-content">
                                    <div className="abstract-post-texte-photo-container">
                                        <p className="content-post-texte">{news.abstract}</p>
                                        <img src={news.picture_ref} alt={news.name} className="picture-post-texte-photo" />
                                    </div>
                                    <p className="content-post-texte">{news.content}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
