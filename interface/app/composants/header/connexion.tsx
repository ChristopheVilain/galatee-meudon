export function Connexion() {
    // TODO: Replace with actual user state management
    const isLoggedIn = false; // This variable should be replaced with actual state management
    
    return (
        <div className="galatee-connexion">
            {isLoggedIn ? (
                <>
                    <span>Bonjour, user !</span>
                    <button className="galatee-connexion-button">Déconnexion</button>
                </>
            ) : (
                <>
                    <input 
                        type="text" 
                        placeholder="Nom d'utilisateur" 
                        className="galatee-login-input"
                    />
                    <input 
                        type="password" 
                        placeholder="Mot de passe" 
                        className="galatee-login-input"
                    />
                    <button className="galatee-login-button">Connexion</button>
                </>
            )}
        </div>
    )
}