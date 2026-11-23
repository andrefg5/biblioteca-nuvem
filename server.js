```javascript
const http = require("http");

const port = process.env.PORT || 3000;
const nomeSite = process.env.NOME_SITE || "Observatório Jovem";

const html = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${nomeSite}</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #101827;
            color: #eef4ff;
            line-height: 1.6;
        }

        header {
            padding: 48px 20px;
            text-align: center;
            background: linear-gradient(135deg, #172554, #4c1d95);
        }

        header h1 {
            margin: 0 0 12px;
            font-size: 2.4rem;
        }

        header p {
            max-width: 720px;
            margin: auto;
            color: #dbeafe;
        }

        main {
            max-width: 900px;
            margin: 32px auto;
            padding: 0 20px;
        }

        section {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 14px;
            padding: 24px;
            margin-bottom: 22px;
        }

        h2 {
            color: #a5b4fc;
            margin-top: 0;
        }

        li {
            margin: 10px 0;
        }

        .tag {
            display: inline-block;
            background: #312e81;
            color: #e0e7ff;
            padding: 5px 10px;
            border-radius: 20px;
            margin: 4px;
            font-size: .9rem;
        }

        a {
            color: #93c5fd;
        }

        footer {
            text-align: center;
            padding: 24px;
            color: #aab7ca;
        }
    </style>
</head>

<body>

    <header>
        <h1>${nomeSite}</h1>

        <p>
            Ciência, curiosidade e exploração:
            um espaço para descobrir como funciona o Universo
            e acompanhar projetos espaciais.
        </p>

        <span class="tag">Astronomia</span>
        <span class="tag">Tecnologia</span>
        <span class="tag">Exploração espacial</span>
    </header>

    <main>

        <section>
            <h2>Sobre o projeto</h2>

            <p>
                O Observatório Jovem é uma iniciativa fictícia
                criada para aproximar estudantes da astronomia
                e das tecnologias usadas na exploração espacial.
                A proposta é aprender por meio de pesquisas,
                atividades práticas e divulgação científica.
            </p>
        </section>

        <section>
            <h2>Nossas atividades</h2>

            <ul>
                <li>
                    <strong>Observação do céu:</strong>
                    identificação de planetas, estrelas e constelações.
                </li>

                <li>
                    <strong>Foguetes experimentais:</strong>
                    estudo de propulsão e construção de modelos educativos.
                </li>

                <li>
                    <strong>Robótica espacial:</strong>
                    programação de pequenos robôs inspirados em sondas exploradoras.
                </li>

                <li>
                    <strong>Satélites:</strong>
                    estudo das tecnologias de comunicação e observação da Terra.
                </li>
            </ul>
        </section>

        <section>
            <h2>Contato e informações</h2>

            <p>
                Projeto escolar fictício dedicado à divulgação
                científica e ao incentivo à exploração espacial.
            </p>

            <p>
                E-mail:
                <a href="mailto:observatorio.jovem@example.com">
                    observatorio.jovem@example.com
                </a>
            </p>

            <p>Localização: Jundiaí - SP.</p>
        </section>

    </main>

    <footer>
        Observatório Jovem · Projeto educacional demonstrativo
    </footer>

</body>
</html>`;

http.createServer((req, res) => {

    console.log(`Acesso recebido: ${req.method} ${req.url}`);

    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(html);

}).listen(port, () => {
    console.log(`${nomeSite} iniciado na porta ${port}`);
});
```
