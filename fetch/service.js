const URL = "https://x8ki-letl-twmt.n7.xano.io/api:ijUECDHD/marca";

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });