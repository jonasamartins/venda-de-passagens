function loadLogin() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <section class="login">
            <div class="container">
                <h2>Login</h2>
                <form id="login-form">
                    <div class="form-group">
                        <label for="login-email">Email</label>
                        <input type="email" id="login-email" name="login-email" required>
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input type="password" id="senha" name="senha" required>
                    </div>
                    <div class="form-group">
                        <button type="submit">Login</button>
                        <a href="esqueceu-senha.html">Esqueceu a senha?</a>
                    </div>
                </form>
            </div>
        </section>
    `;
}