(function () {
    "use strict";

    function formatarMoeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    var formularioLogin = document.querySelector("#formulario-login");
    var areaLogin = document.querySelector("#area-login");
    var areaUsuario = document.querySelector("#area-usuario");

    if (formularioLogin && areaLogin && areaUsuario) {
        var campoEmail = document.querySelector("#email");
        var campoSenha = document.querySelector("#senha");
        var lembrarMe = document.querySelector("#lembrar-me");
        var mensagemLogin = document.querySelector("#mensagem-login");
        var nomeUsuario = document.querySelector("#nome-usuario");
        var emailUsuario = document.querySelector("#email-usuario");
        var botaoSair = document.querySelector("#botao-sair");
        var mensagemLogout = document.querySelector("#mensagem-logout");

        function obterNome(email) {
            var nome = email.split("@")[0].replace(/[._-]+/g, " ").trim();
            if (!nome) {
                return "cliente";
            }
            return nome.charAt(0).toUpperCase() + nome.slice(1);
        }

        function mostrarUsuario(email) {
            areaLogin.hidden = true;
            areaUsuario.hidden = false;
            nomeUsuario.textContent = obterNome(email);
            emailUsuario.textContent = email;
        }

        var emailSalvo = localStorage.getItem("carroFacilEmail");
        if (emailSalvo) {
            campoEmail.value = emailSalvo;
            lembrarMe.checked = true;
            mostrarUsuario(emailSalvo);
        }

        formularioLogin.addEventListener("submit", function (evento) {
            evento.preventDefault();

            var email = campoEmail.value.trim();
            var senha = campoSenha.value;

            if (!email || senha.length < 6) {
                mensagemLogin.textContent = "Informe um e-mail válido e uma senha com pelo menos 6 caracteres.";
                return;
            }

            if (lembrarMe.checked) {
                localStorage.setItem("carroFacilEmail", email);
            } else {
                localStorage.removeItem("carroFacilEmail");
            }

            mensagemLogin.textContent = "";
            mostrarUsuario(email);
        });

        botaoSair.addEventListener("click", function () {
            localStorage.removeItem("carroFacilEmail");
            areaUsuario.hidden = true;
            areaLogin.hidden = false;
            formularioLogin.reset();
            mensagemLogout.textContent = "Você saiu da sua conta.";
            campoEmail.focus();
        });
    }

    var formularioFinanciamento = document.querySelector("#formulario-financiamento");
    if (formularioFinanciamento) {
        var campoCarro = document.querySelector("#carro-financiado");
        var campoTipo = document.querySelector("#tipo-financiamento");
        var campoEntrada = document.querySelector("#entrada");
        var campoParcelas = document.querySelector("#parcelas");
        var resultado = document.querySelector("#resultado-financiamento");

        formularioFinanciamento.addEventListener("submit", function (evento) {
            evento.preventDefault();

            var valorCarro = Number(campoCarro.value);
            var entrada = Number(campoEntrada.value);
            var parcelas = Number(campoParcelas.value);

            if (entrada < 0 || entrada >= valorCarro) {
                resultado.innerHTML =
                    "<span>Valor inválido</span><strong>A entrada deve ser menor que o valor do carro.</strong>";
                return;
            }

            var valorFinanciado = valorCarro - entrada;
            var tipo = campoTipo.value;
            var taxaMensal = 0;
            var valorParcela;

            if (tipo === "cdc") {
                taxaMensal = 0.0149;
            } else if (tipo === "leasing") {
                taxaMensal = 0.0129;
            }

            if (tipo === "consorcio") {
                var taxaAdministrativa = valorFinanciado * 0.18;
                valorParcela = (valorFinanciado + taxaAdministrativa) / parcelas;
                resultado.innerHTML =
                    "<span>Parcela estimada do consórcio</span>" +
                    "<strong>" + formatarMoeda(valorParcela) + " por " + parcelas + " meses</strong>";
                return;
            }

            var fator = Math.pow(1 + taxaMensal, parcelas);
            valorParcela = valorFinanciado * (taxaMensal * fator) / (fator - 1);

            resultado.innerHTML =
                "<span>Parcela estimada</span>" +
                "<strong>" + formatarMoeda(valorParcela) + " por " + parcelas + " meses</strong>";
        });
    }

    var formularioVenda = document.querySelector("#formulario-venda");
    if (formularioVenda) {
        var fotos = document.querySelector("#fotos");
        var previewFotos = document.querySelector("#preview-fotos");
        var mensagemVenda = document.querySelector("#mensagem-venda");

        if (fotos && previewFotos) {
            fotos.addEventListener("change", function () {
                previewFotos.innerHTML = "";
                Array.prototype.forEach.call(fotos.files, function (arquivo) {
                    if (!arquivo.type.match(/^image\/(jpeg|png)$/)) {
                        return;
                    }
                    var leitor = new FileReader();
                    leitor.onload = function (evento) {
                        var imagem = document.createElement("img");
                        imagem.src = evento.target.result;
                        imagem.alt = "Prévia da foto do veículo";
                        previewFotos.appendChild(imagem);
                    };
                    leitor.readAsDataURL(arquivo);
                });
            });
        }

        formularioVenda.addEventListener("submit", function (evento) {
            evento.preventDefault();
            mensagemVenda.textContent = "Anúncio enviado para análise. Entraremos em contato em breve.";
            formularioVenda.reset();
            if (previewFotos) {
                previewFotos.innerHTML = "";
            }
        });
    }

    var formularioContato = document.querySelector("#formulario-contato");
    if (formularioContato) {
        var mensagemContato = document.querySelector("#mensagem-contato-status");
        formularioContato.addEventListener("submit", function (evento) {
            evento.preventDefault();
            mensagemContato.textContent = "Mensagem enviada. Nossa equipe responderá em breve.";
            formularioContato.reset();
        });
    }

    if (document.querySelector("#formulario-recuperacao")) {
        var formularioRecuperacaoCorreto = document.querySelector("#formulario-recuperacao");
        var mensagemRecuperacao = document.querySelector("#mensagem-recuperacao");
        formularioRecuperacaoCorreto.addEventListener("submit", function (evento) {
            evento.preventDefault();
            mensagemRecuperacao.textContent = "Se o e-mail estiver cadastrado, enviaremos as instruções de recuperação.";
        });
    }

})();