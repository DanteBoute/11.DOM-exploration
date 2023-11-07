const pizzas = [
    {
      name: 'Pepperoni Pizza',
      crust: 'Thin Crust',
      toppings: ['Pepperoni', ' Mozzarella', ' Tomato Sauce'],
      price:'€' + 12.99,
      picture: 'pizzas 2/1.png',
      vegetarian: 'No'
    },
    {
      name: 'Margherita Pizza',
      crust: 'Thin Crust',
      toppings: ['Fresh Basil', ' Mozzarella', ' Tomato Sauce'],
      price:'€' + 10.99,
      picture: 'pizzas 2/2.png',
      vegetarian: 'Yes'

    },
    {
      name: 'Supreme Pizza',
      crust: 'Pan Crust',
      toppings: ['Pepperoni', ' Sausage', ' Bell Peppers', ' Onions', ' Olives'],
      price:'€' + 15.99,
      picture: 'pizzas 2/3.png',
      vegetarian: 'No'

    },
    {
      name: 'Vegetarian Pizza',
      crust: 'Thin Crust',
      toppings: ['Mushrooms', ' Green Peppers', ' Olives', ' Tomato Sauce'],
      price:'€' + 11.99,
      picture: 'pizzas 2/4.png',
      vegetarian: 'Yes'

    },
    {
      name: 'Hawaiian Pizza',
      crust: 'Thin Crust',
      toppings: ['Ham', ' Pineapple', ' Mozzarella', ' Tomato Sauce'],
      price:'€' + 10.99,
      picture: 'pizzas 2/5.png',
      vegetarian: 'No'

    },
    {
        name: 'BBQ Chicken Pizza',
        crust: 'Thin Crust',
        toppings: ['Grilled Chicken', ' BBQ Sauce', ' Red Onions', ' Cilantro'],
        price:'€' + 13.99,
        picture: 'pizzas 2/6.png',
        vegetarian: 'No'

      },
      {
        name: 'Mushroom Lovers Pizza',
        crust: 'Pan Crust',
        toppings: ['Mushrooms', ' Mozzarella', ' Parmesan', ' Tomato Sauce'],
        price:'€' + 11.99,
        picture: 'pizzas 2/7.png',
        vegetarian: 'Yes'

      },
      {
        name: 'Meat Lovers Pizza',
        crust: 'Pan Crust',
        toppings: ['Pepperoni', ' Sausage', ' Bacon', ' Ham', ' Ground Beef'],
        price:'€' + 16.99,
        picture: 'pizzas 2/8.png',
        vegetarian: 'No'

      },
      {
        name: 'White Pizza',
        crust: 'Thin Crust',
        toppings: ['Ricotta', ' Mozzarella', ' Garlic', ' Spinach'],
        price:'€' + 12.99,
        picture: 'pizzas 2/9.png',
        vegetarian: 'Yes'

      },
      {
        name: 'Buffalo Chicken Pizza',
        crust: 'Thin Crust',
        toppings: ['Buffalo Chicken', ' Mozzarella', ' Red Onions', ' Blue Cheese'],
        price:'€' + 10.99,
        picture: 'pizzas 2/10.png',
        vegetarian: 'No'

      },
      {
        name: 'Vegetable Delight Pizza',
        crust: 'Thin Crust',
        toppings: ['Broccoli', ' Mushrooms', ' Bell Peppers', 'Tomato Sauce'],
        price:'€' + 11.49,
        picture: 'pizzas 2/3.png',
        vegetarian: 'Yes'

      },
      {
        name: 'Four Cheese Pizza',
        crust: 'Pan Crust',
        toppings: ['Mozzarella', ' Cheddar', ' Parmesan', ' Ricotta', ' Tomato Sauce'],
        price:'€' + 13.99,
        picture: 'pizzas 2/5.png',
        vegetarian: 'Yes'

      }
  ];
  const mainSection = document.querySelector('main');

  const onePizza = (onePizza) =>
  {
  const card = document.createElement('div');

  card.classList.add('card');

  const pizzaImage = document.createElement('img');
  const pizzaName = document.createElement('h2');
  const pizzaCrust = document.createElement('h3');
  const pizzaToppings = document.createElement('p');
  const pizzaPrice = document.createElement('h3');
  const pizzaType = document.createElement('h3');
  const addToCard = document.createElement('button');
  
  pizzaImage.src = onePizza.picture;
  pizzaName.textContent = onePizza.name;
  pizzaCrust.textContent = onePizza.crust;
  pizzaToppings.textContent = onePizza.toppings;
  pizzaPrice.textContent = onePizza.price;
  pizzaType.textContent = 'Veggie? '+ onePizza.vegetarian;
  addToCard.textContent = 'Add To Cart';

  pizzaPrice.classList.add('priceOfPizza');
  addToCard.classList.add('add-to-cart');

  card.appendChild(pizzaImage);
  card.appendChild(pizzaName);
  card.appendChild(pizzaCrust);
  card.appendChild(pizzaToppings);
  card.appendChild(pizzaPrice);
  card.appendChild(pizzaType);
  card.appendChild(addToCard);

  mainSection.appendChild(card);
}

  pizzas.forEach(pizza => {
    onePizza(pizza);
  });
  const filterVegetarian = (pizzas)  => {
    let vegetarianPizzas = pizzas.filter(pizza => pizza.vegetarian === 'Yes');
    mainSection.innerHTML = '';
    vegetarianPizzas.forEach(vegPizza => {
        onePizza(vegPizza);
    })
    setupAddToCartListeners();
  }
