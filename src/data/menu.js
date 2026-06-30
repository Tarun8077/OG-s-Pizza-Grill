/* OG's Pizza & Grill — full menu, extracted verbatim from the restaurant's own
   menu PDF (src/assets/Menu). Spelling normalised from the PDF's text layer
   ("gill" → grill, "sered" → served, "tffle" → truffle, "paresan" → parmesan,
   "patt" → patty, etc.). Prices are exactly as printed (INR, taxes extra).

   NOTE ON IMAGERY: the brand supplied only ambience / venue / beverage
   photography — there are no per-dish food photos. We therefore never fabricate
   dish images: `image` is null for plated items and the card renders an
   editorial monogram crest instead. Real ambience photos are used only for the
   hero and the Signature highlight, where they are honestly atmosphere shots.

   `bestseller` / `chefRecommendation` mirror the PDF's own editorial emphasis:
   the dishes the menu elevates onto its dedicated "Symphony of Flavours"
   signature page, plus the house classics the brand already features on the
   home page. Nothing here is invented copy. */

import { photos } from '../assets/images'

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/* Compact builder: each row is [name, price, description, opts?].
   opts = { veg, spicy, best, chef, tags, image } — all optional.
   Keeps the data dense and the schema consistent (no duplicated boilerplate). */
const build = (category, rows) =>
  rows.map(([name, price, description, opts = {}]) => ({
    id: `${category}-${slugify(name)}`,
    category,
    name,
    description,
    price,
    image: opts.image ?? null,
    tags: opts.tags ?? [],
    spicy: Boolean(opts.spicy),
    vegetarian: Boolean(opts.veg),
    bestseller: Boolean(opts.best),
    chefRecommendation: Boolean(opts.chef),
  }))

/* Category metadata — order here is the page's vertical order and the
   category-nav order. `tagline` is drawn from the PDF section copy. */
export const MENU_CATEGORIES = [
  {
    id: 'signatures',
    label: 'Signatures',
    title: 'A Symphony of Flavours',
    tagline:
      'Where global cooking meets coastal Indian spice — tiramisu takes a trip to Kerala, parotta turns quesadilla, and mousse becomes raita.',
  },
  {
    id: 'breakfast',
    label: 'All-Day Breakfast',
    title: 'All-Day Breakfast',
    tagline: 'Morning plates served whenever the mood strikes.',
  },
  {
    id: 'soups-salads',
    label: 'Soups & Salads',
    title: 'Soups & Salads',
    tagline: 'Warm bowls and bright, fresh leaves.',
  },
  {
    id: 'antipasti',
    label: 'Antipasti',
    title: 'Antipasti',
    tagline: 'Fries, crostini, nachos and things to start and share.',
  },
  {
    id: 'small-plates',
    label: 'Small Plates',
    title: 'Small Plates',
    tagline: 'Skewers, satays and grilled bites kissed by open flame.',
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    title: 'Sandwiches',
    tagline: 'Choice of ciabatta or freshly baked panuozzo — sourdough +60.',
  },
  {
    id: 'hotdogs',
    label: 'Hot Dogs',
    title: 'Hot Dogs & Rolls',
    tagline: 'In-house butter brioche bun, OG banger sauce & french fries.',
  },
  {
    id: 'tacos',
    label: 'Tacos',
    title: 'Tacos',
    tagline: 'Warm soft-shell tacos, pineapple salsa, tomato salsa, sour cream & guac.',
  },
  {
    id: 'burgers',
    label: 'Burgers',
    title: 'Burgers',
    tagline: 'Served with OG banger sauce & house-special potato wedges.',
  },
  {
    id: 'quesadillas',
    label: 'Quesadillas',
    title: 'Quesadillas',
    tagline: 'Mexican flatbread stuffed with cheese & grilled to perfection.',
  },
  {
    id: 'pasta',
    label: 'Pasta',
    title: 'Pasta',
    tagline: 'From rigatoni to house-rolled fettuccini, ravioli and lasagna.',
  },
  {
    id: 'pizza',
    label: 'Pizza',
    title: 'Wood-Fired Pizza',
    tagline: 'Choice of Neapolitan or thin crust, blistered in our wood-fired oven.',
  },
  {
    id: 'grill',
    label: 'From the Grill',
    title: 'From the Argentinian Grill',
    tagline: 'Steaks, chops and skewers finished over open flame.',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    title: 'Desserts & Ice Creams',
    tagline: '100% milk-based ice creams and sweet finales, made without compromise.',
  },
]

const signatures = build('signatures', [
  ['Kadala Curry Hummus', 380, 'Black chickpea hummus, Malabari parotta crisps, kosambari salad.', { veg: true, chef: true, tags: ['Kerala', 'Sharing'] }],
  ['Kerala Arancini Balls', 380, 'Kerala-spiced fried risotto balls served with raita.', { veg: true, tags: ['Kerala', 'Fried'] }],
  ['Mushroom Pepper Fry Quesadilla', 420, 'Shiitake, porcini & button mushroom pepper fry in a Malabari parotta quesadilla, OG cheese sauce, raw mango salsa, avocado thecha, curry leaf sour cream.', { veg: true, spicy: true, tags: ['Mushroom', 'Fusion'] }],
  ['Sambar Bocconcini Balls', 420, 'Fresh mozzarella-stuffed paniyaram balls in a silky sambar gravy.', { veg: true, chef: true, tags: ['Kerala', 'Fusion'] }],
  ['Wild Mushroom Ghee Roast Tacos', 460, 'Ghee-roast shiitake, porcini & button mushroom in appam tacos, raw mango salsa, avocado thecha, curry leaf sour cream.', { veg: true, spicy: true, tags: ['Mushroom', 'Kerala'] }],
  ['Coconut Risotto', 480, 'Wild mushroom, risotto rice and a creamy coconut stew, served with masala garlic bread.', { veg: true, chef: true, tags: ['Coastal', 'Creamy'] }],
  ['Chicken 65 Burger', 420, 'Chicken 65 patty, curry leaf aioli, pickled onion, fried egg.', { spicy: true, tags: ['Fusion', 'Chicken'] }],
  ['Pepper Fry Chicken Quesadilla', 460, 'Chicken pepper fry in a Malabari parotta quesadilla, OG cheese sauce, raw mango salsa, avocado thecha, curry leaf sour cream.', { spicy: true, tags: ['Chicken', 'Fusion'] }],
  ['Chicken Ghee Roast Tacos', 480, 'Ghee-roast chicken in appam tacos, raw mango salsa, avocado thecha, curry leaf sour cream.', { spicy: true, tags: ['Kerala', 'Chicken'] }],
  ['Kongu Risotto', 520, 'Chicken risotto biryani served with raita mousse & kosambari salad.', { best: true, chef: true, tags: ['Signature', 'Fusion'] }],
  ['Prawn Ravioli', 620, 'Housemade prawn ravioli, moilee sauce, tempered curry leaf & mustard seed.', { best: true, chef: true, tags: ['Seafood', 'Coastal'] }],
  ['Sukka Lamb Chops', 780, 'Kerala sukka masala lamb chops, kappa mash, kosambari salad & papadam.', { spicy: true, best: true, chef: true, tags: ['Kerala', 'Lamb'] }],
  ['Cream Cheese Hopper', 250, 'Rice batter appam, cream cheese mousse, toasted nut, seasonal fruits, maple drizzle.', { veg: true, tags: ['Kerala', 'Sweet'] }],
  ['Kerala Spiced Filter Coffee Tiramisu', 350, 'Our take on the signature tiramisu, with filter coffee & Kerala spices.', { veg: true, best: true, chef: true, tags: ['Dessert', 'Coffee'] }],
])

const breakfast = build('breakfast', [
  ['Pancakes', 220, 'Butter & maple syrup (220), fresh fruits (270) or Nutella (300).', { veg: true, tags: ['Sweet'] }],
  ['Smoothie Bowl', 320, 'Creamy yogurt, granola, fresh seasonal fruit, mixed seeds, honey.', { veg: true, tags: ['Healthy'] }],
  ['Caprese Sando', 350, 'Pesto, tomato, stracciatella cheese, balsamic drizzle.', { veg: true }],
  ['Wild Mushroom Toast', 350, 'Shiitake, porcini & button mushroom, mascarpone, cream cheese, parmesan, sourdough bread.', { veg: true, tags: ['Mushroom'] }],
  ['Avo & Burrata Toast', 380, 'Avocado salsa, confit tomato, oozing burrata, pumpkin seeds, sourdough bread.', { veg: true, chef: true, tags: ['Avocado'] }],
  ['OG Eggie Breakfast', 280, 'Choice of eggs, baked beans, sautéed vegetables, grilled tomato, hash brown, butter toast. Add chicken sausage / ham (120) or bacon (150).', { tags: ['Eggs'] }],
  ['Omelette', 250, 'Served with garlic toast — cheese (250), three pepper onion tomato (250), wild mushroom (280), chicken sausage (280) or bacon (320).', { tags: ['Eggs'] }],
  ['Shakshuka', 320, 'Eggs, bell pepper, tomatoes, feta cheese, garlic bread. Add cheese (100) or bacon bits (150).', { spicy: true, tags: ['Eggs'] }],
  ['French Toast', 220, 'Butter & honey (220), toffee banana (270) or mixed berries (300).', { tags: ['Sweet', 'Eggs'] }],
  ['Chicken Salad Sando', 350, 'Grilled chicken, celery, garlic aioli, pickled pineapple, crunchy onion, lettuce.', { tags: ['Chicken'] }],
  ['Bacon & Egg Sando', 350, 'Crunchy bacon, scrambled egg, chilli oil, cheddar cheese. Add chicken sausage (120).', { tags: ['Pork', 'Eggs'] }],
  ['Chorizo Toast', 380, 'Avocado guac, spicy chorizo, poached egg, pickled onion, jalapeño, sourdough bread.', { spicy: true, tags: ['Pork'] }],
])

