function loadSobreNos() {
    const content = document.getElementById("content");
    content.innerHTML = `

    `;
}

function loadAreaCliente() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <section class="area-cliente">
            <div class="container">
                <h2>Área do Cliente</h2>
                <button onclick="loadCadastro()">Cadastrar</button>
                <button onclick="loadLogin()">Login</button>
            </div>
        </section>
    `;
}

function loadCadastro() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <section class="cadastro">
            <div class="container">
                <h2>Cadastrar</h2>
                <form id="cadastro-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <!-- Outros campos de formulário aqui -->
                    <div class="form-group">
                        <label for="cep">CEP</label>
                        <input type="text" id="cep" name="cep" required>
                        <button onclick="buscarCep()">Buscar CEP</button>
                    </div>
                    <!-- Outros campos de formulário aqui -->
                </form>
            </div>
        </section>
    `;
}

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
                    <!-- Outros campos de formulário aqui -->
                </form>
            </div>
        </section>
    `;
}

function buscarCep() {
    const cepInput = document.getElementById("cep");
    const logradouroInput = document.getElementById("logradouro");
    const bairroInput = document.getElementById("bairro");
    const cidadeInput = document.getElementById("cidade");
    const ufInput = document.getElementById("uf");

    // Obtenha o valor do CEP digitado pelo usuário
    const cep = cepInput.value;

    // Verifique se o CEP tem um formato válido (opcional)
    if (cep.length !== 8) {
        alert("CEP inválido. Certifique-se de inserir 8 dígitos.");
        return;
    }

    // URL da API ViaCEP para consulta de CEP
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    // Faça uma solicitação HTTP para a API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado. Verifique o CEP e tente novamente.");
            } else {
                // Preencha os campos com os dados retornados pela API
                logradouroInput.value = data.logradouro;
                bairroInput.value = data.bairro;
                cidadeInput.value = data.localidade;
                ufInput.value = data.uf;
            }
        })
        .catch(error => {
            console.error("Erro na busca de CEP: " + error);
            alert("Erro na busca de CEP. Verifique o CEP e tente novamente.");
        });
}