const veggieButton = document.querySelector('.veggieButton');
veggieButton.addEventListener('click', () => {filterVegetarian(pizzas)});

const filterThinCrust = (pizzas)  => {
    let thinCrustPizzas = pizzas.filter(pizza => pizza.crust === 'Thin Crust');
    mainSection.innerHTML = '';
    thinCrustPizzas.forEach(thinPizza => {
        onePizza(thinPizza);
    })
    setupAddToCartListeners();
  }
  
const thinCrustButton = document.querySelector('.thinCrustButton');
thinCrustButton.addEventListener('click', () => {filterThinCrust(pizzas)});

const filterPanCrust = (pizzas)  => {
    let PanCrustPizzas = pizzas.filter(pizza => pizza.crust === 'Pan Crust');
    mainSection.innerHTML = '';
    PanCrustPizzas.forEach(panPizza => {
        onePizza(panPizza);
    })
    setupAddToCartListeners();
  }
const panCrustButton = document.querySelector('.panCrustButton');
panCrustButton.addEventListener('click', () => {filterPanCrust(pizzas)});

const AllPizzasButton = document.querySelector('.allPizzasButton');
AllPizzasButton.addEventListener('click', () => {  
    mainSection.innerHTML = '';
    pizzas.forEach(pizza => {
    onePizza(pizza)
    
    })
    setupAddToCartListeners();
  });

// ADD TO CART

// document.addEventListener("DOMContentLoaded", function() {
function setupAddToCartListeners() {
  const addToCartButtons = document.querySelectorAll("button");
  const cartItemList = document.getElementById("cart-items");
  const totalAmountElement = document.getElementById("total-amount");
  let totalAmount = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
      const pizzaName = this.parentElement.querySelector("h2").textContent;
      const pizzaPrice = parseFloat(this.parentElement.querySelector(".priceOfPizza").textContent.replace("€", ""));

      const cartItem = document.createElement("li");
      cartItem.textContent =`${pizzaName} - ${pizzaPrice}`;

      cartItemList.appendChild(cartItem);
      
      totalAmount += pizzaPrice;
      totalAmountElement.textContent = `${totalAmount}`;
      
    });
  });
}
setupAddToCartListeners();

document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  darkModeToggle.addEventListener("change", function() {
      const isDarkMode = this.checked;

      if (isDarkMode) {
          document.body.classList.add("dark-mode");
      } else {
          document.body.classList.remove("dark-mode");
      }
  });
});