const soupsSalads = build('soups-salads', [
  ['Pappa Al Pomodoro', 280, 'Thick Tuscan bread soup with San Marzano tomato, bread, olive oil, garlic & basil, stracciatella cheese.', { veg: true, tags: ['Soup'] }],
  ['Wild Mushroom Truffle Soup', 300, 'Shiitake, porcini & button mushroom with truffle oil.', { veg: true, tags: ['Soup', 'Truffle'] }],
  ['Chicken Minestrone', 300, 'Shredded chicken, elbow pasta, vegetable medley.', { tags: ['Soup', 'Chicken'] }],
  ['Tortellini di Pollo', 320, 'Creamy tomato soup with chicken tortellini & basil.', { tags: ['Soup', 'Chicken'] }],
  ['Warm Baby Potato Salad', 280, 'Baby potato, onion, mustard greek yoghurt, parsley. Add bacon bits (150).', { veg: true, tags: ['Salad'] }],
  ['Caesar Salad', 280, 'Lettuce, caesar dressing, parmesan, croutons. Add egg (60), chicken (100) or bacon (150).', { veg: true, tags: ['Salad'] }],
  ['Caprese Salad', 350, 'Tomato, basil, fresh mozzarella, balsamic reduction, pesto.', { veg: true, tags: ['Salad'] }],
  ['Summer Citrus Salad', 350, 'Orange, bell pepper, cucumber, bocconcini, lemon vinaigrette, balsamic reduction. Add chicken strips (100).', { veg: true, tags: ['Salad'] }],
  ['PB&T', 380, 'Peanut, burrata, tomato, truffle oil.', { veg: true, tags: ['Salad', 'Truffle'] }],
])

const antipasti = build('antipasti', [
  ['French Fries', 250, 'Salted (250), peri peri (280), parmesan ranch (320) or truffle (350).', { veg: true, spicy: true }],
  ['Sweet Potato Fries', 280, 'House-cut sweet potato fries, spicy aioli, cajun salt, parmesan.', { veg: true, spicy: true }],
  ['Veg Crostini Trio', 320, 'Sundried tomato, creamy mushroom and ratatouille crostini.', { veg: true }],
  ['Arancini', 320, 'Fried risotto balls, sundried tomato & mozzarella stuffing, marinara sauce.', { veg: true, tags: ['Fried'] }],
  ['Tomato Basil Toast', 320, 'Fresh tomato, basil pesto, parmesan, sourdough bread.', { veg: true }],
  ['OG Garlic Bread', 380, 'Freshly baked on order, served with sundried tomato pesto & basil pesto. Add cheese (100).', { veg: true, chef: true }],
  ['Baked Cheese Dough Balls', 380, 'Baked goat cheese, marinara sauce, herb butter, dough balls.', { veg: true }],
  ['Loaded Veg Nachos', 400, 'Housemade nachos, crispy fries, jalapeño, baked beans, guacamole, OG cheese sauce, tomato salsa, sour cream.', { veg: true, spicy: true, tags: ['Sharing'] }],
  ['Bocconcini Tempura', 420, 'Fried panko-crusted bocconcini served with marinara sauce.', { veg: true, tags: ['Fried'] }],
  ['Mac & Cheese', 420, 'Elbow macaroni, creamy cheddar cheese sauce, panko parmesan crumble.', { veg: true }],
  ['Chicken Crostini Duet', 340, 'Chicken salsa | creamy pesto chicken.', { tags: ['Chicken'] }],
  ['Chicken Karaage', 360, 'Japanese-style crispy chicken served with togarashi mayo.', { tags: ['Chicken', 'Fried'] }],
  ['Chicken Calzone', 360, 'Shredded chicken, marinara sauce, fresh mozzarella, basil pesto, sundried tomato pesto. Add pepperoni (150).', { tags: ['Chicken'] }],
  ['Smoked Chicken Toast', 380, 'Smoked chicken, garlic aioli, mustard sauce, onion, celery, sourdough bread.', { tags: ['Chicken'] }],
  ['Chicken & Chips', 400, 'Crunchy chicken, french fries, served with OG sauce, salsa & cheese sauce.', { tags: ['Chicken', 'Fried'] }],
  ['Chicken Mac & Cheese', 460, 'Elbow macaroni, creamy cheddar cheese sauce, crispy chicken, panko parmesan crumble. Add bacon bits (150).', { tags: ['Chicken'] }],
  ['Loaded Chicken Nachos', 460, 'Housemade nachos, crunchy chicken, crispy fries, jalapeño, guacamole, baked beans, OG cheese sauce, tomato salsa, sour cream.', { spicy: true, tags: ['Sharing', 'Chicken'] }],
  ["Captain's Fish & Chips", 580, 'Battered & fried river sole fish, french fries, served with tartar sauce.', { chef: true, tags: ['Seafood', 'Fried'] }],
  ['Bang Bang Shrimps', 580, 'Fried panko-crusted shrimps, chives, served with spicy Japanese mayo.', { spicy: true, tags: ['Seafood'] }],
  ['Prawn Aglio Olio', 650, 'Pan-seared prawns, butter garlic sauce.', { tags: ['Seafood'] }],
])

const smallPlates = build('small-plates', [
  ['Chimichurri Baby Potato', 280, 'Grilled baby potatoes, chimichurri sauce.', { veg: true }],
  ['Grilled Veg Skewers', 320, 'Exotic vegetable skewers, garlic toum, basil pesto.', { veg: true, tags: ['Grilled'] }],
  ['Sweet Corn Ribs', 320, 'Crispy corn ribs, spicy rub, chilli-lime butter.', { veg: true, spicy: true }],
  ['Pesto Chicken Skewers', 380, 'Chilli pesto chicken skewers, truffle drizzle, house salad.', { spicy: true, tags: ['Chicken', 'Grilled'] }],
  ['Chicken Satay PB Sauce', 400, 'Japanese-style chicken satay, peanut butter sauce, pickled cucumber salad.', { tags: ['Chicken'] }],
  ['Pepper Chicken Skewers', 420, 'Black pepper garlic chicken skewers, truffle sauce, house salad.', { spicy: true, tags: ['Chicken', 'Grilled'] }],
  ['Chicken Wings', 420, 'Smoky BBQ | Fiery Hot | Jamaican Jerk | Lemon Parmesan.', { spicy: true, best: true, tags: ['Chicken'] }],
  ["OG's Chicken Parmigiana", 420, 'Spinach-stuffed chicken breast, stracciatella cheese, marinara sauce.', { chef: true, tags: ['Chicken'] }],
  ['Lamb Satay PB Sauce', 620, 'Lamb satay, peanut butter sauce, pickled cucumber salad.', { tags: ['Lamb'] }],
  ['Lamb Gyro Bites', 620, 'Lamb gyro bites, freshly baked pita bread, greek salad, garlic toum.', { tags: ['Lamb'] }],
  ['Swedish Style Meatballs', 580, 'Swedish-style meatballs, gravy, mashed potato.', { tags: ['Pork'] }],
  ['Bacon Wrapped Sausage', 620, 'Bacon, chicken sausage, house sauce, salad.', { tags: ['Pork'] }],
  ['Bacon Wrapped Dates', 620, 'Honey-glazed, bacon-wrapped, goat cheese-stuffed dates, served with honey drizzle.', { chef: true, tags: ['Pork'] }],
  ['Grilled Fish Skewers', 680, 'Fresh river fish grilled with lemon & herbs, salad.', { tags: ['Seafood', 'Grilled'] }],
  ['Grilled Fish Parcel', 700, 'Fresh river fish grilled in foil with sundried tomato, orange, onion, olives & capers, house salad.', { tags: ['Seafood', 'Grilled'] }],
  ['Fiery Red Prawns', 720, 'Prawns grilled to perfection in our housemade hot sauce, salad.', { spicy: true, tags: ['Seafood'] }],
])

const sandwiches = build('sandwiches', [
  ['Pesto Ratatouille', 340, 'Grilled vegetables, pesto, olive tapenade.', { veg: true }],
  ['Cucumber Dill Sando', 360, 'Cream cheese, dill, cucumber, tomato.', { veg: true }],
  ['Wild Mushroom Melt', 360, 'Shiitake, porcini & button mushroom, mozzarella, cheddar.', { veg: true, tags: ['Mushroom'] }],
  ['Harissa Paneer Melt', 380, 'Harissa-spiced paneer, bell pepper, onion, mozzarella, cheddar.', { veg: true, spicy: true }],
  ['Pulled Chicken Sandwich', 360, 'Pulled chicken, bell pepper, hot sauce, cheddar.', { spicy: true, tags: ['Chicken'] }],
  ['Chicken Ham & Cheese Sando', 380, 'Chicken ham, cheese slice, cheddar.', { tags: ['Chicken'] }],
  ['Grilled Chicken Sandwich', 380, 'Grilled chicken, house sauce, pickled pineapple, celery.', { tags: ['Chicken'] }],
  ['Fried Chicken Sando', 400, 'Crispy chicken, coleslaw, pickled onion, jalapeño, Japanese mayo, sriracha sauce.', { spicy: true, tags: ['Chicken', 'Fried'] }],
  ['Pork Ham & Cheese Sando', 420, 'Pork ham, cheese slice, cheddar.', { tags: ['Pork'] }],
  ['BLT', 440, 'Bacon, lettuce, tomato, garlic aioli.', { tags: ['Pork'] }],
  ['Egg Sando', 320, 'Boiled egg, Japanese mayo, mustard, celery.', { tags: ['Eggs'] }],
  ['Scrambled Egg Sando', 340, 'Truffle-scented creamy scrambled eggs, mozzarella, cheddar.', { tags: ['Eggs', 'Truffle'] }],
  ['Chorizo Sandwich', 480, 'Spicy chorizo, pickled paprika, fried egg, crunchy onion, cheddar.', { spicy: true, tags: ['Pork'] }],
  ['Lamb Melt', 480, 'Lamb chilli, bell pepper trio, house sauce, mozzarella, cheddar.', { spicy: true, tags: ['Lamb'] }],
  ['Lamb Chimichurri Sandwich', 520, 'Sliced lamb steak, chimichurri, garlic aioli.', { tags: ['Lamb'] }],
  ['Tuna Melt', 440, 'Tuna, celery, Japanese mayo.', { tags: ['Seafood'] }],
])

