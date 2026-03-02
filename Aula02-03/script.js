
// 1 - Ao pressionar as teclas r, g ou b, mude o fundo para vermelho, verde ou azul. 
// 2 - Mostre no console qual tecla foi pressionada e mude a cor se for r, g ou b.  (Dica:  Use o console.log(e.key))
// 3 - Permita que o usuário pressione R, G, B maiúsculos também.(Dica:  Use o tolowerCase())
// 4 - Além de mudar a cor, exiba o nome dela na página. (Dica: innerHTML)
// 5 - Adicione y - amarelo e p - roxo
// 6 - Pressione x para remover a cor aplicada
// 7 - Refatore o código usando um objeto que guarda teclas e cores
// 8 - Mostre no console o valor RGB da cor aplicada.
// 9 - Cada tecla pressionada muda para a próxima cor da lista.
// 10 - Pressione n para modo escuro e d para modo claro

let cores = [
  "orange", "pink", "brown", "gray", "cyan", "magenta", "lime", "maroon",
  "navy", "olive", "teal", "gold", "coral", "salmon", "turquoise", "violet",
  "indigo", "khaki", "plum", "orchid", "sienna", "peru", "lavender", "tan",
  "slateblue", "aqua", "beige", "bisque", "chocolate", "fuchsia", "honeydew",
  "ivory", "lightblue", "lightcoral", "lightcyan", "lightpink", "lightsalmon",
  "lightseagreen", "lightskyblue", "lightsteelblue", "linen", "mediumaquamarine",
  "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
  "mediumturquoise", "mediumvioletred", "mistyrose", "moccasin", "navajowhite",
  "papayawhip", "peachpuff", "powderblue", "rosybrown", "sandybrown", "seashell",
  "skyblue", "snow", "thistle", "wheat", "aliceblue", "antiquewhite", "blanchedalmond",
  "cadetblue", "cornflowerblue", "cornsilk", "darkcyan", "darkgoldenrod", "darkgray",
  "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darksalmon",
  "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
  "deeppink", "deepskyblue", "dodgerblue", "firebrick", "floralwhite", "gainsboro",
  "ghostwhite", "goldenrod", "greenyellow", "lightgoldenrodyellow", "lightgreen",
  "lightyellow", "mediumblue", "mediumspringgreen", "mediumturquoise", "mintcream",
  "oldlace", "orange", "orangered", "palegoldenrod", "palegreen", "paleturquoise",
  "palevioletred", "peachpuff", "pink", "plum", "powderblue", "rosybrown"
];

let div = document.getElementById("mensagem");
let divTexto = document.getElementById("texto")
let i = 0;

function ajustarCorTexto(corFundo) {
    const temp = document.createElement("div");
    temp.style.color = corFundo;
    document.body.appendChild(temp);

    const rgb = getComputedStyle(temp).color;
    document.body.removeChild(temp);

    const [r, g, b] = rgb.match(/\d+/g).map(Number);

    const luminosidade = 0.299*r + 0.587*g + 0.114*b;

    if (luminosidade > 128) {
        document.body.style.color = "black";
    } else {
        document.body.style.color = "white"
    }
}

document.addEventListener('keydown', function(e){
    const color = {
        key : e.key.toLowerCase(),
        color : ""
    }

    if (color.key === "r"){
        color.color = "red";
    }
    else if (color.key === "g"){
        color.color = "green";
    }
    else if (color.key === "b"){
        color.color = "blue";
    }
    else if (color.key === "y"){
        color.color = "yellow";
    }
    else if (color.key === "p"){
        color.color = "purple";
    }
    else if (color.key === "n"){
        color.color = "black"
    }
    else if (color.key === "d"){
        color.color = "white"
    }
    else if (color.key === "x"){
        color.color = "";
    } 
    else {
        color.color = cores[i];
        console.log(`indice lista = ${i} \nCor = ${color.color}`)
        i++;
        if (i >= cores.length) {
            i = 0;
        }
    }

    document.body.style.backgroundColor = color.color;
    div.innerHTML = `Cor: ${color.color}`;
    const rgb = getComputedStyle(document.body).backgroundColor;
    ajustarCorTexto(color.color);
    console.log(`Tecla pressionada: ${e.key}`);
    console.log(`RGB aplicado: ${rgb}`);
});