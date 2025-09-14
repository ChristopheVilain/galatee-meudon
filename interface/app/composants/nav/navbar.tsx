import { Link, useLocation } from "react-router";

export function Navbar() {
  const location = useLocation();
  
  // Hardcoded navigation sections
  const navItems = [
    { path: "/", label: "Accueil", icon: "🏠" },
    { path: "/le-club", label: "Le Club", icon: "🏛️" },
    { path: "/contact", label: "Contact", icon: "📞" }
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
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
