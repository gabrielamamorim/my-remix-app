import { Link, useLoaderData,json } from "@remix-run/react";

export const loader = async () => {

const data = { message: "Este dado foi carregado no servidor!" };

return json(data);

};

export default function DataRoute() {

const data = useLoaderData<typeof loader>();

return (

<div style={{ fontFamily: "sans-serif", lineHeight: "1.8" }}>

<h1>Carregamento de Dados com Remix</h1>

<p>{data.message}</p>

<Link to="/">Voltar para a Home</Link>

</div>

);

}