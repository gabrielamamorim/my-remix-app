export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const senha = formData.get("senha");

    console.log("Email: ", email);
    console.log("Senha: ", senha);

    return { ok: true};
}

export default function Login() {
    return (
        <form method="post">
            <input name="email" type="email" />
            <input name="senha" type="password" autocomplete="current-password"/>
            <button type="submit">Entrar</button>
        </form>
    );
}