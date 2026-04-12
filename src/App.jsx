import './App.css'

function App() {
  // Dados do post armazenados em um objeto (conforme solicitado na atividade)
  const postData = {
    titulo: "Descobrindo as Praias do Nordeste",
    autor: "Laercio",
    data: "12 de Março de 2026",
    conteudo: "O Nordeste brasileiro é um destino obrigatório para quem ama sol e mar. Com uma extensão litorânea privilegiada, a região oferece desde praias famosas até lugares pouco conhecidos quase desertos. Além de suas belezas naturais, sua cultura local, o artesanato e a gastronomia chamam a atenção.",
    imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="container-principal">
      <Header />
      <Navigation />
      <main className="conteudo-main">
        <Article post={postData} />
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

// Componente Header
function Header() {
  return (
    <header>
      <h1>Criando um Blog Responsivo</h1>
    </header>
  );
}

// Componente Navigation
function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contatos</a></li>
      </ul>
    </nav>
  );
}

// Componente Article (Usa Props para os dados dinâmicos)
function Article(props) {
  return (
    <article className="post-article">
      <h2>{props.post.titulo}</h2>
      <p className="meta-info">
        Publicado por: <strong>{props.post.autor}</strong> em <time>{props.post.data}</time>
      </p>
      <p>{props.post.conteudo}</p>
      <figure>
        <img src={props.post.imagem} alt="Praia deserta com areia branca" />
        <figcaption>Uma vista relaxante de uma das praias paradisíacas que visitamos.</figcaption>
      </figure>
    </article>
  );
}

// Componente Sidebar
function Sidebar() {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        <li><a href="#">Os melhores roteiros de Fernando de Noronha</a></li>
        <li><a href="#">O que devo levar na mala para o litoral?</a></li>
        <li><a href="#">Guia gastronômico: Pratos típicos do Ceará</a></li>
      </ul>
    </aside>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2026 - Todos os direitos reservados. Atividade 07</p>
    </footer>
  );
}

export default App;