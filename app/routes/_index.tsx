import type { MetaFunction } from "@remix-run/node";

import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {

return [

{ title: "New Remix App" },

{ name: "description", content: "Welcome to Remix!" },

];

};

export default function Index() {

return (

<div style={{ fontFamily: "sans-serif", lineHeight: "1.8" }}>

<h1>Bem-vindo ao Remix!</h1>

<p>Esta é a sua primeira aplicação com Remix.</p>

<Link to="/about">Saiba mais sobre nós</Link>

</div>

);

}