const hotdogs = build('hotdogs', [
  ['Classic Hot Dog', 380, 'Choice of chicken or pork sausage, mayo, ketchup, mustard.', { tags: ['Chicken', 'Pork'] }],
  ['OG Hot Dog', 400, 'Choice of chicken or pork sausage, pineapple salsa, garlic aioli, cheddar.', { chef: true, tags: ['Chicken', 'Pork'] }],
  ['Spicy Hot Dog', 420, 'Choice of chicken or pork sausage, fried onion, Japanese mayo, spicy harissa.', { spicy: true, tags: ['Chicken', 'Pork'] }],
  ['New England Style Shrimp Roll', 460, 'Grilled shrimp, garlic aioli, celery, onion.', { tags: ['Seafood'] }],
])

const tacos = build('tacos', [
  ['Chipotle Paneer Taco', 400, 'Chipotle-spiced paneer in warm soft-shell tacos.', { veg: true, spicy: true }],
  ['Chipotle Chicken Taco', 420, 'Chipotle-spiced chicken in warm soft-shell tacos.', { spicy: true, tags: ['Chicken'] }],
  ['Al-Pastor Pork Taco', 460, 'Al-pastor pork in warm soft-shell tacos.', { tags: ['Pork'] }],
  ['Baja Fish Taco', 480, 'Crispy Baja-style fish in warm soft-shell tacos.', { tags: ['Seafood'] }],
  ['Pulled Lamb Taco', 480, 'Slow-pulled lamb in warm soft-shell tacos.', { tags: ['Lamb'] }],
])

const burgers = build('burgers', [
  ['Cheese Stuffed Potato Burger', 360, 'Cheese-stuffed potato patty, house sauce, spicy jalapeño, caramelised onion, tomato confit.', { veg: true, spicy: true }],
  ['BBQ Paneer Burger', 380, 'Grilled cottage cheese, spicy jalapeño, smoky BBQ sauce, crispy onion rings, cheddar.', { veg: true, spicy: true }],
  ['Black Bean Burger', 380, 'Black bean patty, avocado smash, spicy jalapeño, grilled pineapple, cheddar.', { veg: true, spicy: true }],
  ['Grilled Chicken Burger', 400, 'Grilled chicken patty, pickle, house sauce, cheddar.', { tags: ['Chicken'] }],
  ['Spicy Chicken Burger', 420, 'Grilled chicken patty, spicy onion bell pepper mix, spicy aioli, cheddar.', { spicy: true, tags: ['Chicken'] }],
  ['Fried Chicken Burger', 440, 'Crispy chicken, pickle, house sauce, cheddar.', { best: true, tags: ['Chicken', 'Fried'] }],
  ["Captain's Fish Burger", 420, "Crispy fish, OG's tartar sauce, cheddar.", { tags: ['Seafood'] }],
  ['BBQ Lamb Burger', 520, 'Lamb patty, smoky BBQ sauce, spicy jalapeño, crispy onion ring, cheddar.', { spicy: true, tags: ['Lamb'] }],
  ['Smashed Lamb Burger', 560, '160g smashed lamb patty, house sauce, caramelised onion, melted cheese.', { chef: true, tags: ['Lamb'] }],
  ['Pulled Pork Burger', 440, 'Pulled pork, sautéed onion & bell pepper, cheddar. Choice of fiery red or smoky BBQ sauce.', { spicy: true, tags: ['Pork'] }],
  ['OG Oink Burger', 540, "OG's special pork patty, spicy jalapeño, onion jam, garlic aioli, whole grain mustard, cheddar.", { spicy: true, chef: true, tags: ['Pork'] }],
])

