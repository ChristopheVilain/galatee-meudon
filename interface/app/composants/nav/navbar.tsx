import { Link, useLocation } from "react-router";

export function Navbar() {
  const location = useLocation();
  
  // Hardcoded navigation sections
  const navItems = [
    { path: "/", label: "Accueil", icon: "🤿" },
    { path: "/le-club", label: "Le Club", icon: "🐟", children: [
      { path: "/le-club/les-benevoles", label: "Les Bénévoles", icon: "👨‍💻" },
      { path: "/le-club/lieux-et-entrainements", label: "Lieux et Entrainements", icon: "🏊‍♂️" },
      { path: "/le-club/inscriptions-et-contact", label: "Inscriptions et Contact", icon: "📞" },
      { path: "/le-club/dans-les-medias-autres", label: "Dans les médias, autres", icon: "📰" },
    ] },
    { path: "/evenements", label: "Evenements & Plannings", icon: "🗓️" },
    { path: "/documents", label: "Documents & Cours", icon: "📚" },
    { path: "/souvenirs", label: "Souvenirs & Photos", icon: "📸" },
  ];

  return (
    <nav className="galatee-navbar">
      {/* Menu label for collapsed state */}
      <div className="galatee-navbar-menu-label">Menu</div>
      
      <ul className="galatee-navbar-list">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className="galatee-navbar-item">
              <Link 
                to={item.path} 
                className={`galatee-navbar-link ${isActive ? 'active' : ''}`}
              >
                <span className="galatee-navbar-icon">{item.icon}</span>
                <span className="galatee-navbar-label">{item.label}</span>
              </Link>
              {item.children && item.children.map((child: any) => {
                const isActiveSubroute = location.pathname === child.path;
                return (
                  <li key={child.path} className="galatee-navbar-item-subroute">
                    <Link 
                      to={child.path} 
                      className={`galatee-navbar-link ${isActiveSubroute ? 'active' : ''}`}
                    >
                      <span className="galatee-navbar-icon-subroute">{child.icon}</span>
                      <span className="galatee-navbar-label-subroute">{child.label}</span>
                    </Link>
                  </li>
                );
              })}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
