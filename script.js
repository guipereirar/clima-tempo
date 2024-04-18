const obterTemp = () => {
  const chave = "777fd6c175f16899b669ab9b22be7638";
  const cidade = document.getElementById("cidade").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${chave}&units=metric`;
  fetch(url)
    .then((resposta) => {
      // console.log(resposta)
      return resposta.json();
    })
    .then((dados) => {
      document.getElementById("temp").innerText = dados.main.temp;
      document.getElementById("temp_min").innerText = dados.main.temp_min;
      document.getElementById("temp_max").innerText = dados.main.temp_max;
      document.getElementById("descricao").innerText =
        dados.weather[0].description;
      document.getElementById("icon").innerText = dados.weather[0].icon;

      console.log(dados.main.temp);
      console.log(dados.name);
      console.log(dados.sys.country);
      console.log(dados.weather[0].icon);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