const quesadillas = build('quesadillas', [
  ['Quattro Formaggio Quesadilla', 380, 'Four-cheese quesadilla, grilled to perfection.', { veg: true }],
  ['Chicken Quesadilla', 400, 'Cheese & chicken quesadilla, grilled to perfection.', { tags: ['Chicken'] }],
  ['Pulled Pork Quesadilla', 440, 'Cheese & pulled pork quesadilla, grilled to perfection.', { tags: ['Pork'] }],
  ['Lamb Birria Quesadilla', 480, 'Cheese & lamb birria quesadilla, grilled to perfection.', { chef: true, tags: ['Lamb'] }],
])

const pasta = build('pasta', [
  ['Arrabbiata Rigatoni', 440, 'Rigatoni in a spicy arrabbiata tomato sauce.', { veg: true, spicy: true }],
  ['Alfredo Rigatoni', 440, 'Rigatoni in a creamy alfredo sauce.', { veg: true }],
  ['Zoodles in Arrabbiata Sauce', 460, 'Zucchini noodles in a spicy arrabbiata sauce.', { veg: true, spicy: true, tags: ['Healthy'] }],
  ['Aglio Olio Spaghetti', 480, 'Spaghetti tossed in garlic, chilli & olive oil.', { veg: true }],
  ['Creamy Tomato Rigatoni', 480, 'Rigatoni in a creamy tomato sauce.', { veg: true }],
  ['Sundried Tomato Risotto', 520, 'Risotto rice with sundried tomato.', { veg: true }],
  ['Rigatoni in Vodka Sauce', 520, 'Rigatoni in a classic vodka cream sauce.', { veg: true }],
  ['Chicken Arrabbiata Rigatoni', 520, 'Rigatoni with chicken in a spicy arrabbiata sauce.', { spicy: true, tags: ['Chicken'] }],
  ['Alfredo Chicken Spaghetti', 520, 'Spaghetti with chicken in a creamy alfredo sauce.', { tags: ['Chicken'] }],
  ['Chicken & Mushroom Risotto', 560, 'Risotto rice with chicken & mushroom.', { tags: ['Chicken', 'Mushroom'] }],
  ['Meatball Spaghetti', 580, 'Spaghetti with house meatballs in tomato sauce.', { tags: ['Pork'] }],
  ['Rigatoni Carbonara', 600, 'Rigatoni in a silky egg, pork & parmesan carbonara.', { chef: true, tags: ['Pork', 'Eggs'] }],
  ['Pesto Fettuccini', 520, 'House hand-rolled fettuccini in basil pesto (contains egg).', { veg: true, tags: ['Handmade'] }],
  ['Funghi Fettuccini', 520, 'House hand-rolled fettuccini in a wild mushroom sauce (contains egg).', { veg: true, tags: ['Handmade', 'Mushroom'] }],
  ['Spinach Ricotta Ravioli', 540, 'House ravioli of spinach & ricotta in pumpkin sauce (contains egg).', { veg: true, tags: ['Handmade'] }],
  ['Quattro Formaggio Caramelle', 560, 'House four-cheese caramelle in pomodoro sauce (contains egg).', { veg: true, tags: ['Handmade'] }],
  ['Vegetable Lasagna', 560, 'Layered house pasta with vegetables (contains egg).', { veg: true, tags: ['Handmade'] }],
  ['Chicken Bolognese Cannelloni', 540, 'House cannelloni filled with chicken bolognese (contains egg).', { tags: ['Handmade', 'Chicken'] }],
  ['Chicken Parmigiano Fettuccini', 560, 'House hand-rolled fettuccini, chicken parmigiano (contains egg).', { tags: ['Handmade', 'Chicken'] }],
  ['Chicken Tortellini in Puttanesca', 560, 'House chicken tortellini in a puttanesca sauce (contains egg).', { spicy: true, tags: ['Handmade', 'Chicken'] }],
  ['Shrimp Alfredo Fettuccini', 620, 'House hand-rolled fettuccini, shrimp in alfredo sauce (contains egg).', { tags: ['Handmade', 'Seafood'] }],
  ['Shrimp Ravioli in Lemon Caper', 620, 'House shrimp ravioli in a lemon caper sauce (contains egg).', { tags: ['Handmade', 'Seafood'] }],
  ['Chicken Lasagna', 620, 'Layered house pasta with chicken (contains egg).', { tags: ['Handmade', 'Chicken'] }],
])

