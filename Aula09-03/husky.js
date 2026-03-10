//Função assincrona para buscar a imagem de um husky
async function buscarHusky() {
    //requisição para a API
  try {
    const response = await fetch("https://dog.ceo/api/breed/husky/images/random");
    //Converte a resposta para JSON
    const data = await response.json();
    //Exibir URL da imagem
    console.log("Husky:", data.message);
  } catch (error) {
    console.error("Erro ao buscar imagem:", error);
  }
}
//executa a função
buscarHusky();