

       

    




const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a sua bebida preferida em um churrasco?",
        alternativas: [
            {
                texto: "Cerveja/Caipirinha!",
                afirmacao: "Você é atraído (a) pelo calor e pela lealdade inabalável."
            },
            {
                texto: "Suco/Refri!",
                afirmacao: "Você é atraído(a) pelo mistério e pela elegância."
            }
        ]
    },
    {
        enunciado: "O que você faz assim que chega no churrasco?",
        alternativas: [
            {
                texto: "Vai direto para a churrasqueira ajudar a preparar a carne.",
                afirmacao: "você é o Mestre do Churrasco, "
            },
            {
                texto: "Procura um lugar confortável para sentar e conversar",
                afirmacao: "você é sociável e atrai pessoas por natureza."
            }
        ]
    },
    {
        enunciado: "Qual o seu prato preferido no churrasco?",
        alternativas: [
            {
                texto: "Picanha/ linguiça.",
                afirmacao: "o Animador,"
            },
            {
                texto: "Macarronese/ pão de alho.",
                afirmacao: "o Engraçado."
            }
        ]
    },
    {
        enunciado: "Como você contribui para o churrasco?",
        alternativas: [
            {
                texto: "Leva a carne/bebidas.",
                afirmacao: "o Ajudante,."
            },
            {
                texto: "Leva sobremesas/música.",
                afirmacao: "o Degustador,"
            }
        ]
    },
    {
        enunciado: "Qual é o seu papel na churrasqueira? ",
        alternativas: [
            {
                texto: "Mestre do churrasco, sempre controlando a grelha.",
                afirmacao: "O churrasco sem você, nunca aconteceria! "
            },
            {
                texto: "Degustador, sempre provando a carne antes de servir.",
                afirmacao: "Você é aquele que faz falta para darmos uma boa risada, e atualizar as fofocas! "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você…";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

            