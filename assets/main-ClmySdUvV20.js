(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=(e,t=`/reservations/`)=>({menuPanels:[
/* ---------------- PANEL 1: A LA CARTE ---------------- */
/* ============================================================
   EMBER ON TOORAAK - MENU UPDATE v2 (from PDFs dated Sep 29)
   Same instructions as before:

   1) In menuPanels, replace the whole `{id:`alacarte`, ...}` object
      with PANEL 1 below, and the whole `{id:`lunch`, ...}` object
      with PANEL 2 below.

   2) Image map key stays "Signature Snacks" (already renamed last time).
      No other key renames needed for this update.

   3) Bump the ?v= number on your <script> tag in index.html so the
      cached JS updates for regular browsers (see earlier explanation).

   FLAGGED — please confirm, I could not find these in the PDF:
   - "Grilled Little Gem (VG, GF)" is a NEW item on the Lunch menu
     (Small To Share). No price was printed on the page for it —
     I've left it blank ($--) below. Tell me the price and I'll fill it in.
   - A few Lunch mains changed their side description (e.g. "Wagyu Rump
     200g MB5+", "Herb Crumbed Snapper") but the PDF didn't reprint a
     price next to them this time, so I kept their previous price
     ($39 and $42 respectively). Worth double-checking against the
     actual menu in case those also changed.
   ============================================================ */


/* ---------------- PANEL 1: A LA CARTE ---------------- */
{id:`alacarte`,label:`A La Carte`,title:`A La Carte Menu`,intro:`Fire-led dining with a relaxed, generous pace. Share oysters, handmade pasta, charred sides, steaks from the grill, and desserts made for the last glass at the table.`,actions:[[`Reserve your table`,t],[`Drinks pairing`,`/drinks/`]],images:[e.oysters,e.lobster,e.spread],categories:[

{title:`Signature Snacks`,items:[
[`Grilled Honey Fig (VG, VO)`,`Stracciatella, pinenuts tarator, basil, vincotto, extra virgin olive oil, focaccia fingers`,`$9.50`],
[`Short Ribs Croquette`,`Gentlemen's relish`,`$10`]
],subsections:[
{title:`Wagyu Charcuterie`,intro:`Served with house pickles`,items:[
[`Mayura 'Signature' MB9+ Bresaola (GF)`,`Wagyu charcuterie, served with house pickles`,`$18`],
[`Mayura 'Signature' Wagyu Salami (GF)`,`Wagyu charcuterie, served with house pickles`,`$16`]
]}
]},

{title:`Raw`,items:[
[`Appellation Oysters (GF)`,`From the east coast of Australia. Yuzu dressing / Spicy tabasco`,`Half dozen $39 | Full dozen $74`],
[`Yellowtail Kingfish (GF)`,`Citrus & settler dressing, pickle radish, garlic creme fraiche, shallots, chilli`,`$29`],
[`Wagyu Beef Tartare (GF)`,`Mayura wagyu MB7+, tartare dressing, free range yolk, crispy potato, herbs`,`$32`]]},
{title:`Starters`,items:[
[`Ember's Brioche (VG)`,`Smoked honey, vincotto butter, seasalt`,`$15`],
[`Lightly Fried Calamari (GFO)`,`Yuzu mayo, herbs, lemon`,`$19`],
[`Charred Octopus (GF)`,`Fresh tomato, Aleppo peppers salsa, kaffir lime aioli`,`$32`],
[`Wagyu Rib Cap Skewer (GF)`,`BBQ glaze, romesco sauce, jalapeno verde, kimchi`,`$34`],
[`Grilled King Prawns (GFO)`,`Kampot pepper butter, grilled focaccia bread`,`$32`],
[`Grilled Hokkaido Scallops (GF)`,`Adobo butter, parsley`,`$32`],
[`Roasted Beetroot (VG, VO, GF)`,`Stracciatella, caramelised grapes, walnuts, grapefruit vinaigrette`,`$26`]]},
{title:`Mains From The Ember`,note:`Finished on Hibachi grill`,items:[
[`Flamed Chicken (GFO)`,`Fermented chilli glaze, green harissa, rosemary potato`,`$42`],
[`Gundagai Lamb (GF)`,`Open flamed cutlets, creamy mash, lemon & herb glaze, chimichuri`,`$56`],
[`Slow Roasted Angus Short Rib (GF)`,`Date relish, kale, rosemary potato, charred onion, puffed quinoa, red wine jus`,`$59`],
[`Murray Cod (GF)`,`Baby potato, asparagus, heirloom tomato, shallots, laksa sauce & crispy curry leaves`,`$48`],
[`Wagyu Meat & Bone Marrow Burger (GFO)`,`Pickled cucumber, crispy onions, bacon jam, burger sauce, melted cheese, toasted brioche bun, fried potato`,`$39`],
[`Pork Ribeye (GF)`,`Caramelised apple, broad beans, shallots, red wine jus`,`$56`]]},
{title:`Pastas & Risottos`,items:[
[`Goat Cheese Tortellini (VG)`,`Brown butter, sage, raisin compote, hazelnut, aged parmesan`,`$42`],
[`Hand Rolled Gnocchi (VG)`,`Truffle & sage cream, roasted Jerusalem artichoke, heirloom tomatoes, hazelnuts, pecorino`,`$44`],
[`Blue Spanner Crab Risotto (GF)`,`Southern crayfish bisque, prawn meat, smoked scamorza, chives, roasted cherry tomato, extra virgin olive oil`,`$46`],
[`Lobster Linguine (GFO)`,`Half lobster, prawn, scallops, calamari, confit cherry tomato, dill, hint of chilli, bisque reduction`,`$59`]]},
{title:`O'Connor Steaks`,note:`Premium Australian beef from East Gippsland, Victoria. Grain fed 240 days. All steaks are finished over the Hibachi charcoal grill with our umami house signature basting. Served with your choice of rosemary potato or house salad.`,items:[
[`Eye Fillet 200g MB2+`,`Recommended medium rare.`,`$64`],
[`Striploin 350g MB2+`,`Recommended medium rare / medium.`,`$67`],
[`Scotch Fillet 350g`,`Recommended medium.`,`$79`],
[`T-Bone 800g MB3+`,`Recommended medium rare / medium.`,`$99`],
[`Rib-Eye 400g MB2+`,`Recommended medium.`,`$89`]]},
{title:`Westholme Wagyu`,note:`Premium Australian Wagyu from Queensland's Gulf Country. Grain fed 450 days. Served with your choice of rosemary potato or house salad.`,items:[
[`Striploin 300g MB5+`,`Recommended medium rare / medium.`,`$89`],
[`Scotch Fillet 300g MB5+`,`Recommended medium rare.`,`$94`]]},
{title:`Dry Aged`,note:`O'Connor, butter aged. From the heart of East Gippsland, Victoria.`,items:[
[`Prime Rib-Eye 600g MB4+`,`Grassfed. Recommended medium.`,`$156`],
[`Striploin On The Bone 400g MB4+`,`Grainfed. Recommended medium rare.`,`$82`]]},
{title:`Sharing Steaks`,note:`Built for the centre of the table. Larger cuts hold heat beautifully, carve cleanly and turn dinner into a slower, more generous steakhouse experience.`,items:[
[`O'Connor Tomahawk 1.3kg MB3+`,`Serves two. Served with rosemary potato, house salad, brussels sprouts & choice of two sauces. Recommended medium rare / medium.`,`$219`],
[`Ember's Feast`,`Serves two. Slow roasted Angus short rib (GF), Wagyu Rump (200 g), flamed chicken (GFO), Gundagai lamb (GF). Served with rosemary potato, house salad & choice of one sauce.`,`$179`]]},
{title:`Ember's Feast`,note:`Serves two.`,items:[
[``,`Slow roasted Angus short rib (GF), Wagyu Rump (200 g), flamed chicken (GFO), Gundagai lamb (GF). Served with rosemary potato, house salad & choice of one sauce.`,`$179`]]},
{title:`Sauces`,items:[
[`Creamy Mushroom`,``,`$5`],
[`Garlic & Herb Butter (GF)`,``,`$4`],
[`Fermented Chilli (GF)`,``,`$6`],
[`Chimichurri (GF)`,``,`$6`],
[`Red Wine Jus`,``,`$7`],
[`Peppercorn`,``,`$5`],
[`Béarnaise`,``,`$5`],
[`Truffle Aioli`,``,`$4`]]},
{title:`Favourite Sides`,items:[
[`Brussels Sprouts (VG, VO, GF)`,`Brown butter, honey mustard dressing, shallots, pomegranate`,`$18`],
[`Asparagus (VG, GFO)`,`Bernaise sauce, caper crumbs`,`$18`],
[`Charred Sprouting Cauliflower (VG, GF)`,`Fermented chilli butter, almonds`,`$17`],
[`Charred Harissa Carrot (VG, GF)`,`Chopped Macademia`,`$17`],
[`Little Gem Salad (VG, GF)`,`Charred cos, pistachio dressing, herbs & pickles`,`$17`],
[`Truffle Potato (GF)`,`Truffle salt, parmesan cheese, truffle aioli`,`$16`],
[`Ember's Creamy Mash (GF)`,`Brown butter, cheese crumb`,`$16`]]},
{title:`Desserts`,items:[
[`Tiramisu`,`A rich fusion of espresso-soaked sponge, creamy mascarpone, grated chocolate & honeycomb`,`$19`],
[`Sticky Date Pudding`,`Dulce de leche cream, macadamia praline & cinnamon creme anglaise, salted caramel ice cream`,`$22`],
[`Basque Cheesecake (GF)`,`Vanilla cream, macerated cherries`,`$22`],
[`Duo Of Sorbet (V, GF)`,`Blood orange / green apple, passion fruit pulp`,`$13`]]},
{title:`Our Little Guests`,items:[
[`Wagyu Burger (GFO)`,`Served with fried potato`,`$19`],
[`Gnocchi (VG)`,`Sage cream, parmesan`,`$16`],
[`Calamari (GFO)`,`Served with fried potato`,`$16`]]}
]},




/* ---------------- PANEL 2: SET ---------------- */

{id:`set`,label:`Ember Experience`,navLabel:`Set Menu`,title:`Ember Experience Menu`,price:`$95 per person`,intro:`A shared menu for long lunches, intimate dinners and group dining. Choose one entree, one main and one dessert.`,actions:[[`Reserve your table`,t],[`Explore experience`,`/experience/`]],images:[e.spread,e.chicken,e.steak],categories:[{title:`Entree`,note:`Choice of one`,items:[[`Sydney Rock Oysters (GF) 4 pcs`,`Merimbula, NSW, Champagne mignonette`,``],[`Wagyu Short Rib Croquettes`,`Gentlemen's relish, Davidson plum, parmesan`,``],[`Heirloom Beetroots (VG, VO, GFO)`,`Burnt honey, goat's curd, walnut, tapioca crisps`,``],[`Crispy Calamari`,`Yuzu aioli, shaved fennel and cucumber`,``]]},{title:`Mains`,note:`Choice of one`,items:[[`Coal-Roasted Chicken (GFO)`,`Lime and coconut laksa, grilled pita bread, crispy curry leaves`,``],[`Goat Cheese Tortellini (VG)`,`Brown butter, sage, sultanas, hazelnut, aged parmesan`,``],[`Braised Lamb Gnocchi`,`Butter fried gnocchi, slow braised lamb ragu, gremolata, parmesan cheese`,``],[`Wagyu Rump 250g MB5+ (GF)`,`Recommended medium rare / medium`,``],[`O'Connor Striploin 350g MB2+ (GF)`,`Recommended medium rare / medium`,``],[`Swordfish Skewer (GF)`,`Capsicum and fennel piperade, olives, dill, capers and chives`,``]]},{title:`Desserts`,note:`Choice of one`,items:[[`Sticky Date Pudding`,`Salted caramel ice cream, caramel sauce, macadamia praline and cinnamon creme anglaise`,``],[`Duo Of Sorbet (V, GF)`,`Blood orange or mango, berries`,``]]}]},

/* ---------------- PANEL 2: LUNCH ---------------- */
/* ---------------- PANEL 2: LUNCH ---------------- */
{id:`lunch`,label:`Lunch`,title:`Lunch Menu`,intro:`Monday to Friday, 11:00 AM - 3:00 PM. Not available on Saturday, Sunday or public holidays. Feed Me is served with a glass of carefully chosen house wine, beer or soft drink.`,price:`Mains with house drink $44 | Two courses with house drink $52 | Three courses with house drink $58`,actions:[[`Reserve lunch`,t],[`A la carte`,`/menus/a-la-carte/`]],images:[e.dining,e.pasta,e.chicken],categories:[
{title:`Small To Share`,items:[
[`Ember's Brioche (VG)`,`Smoked honey, vincotto butter, seasalt`,`$15`],
[`Lightly Fried Calamari (GFO)`,`Yuzu mayo, herbs, lemon`,`$19`],
[`Grilled Honey Fig (VG, VO) - 2 pcs`,`Stracciatella, pinenuts tarator, basil, vincotto, extra virgin olive oil, focaccia fingers`,`$18`],
[`Appellation Oysters (GF)`,`From the east coast of Australia. Champagne vinaigrette`,`$6.50 ea`],
[`Short Ribs Croquette - 2 pcs`,`Gentlemen's relish`,`$19`],
[`Grilled Little Gem (VG, GF)`,`Charred cos, pistachio dressing, herbs & pickles`,`$--`]]},
{title:`Mains`,items:[
[`Flamed Chicken (GFO)`,`Fermented chilli glaze, green harissa, rosemary potato`,`$42`],
[`Slow Cooked Beef Cheek (GF)`,`Creamy potato mash, honey glazed carrot, kale, crispy onion, chimichurri, red wine jus`,`$42`],
[`Wagyu Rump 200g MB5+ (GF)`,`Basted in house signature basting, served with your choice of a side: rosemary potato or house salad`,`$39`],
[`Wagyu Meat & Bone Marrow Burger (GFO)`,`Pickled cucumber, crispy onions, bacon jam, burger sauce, melted cheese, toasted brioche bun, fried potato`,`$39`],
[`Herb Crumbed Snapper`,`Yuzu aioli, crispy capers, lemon, choice of rosemary potato or house salad`,`$42`],
[`Classic Caesar Salad (GFO)`,`Cos lettuce, bacon, anchovies, garlic croutons, parmesan cheese, tossed with creamy caesar dressing and soft boiled egg. Add chicken $6`,`$32`],
[`Goat Cheese Tortellini (VG)`,`Brown butter, sage, sultanas, hazelnut, aged parmesan`,`$42`],
[`Seafood Linguine (GFO)`,`Sauteed tiger prawn meat, calamari, lobster bisque, cherry tomatoes, capers, garlic, touch of chilli`,`$42`],
[`Hand Rolled Gnocchi (VG)`,`Truffle & sage cream, roasted Jerusalem artichoke, heirloom tomatoes, hazelnuts, pecorino`,`$44`],
[`Linguine Vongole`,`Squid ink linguine, fresh clams, garlic, shallots, parsley, roasted cherry tomatoes, chilli, basil, white wine & extra virgin olive oil`,`$36`],
[`King Prawn Risotto`,`Prawn meat, crayfish bisque, chives, smoked scamorza, roasted cherry tomato, extra virgin olive oil`,`$36`]]},
{title:`Desserts`,note:`Choose one`,items:[
[`Sticky Date Pudding`,`Dulce de leche cream, macadamia praline & cinnamon creme anglaise, salted caramel ice cream`,``],
[`Duo Of Sorbet (V, GF)`,`Blood orange / green apple, passion fruit pulp`,``]]}
]},

{id:`drinks`,label:`Drinks`,title:`Drinks List`,intro:`Cocktails, martinis, mocktails, beer, cider, soft drinks, hot drinks and spirits from the bar. Wine by the glass and wine by the bottle live in their own cellar list.`,actions:[[`Book at the bar`,t],[`Wine list`,`/wine-list/`]],images:[e.cocktail,e.wine,e.oysters],categories:[{title:`Aperitifs / Digestifs Cocktails`,items:[[`Ember Spritz`,`Sparkling wine, Marionette Bitter, Autonomy Davo plum and house-made bergamot syrup`,`$18`],[`Clarified Alexander`,`Brandy, Ruby Port, lemon juice, citrus, demerara syrup and creme de cacao`,`$20`],[`Amaro Saluto`,`Montenegro, apricot, orgeat and freshly squeezed lime juice`,`$21`]]},{title:`Signature Cocktails`,items:[[`Fig and Lime Daiquiri`,`Bacardi, fig liqueur, freshly squeezed lime juice and simple syrup`,`$21`],[`White Beauty`,`Absolut Vodka, Yuzu Shu, Cointreau, Chardonnay verjus and Wonderfoam`,`$21`],[`Mezcal Margarita`,`Tequila, mezcal, house-made watermelon cordial, citrus and simple syrup`,`$21`],[`Winter Bloom`,`House dry gin, house ginger and honey cordial, citrus and simple syrup`,`$20`],[`Clarified New York Sour`,`House whiskey, freshly squeezed lemon juice, lactic acid, Shiraz, citrus and simple syrup`,`$20`]]},{title:`Barrel Cocktails`,items:[[`Charred and Smoked Old Fashioned`,`Whiskey, wattle seed, macadamia and French oak wood chips`,`$28`],[`Embers Aged Negroni`,`Dry gin, Antica Formula and Campari`,`$21`]]},{title:`Chilled Martini`,items:[[`Denver's Martini`,`Dry gin, fruit and herbs Sgroppino, basil oil`,`$21`]]},{title:`Non-Alcoholic Mocktails`,note:`Add any house spirit and make it a cocktail for $7.`,items:[[`Floral Garden`,`Seedlip Garden, house-made cordial, apple juice and Wonderfoam`,`$16`],[`Pineapple Sour`,`Sustainable orange cordial, citrus, pineapple juice, Angostura Bitters and lemonade`,`$14`],[`Watermelon Spritz`,`House watermelon cordial, raspberry syrup, citrus and soda water`,`$14`]]},{title:`Beer`,items:[[`Great Northern`,``,`$12`],[`Peroni`,``,`$13`],[`Corona`,``,`$12`],[`Cascade Light`,``,`$12`],[`Carlton Draught`,``,`$13`],[`Little Creatures`,``,`$12`],[`VB`,``,`$13`],[`Obrien Gluten Free Lager`,``,`$14`]]},{title:`Cider, Tap Beer & Non-Alcoholic`,items:[[`Hillbilly Crushed Apple Cider`,``,`$13`],[`Hillbilly Crushed Pear Cider`,``,`$13`],[`Heaps Normal`,``,`$12`],[`Moo Brew Pilsner`,`425 ml, Tasmania, Australia`,`$14`],[`Coopers Pale Ale`,`425 ml, Adelaide, South Australia`,`$15`]]},{title:`Soft Drinks`,items:[[`Coca Cola / Coke No Sugar / Sprite / Fanta`,``,`$6`],[`Dry Ginger Ale / Tonic Water / Soda Water`,``,`$6.50`],[`Apple Juice / Orange Juice / Cranberry Juice / Pineapple Juice`,`Kids $4`,`$7`],[`Iced Chocolate / Iced Coffee / Iced Mocha`,``,`$8.50`]]},{title:`Hot Drinks`,items:[[`Short Macchiato`,``,`$4`],[`Long Macchiato`,``,`$5`],[`Espresso`,``,`$4`],[`Long Black`,``,`$5`],[`Piccolo`,``,`$4`],[`Latte / Cappuccino / Flat White`,`Extra shot, decaf or mocha +$0.50`,`$5.50`],[`Hot Chocolate`,``,`$5`],[`Spiced Chai (Powder)`,``,`$6`],[`Affogato`,`Add favourite liqueur: Baileys, Kahlua or Frangelico +$8`,`$7`]]},{title:`Vodka`,items:[[`Absolut Vodka`,``,`$14`],[`Grey Goose Vodka`,``,`$16`],[`Hartshorn Sheep Whey Vodka`,`Tasmania`,`$18`]]},{title:`Gin`,items:[[`Archie Rose 'Signature Dry' Gin`,`Rosebery`,`$13`],[`Melbourne Gin Company 'Dry'`,`Gembrook Hill`,`$14`],[`Four Pillars`,``,`$14`],[`Tanqueray Gin`,`London`,`$14`],[`Patient Wolf Dry Gin`,``,`$15`],[`Hendrick's`,`Scotland`,`$15`],[`Bombay Sapphire`,`London`,`$15`],[`Four Pillars 'Bloody Shiraz'`,`Healesville`,`$15`],[`Plymouth Sloe Gin`,``,`$15`],[`Gordon's Pink Gin`,``,`$15`]]},{title:`Bourbon, Whisky & Cognac`,items:[[`Jim Beam`,``,`$13`],[`Jack Daniels`,``,`$14`],[`Woodford Reserve`,``,`$14`],[`Makers Mark`,``,`$14`],[`Eagle Rare 10 Years Old Bourbon`,``,`$16`],[`Johnnie Walker Red Label`,``,`$13`],[`Johnnie Walker 12 Black Label`,``,`$14`],[`Canadian Club`,``,`$14`],[`Jameson Irish Whiskey`,``,`$14`],[`Singleton Malt Master Whiskey`,``,`$14`],[`Morris Signature Single Malt`,`Rutherglen`,`$14`],[`Monkey Shoulder Blended Malt`,``,`$14`],[`Starward Two-Fold Double Grain Whiskey`,`Melbourne`,`$15`],[`Gospel Solera Rye Whiskey`,``,`$15`],[`Glenfiddich 12 Years Old`,``,`$16`],[`Laphroaig 10 Years Old`,``,`$18`],[`Macallan 12 Years Old`,``,`$20`],[`Lark Distillery Symphony`,``,`$22`],[`Johnnie Walker Blue Label`,``,`$35`],[`Nikka From The Barrel`,``,`$18`],[`Hibiki Harmony`,``,`$28`],[`St Agnes VS Brandy`,``,`$13`],[`Hennessy VS`,``,`$14`],[`Martell VSOP`,``,`$16`],[`Hennessy XO`,``,`$38`]]},{title:`Rum, Tequila & Mezcal`,items:[[`Bacardi`,``,`$13`],[`Diplomatico Planas Rum`,``,`$14`],[`Bundaberg Rum`,``,`$12`],[`Captain Morgan Spiced Rum`,``,`$14`],[`Flor de Cana 12 Years Old Centenario`,``,`$16`],[`El Jimador`,``,`$14`],[`Don Julio Blanco`,``,`$14`],[`Don Julio Reposado`,``,`$14`],[`1800 Tequila Coconut`,``,`$14`],[`Metoro Mezcal`,``,`$15`],[`Del Maguey Mezcal Vida`,``,`$16`],[`Fortaleza Tequila Blanco`,``,`$18`],[`Clase Azul Reposado`,``,`$38`]]},{title:`Amaro, Bitters & Liqueurs`,items:[[`Martini Rosso`,``,`$12`],[`Aperol`,``,`$12`],[`Campari`,``,`$12`],[`Autonomy Davo Plum Aperitivo`,``,`$12`],[`Montenegro`,``,`$12`],[`Ramazotti Amaro`,``,`$13`],[`Averna`,``,`$14`],[`Braulio Amaro`,``,`$14`],[`Fernet Branca`,``,`$14`],[`Cointreau`,``,`$14`],[`Chambord`,``,`$14`],[`Baileys`,``,`$12`],[`Kahlua`,``,`$12`],[`Triple Sec`,``,`$12`],[`Drambuie`,``,`$14`],[`Frangelico`,``,`$14`],[`Brookies Mac`,``,`$13`],[`Luxardo Maraschino`,``,`$14`],[`VOK Blue Curacao`,``,`$12`],[`Malibu`,``,`$12`],[`Midori`,``,`$12`],[`Jagermeister`,``,`$13`],[`Disaronno Amaretto`,``,`$12`],[`Marionette Apricot Brandy`,``,`$12`],[`White Possum Dark Cacao Liqueur`,``,`$12`]]}]}],setMenuTwoPanel:{id:`setUltimate`,label:`Ultimate Dining`,title:`Ember Ultimate Dining Experience`,price:`$110 per person`,intro:`A broader shared menu with oysters, Hokkaido scallops, charcoal chicken, O'Connor beef and flame-led mains.`,actions:[[`Reserve your table`,t],[`Ask about groups`,`/contact/`]],images:[e.spread,e.scallops,e.beef,e.chicken],categories:[{title:`Entree`,note:`Choice of one`,items:[[`Sydney Rock Oysters (GF) 4 pcs`,`Merimbula, NSW, Champagne mignonette`,``],[`Grilled Hokkaido Scallops (GF)`,`Adobo butter, parsley`,``],[`Chicken Skewers (GF)`,`Coal roasted chicken thigh fillets, hot sauce, furikake, crispy shallots, spring onion`,``],[`Heirloom Beetroots (VG, VO, GFO)`,`Burnt honey, goat's curd, walnut, tapioca crisps`,``],[`Crispy Calamari`,`Yuzu aioli, shaved fennel and cucumber`,``]]},{title:`Mains`,note:`Choice of one`,items:[[`Coal-Roasted Chicken (GFO)`,`Lime and coconut laksa, grilled pita bread, crispy curry leaves`,``],[`Goat Cheese Tortellini (VG)`,`Brown butter, sage, sultanas, hazelnut, aged parmesan`,``],[`Gundagai Lamb (GF)`,`Marinated lamb rack, chimichurri, creamy mash, red wine jus`,``],[`Swordfish Skewer (GF)`,`Capsicum and fennel piperade, olives, dill, capers and chives`,``],[`O'Connor Striploin 350g MB2+ (GF)`,`Recommended medium rare / medium`,``],[`O'Connor Scotch Fillet 350g MB2+ (GF)`,`Recommended medium`,``]]},{title:`Desserts`,note:`Choice of one`,items:[[`Dark Chocolate Delice`,`Dulce de leche, raspberry compote, hazelnut crisp, peanut butter gelato`,``],[`Sticky Date Pudding`,`Salted caramel ice cream, caramel sauce, macadamia praline and cinnamon creme anglaise`,``]]}]},wineByGlassCategories:[{title:`Rose & Sparkling`,items:[[`2024 La Galope Rose`,`Cotes de Gascogne, South West France`,`$16`],[`2025 Bandini Prosecco`,`Veneto, Italy`,`$15`],[`Champagne Taittinger Brut Reserve`,`Reims, Champagne, France`,`$28`]]},{title:`Whites`,items:[[`2025 Catalina Sounds Sauvignon Blanc`,`Marlborough, New Zealand`,`$16`],[`2023 Coeur des Sages Macon Village Chardonnay`,`Southern Burgundy, France`,`$18`],[`2025 Fiano Tellurian`,`Heathcote, Victoria, Australia`,`$16`],[`2025 Maude Pinot Gris`,`Central Otago, New Zealand`,`$16`]]},{title:`Reds`,items:[[`2023 Indigo Vineyard Pinot Noir`,`Beechworth, Victoria, Australia`,`$18`],[`2023 Moppity Atrius Tempranillo`,`Hilltops, NSW`,`$16`],[`2023 Seppeltsfield Shiraz`,`Barossa Valley, South Australia`,`$18`],[`2022 Pennys Hill Cab Sav Edwards Road`,`McLaren Vale, South Australia`,`$18`]]},{title:`Sweet & Fortified`,note:`Served 90 ml.`,items:[[`2025 Maxwell Spiced Mead`,`McLaren Vale, South Australia`,`$14`],[`2025 Rutherglen Muscadelle Topaque`,`Rutherglen, Victoria, Australia`,`$14`],[`2025 Rutherglen Tawny`,`Rutherglen, Victoria, Australia`,`$14`]]}],wineBottleCategories:[{title:`Sparkling & Champagnes`,items:[[`2023 Copabella Single Vineyard Prosecco`,`Tumbarumba Region, New South Wales`,`$75`],[`Bandini Prosecco`,`Veneto, Italy`,`$85`],[`Tar & Roses Prosecco`,`King Valley, Victoria`,`$85`],[`Andre de Lorme Sparkling Blanc de Blancs`,`Burgundy, France`,`$85`],[`Balgownie Brut`,`Yarra Valley, Victoria`,`$85`],[`Coeur des Sages 'Le Joueur' Blanc de Blancs Brut`,`Burgundy, France`,`$110`],[`Patrick Piuze Traditional Method Blanc de Blancs`,`Burgundy, France`,`$130`],[`Champagne Taittinger Brut Reserve`,`Reims, Champagne, France`,`$165`],[`Champagne Louis Roederer Brut Vintage`,`Champagne, France`,`$390`]]},{title:`Rose`,items:[[`2024 La Galope Rose`,`Gascony, South West France`,`$80`],[`Non-Vintage Bistrologie Rose`,`Languedoc, France`,`$80`],[`2025 Woodstock Rose 'Run Free'`,`McLaren Vale, South Australia`,`$90`],[`2025 Rameau d'Or Rose`,`Cotes de Provence, France`,`$105`]]},{title:`Sauvignon Blanc`,items:[[`2025 Catalina Sounds Sauvignon Blanc`,`Marlborough, New Zealand`,`$75`],[`2024 Jules Taylor Sauvignon Blanc`,`Marlborough, New Zealand`,`$80`],[`2022 Barringwood Sauvignon Blanc`,`Tasmania, Australia`,`$90`],[`2024 Cullen Elvie Clarke Sauvignon Blanc`,`Margaret River, Western Australia`,`$120`]]},{title:`Pinot Gris / Grigio`,items:[[`2025 Maude Pinot Gris`,`Central Otago, New Zealand`,`$75`],[`2025 Indigo Vineyard Blue Label Pinot Grigio`,`Beechworth, Victoria`,`$80`],[`2024 Tar & Roses Pinot Grigio`,`Central Victoria, Australia`,`$85`],[`2022 Il Casato Pinot Grigio`,`Trentino-Alto Adige / Valdadige DOC, Northern Italy`,`$95`],[`2025 Shadowfax Macedon Pinot Gris`,`Macedon Ranges, Victoria`,`$110`],[`2022 Jos Meyer Pinot Gris Le Fromenteau`,`Alsace, France`,`$140`]]},{title:`Riesling`,items:[[`2019 Seville Estate Riesling`,`Upper Yarra Valley, Victoria, Australia`,`$80`],[`2023 Weingut Huls Riesling`,`Mosel, Germany`,`$95`],[`2023 Staffelter Hof Magnus Riesling`,`Mosel, Germany`,`$120`],[`2021 Joseph Cattin Hatchbourg Grand Cru Riesling`,`Alsace, France`,`$190`]]},{title:`Chardonnay`,items:[[`2025 Singlefile Chardonnay`,`Great Southern, Western Australia`,`$80`],[`2024 Indigo Umpires Decision Chardonnay`,`Beechworth, Victoria, Australia`,`$90`],[`2023 Indigo Vineyard Secret Village Series Chardonnay`,`Beechworth, Victoria, Australia`,`$105`],[`2024 Luna Estate Single Vineyard Chardonnay Eclipse`,`Martinborough, New Zealand`,`$110`],[`2022 Santolin Single Vineyard Chardonnay`,`Yarra Valley, Victoria, Australia`,`$120`],[`2024 Holmes Oak Chardonnay`,`Tamar Valley, Tasmania`,`$125`],[`2025 Singlefile Family Reserve Chardonnay`,`Great Southern, Western Australia`,`$130`],[`2024 Giant Steps Circle of Fifths Chardonnay`,`Yarra Valley, Victoria, Australia`,`$140`],[`2025 Shaw + Smith M3 Chardonnay`,`Adelaide Hills, South Australia`,`$160`],[`2024 Dexter Chardonnay`,`Mornington Peninsula, Victoria, Australia`,`$160`],[`2024 Holmes Oak Wizard Chardonnay`,`Tamar Valley, Tasmania`,`$180`],[`2022 Shadowfax Mid Hill Chardonnay`,`Macedon Ranges, Victoria, Australia`,`$190`],[`2024 Shaw + Smith M3 Chardonnay Magnum`,`Adelaide Hills, South Australia`,`$320`]]},{title:`Old World Chardonnay / Chablis`,items:[[`2023 Coeur des Sages Macon Villages Chardonnay`,`Burgundy, France`,`$90`],[`2023 Dans Air du Temps Chardonnay`,`Languedoc-Roussillon, France`,`$120`],[`2023 Millebuis Bourgogne Cote Chalonnaise`,`South Burgundy, France`,`$140`],[`2023 Chateau de Maligny Petit Chablis`,`Chablis, Burgundy, France`,`$160`],[`2024 Domaine Laroche Chablis St Martin`,`Chablis, Burgundy, France`,`$180`],[`2022 Bouchard Pere & Fils Beaune du Chateau Blanc Premier Cru`,`Cote de Beaune, Burgundy, France`,`$290`]]},{title:`White Varietals`,items:[[`2025 Fiano Tellurian`,`Heathcote, Victoria, Australia`,`$75`],[`2024 Hahndorf Hill Gruner Veltliner Gru`,`Hahndorf, Adelaide Hills, South Australia`,`$75`],[`2025 First Creek Semillon`,`Hunter Valley, NSW, Australia`,`$80`],[`2024 Tellurian Estate Marsanne`,`Heathcote, Victoria, Australia`,`$85`],[`2024 Jules Taylor Gruner Veltliner`,`Marlborough, New Zealand`,`$90`],[`2022 Cantina di Soave Soave Lorenzo Classico DOC`,`Veneto, Italy`,`$90`],[`2023 Moppity Block Gewurztraminer Block C11B`,`Tumbarumba, New South Wales`,`$95`],[`2024 Jerzu Antichi Poderi Telave Vermentino di Sardegna DOC`,`Sardinia, Italy`,`$105`],[`2024 Gomez Cruzado Blanco Rioja DOC`,`La Rioja, Spain`,`$160`]]},{title:`New World Pinot Noir`,items:[[`2023 Indigo Vineyard Pinot Noir`,`Beechworth, Victoria, Australia`,`$85`],[`2021 Luna Estate Eclipse Pinot Noir`,`Martinborough, Wairarapa, New Zealand`,`$90`],[`2025 Domenica Gamay`,`Beechworth, North East Victoria, Australia`,`$100`],[`2021 Merricks Estate Pinot Noir`,`Mornington Peninsula, Victoria, Australia`,`$120`],[`2024 Giant Steps Circle of Fifths Pinot Noir`,`Yarra Valley, Victoria`,`$150`],[`2024 Shaw and Smith Pinot Noir`,`Adelaide Hills, South Australia`,`$160`],[`2024 Yabby Lake Single Vineyard Pinot Noir`,`Mornington Peninsula, Victoria, Australia`,`$210`]]},{title:`Old World Pinot Noir`,items:[[`2024 Reverie Gamay`,`Languedoc-Roussillon, Southern France`,`$90`],[`2023 Coeur des Sages Beaujolais Villages Gamay`,`Beaujolais, France`,`$120`],[`2022 Domaine de la Vougeraie Terre de Famille Pinot Noir`,`Burgundy, France`,`$150`],[`2022 Domaine Bertrand Mercurey Rouge La Pidancerie`,`South Burgundy, France`,`$280`],[`2022 Bouchard Pere & Fils Beaune Teurons Premier Cru`,`Burgundy, France, Cote d'Or`,`$360`]]},{title:`Shiraz`,items:[[`2023 Seppeltsfield Shiraz`,`Barossa Valley, South Australia`,`$85`],[`2022 Eldorado Road Beechworth Syrah`,`Beechworth, Victoria, Australia`,`$90`],[`2024 Two Hands Angels' Share Shiraz`,`McLaren Vale, South Australia`,`$95`],[`2022 Tellurian Tranter Shiraz`,`Heathcote, Victoria, Australia`,`$110`],[`2023 Maxwell Shiraz Ellen Street`,`McLaren Vale, South Australia`,`$110`],[`2020 Seville Estate Shiraz`,`Upper Yarra Valley, Victoria, Australia`,`$130`],[`2023 Delas Freres Saint-Joseph Les Challeys`,`Northern Rhone, France`,`$140`],[`2023 Tomfoolery Black & Blue Shiraz`,`Barossa Valley, Australia`,`$150`],[`2023 Turkey Flat Estate Shiraz`,`Barossa Valley, South Australia`,`$160`],[`2022 Shaw + Smith Shiraz`,`Adelaide Hills, South Australia`,`$160`],[`2023 Henschke Tappa Pass Shiraz`,`Barossa Valley, South Australia`,`$310`]]},{title:`Cabernet Sauvignon`,items:[[`2022 Pennys Hill Edward Road Cabernet Sauvignon`,`McLaren Vale, South Australia`,`$85`],[`2023 Penny's Hill Single Vineyard Cabernet Sauvignon`,`McLaren Vale, South Australia`,`$95`],[`2022 Chateau Carbonneau Verriere Rouge`,`Bordeaux, France`,`$140`],[`2022 Kendall-Jackson Vintner's Reserve Cabernet Sauvignon`,`Sonoma County, California, USA`,`$150`],[`2018 Juniper Wilyabrup Cabernet Sauvignon`,`Wilyabrup, Margaret River, Western Australia`,`$180`],[`2022 Henschke Marble Angel Cabernet Sauvignon`,`Barossa Valley, South Australia`,`$210`]]},{title:`Blend Wines`,items:[[`2023 Moppity Atrius Tempranillo`,`Hilltops, NSW, Australia`,`$85`],[`2023 Clarendon Hills Grenache 'Domaine Clarendon'`,`Blewitt Springs, McLaren Vale, South Australia`,`$85`],[`2022 Moppity Atrius GSM`,`Hilltops, NSW, Australia`,`$90`],[`2022 Bodegas Enguera Megala Monastrell-Tempranillo`,`Valencia, Spain`,`$95`],[`2023 Eldora Road Nero d'Avola / Shiraz / Durif`,`Northeast Victoria, Australia`,`$100`],[`2024 Clos St Jean Vin de Pays Caucluse Rouge`,`IGP Vaucluse, Southern Rhone, France`,`$105`],[`2024 La Boca 'Las Calles' Malbec`,`Uco Valley, Mendoza, Argentina`,`$110`],[`2022 Le Baron de Mallaret`,`Haut-Medoc, Bordeaux, France`,`$110`],[`2025 Woodstock Grenache Townsend`,`McLaren Vale, South Australia`,`$110`],[`2019 Medoc Chateau Loirac Cru Bourgeois`,`Medoc, Bordeaux, France`,`$120`],[`2022 BenMarco Malbec`,`Uco Valley, Mendoza, Argentina`,`$120`],[`2024 Condie Giarracca Sangiovese`,`Heathcote, Central Victoria, Australia`,`$130`],[`2023 Le Ragnaie Il Troncone Sangiovese Toscana IGT`,`Montalcino, Tuscany, Italy`,`$140`],[`2019 Poggio Landi Brunello di Montalcino DOC`,`Tuscany, Italy`,`$170`],[`2022 Chateau Lilian Ladouys`,`Saint-Estephe, Bordeaux, France`,`$190`],[`2023 Bruno Rocca Nebbiolo Langhe Fralu`,`Piedmont, Italy`,`$210`],[`2021 Giovanni Rosso Barolo del Comune di Serralunga d'Alba DOCG`,`Serralunga d'Alba, Piedmont, Italy`,`$290`]]},{title:`Sweet & Fortified`,items:[[`2024 Maxwell Spiced Mead`,`McLaren Vale, South Australia`,`$55`],[`2025 Kismet Moscato`,`Victoria, Australia`,`$65`],[`2025 Rutherglen Tawny`,`Rutherglen, Victoria, Australia`,`$65`],[`2025 Rutherglen Muscadelle Topaque`,`Rutherglen, Victoria, Australia`,`$80`],[`2024 Borgo Maragliano La Caliera Moscato d'Asti DOCG`,`Piedmont, Northwest Italy`,`$95`]]},{title:`Half Bottle Wines`,items:[[`2022 Fringe Societe Pinot Noir Pay's Doc`,`Southwest France`,`$45`],[`2017 Cullen Semillon / Sauvignon Blanc`,`Margaret River, Western Australia`,`$50`],[`2022 Sauternes Le Tertre du Lys d'Or`,`Bordeaux, France`,`$55`],[`2024 Aix - Maison Saint Aix Rose AOP`,`Coteaux d'Aix-en-Provence, France`,`$60`],[`2022 Pressing Matters Riesling R139`,`Coal River Valley, Tasmania`,`$65`],[`2022 Henschke 'Keyneton Euphonium' Shiraz Cabernet Blend`,`Eden Valley and Barossa Valley, South Australia`,`$75`]]}]}),t=e=>`/img/${e}`,n={hero:t(`EMBERTOORAK-WEB-006.jpg`),entry:t(`EMBERTOORAK-WEB-010.jpg`),dining:t(`EMBERTOORAK-WEB-007.jpg`),privateDining:t(`EMBERTOORAK-WEB-005.jpg`),oysters:t(`EMBERTOORAK-WEB-024.jpg`),cocktail:t(`EMBERTOORAK-WEB-044.jpg`),lobster:t(`EMBERTOORAK-WEB-049.jpg`),scallops:t(`EMBERTOORAK-WEB-030.jpg`),grill:t(`EMBERTOORAK-WEB-092.jpg`),steakFlame:t(`EMBERTOORAK-WEB-118.jpg`),spread:t(`EMBERTOORAK-WEB-130.jpg`),pasta:t(`EMBERTOORAK-WEB-145.jpg`),chicken:t(`EMBERTOORAK-WEB-157.jpg`),steak:t(`EMBERTOORAK-WEB-182.jpg`),beef:t(`EMBERTOORAK-WEB-162.jpg`),dessert:t(`EMBERTOORAK-WEB-195.jpg`),wine:t(`EMBERTOORAK-WEB-199.jpg`)},r=[n.privateDining,n.entry,n.dining,n.grill],i={"/":`home`,"/about/":`about`,"/menus/":`menus`,"/menus/a-la-carte/":`alacarte`,"/menus/lunch/":`lunch`,"/menus/set-menu/":`setMenu`,"/drinks/":`drinks`,"/wine-list/":`wineList`,"/experience/":`experience`,"/reservations/":`reservations`,"/contact/":`contact`},a=[[`Home`,`/`],[`About Us`,`/about/`],[`Menus`,`/menus/`],[`Drinks`,`/drinks/`],[`Experience`,`/experience/`],[`Contact`,`/contact/`]],o=[[`A La Carte`,`/menus/a-la-carte/`,`alacarte`],[`Lunch`,`/menus/lunch/`,`lunch`],[`Set Menu`,`/menus/set-menu/`,`set`]],s={address:`Level 1, 32 Jackson St, Toorak VIC 3142`,phone:`+61 3 9191 9973`,email:`embertoorak@gmail.com`},c=`https://www.opentable.com.au/restref/client/?rid=317060&restref=317060&ot_source=Restaurant%20website`,ee=`f1697265-a6b8-47d4-9005-8ace5064edce`,l=encodeURIComponent(s.address),te=`https://www.google.com/maps?q=${l}&output=embed`,ne=`https://www.google.com/maps/search/?api=1&query=${l}`,u=[[`Monday - Thursday`,`11:00 AM - 9:00 PM`],[`Friday - Saturday`,`11:00 AM - 10:00 PM`],[`Sunday`,`11:00 AM - 9:00 PM`]],{menuPanels:d,setMenuTwoPanel:f,wineByGlassCategories:p,wineBottleCategories:m}=e(n,c),h=Object.fromEntries(d.map(e=>[e.id,e])),g=[h.set,f],_={...h.drinks,label:`From the bar`,title:`Cocktails, Spirits & Beer`,intro:`Cocktails, chilled martinis, aperitifs, beer, cider, soft drinks and spirits. The wine list is kept separate so it can breathe like a cellar document.`,actions:[[`Wine list`,`/wine-list/`],[`Book at the bar`,c]],categories:h.drinks.categories};n.wine,n.oysters,n.spread,[...p,...m];var re={id:`wineGlass`,label:`By the glass`,title:`Wine By The Glass`,intro:`Rose, sparkling, Champagne, whites, reds and sweet pours selected for a single glass at the table.`,actions:[],images:[n.wine,n.oysters,n.spread],categories:p},ie={id:`wineBottle`,label:`By the bottles`,title:`Wine By The Bottles`,intro:`Sparkling, Champagne, rose, white, red, sweet and half-bottle selections from the cellar list.`,actions:[],images:[n.wine,n.privateDining,n.spread,n.oysters,n.cocktail],categories:m},v=o.map(([,,e])=>h[e]).filter(Boolean),y=e=>o.find(([,,t])=>t===e)?.[1]||`/menus/`,ae={alacarte:[n.oysters,n.scallops,n.lobster,n.chicken,n.pasta,n.steak,n.steakFlame,n.spread,n.dessert],lunch:[n.dining,n.pasta,n.chicken,n.beef,n.dessert],set:[n.spread,n.chicken,n.steak,n.wine],setUltimate:[n.spread,n.scallops,n.beef,n.chicken],drinks:[n.cocktail,n.wine,n.privateDining],wine:[n.wine,n.oysters,n.spread,n.cocktail,n.privateDining],wineGlass:[n.wine,n.oysters,n.spread],wineBottle:[n.wine,n.privateDining,n.spread,n.oysters,n.cocktail]},b=(e,t=0)=>{let n=ae[e.id]||e.images;return n[t%n.length]},x={alacarte:{Snacks:n.oysters,"Mains From The Ember":n.chicken,"O'Connor Steaks":n.steak,"Westholme Wagyu":n.beef,Desserts:n.dessert},lunch:{"Small To Share":n.pasta,Mains:n.chicken,"Crowd's Favourite":n.beef},set:{Entree:n.spread,Mains:n.chicken},setUltimate:{Entree:n.scallops,Mains:n.beef},drinks:{"Signature Cocktails":n.cocktail,Beer:n.privateDining,"Bourbon, Whisky & Cognac":n.wine},wineGlass:{"Rose & Sparkling":n.wine},wineBottle:{"Sparkling & Champagnes":n.wine,Chardonnay:n.oysters,"New World Pinot Noir":n.privateDining,Shiraz:n.spread}},S=(e,t)=>x[e.id]?.[t.title]||null,C=e=>{if(e.id!==`alacarte`)return e.categories;let t=[];return e.categories.forEach(e=>{if(e.title!==`Steaks`){t.push(e);return}let n=e.items.filter(([e])=>e.startsWith(`O'Connor`)),r=e.items.filter(([e])=>e.includes(`Tomahawk`)),i=e.items.filter(([e])=>e.startsWith(`Westholme`));t.push({title:`O'Connor Steaks`,note:`O'Connor is a Victorian beef producer from Gippsland, selected for pasture-raised character, consistency and a clean finish over the grill. The beef carries depth without heavy handling: sea salt, heat, rest, and the right sauce.`,items:n}),t.push({title:`Sharing Steaks`,note:`Built for the centre of the table. Larger cuts hold heat beautifully, carve cleanly and turn dinner into a slower, more generous steakhouse experience.`,items:r}),t.push({title:`Ember's Feast`,note:`Built for the centre of the table. Larger cuts hold heat beautifully, carve cleanly and turn dinner into a slower, more generous steakhouse experience.`,items:r}),t.push({title:`Westholme Wagyu`,note:`Westholme Wagyu is chosen for marbling, texture and measured richness that still feels balanced beside Ember's sauces and sides.`,items:i})}),t},w=[n.dining,n.entry,n.oysters,n.cocktail,n.grill,n.steakFlame,n.spread,n.pasta,n.chicken,n.steak,n.beef,n.dessert,n.wine,n.privateDining],T=`magnetic inline-flex min-h-12 items-center justify-center border border-[#b88938] px-7 py-3 font-rethink-sans text-sm text-[#f4ead6] transition duration-300 hover:bg-[#b88938] hover:text-[#062218] focus:outline-none focus:ring-2 focus:ring-[#d3aa62] focus:ring-offset-2 focus:ring-offset-[#062218]`,E=`magnetic inline-flex min-h-12 items-center justify-center bg-[#b88938] px-8 py-3 font-rethink-sans text-sm text-[#061d15] transition duration-300 hover:bg-[#d4a24f] focus:outline-none focus:ring-2 focus:ring-[#d3aa62] focus:ring-offset-2 focus:ring-offset-[#061d15]`,oe=`magnetic inline-flex min-h-12 items-center justify-center border border-[#b88938]/70 px-8 py-3 font-rethink-sans text-sm text-[#f4ead6] transition duration-300 hover:bg-[#b88938] hover:text-[#061d15]`,D=`font-rethink-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4a24f] sm:text-xs`,O=()=>{let e=window.location.pathname;return i[e]?e:!e.endsWith(`/`)&&i[`${e}/`]?`${e}/`:`/`},k=(e,t=`h-5 w-5`)=>`<svg class="${t}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${{instagram:`
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
    `,phone:`Snacks
      <path d="M6.8 4.5 9 3.5l3 5.1-1.9 1.4c.8 1.8 2.2 3.2 4 4l1.4-1.9 5.1 3-1 2.2c-.5 1.1-1.7 1.8-2.9 1.5C9.5 17.6 4.4 12.5 3.2 6.3 3 5.1 3.7 4.9 4.8 4.5h2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
    `,mail:`
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" stroke-width="1.8"/>
      <path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    `,map:`
      <path d="M12 21s7-5.5 7-12A7 7 0 1 0 5 9c0 6.5 7 12 7 12Z" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" stroke-width="1.8"/>
    `,menu:`
      <path d="M5 8h14M5 12h14M5 16h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    `,arrow:`
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    `,chevron:`
      <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    `}[e]}</svg>`,A=(e=``)=>`
  <a href="/" class="inline-flex h-20 w-20 items-center justify-center p-2 sm:h-24 sm:w-24 ${e}" aria-label="Home">
    <img class="h-full w-full object-contain" src="/ember-logo.png" alt="Ember on Toorak">
  </a>
`,j=()=>`
  <a href="/" class="inline-flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32" aria-label="Home">
    <img class="h-full w-full object-contain" src="/ember-logo.png" alt="Ember on Toorak">
  </a>
`,M=(e=``)=>`
  <span class="flex h-12 w-12 items-start justify-center overflow-hidden ${e}" aria-hidden="true">
    <img class="h-[4.5rem] w-[4.5rem] object-contain opacity-90 drop-shadow-[0_0_18px_rgba(212,162,79,0.18)]" src="/ember-logo.png" alt="">
  </span>
`,N=(e=!1)=>a.map(([t,n])=>t===`Menus`?e?`
            <div class="border-y border-white/10 py-3">
              <a class="nav-link block text-lg font-rethink-sans text-[#f7eddc] underline-offset-8 transition hover:text-[#d4a24f] hover:underline" href="${n}" data-path="${n}">Menus</a>
              <div class="mt-3 grid gap-2 pl-4">
                ${o.map(([e,t])=>`<a class="block py-1 font-rethink-sans text-sm text-[#d4a24f] underline-offset-4 transition hover:text-[#f7eddc] hover:underline" href="${t}">${e}</a>`).join(``)}
              </div>
            </div>
          `:`
          <div class="group relative">
            <a class="nav-link inline-flex items-center gap-1 text-sm font-rethink-sans text-[#f7eddc] underline-offset-8 transition hover:text-[#d4a24f] hover:underline" href="${n}" data-path="${n}">
              Menus ${k(`chevron`,`h-4 w-4`)}
            </a>
            <div class="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div class="border border-[#b88938]/40 bg-[#061d15]/95 p-2 shadow-2xl backdrop-blur-md">
                ${o.map(([e,t])=>`<a class="block px-4 py-3 font-rethink-sans text-sm text-[#f7eddc] transition hover:bg-[#b88938] hover:text-[#061d15]" href="${t}">${e}</a>`).join(``)}
              </div>
            </div>
          </div>
        `:`
        <a class="nav-link ${e?`block py-3 text-lg`:`text-sm`} font-rethink-sans text-[#f7eddc] underline-offset-8 transition hover:text-[#d4a24f] hover:underline" href="${n}" data-path="${n}">
          ${t}
        </a>
      `).join(``),P=(e,t,n,r=``)=>`
  <a class="magnetic group inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#f7eddc] transition duration-300 hover:border-[#b88938] hover:bg-[#b88938] hover:text-[#061d15]" href="${t}" aria-label="${e}" ${r}>
    ${k(n,`h-5 w-5 transition duration-300 group-hover:scale-110`)}
  </a>
`,F=()=>`
  <header id="siteHeader" class="site-header fixed inset-x-0 top-0 z-50">
    <div class="mx-auto grid h-20 max-w-7xl grid-cols-[auto_auto] items-center justify-between px-5 sm:h-24 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
      ${A(`justify-self-start`)}
      <nav class="hidden items-center justify-center gap-8 lg:flex">${N()}</nav>
      <div class="hidden items-center justify-end gap-3 lg:flex">
        ${P(`Instagram`,`https://www.instagram.com/`,`instagram`,`target="_blank" rel="noreferrer"`)}
      <a class="magnetic inline-flex min-h-12 items-center justify-center border border-[#b88938]/75 bg-[#b88938] px-7 font-rethink-sans text-sm text-[#061d15] transition duration-300 hover:bg-transparent hover:text-[#f7eddc]" href="${c}">Reservations</a>
      </div>
      <button id="menuToggle" class="magnetic flex h-11 w-11 items-center justify-center justify-self-end border border-white/20 text-[#f7eddc] sm:h-12 sm:w-12 lg:hidden" type="button" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false">
        ${k(`menu`,`h-5 w-5`)}
      </button>
    </div>
    <div id="mobileMenu" class="hidden border-t border-white/10 bg-[#061d15] px-6 pb-7 lg:hidden">
      ${N(!0)}
      <div class="mt-5 flex gap-3">
        ${P(`Instagram`,`https://www.instagram.com/`,`instagram`,`target="_blank" rel="noreferrer"`)}
        ${P(`Email Ember on Toorak`,`mailto:${s.email}`,`mail`)}
      </div>
      <a class="mt-5 inline-flex min-h-12 items-center justify-center border border-[#b88938]/75 bg-[#b88938] px-7 font-rethink-sans text-sm text-[#061d15]" href="${c}">Reservations</a>
    </div>
  </header>
`,I=()=>`
  <div class="cursor-dot" aria-hidden="true"></div>
  <div class="cursor-ring" aria-hidden="true"></div>
`,L=(e=[])=>`
  <div class="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
    ${e.map(([e,t,n=`dark`])=>`<a href="${t}" class="${n===`light`?E:T}">${e}</a>`).join(``)}
  </div>
`,R=({eyebrow:e,title:t,copy:n,image:r,actions:i=[],meta:a=[],tall:o=!0})=>`
  <section class="interactive-hero relative overflow-hidden bg-[#061d15] pt-20 text-[#f7eddc] sm:pt-24" style="--hero-image:url('${r}')">
    <div class="hero-image absolute inset-0 bg-cover bg-center"></div>
    <div class="hero-veil absolute inset-0"></div>
    <div class="hero-spotlight absolute inset-0"></div>
    <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#061d15] to-transparent"></div>
    <div class="relative mx-auto flex ${o?`min-h-[520px] sm:min-h-[calc(92vh-6rem)]`:`min-h-[460px] sm:min-h-[620px]`} max-w-7xl flex-col items-center justify-center px-6 text-center">
      <p class="mb-4 ${D}">${e}</p>
      <h1 class="max-w-5xl font-cormorant-garamond text-4xl leading-none text-[#f8efe1] sm:text-7xl lg:text-8xl">${t}</h1>
      <p class="mt-6 max-w-2xl font-rethink-sans text-sm leading-7 text-[#f0dfbd] sm:mt-8 sm:text-base sm:leading-8">${n}</p>
      ${L(i)}
      ${a.length?`<div class="absolute bottom-10 hidden w-full max-w-5xl grid-cols-3 px-6 font-rethink-sans text-sm text-[#f7eddc] lg:grid">
              ${a.map(([e,t],n)=>`<a class="${n===0?`justify-self-start`:n===a.length-1?`justify-self-end`:`justify-self-center`} underline underline-offset-4 hover:text-[#d4a24f]" href="${t}">${e}</a>`).join(``)}
            </div>`:``}
    </div>
  </section>
`,z=()=>`
  <section class="home-hero interactive-hero relative overflow-hidden bg-[#061d15] pt-20 text-[#f7eddc] sm:pt-24">
    <div class="absolute inset-0">
      ${r.map((e,t)=>`
            <div class="hero-image home-hero-slide absolute inset-0 bg-cover bg-center" style="--hero-image:url('${e}'); animation-delay:${t*7}s"></div>
          `).join(``)}
    </div>
    <div class="home-hero-veil absolute inset-0"></div>
    <div class="hero-spotlight absolute inset-0 opacity-70"></div>
    <div class="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
      <div class="ember-fire-mark" aria-hidden="true">
        <img src="/ember-logo.png" alt="">
      </div>
    </div>
    <div class="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col justify-end px-6 pb-14 sm:min-h-[calc(94vh-6rem)] sm:px-8 sm:pb-20">
      <div class="mb-6 flex justify-center sm:mb-7">
        <a class="${E}" href="${c}">Book now</a>
      </div>
      <p class="mb-8 text-center font-rethink-sans text-xs font-semibold uppercase tracking-[0.36em] text-[#f7eddc]/90">Toorak Steakhouse</p>
      <div class="hidden w-full max-w-5xl grid-cols-3 font-rethink-sans text-sm text-[#f7eddc]/90 lg:grid">
        <a class="justify-self-start underline underline-offset-4 hover:text-[#d4a24f]" href="tel:+61391919973">03 9191 9973</a>
        <a class="justify-self-center underline underline-offset-4 hover:text-[#d4a24f]" href="${c}">Lunch & Dinner, 7 days</a>
        <a class="justify-self-end underline underline-offset-4 hover:text-[#d4a24f]" href="/contact/">32 Jackson St, Toorak</a>
      </div>
    </div>
  </section>
`,B=(e,t,n,r,i=[])=>R({eyebrow:e,title:t,copy:n,image:r,actions:i,tall:!1}),V=()=>`
  <section class="border-y border-[#b88938]/20 bg-[#071c15] text-[#f4ead6]">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-32">
      <div>
        <p class="${D}">Welcome to Ember</p>
        <h2 class="mt-4 font-cormorant-garamond text-4xl leading-tight sm:text-6xl">Fire cooking, steady service and a slower table.</h2>
        <div class="mt-7 space-y-4 font-rethink-sans text-sm leading-7 text-[#d9ceba] sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8">
          <p>Steaks are seasoned, rested and finished over heat. Handmade pasta, oysters, slow-cooked cuts and seasonal sides move from the kitchen with a steady rhythm.</p>
          <p>The dining room stays warm and low-lit, with timber, brass, wine glasses and the glow of the grill setting the pace for long lunches and unhurried dinners.</p>
          <p>Service follows the table: drinks before dinner, plates to share, sauces beside the steak, and room for the last pour.</p>
        </div>
        <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a href="/menus/a-la-carte/" class="${E}">View menu</a>
          <a href="${c}" class="${oe}">Reservations</a>
        </div>
      </div>
      <div class="grid gap-4 sm:grid-cols-[0.8fr_1fr]">
        <img class="tilt-card h-[300px] w-full border border-[#b88938]/25 object-cover shadow-2xl shadow-black/35 sm:h-[480px]" src="${n.entry}" alt="Entrance to Ember on Toorak">
        <img class="tilt-card h-[340px] w-full border border-[#b88938]/25 object-cover shadow-2xl shadow-black/35 sm:mt-20 sm:h-[520px]" src="${n.dining}" alt="Warm dining room at Ember on Toorak">
      </div>
    </div>
  </section>
`,H=(e,t,n,r)=>`
  <section class="relative -mt-16 border-y border-[#b88938]/20 bg-[#0b241b] pt-16 text-[#f4ead6] sm:-mt-20 sm:pt-20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#061d15] via-[#061d15]/70 to-transparent"></div>
    <div class="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center">
      <div>
        <p class="${D}">${e}</p>
        <h2 class="mt-4 font-cormorant-garamond text-4xl leading-tight sm:text-6xl">${t}</h2>
        <div class="mt-7 space-y-4 font-rethink-sans text-sm leading-7 text-[#d9ceba] sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8">
          ${n.map(e=>`<p>${e}</p>`).join(``)}
        </div>
      </div>
      <img class="tilt-card h-[340px] w-full border border-[#b88938]/25 object-cover shadow-2xl shadow-black/35 sm:h-[560px]" src="${r}" alt="${t}">
    </div>
  </section>
`,U=()=>`
  <section class="bg-[#061d15] text-[#f4ead6]">
    <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
      <h2 class="font-cormorant-garamond text-4xl leading-tight text-[#d4a24f] sm:text-5xl">Four details shape the table.</h2>
      <div class="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
        ${[[`Fire-Led, Ingredient-Driven Cooking`,`Open flame, careful sourcing and restrained seasoning keep the focus on produce, texture and the finish from the grill.`],[`Warm, Intuitive Hospitality`,`Service follows the rhythm of the table: attentive when needed, relaxed when the conversation takes over.`],[`Thoughtful, Inviting Design`,`Moody interiors, warm light and tactile details create a room made for long lunches, dates, celebrations and regular seats at the bar.`],[`Australian Produce, Table-Led Dining`,`Premium local ingredients meet measured pacing, share plates and food built for the centre of the table.`]].map(([e,t])=>`
              <article class="tilt-card border border-[#b88938]/35 bg-[#0b241b]/70 p-6 shadow-xl shadow-black/20 sm:p-8">
                <h3 class="font-cormorant-garamond text-2xl leading-tight text-[#d4a24f] sm:text-3xl">${e}</h3>
                <p class="mt-4 font-rethink-sans text-sm leading-7 text-[#e3d8c6] sm:mt-5 sm:text-base sm:leading-8">${t}</p>
              </article>
            `).join(``)}
      </div>
    </div>
  </section>
`,W=()=>`
  <section class="bg-[#061d15] text-[#f4ead6]">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:gap-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
      <img class="tilt-card h-[360px] w-full object-cover sm:h-[720px]" src="${n.privateDining}" alt="Ember dining room">
      <div class="space-y-10 sm:space-y-14">
        <div>
          <h2 class="font-cormorant-garamond text-4xl leading-tight text-[#d4a24f] sm:text-5xl">The Bar At Ember</h2>
          <div class="mt-6 space-y-4 font-rethink-sans text-sm leading-7 text-[#e5dccb] sm:mt-7 sm:space-y-5 sm:text-base sm:leading-8">
            <p>The bar sets the first note: aperitifs, barrel cocktails, chilled martinis and wine by the glass before the table fills.</p>
            <p>Drinks are built around the food: citrus for seafood, structure for steak, darker spirits for the last seat of the night.</p>
          </div>
          <a href="/drinks/" class="${T} mt-7 sm:mt-8">Drinks menu</a>
        </div>
        <div>
          <h2 class="font-cormorant-garamond text-4xl leading-tight text-[#d4a24f] sm:text-5xl">Events</h2>
          <div class="mt-6 space-y-4 font-rethink-sans text-sm leading-7 text-[#e5dccb] sm:mt-7 sm:space-y-5 sm:text-base sm:leading-8">
            <p>Private dining tables can be set for birthdays, client dinners, family celebrations and group lunches.</p>
            <p>Menus, drinks and timing are shaped around the occasion so the table has structure without feeling staged.</p>
          </div>
          <a href="/contact/" class="${T} mt-7 sm:mt-8">Make an enquiry</a>
        </div>
      </div>
    </div>
  </section>
`,G=()=>`
  <section class="border-y border-[#b88938]/20 bg-[#071c15] text-[#f4ead6]">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
      <div class="text-center">
        <p class="${D}">Menu pathways</p>
        <h2 class="mt-4 font-cormorant-garamond text-4xl sm:text-6xl">Choose your Ember.</h2>
      </div>
      <div class="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
        ${[[`A La Carte`,n.oysters,`Snacks, handmade pasta, premium steaks and flame-led mains.`,`/menus/a-la-carte/`],[`Lunch`,n.pasta,`Weekday lunch, polished service and a menu shaped for Toorak afternoons.`,`/menus/lunch/`],[`Set Menus`,n.spread,`A shared Ember journey for groups, events and long dinners.`,`/menus/set-menu/`]].map(([e,t,n,r])=>`
              <a href="${r}" class="tilt-card group border border-[#b88938]/45 bg-[#061d15]/85 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#d4a24f]">
                <img class="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.025] sm:h-[460px]" src="${t}" alt="${e}">
                <div class="p-6 text-center sm:p-8">
                  <h3 class="font-cormorant-garamond text-3xl text-[#d4a24f] sm:text-4xl">${e}</h3>
                  <p class="mt-4 font-rethink-sans text-sm leading-7 text-[#d8d0c2]">${n}</p>
                </div>
              </a>
            `).join(``)}
      </div>
    </div>
  </section>
`,K=(e=``)=>`
  <nav class="mx-auto mt-8 grid max-w-4xl grid-cols-1 border border-[#b88938]/70 sm:mt-12 sm:grid-cols-3" aria-label="Menu sections">
    ${v.map((t,n)=>`
          <a class="magnetic inline-flex min-h-12 items-center justify-center border-[#b88938]/70 px-4 py-3 font-rethink-sans text-xs uppercase transition duration-300 hover:bg-[#b88938] hover:text-[#061d15] sm:min-h-14 sm:text-sm ${n===v.length-1?``:`sm:border-r`} ${e===t.id?`bg-[#b88938] text-[#061d15]`:`bg-transparent text-[#f5ead6]`}" href="${y(t.id)}">
            ${t.navLabel||t.label}
          </a>
        `).join(``)}
  </nav>
`,q=e=>`
  <div class="mx-auto mt-8 flex max-w-3xl flex-col justify-center gap-3 sm:mt-10 sm:flex-row">
    ${e.map(([e,t])=>`
          <a class="magnetic inline-flex min-h-11 items-center justify-center border border-[#b88938]/55 px-5 py-3 font-rethink-sans text-xs uppercase text-[#f4ead6] transition duration-300 hover:bg-[#b88938] hover:text-[#061d15]" href="${t}">
            ${e}
          </a>
        `).join(``)}
  </div>
`,se=e=>`
  <div class="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
    ${e.items.map(([e,t,n])=>`
          <div class="menu-line grid grid-cols-[1fr_auto] gap-4 border-b border-[#d4a24f]/16 pb-4 transition duration-300 hover:border-[#d4a24f]/55 sm:gap-8">
            <div>
              <h5 class="font-rethink-sans text-sm font-medium leading-tight tracking-[0.01em] text-[#f7eddc] sm:text-lg">${e}</h5>
              ${t?`<p class="mt-2 max-w-2xl font-rethink-sans text-xs leading-6 text-[#d8d0c2] sm:text-sm">${t}</p>`:``}
            </div>
            ${n?`<p class="pt-1 font-rethink-sans text-sm font-medium leading-none text-[#f4ead6] sm:text-base">${n}</p>`:``}
          </div>
        `).join(``)}
  </div>
`,J=e=>`
  <div>
    ${M()}
    <h3 class="mt-5 font-rethink-sans text-2xl font-light uppercase leading-tight tracking-[0.04em] text-[#f7eddc] sm:text-4xl">${e.title}</h3>
    ${e.note?`<p class="mt-5 border-y border-[#d4a24f]/30 py-5 font-rethink-sans text-sm leading-7 text-[#f4ead6] sm:text-base sm:leading-8">${e.note}</p>`:`<div class="mt-6 h-px bg-[#d4a24f]/30"></div>`}
    ${se(e)}
    ${(e.subsections||[]).map(s=>`
      <div class="mt-10 sm:mt-12">
        <h4 class="font-rethink-sans text-lg font-light uppercase leading-tight tracking-[0.14em] text-[#d4a24f] sm:text-2xl">${s.title}</h4>
        ${s.intro?`<p class="mt-3 font-rethink-sans text-xs italic leading-6 text-[#e7ddca] sm:text-sm">${s.intro}</p>`:``}
        <div class="mt-4 h-px bg-[#d4a24f]/20"></div>
        ${se(s)}
      </div>
    `).join(``)}
  </div>
`,ce=(e,t,n)=>{let r=S(e,t),i=n%2==1;return r?`
    <section class="mx-auto grid max-w-7xl gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
      <div class="${i?`lg:order-2`:``}">
        <img class="tilt-card h-[320px] w-full object-cover shadow-2xl shadow-black/35 sm:h-[560px]" src="${r}" alt="${t.title} at Ember">
      </div>
      <div class="${i?`lg:order-1`:``}">
        ${J(t)}
      </div>
    </section>
  `:`
      <section class="mx-auto max-w-5xl py-9 sm:py-12">
        ${J(t)}
      </section>
    `},le=(e,t=!1)=>`
  <div class="mx-auto max-w-5xl text-center">
    ${t?``:M(`mx-auto`)}
    <h2 class="${t?`mt-0`:`mt-8`} font-rethink-sans text-3xl font-light uppercase leading-tight tracking-[0.06em] text-[#f7eddc] sm:text-5xl">${e.title}</h2>
    <div class="mx-auto mt-7 h-px max-w-2xl bg-[#b88938]"></div>
    ${e.price?`<p class="mt-5 font-rethink-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#d4a24f] sm:mt-6">${e.price}</p>`:``}
    <p class="mx-auto ${e.price?`mt-5 sm:mt-6`:`mt-7`} max-w-4xl font-rethink-sans text-xs italic leading-6 text-[#e7ddca] sm:text-sm sm:leading-7">${e.intro}</p>
    ${e.actions?.length?q(e.actions):``}
  </div>
`,Y=(e,t=!1,n=!1)=>`
  <div id="menu-panel-${e.id}" class="menu-panel ${t?``:`hidden`}">
    ${le(e,n)}
    <div class="mt-10 sm:mt-16">
      ${C(e).map((t,n)=>ce(e,t,n)).join(``)}
    </div>
  </div>
`,ue=()=>`
  <section class="menu-texture relative overflow-hidden py-16 text-[#f4ead6] sm:py-32">
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="font-rethink-sans text-3xl font-light uppercase tracking-[0.08em] text-[#f7eddc] sm:text-5xl">Menus</h1>
        <div class="mx-auto mt-7 h-px max-w-2xl bg-[#b88938]"></div>
        <p class="mx-auto mt-6 max-w-3xl font-rethink-sans text-xs leading-6 text-[#e7ddca] sm:text-sm sm:leading-7">
          A la carte, lunch and set menu are separated for faster browsing and clearer table planning.
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-6xl gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">
        ${v.map((e,t)=>`
              <a class="tilt-card group border border-[#b88938]/50 bg-[#031711]/70 p-4 transition duration-300 hover:-translate-y-1 hover:bg-[#0b2b21]" href="${y(e.id)}">
                <img class="h-60 w-full object-cover transition duration-700 group-hover:scale-[1.025] sm:h-80" src="${b(e,t)}" alt="${e.title}">
                <div class="p-5 text-center sm:p-6">
                  <p class="font-rethink-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a24f]">${e.navLabel||e.label}</p>
                  <h2 class="mt-3 font-rethink-sans text-2xl font-light uppercase tracking-[0.04em] text-[#f7eddc] sm:text-3xl">${e.title}</h2>
                  <p class="mt-4 font-rethink-sans text-xs leading-6 text-[#d8d0c2] sm:text-sm sm:leading-7">${e.intro}</p>
                </div>
              </a>
            `).join(``)}
      </div>
    </div>
  </section>
`,X=e=>`
  <section class="menu-texture relative overflow-hidden py-16 text-[#f4ead6] sm:py-32">
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8">
      ${K(e.id)}
      <div class="mt-10 sm:mt-16">${Y(e,!0)}</div>
    </div>
  </section>
`,de=()=>`
  <section class="menu-texture relative overflow-hidden py-16 text-[#f4ead6] sm:py-32">
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8">
      ${K(`set`)}
      <nav class="mx-auto mt-8 grid max-w-2xl grid-cols-1 border border-[#b88938]/60 sm:grid-cols-2" aria-label="Set menu options">
        ${g.map((e,t)=>`
              <a class="magnetic inline-flex min-h-12 items-center justify-center border-[#b88938]/60 px-4 py-3 font-rethink-sans text-xs uppercase text-[#f4ead6] transition duration-300 hover:bg-[#b88938] hover:text-[#061d15] ${t===0?`sm:border-r`:``}" href="#${e.id}">
                ${e.label}
              </a>
            `).join(``)}
      </nav>
      <div class="mt-10 space-y-16 sm:mt-16 sm:space-y-24">
        ${g.map(e=>`<div id="${e.id}" class="scroll-mt-32">${Y(e,!0)}</div>`).join(``)}
      </div>
    </div>
  </section>
`,fe=(e,t=!1)=>`
  <section class="menu-texture relative overflow-hidden ${t?`-mt-px pb-16 pt-10 sm:pb-28 sm:pt-14`:`py-16 sm:py-28`} text-[#f4ead6]">
    ${t?`<div class="menu-texture-overlay pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#061d15] via-[#061d15]/70 to-transparent"></div>`:``}
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8">${Y(e,!0,t)}</div>
  </section>
`,pe=()=>`
  <section class="menu-texture relative -mt-px overflow-hidden pb-16 pt-10 text-[#f4ead6] sm:pb-28 sm:pt-14">
    <div class="menu-texture-overlay pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#061d15] via-[#061d15]/70 to-transparent"></div>
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8">
      <div id="wine-by-the-glass" class="mt-12 scroll-mt-32 sm:mt-16">
        ${Y(re,!0,!0)}
      </div>
      <div class="mx-auto my-10 h-px max-w-5xl bg-gradient-to-r from-transparent via-[#b88938]/70 to-transparent sm:my-16"></div>
      
    </div>
  </section>
`,me=()=>`
  <section class="bg-[#071c15] py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 sm:px-8">
      <div class="mb-8 flex flex-col justify-between gap-4 sm:mb-12 md:flex-row md:items-end">
        <div>
          <p class="${D}">Gallery</p>
          <h2 class="mt-3 font-cormorant-garamond text-4xl text-[#f4ead6] sm:text-5xl">Inside the room.</h2>
        </div>
        <p class="max-w-md font-rethink-sans text-xs leading-6 text-[#ded4c3] sm:text-sm sm:leading-7">Click any image to bring it forward. Warm timber, open flame, cellar light and quiet corners make up the visual rhythm of Ember.</p>
      </div>
      <div class="grid auto-rows-[132px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
        ${w.map((e,t)=>`<button class="gallery-item group overflow-hidden ${t===0||t===6?`md:col-span-2 md:row-span-2`:t===3||t===10?`md:row-span-2`:``}" type="button" data-gallery="${e}" aria-label="Open gallery image ${t+1}">
              <img class="h-full w-full object-cover transition duration-700 group-hover:scale-110" src="${e}" alt="Ember gallery image ${t+1}">
            </button>`).join(``)}
      </div>
    </div>
  </section>
`,he=()=>`
  <div class="self-start border border-[#b88938]/35 bg-[#061d15]/85 p-6 shadow-2xl shadow-black/25 sm:p-10">
    <p class="${D}">OpenTable</p>
    <h3 class="mt-4 font-cormorant-garamond text-4xl leading-tight text-[#f4ead6] sm:text-5xl">Book your table.</h3>
    <p class="mt-6 max-w-xl font-rethink-sans text-sm leading-7 text-[#d9ceba] sm:text-base sm:leading-8">
      Choose your preferred date, time and party size through OpenTable. For larger groups or private dining, contact the team directly.
    </p>
    <a class="${E} mt-8 w-full sm:w-auto" href="${c}">Book now</a>
    <div class="mt-7 grid gap-3 border-t border-[#b88938]/20 pt-6 font-rethink-sans text-sm text-[#e6ddcf] sm:grid-cols-2">
      <a class="transition hover:text-[#d4a24f]" href="tel:+61391919973">${s.phone}</a>
      <a class="transition hover:text-[#d4a24f]" href="mailto:${s.email}">${s.email}</a>
    </div>
  </div>
`,Z=()=>`
  <section class="border-y border-[#b88938]/20 bg-[#0b241b] text-[#f4ead6]">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-32">
      <div>
        <p class="${D}">Reservations</p>
        <h2 class="mt-4 font-cormorant-garamond text-4xl leading-tight sm:text-6xl">Reserve table.</h2>
        <div class="mt-7 space-y-4 font-rethink-sans text-sm leading-7 text-[#d9ceba] sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8">
          <p>Ember is open seven days a week for lunch and dinner. Advance bookings are recommended for weekends, group dining and special occasions.</p>
          <p>For private dining, celebrations or event enquiries, contact the team directly to shape the occasion.</p>
        </div>
        <div class="mt-8 space-y-3 font-rethink-sans text-sm text-[#e6ddcf]">
          ${u.map(([e,t])=>`<div class="grid grid-cols-[1fr_auto] border-b border-[#b88938]/25 py-3"><span>${e}</span><span>${t}</span></div>`).join(``)}
        </div>
      </div>
      ${he()}
    </div>
  </section>
`,ge=()=>`
  <form class="border border-[#b88938]/35 bg-[#061d15]/85 p-6 shadow-2xl shadow-black/25 sm:p-10" name="contact-enquiry" action="https://api.web3forms.com/submit" method="POST" data-contact-form>
    <input type="hidden" name="access_key" value="${ee}">
    <input type="hidden" name="subject" value="New Ember on Toorak website enquiry">
    <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off">
    <div class="grid gap-5 sm:grid-cols-2">
      ${[[`First name`,`text`,`firstName`,!0],[`Last name`,`text`,`lastName`,!1],[`Email`,`email`,`email`,!0],[`Phone`,`tel`,`phone`,!1]].map(([e,t,n,r])=>`
            <label class="font-rethink-sans text-sm text-[#f4ead6]">${e}${r?` *`:``}
              <input class="mt-2 min-h-12 w-full border border-[#b88938]/30 bg-[#02100c]/50 px-4 text-[#f4ead6] outline-none transition focus:border-[#d4a24f]" type="${t}" name="${n}" ${r?`required`:``}>
            </label>
          `).join(``)}
    </div>
    <label class="mt-5 block font-rethink-sans text-sm text-[#f4ead6]">Message *
      <textarea class="mt-2 min-h-32 w-full border border-[#b88938]/30 bg-[#02100c]/50 px-4 py-3 text-[#f4ead6] outline-none transition focus:border-[#d4a24f]" name="message" required></textarea>
    </label>
    <button class="${E} mt-6" type="submit">Send enquiry</button>
  </form>
`,_e=()=>`
  <section class="bg-[#0b241b] text-[#f4ead6]">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <p class="${D}">Enquiries</p>
        <h2 class="mt-4 font-cormorant-garamond text-4xl leading-tight sm:text-6xl">Talk to the team.</h2>
        <div class="mt-7 space-y-4 font-rethink-sans text-sm leading-7 text-[#d9ceba] sm:mt-8 sm:text-base sm:leading-8">
          <p>Use this form for events, private dining, special requests, gift enquiries, dietary notes or anything that needs more detail than a table booking.</p>
          <p>For immediate reservation changes, call the restaurant directly.</p>
        </div>
      </div>
      ${ge()}
    </div>
  </section>
`,ve=()=>`
  <section class="bg-[#061d15] text-[#f4ead6]">
    <div class="grid lg:grid-cols-2">
      <div class="px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
        <h1 class="font-cormorant-garamond text-4xl sm:text-5xl">Location</h1>
        <p class="mt-7 font-cormorant-garamond text-2xl leading-tight text-[#f4ead6] sm:mt-10 sm:text-3xl">${s.address}</p>
        <p class="mt-6 max-w-xl font-rethink-sans text-sm leading-7 text-[#e1d8c8] sm:mt-7 sm:text-base sm:leading-8">
          Ember is located in the heart of Toorak, tucked inside a warm upstairs dining room shaped by timber, brass light and the glow of the grill.
        </p>
        <div class="mt-8 grid gap-7 font-rethink-sans text-sm text-[#e1d8c8] sm:mt-10 sm:grid-cols-2 sm:gap-8">
          <div>
            <h2 class="${D}">Contact Us</h2>
            <div class="mt-4 flex flex-col gap-3">
              <a class="inline-flex items-center gap-3 underline underline-offset-4" href="tel:+61391919973">${k(`phone`)} ${s.phone}</a>
              <a class="inline-flex items-center gap-3 underline underline-offset-4" href="mailto:${s.email}">${k(`mail`)} ${s.email}</a>
            </div>
          </div>
          <div>
            <h2 class="${D}">Opening Hours</h2>
            ${u.map(([e,t])=>`<p class="mt-3">${e}<br>${t}</p>`).join(``)}
          </div>
        </div>
      </div>
      <div class="relative min-h-[440px] overflow-hidden sm:min-h-[620px]">
        <img class="absolute inset-0 h-1/2 w-full object-cover" src="${n.entry}" alt="Ember on Toorak entrance">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-[#061d15]">
          <iframe
            class="h-full w-full border-0"
            title="Map to Ember"
            src="${te}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
          </iframe>
          <a class="magnetic absolute bottom-5 left-5 inline-flex min-h-10 items-center gap-2 border border-[#d4a24f]/70 bg-[#061d15]/85 px-4 font-rethink-sans text-xs text-[#f4ead6] backdrop-blur-sm transition hover:bg-[#b88938] hover:text-[#061d15] sm:bottom-8 sm:left-8 sm:min-h-11 sm:gap-3 sm:px-5 sm:text-sm" href="${ne}" target="_blank" rel="noreferrer">
            ${k(`map`,`h-5 w-5`)} Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  </section>
`,ye=()=>`
  <footer class="border-t border-[#b88938]/30 bg-[#04150f] text-[#f4ead6]">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
      <div>${j()}</div>
      <div class="font-rethink-sans text-sm leading-7">
        <a class="text-[#d4a24f] transition hover:text-[#f4ead6]" href="/contact/">Contact Us</a>
        <p class="mt-3">${s.address}</p>
        <a class="block transition hover:text-[#d4a24f]" href="mailto:${s.email}">${s.email}</a>
        <a class="block transition hover:text-[#d4a24f]" href="tel:+61391919973">${s.phone}</a>
      </div>
      <nav class="flex flex-col gap-1 border-l border-[#b88938]/25 pl-5 font-rethink-sans text-sm leading-7">
        ${a.map(([e,t])=>`<a class="transition hover:text-[#d4a24f]" href="${t}">${e}</a>`).join(``)}
      </nav>
      <div class="font-rethink-sans text-sm leading-7 md:text-right">
        <p>Monday - Thursday<br>11:00 AM - 9:00 PM</p>
        <p class="mt-3">Friday - Saturday<br>11:00 AM - 10:00 PM</p>
        <div class="mt-6 flex gap-3 md:justify-end">
          ${P(`Instagram`,`https://www.instagram.com/`,`instagram`,`target="_blank" rel="noreferrer"`)}
        </div>
      </div>
    </div>
  </footer>
`

// ===== HOME PAGE v3 =====
const HP = {
  scallops: "/img/EMBERTOORAK-WEB-030.jpg",
  room: "/img/EMBERTOORAK-WEB-005.jpg",
  spread: "/img/EMBERTOORAK-WEB-130.jpg",
  steakFlame: "/img/EMBERTOORAK-WEB-118.jpg",
  wine: "/img/EMBERTOORAK-WEB-199.jpg",
  pasta: "/img/EMBERTOORAK-WEB-145.jpg",
  cocktail: "/img/EMBERTOORAK-WEB-044.jpg",
  oysters: "/img/EMBERTOORAK-WEB-024.jpg",
  lobster: "/img/EMBERTOORAK-WEB-049.jpg",
  dessert: "/img/EMBERTOORAK-WEB-195.jpg",
  grill: "/img/EMBERTOORAK-WEB-092.jpg",
  beef: "/img/EMBERTOORAK-WEB-162.jpg",
};
const HP_INSTAGRAM = "https://www.instagram.com/"; // <- your real Instagram URL

const hpStyles = () => `
<style>
  .hp-split{display:grid;grid-template-columns:1fr 1fr;min-height:100vh;min-height:100svh;background:#061d15;color:#f4ead6}
  .hp-split.hp-flip .hp-img{order:-1}
  .hp-text{display:flex;align-items:center;padding:150px 8vw 90px}
  .hp-text-inner{max-width:34rem}
  .hp-title{font-size:clamp(2.4rem,4.4vw,4.4rem);line-height:1.05;margin:0}
  .hp-eyebrow{display:block;margin-bottom:22px;font-size:.7rem;letter-spacing:.38em;text-transform:uppercase;color:#d4a24f}
  .hp-body{margin-top:28px;font-size:1rem;line-height:1.9;color:#e3d8c6}
  .hp-body p{margin:0 0 16px}
  .hp-body a{color:#d4a24f;text-decoration:underline;text-underline-offset:4px}
  .hp-cta{margin-top:36px}
  .hp-img{position:relative;overflow:hidden;min-height:100vh;min-height:100svh}
  .hp-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.8s ease}
  .hp-split:hover .hp-img img{transform:scale(1.045)}

  .hp-gold{background:#b88938}
  .hp-gold .hp-text{background:#b88938;color:#061d15}
  .hp-gold .hp-eyebrow{color:#061d15}
  .hp-gold .hp-body{color:#1c1a12}

  /* creative button */
  .hp-btn{position:relative;display:inline-flex;align-items:center;gap:16px;padding:17px 30px;font-size:.72rem;letter-spacing:.3em;text-transform:uppercase;color:#f4ead6;border:1px solid rgba(212,162,79,.75);text-decoration:none;overflow:hidden;isolation:isolate;transition:color .45s,border-color .45s}
  .hp-btn::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#b88938,#e6bd6c);transform:translateX(-101%);transition:transform .6s cubic-bezier(.7,0,.2,1)}
  .hp-btn:hover{color:#061d15;border-color:#e6bd6c}
  .hp-btn:hover::before{transform:translateX(0)}
  .hp-arrow{position:relative;display:inline-block;width:34px;height:1px;background:currentColor;transition:width .45s}
  .hp-arrow::after{content:"";position:absolute;right:0;top:-3px;width:7px;height:7px;border-top:1px solid currentColor;border-right:1px solid currentColor;transform:rotate(45deg)}
  .hp-btn:hover .hp-arrow{width:56px}
  .hp-btn.solid{background:#b88938;color:#061d15;border-color:#b88938}
  .hp-btn.solid::before{background:#061d15}
  .hp-btn.solid:hover{color:#f4ead6;border-color:#061d15}
  .hp-btn.dark{color:#061d15;border-color:#061d15}
  .hp-btn.dark::before{background:#061d15}
  .hp-btn.dark:hover{color:#f4ead6;border-color:#061d15}

  /* From the Ember: expanding full-height panels */
  .hp-ember-head{background:#061d15;color:#f4ead6;text-align:center;padding:110px 24px 60px}
  .hp-ember-head p{margin:20px auto 0;max-width:34rem;font-size:1rem;line-height:1.8;color:#e3d8c6}
  .hp-panels{display:flex;height:100vh;height:100svh;background:#061d15}
  .hp-panel{position:relative;flex:1;overflow:hidden;display:block;color:#f4ead6;text-decoration:none;border-right:1px solid rgba(212,162,79,.3);transition:flex .9s cubic-bezier(.7,0,.2,1)}
  .hp-panel:last-child{border-right:0}
  .hp-panel img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.55);transition:filter .8s ease,transform 1.6s ease}
  .hp-panel::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(3,17,12,.95) 0%,rgba(3,17,12,0) 60%)}
  .hp-panel-body{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:40px 34px 48px}
  .hp-panel-num{display:block;font-size:.75rem;letter-spacing:.3em;color:#d4a24f}
  .hp-panel h3{margin:12px 0 0;font-size:clamp(1.7rem,2.5vw,2.6rem);line-height:1.1;font-weight:400}
  .hp-panel p{margin:0;max-height:0;opacity:0;overflow:hidden;font-size:.95rem;line-height:1.7;color:#e3d8c6;transition:max-height .8s ease,opacity .8s ease,margin .8s ease}
  .hp-panel-link{display:inline-block;margin-top:18px;padding-bottom:4px;font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:#d4a24f;border-bottom:1px solid #d4a24f}
  .hp-panel:hover{flex:2.8}
  .hp-panel:hover img{filter:brightness(.95);transform:scale(1.06)}
  .hp-panel:hover p{max-height:8rem;opacity:1;margin-top:14px}

  .hp-insta-wrap{background:#061d15;color:#f4ead6;text-align:center;padding:100px 0 90px}
  .hp-insta{display:grid;grid-template-columns:repeat(4,1fr);margin-top:50px}
  .hp-insta a{display:block;aspect-ratio:1/1;overflow:hidden}
  .hp-insta img{width:100%;height:100%;object-fit:cover;transition:transform 1s ease,filter .6s}
  .hp-insta a:hover img{transform:scale(1.1);filter:brightness(1.1)}

  .hp-details summary{list-style:none;cursor:pointer;font-style:italic;color:#d4a24f}
  .hp-details summary::-webkit-details-marker{display:none}
  .hp-details[open] summary{display:none}

  .hp-tab{position:fixed;right:0;top:68%;z-index:40;display:flex;align-items:center;justify-content:center;width:42px;height:120px;background:#b88938;color:#061d15;font-size:.7rem;font-weight:600;letter-spacing:.28em;text-transform:uppercase;text-decoration:none;writing-mode:vertical-rl;transition:background .3s,width .3s}
  .hp-tab:hover{background:#d4a24f;width:52px}

  @media (max-width:900px){
    .hp-split{grid-template-columns:1fr;min-height:auto}
    .hp-split .hp-img{order:-1 !important;min-height:70vh}
    .hp-text{padding:64px 24px;min-height:70vh}
    .hp-panels{flex-direction:column;height:auto}
    .hp-panel{flex:none;height:72vh;border-right:0;border-bottom:1px solid rgba(212,162,79,.3)}
    .hp-panel p{max-height:none;opacity:1;margin-top:14px}
    .hp-insta{grid-template-columns:repeat(2,1fr)}
    .hp-tab{display:none}
  }
</style>`;

const hpBtn = (label, href, variant = "", extra = "") =>
  `<a class="hp-btn ${variant}" href="${href}" ${extra}>${label}<span class="hp-arrow"></span></a>`;

const hpSplit = ({ title, body, button, image, alt, flip = false, gold = false, eyebrow = "" }) => `
  <section class="hp-split ${flip ? "hp-flip" : ""} ${gold ? "hp-gold" : ""}">
    <div class="hp-text font-rethink-sans">
      <div class="hp-text-inner">
        ${eyebrow ? `<span class="hp-eyebrow">${eyebrow}</span>` : ""}
        <h2 class="hp-title font-cormorant-garamond">${title}</h2>
        <div class="hp-body">${body}</div>
        ${button ? `<div class="hp-cta">${button}</div>` : ""}
      </div>
    </div>
    <div class="hp-img"><img src="${image}" alt="${alt}" loading="lazy"></div>
  </section>`;

const hpDiscover = () => hpSplit({
  eyebrow: "Welcome to Ember",
  title: "Discover fire-led dining",
  body: `<p>View a range of curated menus – from steaks finished over the Hibachi grill on the <a href="/menus/a-la-carte/">à la carte menu</a>, to a considered pour from the <a href="/wine-list/">wine list</a>.</p>`,
  button: hpBtn("Menus", "/menus/"),
  image: HP.scallops,
  alt: "Grilled Hokkaido scallops at Ember on Toorak",
});

const hpVisit = () => hpSplit({
  eyebrow: "Toorak",
  title: "Visit us in Toorak",
  body: `<p>Upstairs at Level 1, 32 Jackson St, Ember is open seven days for lunch and dinner. Find opening hours, directions and private dining details.</p>`,
  button: hpBtn("Find us", "/contact/"),
  image: HP.room,
  alt: "The dining room at Ember on Toorak",
  flip: true,
});

const hpEmber = () => {
  const panels = [
    ["01", "From the Hibachi", "Steaks seasoned, rested and finished over open charcoal.", HP.steakFlame, "/menus/a-la-carte/", "A la carte"],
    ["02", "From the cellar", "Champagne, Burgundy, Barossa. A list built for steak and seafood.", HP.wine, "/wine-list/", "Wine list"],
    ["03", "Long lunches", "Two or three courses with a house drink, Monday to Saturday.", HP.pasta, "/menus/lunch/", "Lunch menu"],
    ["04", "From the bar", "Barrel cocktails, chilled martinis and aperitifs.", HP.cocktail, "/drinks/", "Drinks"],
  ];
  return `
  <section>
    <div class="hp-ember-head font-rethink-sans">
      <span class="hp-eyebrow">Ember on Toorak</span>
      <h2 class="hp-title font-cormorant-garamond">From the Ember</h2>
      <p>Explore the menus, the cellar and the bar.</p>
    </div>
    <div class="hp-panels font-rethink-sans">
      ${panels.map(([n, t, d, img, href, cta]) => `
        <a class="hp-panel" href="${href}">
          <img src="${img}" alt="${t}" loading="lazy">
          <div class="hp-panel-body">
            <span class="hp-panel-num">${n}</span>
            <h3 class="font-cormorant-garamond">${t}</h3>
            <p>${d}</p>
            <span class="hp-panel-link">${cta}</span>
          </div>
        </a>`).join("")}
    </div>
  </section>`;
};

const hpSetMenu = () => hpSplit({
  eyebrow: "Set menus from $95",
  title: "Share the Ember experience",
  body: `<p>A shared menu for long lunches, intimate dinners and group dining. Choose an entree, a main and a dessert, and let the table settle in.</p>`,
  button: hpBtn("View set menus", "/menus/set-menu/", "dark"),
  image: HP.spread,
  alt: "Ember set menu spread",
  gold: true,
  flip: true,
});

const hpStory = () => hpSplit({
  eyebrow: "Our story",
  title: "The ultimate fire-led steakhouse experience",
  body: `
    <p>Steaks are seasoned, rested and finished over heat. Handmade pasta, oysters, slow-cooked cuts and seasonal sides move from the kitchen with a steady rhythm.</p>
    <details class="hp-details">
      <summary>read more…</summary>
      <p>The kitchen works with premium Australian beef, seafood, handmade pasta and seasonal sides, finished with restraint over heat.</p>
      <p>The dining room stays warm and low-lit, with timber, brass, wine glasses and the glow of the grill setting the pace for long lunches and unhurried dinners.</p>
      <p>Service follows the table: drinks before dinner, plates to share, sauces beside the steak, and room for the last pour.</p>
    </details>`,
  button: hpBtn("Make a booking", "/reservations/", "solid"),
  image: HP.beef,
  alt: "Steak and sides at Ember on Toorak",
});

const hpInsta = () => `
  <section class="hp-insta-wrap font-rethink-sans">
    <span class="hp-eyebrow">Instagram</span>
    <h2 class="hp-title font-cormorant-garamond">Let's get social</h2>
    <div class="hp-insta">
      ${[HP.oysters, HP.lobster, HP.dessert, HP.grill].map((img) => `<a href="${HP_INSTAGRAM}" target="_blank" rel="noreferrer"><img src="${img}" alt="Ember on Instagram" loading="lazy"></a>`).join("")}
    </div>
    <div style="margin-top:50px">${hpBtn("Follow us", HP_INSTAGRAM, "", 'target="_blank" rel="noreferrer"')}</div>
  </section>`;

const hpTab = () => `<a class="hp-tab font-rethink-sans" href="/reservations/" aria-label="Reserve a table">Reserve</a>`;
// ===== END HOME PAGE v3 =====

// ===== MENU PAGES v2 =====
const HM_I = (n) => (n.includes(".") ? `/img/${n}` : `/img/EMBERTOORAK-WEB-${n}.jpg`);;
const HM_POOL = ["024","030","049","157","145","182","118","162","130","195","092","007"].map(HM_I);
// first match wins; anything else cycles through HM_POOL
const HM_CAT_IMG = [
  ["snacks","WAGYU_CHARCHUTERIE_MAYURABRESAOLA.jpeg"], ["starters","SHORTWAGYURIBSCROQUETTE.jpeg"], ["entree","030"], ["small to share","130"],
  ["pasta","145"], ["o'connor","steakssection.jpeg"], ["sharing","118"], ["westholme","170"],["ember","123"],
  ["sauces","191"], ["sides","130"], ["crowd","049"], ["dessert","100"],
  ["little guests","121"], ["mains","157"],["o'connor","SHORT_WAGYU_RIBS_CROQUETTE.jpeg"], ["lunch:mains","121"],
["set:mains","121"],['raw','020']
];
const hmImg = (title, i, off = 0, pid = "") => {
  const t = title.toLowerCase();
  const hit = HM_CAT_IMG.find(([k]) => k === `${pid}:${t}`) || HM_CAT_IMG.find(([k]) => t.includes(k));
  return hit ? HM_I(hit[1]) : HM_POOL[(i + off) % HM_POOL.length];
};
const hmSlug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
// turns "(GF)" into a small gold tag
const hmName = (s) => s.replace(/\(([A-Z][A-Z, ]*)\)/g, '<span class="hm-tag">$1</span>');

const hmStyles = () => `
<style>
  html{scroll-behavior:smooth}
  .hm-page{--hm-head:80px;--hm-nav:54px;background:#061d15;color:#f4ead6;padding-top:var(--hm-head)}
  @media(min-width:640px){.hm-page{--hm-head:96px}}

  /* sticky category bar */
  .hm-subnav{position:sticky;top:var(--hm-head);z-index:40;height:var(--hm-nav);display:flex;align-items:center;gap:30px;padding:0 24px;overflow-x:auto;white-space:nowrap;scrollbar-width:none;background:rgba(4,21,15,.96);backdrop-filter:blur(8px);border-top:1px solid rgba(184,137,56,.25);border-bottom:1px solid rgba(184,137,56,.25)}
  .hm-subnav::-webkit-scrollbar{display:none}
  .hm-subnav a:first-child{margin-left:auto}
  .hm-subnav a:last-child{margin-right:auto}
  .hm-subnav a{flex:none;padding:6px 0;font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:#cfc5b2;text-decoration:none;border-bottom:1px solid transparent;transition:color .3s,border-color .3s}
  .hm-subnav a:hover,.hm-subnav a.on{color:#f4ead6;border-bottom-color:#d4a24f}

  /* hero */
  .hm-hero{max-width:62rem;margin:0 auto;padding:90px 24px 84px;text-align:center}
  .hm-eyebrow{display:block;margin-bottom:20px;font-size:.7rem;font-weight:600;letter-spacing:.38em;text-transform:uppercase;color:#d4a24f}
  .hm-hero h1{margin:0;font-weight:400;font-size:clamp(2.6rem,6vw,5rem);line-height:1}
  .hm-price{margin:22px 0 0;font-size:.8rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#d4a24f}
  .hm-intro{margin:22px auto 0;max-width:42rem;font-size:1rem;line-height:1.9;color:#e3d8c6}
  .hm-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin-top:34px}
  .hm-switch{display:inline-flex;flex-wrap:wrap;justify-content:center;margin-top:44px;border:1px solid rgba(184,137,56,.6)}
  .hm-switch a{padding:15px 26px;font-size:.72rem;letter-spacing:.24em;text-transform:uppercase;color:#f4ead6;text-decoration:none;transition:background .3s,color .3s}
  .hm-switch a+a{border-left:1px solid rgba(184,137,56,.6)}
  .hm-switch a:hover,.hm-switch a.on{background:#b88938;color:#061d15}

  /* buttons */
  .hm-btn{position:relative;display:inline-flex;align-items:center;gap:14px;padding:16px 28px;font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:#f4ead6;border:1px solid rgba(212,162,79,.75);text-decoration:none;overflow:hidden;isolation:isolate;transition:color .45s,border-color .45s}
  .hm-btn::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#b88938,#e6bd6c);transform:translateX(-101%);transition:transform .6s cubic-bezier(.7,0,.2,1)}
  .hm-btn:hover{color:#061d15;border-color:#e6bd6c}
  .hm-btn:hover::before{transform:translateX(0)}
  .hm-btn.solid{background:#b88938;color:#061d15;border-color:#b88938}
  .hm-btn.solid::before{background:#061d15}
  .hm-btn.solid:hover{color:#f4ead6;border-color:#061d15}
  .hm-arrow{position:relative;display:inline-block;width:28px;height:1px;background:currentColor;transition:width .45s}
  .hm-arrow::after{content:"";position:absolute;right:0;top:-3px;width:7px;height:7px;border-top:1px solid currentColor;border-right:1px solid currentColor;transform:rotate(45deg)}
  .hm-btn:hover .hm-arrow{width:48px}

  /* panel header (set menu page) */
  .hm-panel{scroll-margin-top:calc(var(--hm-head) + var(--hm-nav))}
  .hm-panel-head{max-width:46rem;margin:0 auto;padding:90px 24px 70px;text-align:center;border-top:1px solid rgba(184,137,56,.25)}
  .hm-panel-head h2{margin:0;font-weight:400;font-size:clamp(2.2rem,4.4vw,3.8rem);line-height:1.05}

  /* category split */
  .hm-sec{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(184,137,56,.15);scroll-margin-top:calc(var(--hm-head) + var(--hm-nav))}
  .hm-sec.hm-flip .hm-media{order:2}
  .hm-media{position:relative}
  .hm-media-in{position:sticky;top:calc(var(--hm-head) + var(--hm-nav));height:calc(100vh - var(--hm-head) - var(--hm-nav));height:calc(100svh - var(--hm-head) - var(--hm-nav));overflow:hidden}
  .hm-media-in img{width:100%;height:100%;object-fit:cover}
  .hm-list{display:flex;align-items:center;background:#04150f;min-height:calc(100vh - var(--hm-head) - var(--hm-nav));min-height:calc(100svh - var(--hm-head) - var(--hm-nav))}
  .hm-sec.hm-flip .hm-list{background:#061d15}
  .hm-list-in{width:100%;max-width:640px;margin:0 auto;padding:84px 40px}
  .hm-h{margin:0;text-align:center;font-weight:400;font-size:clamp(2.2rem,3.6vw,3.4rem);line-height:1.1}
  .hm-dots{width:min(380px,70%);height:0;margin:22px auto 38px;border-top:5px dotted #b88938}
  .hm-note{margin:-6px 0 34px;text-align:center;font-style:italic;font-size:.9rem;line-height:1.7;color:#d4a24f}
  .hm-sub{margin:52px 0 16px;text-align:center;font-weight:400;font-size:1.7rem;color:#d4a24f}
  .hm-sub+.hm-note{margin:0 0 28px}
  .hm-item{margin-bottom:24px}
  .hm-row{display:flex;align-items:baseline;gap:14px}
  .hm-row h4{margin:0;font-size:1rem;font-weight:500;letter-spacing:.01em;color:#f7eddc;transition:color .3s}
  .hm-item:hover .hm-row h4{color:#e6bd6c}
  .hm-lead{flex:1;min-width:20px;border-bottom:1px solid rgba(184,137,56,.5);transform:translateY(-4px)}
  .hm-pr{font-size:1rem;font-weight:500;color:#f4ead6;white-space:nowrap}
  .hm-item p{margin:7px 0 0;max-width:34rem;font-size:.88rem;line-height:1.65;color:#d8d0c2}
  .hm-tag{display:inline-block;margin-left:8px;padding:1px 6px;font-size:.6rem;font-weight:600;letter-spacing:.12em;color:#d4a24f;border:1px solid rgba(212,162,79,.5);vertical-align:middle}

  /* /menus/ landing */
  .hm-tri{display:grid;grid-template-columns:repeat(3,1fr);height:calc(100vh - var(--hm-head));height:calc(100svh - var(--hm-head))}
  .hm-tri a{position:relative;display:flex;align-items:flex-end;justify-content:center;overflow:hidden;text-align:center;color:#f4ead6;text-decoration:none;border-right:1px solid rgba(212,162,79,.3)}
  .hm-tri a:last-child{border-right:0}
  .hm-tri img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.6);transition:transform 1.6s ease,filter .8s}
  .hm-tri a::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(3,17,12,.92),rgba(3,17,12,0) 65%)}
  .hm-tri a:hover img{transform:scale(1.07);filter:brightness(.9)}
  .hm-tri-body{position:relative;z-index:2;padding:0 30px 64px}
  .hm-tri h2{margin:0;font-weight:400;font-size:clamp(2rem,3vw,3rem)}
  .hm-tri p{max-width:22rem;margin:14px auto 26px;font-size:.92rem;line-height:1.7;color:#e3d8c6}
  .hm-tri a:hover .hm-btn{color:#061d15;border-color:#e6bd6c}
  .hm-tri a:hover .hm-btn::before{transform:translateX(0)}
  .hm-tri a:hover .hm-arrow{width:48px}

  @media(max-width:900px){
    .hm-sec{grid-template-columns:1fr}
    .hm-sec .hm-media,.hm-sec.hm-flip .hm-media{order:-1}
    .hm-media-in{position:relative;top:0;height:46vh}
    .hm-list{min-height:0}
    .hm-list-in{padding:56px 22px}
    .hm-hero{padding:64px 22px 56px}
    .hm-tri{grid-template-columns:1fr;height:auto}
    .hm-tri a{height:62vh;border-right:0;border-bottom:1px solid rgba(212,162,79,.3)}
  }
</style>`;

const hmBtn = (label, href, variant = "") =>
  `<a class="hm-btn ${variant}" href="${href}">${label}<span class="hm-arrow"></span></a>`;

const hmItem = ([name, desc, price]) => `
  <div class="hm-item">
    <div class="hm-row"><h4>${hmName(name)}</h4>${price ? `<span class="hm-lead"></span><span class="hm-pr">${price}</span>` : ""}</div>
    ${desc ? `<p>${desc}</p>` : ""}
  </div>`;

const hmSection = (cat, img, flip, id) => `
  <section class="hm-sec ${flip ? "hm-flip" : ""}" id="${id}">
    <div class="hm-media"><div class="hm-media-in"><img src="${img}" alt="${cat.title}" loading="lazy"></div></div>
    <div class="hm-list">
      <div class="hm-list-in">
        <h2 class="hm-h font-cormorant-garamond">${cat.title}</h2>
        <div class="hm-dots"></div>
        ${cat.note ? `<p class="hm-note">${cat.note}</p>` : ""}
        ${cat.items.map(hmItem).join("")}
        ${(cat.subsections || []).map((s) => `
          <h3 class="hm-sub font-cormorant-garamond">${s.title}</h3>
          ${s.intro ? `<p class="hm-note">${s.intro}</p>` : ""}
          ${s.items.map(hmItem).join("")}`).join("")}
      </div>
    </div>
  </section>`;

const hmSwitch = (active) => `
  <div class="hm-switch">
    ${[["alacarte","A La Carte","/menus/a-la-carte/"],["lunch","Lunch","/menus/lunch/"],["set","Set Menu","/menus/set-menu/"]]
      .map(([id, label, href]) => `<a class="${active === id ? "on" : ""}" href="${href}">${label}</a>`).join("")}
  </div>`;

// panels: array of menu panels (each has id, label, title, intro, price?, actions?, categories)
const hmPage = (panels, active) => {
  const multi = panels.length > 1;
  const first = panels[0];
  let k = 0;

  const navLinks = multi
    ? panels.map((p) => `<a href="#${p.id}">${p.label}</a>`)
    : first.categories.map((c) => `<a href="#${first.id}-${hmSlug(c.title)}">${c.title}</a>`);

  const body = panels.map((p) => {
    const secs = p.categories.map((c, i) => {
      const img = hmImg(c.title, k++, multi ? 3 : 0, p.id);
      return hmSection(c, img, i % 2 === 0, `${p.id}-${hmSlug(c.title)}`);
    }).join("");
    if (!multi) return secs;
    return `
      <div class="hm-panel" id="${p.id}">
        <div class="hm-panel-head font-rethink-sans">
          <span class="hm-eyebrow">Shared dining</span>
          <h2 class="font-cormorant-garamond">${p.title}</h2>
          <div class="hm-dots"></div>
          ${p.price ? `<p class="hm-price">${p.price}</p>` : ""}
          <p class="hm-intro">${p.intro}</p>
        </div>
        ${secs}
      </div>`;
  }).join("");

  const title = multi ? "Set Menus" : first.title;
  const intro = multi ? "Shared menus for long lunches, intimate dinners and group dining. Choose one entree, one main and one dessert." : first.intro;
  const actions = multi
    ? [["Reserve your table", "/reservations/"], ["Ask about groups", "/contact/"]]
    : (first.actions || []);

  return `
    ${hmStyles()}
    <div class="hm-page font-rethink-sans">
      <nav class="hm-subnav" aria-label="Menu sections">${navLinks.join("")}</nav>
      <header class="hm-hero">
        <span class="hm-eyebrow">Ember on Toorak</span>
        <h1 class="font-cormorant-garamond">${title}</h1>
        ${!multi && first.price ? `<p class="hm-price">${first.price}</p>` : ""}
        <p class="hm-intro">${intro}</p>
        <div class="hm-actions">
          ${actions.map(([label, href], i) => hmBtn(label, href, i === 0 ? "solid" : "")).join("")}
        </div>
        ${hmSwitch(active)}
      </header>
      ${body}
    </div>`;
};

const hmIndex = () => `
  ${hmStyles()}
  <div class="hm-page font-rethink-sans">
    <div class="hm-tri">
      ${[
        ["A La Carte", "Snacks, handmade pasta, steaks from the grill and desserts for the table.", "/menus/a-la-carte/", HM_I("182")],
        ["Lunch", "Monday to Saturday, 11 AM to 3 PM. Two or three courses with a house drink.", "/menus/lunch/", HM_I("145")],
        ["Set Menu", "Shared menus from $95 per person for groups and long dinners.", "/menus/set-menu/", HM_I("130")],
      ].map(([t, d, href, img]) => `
        <a href="${href}">
          <img src="${img}" alt="${t}" loading="lazy">
          <div class="hm-tri-body">
            <span class="hm-eyebrow">Menu</span>
            <h2 class="font-cormorant-garamond">${t}</h2>
            <p>${d}</p>
            <span class="hm-btn">View menu<span class="hm-arrow"></span></span>
          </div>
        </a>`).join("")}
    </div>
  </div>`;
// ===== END MENU PAGES v2 =====
var be={home:()=>`
  ${z()}
  
  ${hpStyles()}
  ${hpDiscover()}
  ${hpVisit()}
  ${hpEmber()}
  ${hpSetMenu()}
  ${hpStory()}
  ${hpTab()}
`,about:()=>`
  ${B(`About Us`,`The room, the grill, the table.`,`Upstairs in Toorak, lunch and dinner move around open flame, seasonal produce, cellar drinks and a room made for lingering.`,n.dining,[[`Reserve a table`,c,`light`],[`View menus`,`/menus/`]])}
  ${H(`Our Story`,`Open flame, produce and the pace of the table.`,[`The kitchen works with premium Australian beef, seafood, handmade pasta and seasonal sides, finished with restraint over heat.`,`Lunch moves with polish and ease; dinner stretches into steak, wine, cocktails and plates shared across the table.`,`The room stays intimate: timber, low light, glassware, the bar close by, and the grill setting the rhythm in the background.`],n.entry)}
  ${U()}
  ${me()}
`,menus: () => hmIndex(),
alacarte: () => hmPage([{ ...h.alacarte, categories: C(h.alacarte) }], "alacarte"),
lunch: () => hmPage([h.lunch], "lunch"),
setMenu: () => hmPage(g, "set"),
drinks:()=>`
  ${B(`From the bar`,`Drinks`,`Cocktails, aperitifs, beer and spirits for the first drink, the last drink, and everything between.`,n.cocktail,[[`Wine list`,`/wine-list/`,`light`],[`Book at the bar`,c]])}
  ${fe(_,!0)}
`,wineList:()=>`
  ${B(`Cellar`,`Wine list.`,`A focused cellar selection for steak, seafood, pasta and the quieter end of the evening.`,n.wine,[[`Drinks`,`/drinks/`,`light`],[`Reserve your table`,c]])}
  ${pe()}
`,experience:()=>`
  ${B(`Ember Experience`,`Fire, craft and private moments.`,`At the centre of Ember is the flame: premium steaks, slow-cooked dishes, handmade pasta, warm service and a bar built for lingering.`,n.grill,[[`View menu`,`/menus/a-la-carte/`,`light`],[`Make an enquiry`,`/contact/`]])}
  ${W()}
  ${G()}
`,reservations:()=>`
  ${B(`Reservations`,`Make a reservation.`,`Ember is open seven days a week for lunch and dinner. Book ahead for weekends, group dining and special occasions.`,n.steak,[[`Call now`,`tel:+61391919973`,`light`],[`Contact`,`/contact/`]])}
  ${Z()}
`,contact:()=>`
  ${B(`Contact`,`Find us in Toorak.`,`For reservations, events and private dining, contact the Ember team directly.`,n.entry,[[`Call`,`tel:+61391919973`,`light`],[`Email`,`mailto:${s.email}`]])}
  ${ve()}
  ${_e()}
  ${Z()}
`},xe=()=>{let e=i[O()]||`home`;return document.title={home:`Ember on Toorak`,about:`About | Ember on Toorak`,menus:`Menus | Ember on Toorak`,alacarte:`A La Carte | Ember on Toorak`,lunch:`Lunch | Ember on Toorak`,setMenu:`Set Menu | Ember on Toorak`,drinks:`Drinks | Ember on Toorak`,wineList:`Wine List | Ember on Toorak`,experience:`Experience | Ember on Toorak`,reservations:`Reservations | Ember on Toorak`,contact:`Contact | Ember on Toorak`}[e]||`Ember on Toorak`,`
    ${I()}
    ${F()}
    <main>${be[e]()}</main>
    ${ye()}
    <div id="siteToast" class="site-toast" role="status" aria-live="polite" aria-atomic="true">
      <p id="siteToastTitle" class="font-rethink-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#f7eddc]">Enquiry sent</p>
      <p id="siteToastMessage" class="mt-1 font-rethink-sans text-sm leading-6 text-[#d8d0c2]">Thanks, we will be in touch shortly.</p>
    </div>
    <div id="lightbox" class="fixed inset-0 z-[80] hidden bg-[#050b08]/90 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Gallery image preview">
      <button id="lightboxClose" class="magnetic absolute right-5 top-5 border border-white/30 px-4 py-3 font-rethink-sans text-sm text-[#f4ead6]" type="button">Close</button>
      <img id="lightboxImage" class="mx-auto h-full max-h-[92vh] w-full max-w-6xl object-contain" alt="">
    </div>
  `};document.body.className=`bg-[#061d15] font-rethink-sans antialiased`,document.querySelector(`#app`).innerHTML=xe();var Se=()=>{let e=document.querySelector(`#mobileMenu`),t=document.querySelector(`#menuToggle`),n=document.querySelector(`#siteHeader`);t?.addEventListener(`click`,()=>{let r=!e.classList.contains(`hidden`);e.classList.toggle(`hidden`,r),t.setAttribute(`aria-expanded`,String(!r)),n?.classList.toggle(`menu-open`,!r)})},Ce=()=>{let e=document.querySelector(`#siteHeader`),t=()=>e?.classList.toggle(`is-scrolled`,window.scrollY>32);t(),window.addEventListener(`scroll`,t,{passive:!0})},we=()=>{let e=O();document.querySelectorAll(`.nav-link`).forEach(t=>{let n=t.dataset.path;(n===e||n===`/menus/`&&e.startsWith(`/menus/`)||n===`/drinks/`&&e===`/wine-list/`)&&t.classList.add(`text-[#d4a24f]`,`underline`)})},Te=()=>{let e=document.querySelectorAll(`.reveal, section h2, section article, .menu-line`);if(!e.length)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12});e.forEach(e=>{e.classList.add(`reveal`),e.getBoundingClientRect().top<window.innerHeight*.92?e.classList.add(`is-visible`):t.observe(e)})},Q,$=({title:e,message:t,type:n=`success`})=>{let r=document.querySelector(`#siteToast`),i=document.querySelector(`#siteToastTitle`),a=document.querySelector(`#siteToastMessage`);!r||!i||!a||(i.textContent=e,a.textContent=t,r.dataset.type=n,r.classList.add(`is-visible`),clearTimeout(Q),Q=window.setTimeout(()=>{r.classList.remove(`is-visible`)},4600))};Se(),Ce(),we(),document.querySelectorAll(`form[data-contact-form]`).forEach(e=>{e.addEventListener(`submit`,async e=>{e.preventDefault();let t=e.currentTarget,n=t.querySelector(`button[type="submit"]`),r=n?.textContent||`Send enquiry`;n&&(n.disabled=!0,n.textContent=`Sending...`);try{let e=await fetch(t.action,{method:`POST`,body:new FormData(t),headers:{Accept:`application/json`}}),n=await e.json();if(!e.ok||!n.success)throw Error(n.message||`Submission failed`);t.reset(),$({title:`Enquiry sent`,message:`Thank you. The Ember team will be in touch shortly.`})}catch{$({title:`Could not send`,message:`Please try again, or call the restaurant directly.`,type:`error`})}finally{n&&(n.disabled=!1,n.textContent=r)}})}),(()=>{let e=document.querySelector(`#lightbox`),t=document.querySelector(`#lightboxImage`),n=document.querySelector(`#lightboxClose`);document.querySelectorAll(`.gallery-item`).forEach(n=>{n.addEventListener(`click`,()=>{t.src=n.dataset.gallery,e.classList.remove(`hidden`),document.body.classList.add(`overflow-hidden`)})});let r=()=>{e.classList.add(`hidden`),t.removeAttribute(`src`),document.body.classList.remove(`overflow-hidden`)};n?.addEventListener(`click`,r),e?.addEventListener(`click`,t=>{t.target===e&&r()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&!e?.classList.contains(`hidden`)&&r()})})(),Te(),(()=>{if(!window.matchMedia(`(pointer:fine)`).matches)return;let e=document.querySelector(`.cursor-dot`),t=document.querySelector(`.cursor-ring`),n=window.innerWidth/2,r=window.innerHeight/2,i=n,a=r,o=()=>{i+=(n-i)*.18,a+=(r-a)*.18,e.style.transform=`translate3d(${n}px, ${r}px, 0)`,t.style.transform=`translate3d(${i}px, ${a}px, 0)`,requestAnimationFrame(o)};window.addEventListener(`mousemove`,e=>{n=e.clientX,r=e.clientY}),document.querySelectorAll(`a, button, input, textarea, .gallery-item`).forEach(e=>{e.addEventListener(`mouseenter`,()=>document.body.classList.add(`cursor-active`)),e.addEventListener(`mouseleave`,()=>document.body.classList.remove(`cursor-active`))}),o()})(),document.querySelectorAll(`.interactive-hero`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width,i=(t.clientY-n.top)/n.height;e.style.setProperty(`--mx`,`${r*100}%`),e.style.setProperty(`--my`,`${i*100}%`),e.style.setProperty(`--rx`,`${(i-.5)*-7}deg`),e.style.setProperty(`--ry`,`${(r-.5)*9}deg`),e.querySelectorAll(`.hero-float`).forEach(e=>{let t=Number(e.dataset.depth||10);e.style.transform=`translate3d(${(r-.5)*t}px, ${(i-.5)*t}px, 0)`})}),e.addEventListener(`pointerleave`,()=>{e.style.setProperty(`--mx`,`50%`),e.style.setProperty(`--my`,`50%`),e.style.setProperty(`--rx`,`0deg`),e.style.setProperty(`--ry`,`0deg`)})}),window.matchMedia(`(pointer:fine)`).matches&&document.querySelectorAll(`.tilt-card`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.transform=`perspective(900px) rotateX(${i*-4}deg) rotateY(${r*5}deg) translateY(-2px)`}),e.addEventListener(`pointerleave`,()=>{e.style.transform=``})}),window.matchMedia(`(pointer:fine)`).matches&&document.querySelectorAll(`.magnetic`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left-n.width/2,i=t.clientY-n.top-n.height/2;e.style.transform=`translate(${r*.08}px, ${i*.08}px)`}),e.addEventListener(`pointerleave`,()=>{e.style.transform=``})});

  (() => {
  const nav = document.querySelector(".hm-subnav");
  if (!nav) return;
  const links = [...nav.querySelectorAll("a")];
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const targets = [...map.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const a = map.get(e.target.id);
      links.forEach((l) => l.classList.toggle("on", l === a));
      if (a) nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.clientWidth / 2, behavior: "smooth" });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  targets.forEach((t) => io.observe(t));
})();