const pizza = build('pizza', [
  ['Margherita', 540, 'Marinara sauce, fresh mozzarella, basil.', { veg: true, best: true, chef: true, tags: ['Classic'] }],
  ['OG Farm Fresh', 620, 'Marinara sauce, fresh mozzarella, bell pepper, sundried tomato, onion, mushroom, olive, jalapeño.', { veg: true, spicy: true }],
  ['OG Pesto', 620, 'Pesto sauce, fresh mozzarella, cherry tomato, sundried tomato, olive.', { veg: true }],
  ['Potato & Truffle Thyme', 660, 'Creamy herb sauce, fresh mozzarella, capers, thyme, potato, truffle oil.', { veg: true, tags: ['Truffle'] }],
  ['Pizza Con Taco', 680, 'Marinara sauce, fresh mozzarella, charred corn, salsa, avocado, crushed nachos, sour cream.', { veg: true }],
  ['Tropical Veggies', 680, 'Marinara sauce, pineapple, jalapeño, olive, fresh mozzarella.', { veg: true, spicy: true }],
  ['Pepper Pumpkin', 680, 'Pumpkin sauce, fresh mozzarella, bell pepper, sundried tomato, jalapeño, basil.', { veg: true, spicy: true }],
  ['Funghi', 740, 'Marinara sauce, fresh mozzarella, shiitake, porcini, button mushroom, truffle oil.', { veg: true, tags: ['Mushroom', 'Truffle'] }],
  ['Quattro Formaggio', 780, 'Creamy herb sauce, fresh mozzarella, smoked scamorza, feta, parmesan.', { veg: true }],
  ['Burrata', 860, 'Marinara sauce, fresh mozzarella, burrata, basil.', { veg: true, chef: true }],
  ['Pulled Chicken Pizza', 660, 'Marinara sauce, fresh mozzarella, paprika pulled chicken, bell pepper, onion, sliced paprika, jalapeño.', { spicy: true, tags: ['Chicken'] }],
  ['Pollo Pesto', 680, 'Pesto sauce, sliced chicken, fresh mozzarella, cherry tomato, sundried tomato, olive.', { tags: ['Chicken'] }],
  ['BBQ Chicken', 680, 'Marinara sauce, fresh mozzarella, BBQ chicken, onion, olive.', { tags: ['Chicken'] }],
  ['Bianca Chicken', 680, 'Creamy herb sauce, fresh mozzarella, sliced chicken, sliced paprika, sundried tomato, basil, roasted nuts.', { tags: ['Chicken'] }],
  ['Tropical Chicken', 680, 'Marinara sauce, fresh mozzarella, charred pineapple, spicy chicken, jalapeño, olive.', { spicy: true, tags: ['Chicken'] }],
  ['Lamb Chilli', 760, 'Marinara sauce, fresh mozzarella, minced lamb, fresh fennel, sliced paprika, jalapeño.', { spicy: true, tags: ['Lamb'] }],
  ['Diavolo', 760, 'Marinara sauce, fresh mozzarella, spicy chorizo, sliced paprika, chilli oil.', { spicy: true, tags: ['Pork'] }],
  ['Pepperoni', 780, 'Marinara sauce, fresh mozzarella, cured pork pepperoni.', { best: true, chef: true, tags: ['Pork', 'Classic'] }],
  ['Bacon & Potato', 780, 'Creamy herb sauce, fresh mozzarella, bacon, potato, thyme.', { tags: ['Pork'] }],
  ['Meat Monster', 860, 'Marinara sauce, fresh mozzarella, shredded chicken, minced lamb, pork chorizo, chicken sausage, bacon.', { best: true, tags: ['Chicken', 'Lamb', 'Pork'] }],
])

const grill = build('grill', [
  ['Chimichurri Cauliflower Steak', 460, 'Cauliflower steak, cauliflower purée, chimichurri, crispy bread crumbs.', { veg: true }],
  ['Grilled Pineapple', 480, 'Lemon-chilli caramel glazed grilled pineapple, sweet potato fries, garlic beans.', { veg: true }],
  ['Cottage Cheese Steak', 520, 'Grilled cottage cheese, sautéed vegetables, mashed potato, house salad. Choice of black pepper, chimichurri or hot sauce.', { veg: true }],
  ['Grilled Portobello', 640, 'Grilled portobello, balsamic drizzle, house salad, mashed potato.', { veg: true, tags: ['Mushroom'] }],
  ['Harissa Rubbed Grilled Chicken', 580, 'Grilled chicken, sautéed vegetables, mashed potato, house salad, harissa sauce.', { spicy: true, tags: ['Chicken'] }],
  ['Chicken Cafreal', 580, 'Grilled chicken, sautéed vegetables, mashed potato, house salad, cafreal sauce.', { spicy: true, tags: ['Chicken'] }],
  ['Grilled Chicken with Grape Sauce', 620, 'Grilled chicken, sautéed vegetables, mashed potato, house salad, grape sauce.', { tags: ['Chicken'] }],
  ['Grilled Chicken Steak', 620, 'Grilled chicken steak, sautéed vegetables, mashed potato, house salad. Choice of black pepper, chimichurri or hot sauce.', { tags: ['Chicken'] }],
  ['Lamb Chops', 780, 'Lamb chops, mashed potato, sautéed vegetables, house salad. Choice of black pepper, chimichurri or hot sauce.', { best: true, chef: true, tags: ['Lamb'] }],
  ['Lamb Steak', 820, 'Lamb steak, mashed potato, sautéed vegetables, house salad. Choice of black pepper, chimichurri or hot sauce.', { tags: ['Lamb'] }],
  ['Grilled Fish', 780, 'Grilled river sole, mashed potato, house salad, sautéed vegetables, sage butter.', { tags: ['Seafood'] }],
  ['Grilled Tiger Prawns', 860, 'Grilled tiger prawns, mashed potato, house salad, sautéed vegetables, creamy hot sauce.', { spicy: true, chef: true, tags: ['Seafood'] }],
  ['Bangers & Mash', 780, 'Pork sausage, mashed potato, sautéed vegetables, house salad, gravy.', { tags: ['Pork'] }],
  ['Pork Chops', 780, 'Pork chops, mashed potato, sautéed vegetables, house salad. Choice of black pepper, chimichurri or hot sauce.', { tags: ['Pork'] }],
  ['Pork Ribs', 820, 'Pork ribs, mashed potato, sautéed vegetables, house salad, mango bhoot jholakia.', { spicy: true, chef: true, tags: ['Pork'] }],
])

