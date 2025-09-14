import { useEffect, useRef } from "react";
import logoGalatee from "../img/logo_50_ans.png";
import { Connexion } from "../header/connexion";

export function Header() {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                const height = headerRef.current.offsetHeight;
                document.documentElement.style.setProperty('--header-height', `${height}px`);
            }
        };

        // Update height on mount and resize
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        
        // Update height when logo loads
        const logo = headerRef.current?.querySelector('img');
        if (logo) {
            logo.addEventListener('load', updateHeaderHeight);
        }

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
            if (logo) {
                logo.removeEventListener('load', updateHeaderHeight);
            }
        };
    }, []);

    return (
        <header ref={headerRef} className="galatee-header dynamic-height">
            <div className="galatee-header-logo">
                <title>Galatée Meudon</title>
                <img src={logoGalatee} alt="Galatée Meudon" />
            </div>
            <Connexion />
        </header>
    )
}