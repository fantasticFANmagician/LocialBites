const fs = require('fs');

fs.readFile('restaurants.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const cuisineTypes = new Set();
    
    jsonData.features.forEach(restaurant => {
      if (restaurant.properties.cuisine) {
        restaurant.properties.cuisine.split(';').forEach(cuisine => {
          cuisineTypes.add(cuisine.trim());
        });
      }
    });
    
    console.log(Array.from(cuisineTypes).sort());
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});