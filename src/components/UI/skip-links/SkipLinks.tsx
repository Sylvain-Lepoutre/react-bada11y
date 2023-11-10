export const SkipLinks = () => {
  return (
    <nav aria-label="Accès rapide">
      <ul>
        <li>
          <a className="sr-only focus:not-sr-only" href="#main">
            Contenu
          </a>
        </li>
      </ul>
    </nav>
  );
};
