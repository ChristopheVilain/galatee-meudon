import { Link } from "react-router";

export function MenuCarre({menuElements}: any) {
    return (
        <div className="conteneur-menu-carre">
            {menuElements.map((item: any) => (
                <div className="menu-carre-item">
                    <Link to={item.linkTo}>{item.titre}
                        <img src={item.image} alt={item.titre} />
                    </Link>  
                </div>
            ))}
        </div>
    )
}