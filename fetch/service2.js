const URL = "https://x8ki-letl-twmt.n7.xano.io/api:ijUECDHD/marca";

const novoItem = {
  nome: "paola",
  descricao: "a mlhr dev :D",

};

fetch(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(novoItem),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Sucesso:", data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });