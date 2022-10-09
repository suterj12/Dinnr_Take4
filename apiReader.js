

  async function getNearByRestaurants(){
    await fetch("https://api.geoapify.com/v2/places?categories=catering&filter=circle:-83.008151,39.997633,2000&bias=proximity:-83.008151,39.997633&limit=20&apiKey=3203a0ff97e74809be74b642921894a4")
    .then(response => response.json())
    .then(result => processData(result))
    .catch(error => console.log('error', error));
  
  }

  function processData(responseData) {
    let restaurantList = responseData.features;

    restaurantList.forEach(restaurant => {
        console.log(restaurant.properties.name)
        console.log(restaurant.properties.datasource.raw.cuisine)
        
        //name = restaurant.proporties.name + restaurant.proporties.street 
        //console.log(name)
//create html element of ^ 
    });
  }
