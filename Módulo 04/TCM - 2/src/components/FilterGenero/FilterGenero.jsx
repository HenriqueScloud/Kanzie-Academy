import "./index.scss";

function FiltroGenero() {
  return (
    <section className="filtro__genre-section">
      <h1 className="filtro__genre-title">Gênero Musical</h1>
      <ul className="filtros__genres">
        <li className="filtro__genre-btn filtro__genre-btn--ativo">Todos</li>
        <li className="filtro__genre-btn">Pop</li>
        <li className="filtro__genre-btn">MPB</li>
        <li className="filtro__genre-btn">Forró</li>
        <li className="filtro__genre-btn">Samba</li>
        <li className="filtro__genre-btn">Baião</li>
        <li className="filtro__genre-btn">Rap</li>
        <li className="filtro__genre-btn">Jazz</li>
        <li className="filtro__genre-btn">R&B</li>
        <li className="filtro__genre-btn">Rock</li>
        <li className="filtro__genre-btn">Reggae</li>
        <li className="filtro__genre-btn">Eletrônica</li>
        <li className="filtro__genre-btn">Hip-Hop</li>
      </ul>
    </section>
  );
}

export default FiltroGenero;