const desserts = build('desserts', [
  ['Dairy Ice Creams (Double Scoop)', 220, 'OG vanilla, Oh so mango, Rasa filter coffee, jaggery coconut, Ghana chocolate, butterscotch, lovely lavender or triple berry blast. Waffle cone +25.', { veg: true, tags: ['Ice Cream'] }],
  ['Banoffee Cup', 250, 'Banana, toffee & cream layered cup.', { veg: true }],
  ['Tres Leches', 250, 'Classic three-milk sponge cake.', { veg: true }],
  ['Cookie & Ice Cream', 250, 'Warm cookie served with ice cream.', { veg: true, tags: ['Ice Cream'] }],
  ['Pineapple Bento Cake', 280, 'Individual pineapple bento cake.', { veg: true }],
  ['Berry Chia Pudding', 280, 'Chia pudding with mixed berries.', { veg: true, tags: ['Healthy'] }],
  ['Chiffon Bento Cake', 300, 'Light chiffon bento cake.', { veg: true }],
  ['Chocolate Truffle Bento', 320, 'Rich chocolate truffle bento cake.', { veg: true }],
  ['NY Baked Cheesecake', 320, 'Classic New York baked cheesecake.', { veg: true }],
  ['Nutella Cheesecake', 350, 'Baked cheesecake swirled with Nutella.', { veg: true }],
  ['Biscoff Cheesecake', 350, 'Baked cheesecake with Biscoff.', { veg: true }],
  ['Ice Cream Sundaes', 350, 'Hot chocolate fudge, summer fruits, banana split or cookie monster.', { veg: true, tags: ['Ice Cream'] }],
  ['Cannoli', 320, "OG's special — crisp shells with sweet ricotta.", { veg: true }],
  ['Boozy Tiramisu', 350, "OG's special — tiramisu with a grown-up kick.", { veg: true }],
  ['Chocolate Fondue', 450, "OG's special — warm chocolate fondue to share.", { veg: true, tags: ['Sharing'] }],
  ['Coconut Payasam', 200, 'Rasamama special — Kerala coconut payasam.', { veg: true, tags: ['Kerala'] }],
  ['Badami Halwa', 240, 'Rasamama special — rich almond halwa.', { veg: true, tags: ['Kerala'] }],
  ['Jaggery & Coconut Milk Pudding', 240, 'Rasamama special — jaggery & coconut milk pudding.', { veg: true, tags: ['Kerala'] }],
  ['Kerala Spiced Tiramisu', 350, 'Rasamama special — tiramisu with Kerala spice.', { veg: true, tags: ['Kerala', 'Coffee'] }],
])

export const MENU_ITEMS = [
  ...signatures,
  ...breakfast,
  ...soupsSalads,
  ...antipasti,
  ...smallPlates,
  ...sandwiches,
  ...hotdogs,
  ...tacos,
  ...burgers,
  ...quesadillas,
  ...pasta,
  ...pizza,
  ...grill,
  ...desserts,
]

/* A small, curated set for the Signature highlight band — the brand's own
   marquee dishes. The ambience photo is honest atmosphere, not a dish shot. */
export const SIGNATURE_HIGHLIGHT = {
  eyebrow: 'Chef’s Table',
  title: 'The dishes we’re known for',
  text: 'Our Symphony of Flavours menu is where coastal Indian soul meets the wood-fired oven and the Argentinian grill. Start here.',
  image: photos.tableLampNight,
  imageAlt: 'An intimate lamp-lit table set for the evening at OG’s',
  picks: ['signatures-kongu-risotto', 'signatures-prawn-ravioli', 'signatures-sukka-lamb-chops', 'signatures-kerala-spiced-filter-coffee-tiramisu'],
}

export const MENU_SEO = {
  title: "Menu — OG's Pizza & Grill",
  description:
    "Explore OG's Pizza & Grill menu: wood-fired Neapolitan pizzas, hand-rolled pasta, Argentinian-grill steaks and chops, coastal Indian signatures, and milk-based desserts.",
}
