import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList'
import './App.css'; 

function App() {

  const [flashcards, setFlashcards] = useState(menu)
 

  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const menu = [
  {
      id: 1,
      category: "Starters",
      front: "ONION & MUSHROOM SOUP",
      back: "pinot grigio, parmigiano reggiano, croutons",
      price: "9"
  },
{
      id: 2,
      category: "Starters",
      front: "VEAL MEATBALLS",
      back: "roasted in marinara, whipped ricotta, basil, grilled baguette",
      price: "12.5"
  },
   {
      id: 3,
      category: "Starters",
      front: "HUMMUS",
      back: "warm pita, za’atar spice, crudité ",
      price: "12.5"
  },
       {
      id: 4,
      category: "Starters",
      front: "BRUSSEL SPROUTS",
      back: "applewood bacon, garlic aioli, chives, parmigiano reggiano ",
      price: "13"
  },
       {
      id: 5,
      category: "Starters",
      front: "GNOCCHI",
      back: "vodka cream sauce, fontina cheese",
      price: "13"
  },
           {
      id: 6,
      category: "Starters",
      front: "CRISPY FRIED CALAMARI (RI)",
      back: "roasted garlic lemon aioli, san marzano tomato sauce",
      price: "14"
  },
           {
      id: 7,
      category: "Starters",
      front: "GRILLED SPANISH OCTOPUS",
      back: "marble potato, heirloom tomato, calabrian chili, caper, 25 yr. aged balsamic",
      price: "16"
  },

               {
      id: 8,
      category: "Starters",
      front: "SPANISH SOFRITO SHRIMP",
      back: "shishito pepper, paprika, sherry, grilled baguette",
      price: "16"
  },
               {
      id: 9,
      category: "Starters",
      front: "CRAB CAKE",
      back: "blue crab, mustard aioli, salsa verde",
      price: "18.5"
  },

            {
      id: 10,
      category: "Cheese & Charcuterie",
      front: "PURPLE HAZE",
      back: "Soft Goat, Cypress Grove Creamery, California",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 11,
      category: "Cheese & Charcuterie",
      front: "GRAFTON 2 YEAR AGED CHEDDAR",
      back: "Semi-Hard Cow, Vermont",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 12,
      category: "Cheese & Charcuterie",
      front: "BEEMSTER 26 MONTH AGED GOUDA",
      back: "Hard Cow, Holland",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 13,
      category: "Cheese & Charcuterie",
      front: "LA TUR",
      back: "Soft Triple Cream, Piedmont Italy",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 14,
      category: "Cheese & Charcuterie",
      front: "PETIT BASQUE",
      back: "Semi-Soft, France, Sheeps Milk",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 15,
      category: "Cheese & Charcuterie",
      front: "ROGUE SMOKED BLUE",
      back: "Crumbly Cow, Oregon",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 16,
      category: "Cheese & Charcuterie",
      front: "HOUSE COPPA",
      back: "Made in House",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 17,
      category: "Cheese & Charcuterie",
      front: "PROSCIUTTO DI PARMA",
      back: "18 Month, Italy",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 18,
      category: "Cheese & Charcuterie",
      front: "MAGRET DUCK PROSCIUTTO",
      back: "House Cured, NY State",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 19,
      category: "Cheese & Charcuterie",
      front: "SPICY SALAMI",
      back: "Tempesta, Chicago",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 20,
      category: "Cheese & Charcuterie",
      front: "TRUFFLE SALAMI",
      back: "Tempesta, Chicago",
      price: "5ea, 3/15, 5/24"
  },
          {
      id: 21,
      category: "Cheese & Charcuterie",
      front: "WAGYU BEEF SALAMI",
      back: "Tempesta, Chicago",
      price: "5ea, 3/15, 5/24"
  },
      {
      id: 22,
      category: "Salads",
      front: "QUINOA SALAD",
      back: "cucumber, feta, roasted beet, hearts of palm, artisan greens, pistachio, meyer lemon vinaigrette, watermelon radish",
      price: "chicken breast 16.5 | shrimp 18.5 | salmon 19.5 | steak 19.5"
  },
      {
      id: 23,
      category: "Salads",
      front: "CAESAR SALAD",
      back: "shaved parmigiano reggiano, croutons",
      price: "10.5 | with chicken 19 | with shrimp 20 | with salmon 21"
  },
      {
      id: 24,
      category: "Salads",
      front: "PEAR SALAD",
      back: "arugula, frisée, radicchio, danish blue, shaved pears, candied pecans, spiced pear vinaigrette",
      price: "12"
  },
          {
      id: 25,
      category: "Salads",
      front: "SWEET GEM WEDGE SALAD",
      back: "smoked bacon, tomatoes, red onion, gorgonzola dolce, blue cheese dressing",
      price: "12.5"
  },
            {
      id: 26,
      category: "Salads",
      front: "TUSCAN KALE SALAD",
      back: "cranberry, savoy cabbage, hazelnuts, danish blue, meyer lemon, vinaigrette",
      price: "13"
  },
            {
      id: 27,
      category: "Salads",
      front: "BURRATA MOZZARELLA",
      back: "heirloom tomato, radicchio, aged balsamic, herbs de provence pangratatto, evoo",
      price: "13.5"
  },
            {
      id: 28,
      category: "Handmade Pastas & Risotto",
      front: "BUCATINI RAGOUT NAPOLITANA",
      back: "charcuterie, braised pork, san marzano tomato, artisan whipped ricotta",
      price: "24"
  },
          {
      id: 29,
      category: "Handmade Pastas & Risotto",
      front: "FUSILLI A LA VODKA",
      back: "pancetta, vodka cream sauce, parmigiano reggiano",
      price: "24"
  },
          {
      id: 30,
      category: "Handmade Pastas & Risotto",
      front: "GNOCCHI AL FORNO",
      back: "free range chicken, spinach, fontina, vodka cream sauce",
      price: "26"
  },
          {
      id: 31,
      category: "Handmade Pastas & Risotto",
      front: "RIGATONI BOLOGNESE",
      back: "veal and braised beef, tiny mushrooms, carrots, parmesan",
      price: "27"
  },
          {
      id: 32,
      category: "Handmade Pastas & Risotto",
      front: "SHRIMP RISOTTO",
      back: "baby kale, meyer lemon, truffle pecorino",
      price: "28"
  },
         {
      id: 33,
      category: "Hearth Baked Pizza - Rosso",
      front: "MARGHERITA",
      back: "fresh mozzarella, basil",
      price: "16 - bacon 3.5, arugula 4, pepperoni 4, meatball 5, prosciutto di parma 5.5"
  },
        {
      id: 34,
      category: "Hearth Baked Pizza - Rosso",
      front: "SALSICCE",
      back: "housemade sausage, mozzarella, roasted sweet peppers, and onions, basil ",
      price: "17 - bacon 3.5, arugula 4, pepperoni 4, meatball 5, prosciutto di parma 5.5"
  },
        {
      id: 35,
      category: "Hearth Baked Pizza - Bianca",
      front: "CAPRI",
      back: "mission fig, goat cheese, mozzarella, prosciutto, arugula, balsamic agro dolce",
      price: "17 - bacon 3.5, arugula 4, pepperoni 4, meatball 5, prosciutto di parma 5.5"
  },
        {
      id: 36,
      category: "Hearth Baked Pizza - Bianca",
      front: "PANCETTA & FUNGHI",
      back: "smoked mozzarella, fontina, black truffle ricotta, parmigiano ",
      price: "18 - bacon 3.5, arugula 4, pepperoni 4, meatball 5, prosciutto di parma 5.5"
  },
          {
      id: 37,
      category: "Entrees",
      front: "CHICKEN UNDER A BRICK",
      back: "potato purée, green cauliflower, tomatoes “soto olio,” lemon-thyme jus",
      price: "28"
  },
      {
      id: 38,
      category: "Entrees",
      front: "BRAISED LAMB SHANK",
      back: "potato purée, fried parsnips, natural rosemary sauce",
      price: "32"
  },
      {
      id: 39,
      category: "Entrees",
      front: "GRILLED ORGANIC SALMON",
      back: "english pea risotto, haricots verts, charred tomatoes",
      price: "32"
  },
      {
      id: 40,
      category: "Entrees",
      front: "SEARED YELLOWFIN TUNA",
      back: "sesame crusted on japanese sushi rice salad, cucumber, rainbow carrot, miso ponzu",
      price: "32"
  },
      {
      id: 41,
      category: "Entrees",
      front: "16oz. NIMAN RANCH PORK CHOP",
      back: "mushroom risotto, haricots verts, rosemary whiskey butter",
      price: "36"
  },
      {
      id: 42,
      category: "Entrees",
      front: "BLUE CRAB CRUSTED SEA BASS",
      back: "roasted marble potatoes, asparagus, beurre blanc",
      price: "38"
  },
      {
      id: 43,
      category: "Entrees",
      front: "GRILLED 8oz. FILET MIGNON",
      back: "potato purée, asparagus, red wine demi-glace",
      price: "45"
  },
      {
      id: 44,
      category: "Entrees",
      front: "16oz. BONE-IN DRY AGED RIBEYE",
      back: "pommes anna, haricots verts, rosemary whiskey butter",
      price: "46"
  },
      {
      id: 45,
      category: "Entrees",
      front: "8oz. GRILLED HAMBURGER",
      back: "bakery roll, lettuce, tomato, red onion, fries, dill pickle",
      price: "17.5 | burger toppings: cheese 1.5, bacon 2, caramelized spanish onion 1.5"
  },
  {
    id: 46,
    category: "Cocktails",
    front: "MOSCOW MULE",
    back: "tito’s handmade vodka, housemade ginger beer, fresh lime, served in a copper mug ",
    price: "10"
},
{
  id: 47,
  category: "Cocktails",
  front: "FRENCH 75",
  back: "nolets gin, fresh lemon juice, sparkling wine, lemon twist",
  price: "12"
},
{
  id: 48,
  category: "Cocktails",
  front: "CELLAR AVIATION",
  back: "nolet’s gin, creme di violette, luxardo maraschino liqueur",
  price: "12"
},
{
  id: 49,
  category: "Cocktails",
  front: "GRAPEFRUIT MARTINI",
  back: "ketel one vodka, saint germain, fresh grapefruit and lime",
  price: "12"
},
{
  id: 50,
  category: "Cocktails",
  front: "SMOKED OLD FASHIONED",
  back: "bulleit bourbon, cherry syrup, chocolate bitters, angostura bitters",
  price: "13"
},
{
  id: 51,
  category: "Cocktails",
  front: "STRAWBERRY BASIL MARTINI",
  back: "tito’s vodka, muddled strawberry and basil",
  price: "12"
},
{
  id: 52,
  category: "Cocktails",
  front: "GOLDEN MARGARITA",
  back: "tito’s handmade vodka, housemade ginger beer, fresh lime, served in a copper mug ",
  price: "14"
},
{
  id: 53,
  category: "Cocktails",
  front: "BARREL AGED OLD FASHIONED",
  back: "redemption rye, luxardo liqueur, cherry syrup, orange blossom bitters",
  price: "13"
},
{
  id: 54,
  category: "Cocktails",
  front: "HEMINGWAY OLD FASHIONED",
  back: "papa’s pilar sherry barrel aged rum, orange bitters, filthy cherry, orange peel ",
  price: "13"
},
{
  id: 55,
  category: "Cocktails",
  front: "PEACH SANGRIA",
  back: "albarino, peach liqueur, vodka, fresh peach syrup, citrus",
  price: "12"
},

]

export default App;
