let cambio = function () {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.json();
          case 400:
            throw "qualcosa è andato storto";
          case 500:
            throw "non è colpa tua";
        }
      })
      .then((songs) => {
        console.log(songs.data[0]);
      });
  
  };
  cambio();