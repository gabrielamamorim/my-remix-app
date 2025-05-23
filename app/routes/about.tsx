import { Link } from "@remix-run/react";

export default function About() {

return (

<div style={{ fontFamily: "sans-serif", lineHeight: "1.8" }}>

<h1>Sobre Nós</h1>

<p>Esta aplicação foi criada usando Remix, um poderoso framework para React.</p>

<Link to="/">Voltar para a Home</Link>

</div>

);

}