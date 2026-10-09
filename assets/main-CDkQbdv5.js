(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>({menuPanels:[{id:`alacarte`,label:`A La Carte`,title:`A La Carte Menu`,intro:`Fire-led dining with a relaxed, generous pace. Share oysters, handmade pasta, charred sides, steaks from the grill, and desserts made for the last glass at the table.`,actions:[[`Reserve your table`,`/reservations/`],[`Drinks pairing`,`/drinks/`]],images:[e.oysters,e.lobster,e.spread],categories:[{title:`Snacks`,items:[[`House Baked Brioche`,`Garlic butter, honey, parmesan cheese, thyme sea salt`,`$12`],[`Warm Olives (V, VG, GF)`,`Marinated Mount Zero olives, olive oil, chilli, garlic, oregano and lemon zest`,`$9`],[`Charred Spicy Edamame (VO, GF)`,`Fermented chilli jam`,`$9`],[`Sydney Rock Oysters (GF)`,`Merimbula, NSW, Champagne mignonette`,`$6 ea`]]},{title:`Starters`,items:[[`Yellowtail Kingfish (GF)`,`Yellowtail kingfish, citrus dressing, garlic creme fraiche, chilli, pickle radish`,`$28`],[`Grilled King Prawns (GFO)`,`Kampot pepper butter, grilled pita bread`,`$32`],[`Crispy Calamari`,`Yuzu aioli, shaved fennel and cucumber`,`$19`],[`Chicken Skewers (GF)`,`Coal roasted chicken thigh fillets, hot sauce, furikake, crispy shallots, spring onion`,`$24`],[`Mayura 'Signature' MB9+ Bresaola (GF)`,`Cabot cheddar, house pickle`,`$26`],[`Grilled Hokkaido Scallops (GF)`,`Adobo butter, parsley`,`$28`],[`Wagyu Tartare (GF)`,`Hand-cut wagyu rump, traditional condiments, soy cured yolk, horseradish cream, aged Parmesan and crispy potato`,`$28`],[`Wagyu Short Rib Croquettes`,`Gentlemen's relish, Davidson plum, parmesan`,`$26`],[`Heirloom Beetroots (VG, VO, GFO)`,`Burnt honey, goat's curd, walnut, tapioca crisps`,`$24`]]},{title:`Mains From The Ember`,note:`Finished on Hibachi grill`,items:[[`Coal-Roasted Chicken (GFO)`,`Lime and coconut laksa, grilled pita bread, crispy curry leaves`,`$42`],[`Gundagai Lamb (GF)`,`Marinated lamb rack, chimichurri, creamy mash, red wine jus`,`$52`],[`Wagyu Meat & Bone Marrow Burger (GFO)`,`Mayura wagyu patty, lettuce, pickled cucumber, crispy onions, burger sauce, melted cheese, toasted brioche bun, crispy chips`,`$36`],[`Slow Roasted Beef Short Ribs (GF)`,`Red wine jus, puffed wild rice, creamy mash, honey glazed carrot`,`$54`],[`Wood-Fire Harissa Swordfish (GF)`,`Capsicum and fennel piperade, olives, dill, capers and chives`,`$46`],[`Pork Tomahawk (GF)`,`Caramelised apple, pickle fennel, mustard jus`,`$52`]]},{title:`Handmade Pasta`,items:[[`Goat Cheese Tortellini (VG)`,`Brown butter, sage, sultanas, hazelnut, aged parmesan`,`$42`],[`Braised Lamb Gnocchi`,`Butter fried gnocchi, slow braised lamb ragu, gremolata, parmesan cheese`,`$44`],[`Lobster Linguine`,`Half lobster, prawn, scallops, calamari, confit cherry tomato, dill, hint of chilli, bisque reduction`,`$56`]]},{title:`Steaks`,note:`All steaks are finished over the Hibachi charcoal grill with our umami house signature basting. Served with your choice of crispy chips, mash, or Cos and radicchio salad.`,items:[[`O'Connor Eye Fillet 200g MB2+`,`Grain fed 240 days. Recommended medium rare.`,`$64`],[`O'Connor T-Bone 800g MB3+`,`Grain fed 240 days. Recommended medium rare / medium.`,`$99`],[`O'Connor Striploin 350g MB2+`,`Grain fed 240 days. Recommended medium rare / medium.`,`$67`],[`O'Connor Rib-Eye 400g MB2+`,`Grain fed 240 days. Recommended medium.`,`$89`],[`O'Connor Scotch Fillet 350g`,`Recommended medium.`,`$79`],[`Tomahawk 1.3kg MB3+`,`Serves two. Served with charred sprouting cauliflower, Cos and radicchio salad, choice of chips or mash, and choice of two sauces.`,`$219`],[`Westholme Wagyu Striploin 300g MB5+`,`Grain fed 450 days. Recommended medium rare / medium.`,`$89`],[`Westholme Wagyu Scotch Fillet 300g MB5+`,`Grain fed 450 days. Recommended medium rare.`,`$92`],[`Westholme Wagyu Rump 500g MB5+`,`Grain fed 450 days. Recommended medium rare / medium.`,`$94`]]},{title:`Sauces`,items:[[`Creamy Mushroom`,``,`$5`],[`Peppercorn`,``,`$5`],[`Fermented Chilli (GF)`,``,`$5`],[`Chimichurri (GF)`,``,`$5`],[`Red Wine Jus`,``,`$7`],[`Garlic & Herb Butter (GF)`,``,`$5`],[`Bearnaise (GF)`,``,`$5`],[`Mustard Selection (GF)`,`Dijon, seeded, French, hot English`,`$5`]]},{title:`Favourite Sides`,items:[[`Charred Sprouting Cauliflower (VG, GF)`,`Fermented chilli butter, almonds`,`$18`],[`Charred Honey Carrot (VG, GF)`,`Fresh mint, salsa macha`,`$18`],[`Brussels Sprouts (VG, GF)`,`Burnt butter, hot honey, pomegranate, crispy pancetta`,`$18`],[`Cos & Radicchio Salad (GF)`,`Radish, cucumber, herbs, onion, cherry tomatoes, verjuice dressing`,`$14`],[`Chips`,``,`$10`],[`Mash (GFO)`,``,`$12`]]},{title:`Desserts`,items:[[`Basque Cheesecake (GF)`,`Vanilla cream, macerated strawberries`,`$18`],[`Dark Chocolate Delice`,`Dulce de leche, raspberry compote, hazelnut crisp, peanut butter gelato`,`$19`],[`Sticky Date Pudding`,`Salted caramel ice cream, caramel sauce, macadamia praline and cinnamon creme anglaise`,`$19`],[`Duo Of Sorbet (V, GF)`,`Blood orange or mango, berries`,`$12`]]},{title:`For Our Little Guests`,note:`Served with chips`,items:[[`Cheese Burger (GFO)`,``,`$22`],[`Gnocchi (VG)`,`Napoli sauce and parmesan`,`$16`],[`Chicken Skewer (GF)`,``,`$19`]]}]},{id:`set`,label:`Ember Experience`,navLabel:`Set Menu`,title:`Ember Experience Menu`,price:`$95 per person`,intro:`A shared menu for long lunches, intimate dinners and group dining. Choose one entree, one main and one dessert.`,actions:[[`Reserve your table`,`/reservations/`],[`Explore experience`,`/experience/`]],images:[e.spread,e.chicken,e.steak],categories:[{title:`Entree`,note:`Choice of one`,items:[[`Sydney Rock Oysters (GF) 4 pcs`,`Merimbula, NSW, Champagne mignonette`,``],[`Wagyu Short Rib Croquettes`,`Gentlemen's relish, Davidson plum, parmesan`,``],[`Heirloom Beetroots (VG, VO, GFO)`,`Burnt honey, goat's curd, walnut, tapioca crisps`,``],[`Crispy Calamari`,`Yuzu aioli, shaved fennel and cucumber`,``]]},{title:`Mains`,note:`Choice of one`,items:[[`Coal-Roasted Chicken (GFO)`,`Lime and coconut laksa, grilled pita bread, crispy curry leaves`,``],[`Goat Cheese Tortellini (VG)`,`Brown butter, sage, sultanas, hazelnut, aged parmesan`,``],[`Braised Lamb Gnocchi`,`Butter fried gnocchi, slow braised lamb ragu, gremolata, parmesan cheese`,``],[`Wagyu Rump 250g MB5+ (GF)`,`Recommended medium rare / medium`,``],[`O'Connor Striploin 350g MB2+ (GF)`,`Recommended medium rare / medium`,``],[`Swordfish Skewer (GF)`,`Capsicum and fennel piperade, olives, dill, capers and chives`,``]]},{title:`Desserts`,note:`Choice of one`,items:[[`Sticky Date Pudding`,`Salted caramel ice cream, caramel sauce, macadamia praline and cinnamon creme anglaise`,``],[`Duo Of Sorbet (V, GF)`,`Blood orange or mango, berries`,``]]}]},{id:`lunch`,label:`Lunch`,title:`Lunch Menu`,intro:`Monday to Saturday, 11:00 AM - 3:00 PM. Not available on Sunday or public holidays. Feed Me is served with a glass of carefully chosen house wine, beer or soft drink.`,price:`Two courses with house drink $49 | Three courses with house drink $56`,actions:[[`Reserve lunch`,`/reservations/`],[`A la carte`,`/menus/a-la-carte/`]],images:[e.dining,e.pasta,e.chicken],categories:[{title:`Small To Share`,items:[[`House Baked Brioche`,`Garlic butter, honey, parmesan cheese, thyme sea salt`,`$12 ea`],[`Crispy Calamari`,`Yuzu aioli, shaved fennel and cucumber`,`$16`],[`Sydney Rock Oysters (GF) - 3 pcs`,`Merimbula, NSW, Champagne mignonette`,`$18`],[`Chicken Skewers (GF)`,`Coal roasted chicken thigh fillets, hot sauce, furikake, crispy shallots, spring onion`,`$14`],[`Mayura 'Signature' MB9+ Bresaola (GF)`,`Cabot cheddar, house pickle`,`$19`],[`Wagyu Short Rib Croquettes`,`Gentlemen's relish, Davidson plum, parmesan`,`$16`]]},{title:`Mains`,items:[[`Coal-Roasted Chicken (GFO)`,`Lime and coconut laksa, grilled pita bread, crispy curry leaves`,`$42`],[`Slow Cooked Beef Cheek (GF)`,`Creamy potato mash, honey glazed carrot, kale, crispy onion, chimichurri, red wine jus`,`$39`],[`Wagyu Burger (GFO)`,`Mayura wagyu patty, lettuce, pickled cucumber, crispy onions, burger sauce, melted cheese, toasted brioche bun, crispy chips`,`$34`],[`200g Eye Of Rump (GF)`,`Basted in house signature basting, served with choice of crispy chips or Cos and radicchio salad`,`$39`],[`Herb Crumbed Snapper`,`Yuzu aioli, crispy capers, lemon, crispy chips`,`$36`],[`Braised Lamb Linguine`,`Slow cooked lamb shoulder in rich San Marzano tomato, hint of fresh chilli, chimichurri, Grana Padano cheese`,`$34`],[`Poke Bowl (VO, VGO, GF)`,`Brown rice, quinoa, edamame, carrot, shaved fennel, apple, goji berries, pomegranate, almonds, mixed seeds, goat cheese, soft boiled egg and honey mustard dressing. Add chicken, cured kingfish or haloumi.`,`$29`],[`Gnocchi`,`Butter fried gnocchi, sage cream, a touch of Napoli, garlic and parmesan cheese`,`$32`]]},{title:`Crowd's Favourite`,note:`Does not include Feed Me.`,items:[[`Seafood Linguine (GFO)`,`Sauteed tiger prawn meat, scallops, calamari, lobster bisque, cherry tomatoes, capers, garlic, touch of chilli`,`$44`],[`Veal Cotoletta`,`Herb crumbed and lightly fried, parmesan cheese, crispy caper and sage, served with fennel slaw and choice of a sauce`,`$48`]]},{title:`Sauces`,items:[[`Garlic & Herb Butter`,``,``],[`Creamy Mushroom`,``,``],[`Green Peppercorn`,``,``],[`Red Wine Jus`,``,``]]},{title:`Desserts`,note:`Choose one`,items:[[`Sticky Date Pudding`,`Salted caramel ice cream, caramel sauce, macadamia praline and cinnamon creme anglaise`,``],[`Duo Of Sorbet (V, GF)`,`Blood orange or mango, berries`,``]]}]},{id:`drinks`,label:`Drinks`,title:`Drinks List`,intro:`Cocktails, martinis, mocktails, beer, cider, soft drinks, hot drinks and spirits from the bar. Wine by the glass and wine by the bottle live in their own cellar list.`,actions:[[`Book at the bar`,`/reservations/`],[`Wine list`,`/wine-list/`]],images:[e.cocktail,e.wine,e.oysters],categories:[{title:`Aperitifs / Digestifs Cocktails`,items:[[`Ember Spritz`,`Sparkling wine, Marionette Bitter, Autonomy Davo plum and house-made bergamot syrup`,`$18`],[`Clarified Alexander`,`Brandy, Ruby Port, lemon juice, citrus, demerara syrup and creme de cacao`,`$20`],[`Amaro Saluto`,`Montenegro, apricot, orgeat and freshly squeezed lime juice`,`$21`]]},{title:`Signature Cocktails`,items:[[`Fig and Lime Daiquiri`,`Bacardi, fig liqueur, freshly squeezed lime juice and simple syrup`,`$21`],[`White Beauty`,`Absolut Vodka, Yuzu Shu, Cointreau, Chardonnay verjus and Wonderfoam`,`$21`],[`Mezcal Margarita`,`Tequila, mezcal, house-made watermelon cordial, citrus and simple syrup`,`$21`],[`Winter Bloom`,`House dry gin, house ginger and honey cordial, citrus and simple syrup`,`$20`],[`Clarified New York Sour`,`House whiskey, freshly squeezed lemon juice, lactic acid, Shiraz, citrus and simple syrup`,`$20`]]},{title:`Barrel Cocktails`,items:[[`Charred and Smoked Old Fashioned`,`Whiskey, wattle seed, macadamia and French oak wood chips`,`$28`],[`Embers Aged Negroni`,`Dry gin, Antica Formula and Campari`,`$21`]]},{title:`Chilled Martini`,items:[[`Denver's Martini`,`Dry gin, fruit and herbs Sgroppino, basil oil`,`$21`]]},{title:`Non-Alcoholic Mocktails`,note:`Add any house spirit and make it a cocktail for $7.`,items:[[`Floral Garden`,`Seedlip Garden, house-made cordial, apple juice and Wonderfoam`,`$16`],[`Pineapple Sour`,`Sustainable orange cordial, citrus, pineapple juice, Angostura Bitters and lemonade`,`$14`],[`Watermelon Spritz`,`House watermelon cordial, raspberry syrup, citrus and soda water`,`$14`]]},{title:`Beer`,items:[[`Great Northern`,``,`$12`],[`Peroni`,``,`$13`],[`Corona`,``,`$12`],[`Cascade Light`,``,`$12`],[`Carlton Draught`,``,`$13`],[`Little Creatures`,``,`$12`],[`VB`,``,`$13`],[`Obrien Gluten Free Lager`,``,`$14`]]},{title:`Cider, Tap Beer & Non-Alcoholic`,items:[[`Hillbilly Crushed Apple Cider`,``,`$13`],[`Hillbilly Crushed Pear Cider`,``,`$13`],[`Heaps Normal`,``,`$12`],[`Moo Brew Pilsner`,`425 ml, Tasmania, Australia`,`$14`],[`Coopers Pale Ale`,`425 ml, Adelaide, South Australia`,`$15`]]},{title:`Soft Drinks`,items:[[`Coca Cola / Coke No Sugar / Sprite / Fanta`,``,`$6`],[`Dry Ginger Ale / Tonic Water / Soda Water`,``,`$6.50`],[`Apple Juice / Orange Juice / Cranberry Juice / Pineapple Juice`,`Kids $4`,`$7`],[`Iced Chocolate / Iced Coffee / Iced Mocha`,``,`$8.50`]]},{title:`Hot Drinks`,items:[[`Short Macchiato`,``,`$4`],[`Long Macchiato`,``,`$5`],[`Espresso`,``,`$4`],[`Long Black`,``,`$5`],[`Piccolo`,``,`$4`],[`Latte / Cappuccino / Flat White`,`Extra shot, decaf or mocha +$0.50`,`$5.50`],[`Hot Chocolate`,``,`$5`],[`Spiced Chai (Powder)`,``,`$6`],[`Affogato`,`Add favourite liqueur: Baileys, Kahlua or Frangelico +$8`,`$7`]]},{title:`Vodka`,items:[[`Absolut Vodka`,``,`$14`],[`Grey Goose Vodka`,``,`$16`],[`Hartshorn Sheep Whey Vodka`,`Tasmania`,`$18`]]},{title:`Gin`,items:[[`Archie Rose 'Signature Dry' Gin`,`Rosebery`,`$13`],[`Melbourne Gin Company 'Dry'`,`Gembrook Hill`,`$14`],[`Four Pillars`,``,`$14`],[`Tanqueray Gin`,`London`,`$14`],[`Patient Wolf Dry Gin`,``,`$15`],[`Hendrick's`,`Scotland`,`$15`],[`Bombay Sapphire`,`London`,`$15`],[`Four Pillars 'Bloody Shiraz'`,`Healesville`,`$15`],[`Plymouth Sloe Gin`,``,`$15`],[`Gordon's Pink Gin`,``,`$15`]]},{title:`Bourbon, Whisky & Cognac`,items:[[`Jim Beam`,``,`$13`],[`Jack Daniels`,``,`$14`],[`Woodford Reserve`,``,`$14`],[`Makers Mark`,``,`$14`],[`Eagle Rare 10 Years Old Bourbon`,``,`$16`],[`Johnnie Walker Red Label`,``,`$13`],[`Johnnie Walker 12 Black Label`,``,`$14`],[`Canadian Club`,``,`$14`],[`Jameson Irish Whiskey`,``,`$14`],[`Singleton Malt Master Whiskey`,``,`$14`],[`Morris Signature Single Malt`,`Rutherglen`,`$14`],[`Monkey Shoulder Blended Malt`,``,`$14`],[`Starward Two-Fold Double Grain Whiskey`,`Melbourne`,`$15`],[`Gospel Solera Rye Whiskey`,``,`$15`],[`Glenfiddich 12 Years Old`,``,`$16`],[`Laphroaig 10 Years Old`,``,`$18`],[`Macallan 12 Years Old`,``,`$20`],[`Lark Distillery Symphony`,``,`$22`],[`Johnnie Walker Blue Label`,``,`$35`],[`Nikka From The Barrel`,``,`$18`],[`Hibiki Harmony`,``,`$28`],[`St Agnes VS Brandy`,``,`$13`],[`Hennessy VS`,``,`$14`],[`Martell VSOP`,``,`$16`],[`Hennessy XO`,``,`$38`]]},{title:`Rum, Tequila & Mezcal`,items:[[`Bacardi`,``,`$13`],[`Diplomatico Planas Rum`,``,`$14`],[`Bundaberg Rum`,``,`$12`],[`Captain Morgan Spiced Rum`,``,`$14`],[`Flor de Cana 12 Years Old Centenario`,``,`$16`],[`El Jimador`,``,`$14`],[`Don Julio Blanco`,``,`$14`],[`Don Julio Reposado`,``,`$14`],[`1800 Tequila Coconut`,``,`$14`],[`Metoro Mezcal`,``,`$15`],[`Del Maguey Mezcal Vida`,``,`$16`],[`Fortaleza Tequila Blanco`,``,`$18`],[`Clase Azul Reposado`,``,`$38`]]},{title:`Amaro, Bitters & Liqueurs`,items:[[`Martini Rosso`,``,`$12`],[`Aperol`,``,`$12`],[`Campari`,``,`$12`],[`Autonomy Davo Plum Aperitivo`,``,`$12`],[`Montenegro`,``,`$12`],[`Ramazotti Amaro`,``,`$13`],[`Averna`,``,`$14`],[`Braulio Amaro`,``,`$14`],[`Fernet Branca`,``,`$14`],[`Cointreau`,``,`$14`],[`Chambord`,``,`$14`],[`Baileys`,``,`$12`],[`Kahlua`,``,`$12`],[`Triple Sec`,``,`$12`],[`Drambuie`,``,`$14`],[`Frangelico`,``,`$14`],[`Brookies Mac`,``,`$13`],[`Luxardo Maraschino`,``,`$14`],[`VOK Blue Curacao`,``,`$12`],[`Malibu`,``,`$12`],[`Midori`,``,`$12`],[`Jagermeister`,``,`$13`],[`Disaronno Amaretto`,``,`$12`],[`Marionette Apricot Brandy`,``,`$12`],[`White Possum Dark Cacao Liqueur`,``,`$12`]]}]}],setMenuTwoPanel:{id:`setUltimate`,label:`Ultimate Dining`,title:`Ember Ultimate Dining Experience`,price:`$110 per person`,intro:`A broader shared menu with oysters, Hokkaido scallops, charcoal chicken, O'Connor beef and flame-led mains.`,actions:[[`Reserve your table`,`/reservations/`],[`Ask about groups`,`/contact/`]],images:[e.spread,e.scallops,e.beef,e.chicken],categories:[{title:`Entree`,note:`Choice of one`,items:[[`Sydney Rock Oysters (GF) 4 pcs`,`Merimbula, NSW, Champagne mignonette`,``],[`Grilled Hokkaido Scallops (GF)`,`Adobo butter, parsley`,``],[`Chicken Skewers (GF)`,`Coal roasted chicken thigh fillets, hot sauce, furikake, crispy shallots, spring onion`,``],[`Heirloom Beetroots (VG, VO, GFO)`,`Burnt honey, goat's curd, walnut, tapioca crisps`,``],[`Crispy Calamari`,`Yuzu aioli, shaved fennel and cucumber`,``]]},{title:`Mains`,note:`Choice of one`,items:[[`Coal-Roasted Chicken (GFO)`,`Lime and coconut laksa, grilled pita bread, crispy curry leaves`,``],[`Goat Cheese Tortellini (VG)`,`Brown butter, sage, sultanas, hazelnut, aged parmesan`,``],[`Gundagai Lamb (GF)`,`Marinated lamb rack, chimichurri, creamy mash, red wine jus`,``],[`Swordfish Skewer (GF)`,`Capsicum and fennel piperade, olives, dill, capers and chives`,``],[`O'Connor Striploin 350g MB2+ (GF)`,`Recommended medium rare / medium`,``],[`O'Connor Scotch Fillet 350g MB2+ (GF)`,`Recommended medium`,``]]},{title:`Desserts`,note:`Choice of one`,items:[[`Dark Chocolate Delice`,`Dulce de leche, raspberry compote, hazelnut crisp, peanut butter gelato`,``],[`Sticky Date Pudding`,`Salted caramel ice cream, caramel sauce, macadamia praline and cinnamon creme anglaise`,``]]}]},wineByGlassCategories:[{title:`Rose & Sparkling`,items:[[`2024 La Galope Rose`,`Cotes de Gascogne, South West France`,`$16`],[`2025 Bandini Prosecco`,`Veneto, Italy`,`$15`],[`Champagne Taittinger Brut Reserve`,`Reims, Champagne, France`,`$28`]]},{title:`Whites`,items:[[`2025 Catalina Sounds Sauvignon Blanc`,`Marlborough, New Zealand`,`$16`],[`2023 Coeur des Sages Macon Village Chardonnay`,`Southern Burgundy, France`,`$18`],[`2025 Fiano Tellurian`,`Heathcote, Victoria, Australia`,`$16`],[`2025 Maude Pinot Gris`,`Central Otago, New Zealand`,`$16`]]},{title:`Reds`,items:[[`2023 Indigo Vineyard Pinot Noir`,`Beechworth, Victoria, Australia`,`$18`],[`2023 Moppity Atrius Tempranillo`,`Hilltops, NSW`,`$16`],[`2023 Seppeltsfield Shiraz`,`Barossa Valley, South Australia`,`$18`],[`2022 Pennys Hill Cab Sav Edwards Road`,`McLaren Vale, South Australia`,`$18`]]},{title:`Sweet & Fortified`,note:`Served 90 ml.`,items:[[`2025 Maxwell Spiced Mead`,`McLaren Vale, South Australia`,`$14`],[`2025 Rutherglen Muscadelle Topaque`,`Rutherglen, Victoria, Australia`,`$14`],[`2025 Rutherglen Tawny`,`Rutherglen, Victoria, Australia`,`$14`]]}],wineBottleCategories:[{title:`Sparkling & Champagnes`,items:[[`2023 Copabella Single Vineyard Prosecco`,`Tumbarumba Region, New South Wales`,`$75`],[`Bandini Prosecco`,`Veneto, Italy`,`$85`],[`Tar & Roses Prosecco`,`King Valley, Victoria`,`$85`],[`Andre de Lorme Sparkling Blanc de Blancs`,`Burgundy, France`,`$85`],[`Balgownie Brut`,`Yarra Valley, Victoria`,`$85`],[`Coeur des Sages 'Le Joueur' Blanc de Blancs Brut`,`Burgundy, France`,`$110`],[`Patrick Piuze Traditional Method Blanc de Blancs`,`Burgundy, France`,`$130`],[`Champagne Taittinger Brut Reserve`,`Reims, Champagne, France`,`$165`],[`Champagne Louis Roederer Brut Vintage`,`Champagne, France`,`$390`]]},{title:`Rose`,items:[[`2024 La Galope Rose`,`Gascony, South West France`,`$80`],[`Non-Vintage Bistrologie Rose`,`Languedoc, France`,`$80`],[`2025 Woodstock Rose 'Run Free'`,`McLaren Vale, South Australia`,`$90`],[`2025 Rameau d'Or Rose`,`Cotes de Provence, France`,`$105`]]},{title:`Sauvignon Blanc`,items:[[`2025 Catalina Sounds Sauvignon Blanc`,`Marlborough, New Zealand`,`$75`],[`2024 Jules Taylor Sauvignon Blanc`,`Marlborough, New Zealand`,`$80`],[`2022 Barringwood Sauvignon Blanc`,`Tasmania, Australia`,`$90`],[`2024 Cullen Elvie Clarke Sauvignon Blanc`,`Margaret River, Western Australia`,`$120`]]},{title:`Pinot Gris / Grigio`,items:[[`2025 Maude Pinot Gris`,`Central Otago, New Zealand`,`$75`],[`2025 Indigo Vineyard Blue Label Pinot Grigio`,`Beechworth, Victoria`,`$80`],[`2024 Tar & Roses Pinot Grigio`,`Central Victoria, Australia`,`$85`],[`2022 Il Casato Pinot Grigio`,`Trentino-Alto Adige / Valdadige DOC, Northern Italy`,`$95`],[`2025 Shadowfax Macedon Pinot Gris`,`Macedon Ranges, Victoria`,`$110`],[`2022 Jos Meyer Pinot Gris Le Fromenteau`,`Alsace, France`,`$140`]]},{title:`Riesling`,items:[[`2019 Seville Estate Riesling`,`Upper Yarra Valley, Victoria, Australia`,`$80`],[`2023 Weingut Huls Riesling`,`Mosel, Germany`,`$95`],[`2023 Staffelter Hof Magnus Riesling`,`Mosel, Germany`,`$120`],[`2021 Joseph Cattin Hatchbourg Grand Cru Riesling`,`Alsace, France`,`$190`]]},{title:`Chardonnay`,items:[[`2025 Singlefile Chardonnay`,`Great Southern, Western Australia`,`$80`],[`2024 Indigo Umpires Decision Chardonnay`,`Beechworth, Victoria, Australia`,`$90`],[`2023 Indigo Vineyard Secret Village Series Chardonnay`,`Beechworth, Victoria, Australia`,`$105`],[`2024 Luna Estate Single Vineyard Chardonnay Eclipse`,`Martinborough, New Zealand`,`$110`],[`2022 Santolin Single Vineyard Chardonnay`,`Yarra Valley, Victoria, Australia`,`$120`],[`2024 Holmes Oak Chardonnay`,`Tamar Valley, Tasmania`,`$125`],[`2025 Singlefile Family Reserve Chardonnay`,`Great Southern, Western Australia`,`$130`],[`2024 Giant Steps Circle of Fifths Chardonnay`,`Yarra Valley, Victoria, Australia`,`$140`],[`2025 Shaw + Smith M3 Chardonnay`,`Adelaide Hills, South Australia`,`$160`],[`2024 Dexter Chardonnay`,`Mornington Peninsula, Victoria, Australia`,`$160`],[`2024 Holmes Oak Wizard Chardonnay`,`Tamar Valley, Tasmania`,`$180`],[`2022 Shadowfax Mid Hill Chardonnay`,`Macedon Ranges, Victoria, Australia`,`$190`],[`2024 Shaw + Smith M3 Chardonnay Magnum`,`Adelaide Hills, South Australia`,`$320`]]},{title:`Old World Chardonnay / Chablis`,items:[[`2023 Coeur des Sages Macon Villages Chardonnay`,`Burgundy, France`,`$90`],[`2023 Dans Air du Temps Chardonnay`,`Languedoc-Roussillon, France`,`$120`],[`2023 Millebuis Bourgogne Cote Chalonnaise`,`South Burgundy, France`,`$140`],[`2023 Chateau de Maligny Petit Chablis`,`Chablis, Burgundy, France`,`$160`],[`2024 Domaine Laroche Chablis St Martin`,`Chablis, Burgundy, France`,`$180`],[`2022 Bouchard Pere & Fils Beaune du Chateau Blanc Premier Cru`,`Cote de Beaune, Burgundy, France`,`$290`]]},{title:`White Varietals`,items:[[`2025 Fiano Tellurian`,`Heathcote, Victoria, Australia`,`$75`],[`2024 Hahndorf Hill Gruner Veltliner Gru`,`Hahndorf, Adelaide Hills, South Australia`,`$75`],[`2025 First Creek Semillon`,`Hunter Valley, NSW, Australia`,`$80`],[`2024 Tellurian Estate Marsanne`,`Heathcote, Victoria, Australia`,`$85`],[`2024 Jules Taylor Gruner Veltliner`,`Marlborough, New Zealand`,`$90`],[`2022 Cantina di Soave Soave Lorenzo Classico DOC`,`Veneto, Italy`,`$90`],[`2023 Moppity Block Gewurztraminer Block C11B`,`Tumbarumba, New South Wales`,`$95`],[`2024 Jerzu Antichi Poderi Telave Vermentino di Sardegna DOC`,`Sardinia, Italy`,`$105`],[`2024 Gomez Cruzado Blanco Rioja DOC`,`La Rioja, Spain`,`$160`]]},{title:`New World Pinot Noir`,items:[[`2023 Indigo Vineyard Pinot Noir`,`Beechworth, Victoria, Australia`,`$85`],[`2021 Luna Estate Eclipse Pinot Noir`,`Martinborough, Wairarapa, New Zealand`,`$90`],[`2025 Domenica Gamay`,`Beechworth, North East Victoria, Australia`,`$100`],[`2021 Merricks Estate Pinot Noir`,`Mornington Peninsula, Victoria, Australia`,`$120`],[`2024 Giant Steps Circle of Fifths Pinot Noir`,`Yarra Valley, Victoria`,`$150`],[`2024 Shaw and Smith Pinot Noir`,`Adelaide Hills, South Australia`,`$160`],[`2024 Yabby Lake Single Vineyard Pinot Noir`,`Mornington Peninsula, Victoria, Australia`,`$210`]]},{title:`Old World Pinot Noir`,items:[[`2024 Reverie Gamay`,`Languedoc-Roussillon, Southern France`,`$90`],[`2023 Coeur des Sages Beaujolais Villages Gamay`,`Beaujolais, France`,`$120`],[`2022 Domaine de la Vougeraie Terre de Famille Pinot Noir`,`Burgundy, France`,`$150`],[`2022 Domaine Bertrand Mercurey Rouge La Pidancerie`,`South Burgundy, France`,`$280`],[`2022 Bouchard Pere & Fils Beaune Teurons Premier Cru`,`Burgundy, France, Cote d'Or`,`$360`]]},{title:`Shiraz`,items:[[`2023 Seppeltsfield Shiraz`,`Barossa Valley, South Australia`,`$85`],[`2022 Eldorado Road Beechworth Syrah`,`Beechworth, Victoria, Australia`,`$90`],[`2024 Two Hands Angels' Share Shiraz`,`McLaren Vale, South Australia`,`$95`],[`2022 Tellurian Tranter Shiraz`,`Heathcote, Victoria, Australia`,`$110`],[`2023 Maxwell Shiraz Ellen Street`,`McLaren Vale, South Australia`,`$110`],[`2020 Seville Estate Shiraz`,`Upper Yarra Valley, Victoria, Australia`,`$130`],[`2023 Delas Freres Saint-Joseph Les Challeys`,`Northern Rhone, France`,`$140`],[`2023 Tomfoolery Black & Blue Shiraz`,`Barossa Valley, Australia`,`$150`],[`2023 Turkey Flat Estate Shiraz`,`Barossa Valley, South Australia`,`$160`],[`2022 Shaw + Smith Shiraz`,`Adelaide Hills, South Australia`,`$160`],[`2023 Henschke Tappa Pass Shiraz`,`Barossa Valley, South Australia`,`$310`]]},{title:`Cabernet Sauvignon`,items:[[`2022 Pennys Hill Edward Road Cabernet Sauvignon`,`McLaren Vale, South Australia`,`$85`],[`2023 Penny's Hill Single Vineyard Cabernet Sauvignon`,`McLaren Vale, South Australia`,`$95`],[`2022 Chateau Carbonneau Verriere Rouge`,`Bordeaux, France`,`$140`],[`2022 Kendall-Jackson Vintner's Reserve Cabernet Sauvignon`,`Sonoma County, California, USA`,`$150`],[`2018 Juniper Wilyabrup Cabernet Sauvignon`,`Wilyabrup, Margaret River, Western Australia`,`$180`],[`2022 Henschke Marble Angel Cabernet Sauvignon`,`Barossa Valley, South Australia`,`$210`]]},{title:`Blend Wines`,items:[[`2023 Moppity Atrius Tempranillo`,`Hilltops, NSW, Australia`,`$85`],[`2023 Clarendon Hills Grenache 'Domaine Clarendon'`,`Blewitt Springs, McLaren Vale, South Australia`,`$85`],[`2022 Moppity Atrius GSM`,`Hilltops, NSW, Australia`,`$90`],[`2022 Bodegas Enguera Megala Monastrell-Tempranillo`,`Valencia, Spain`,`$95`],[`2023 Eldora Road Nero d'Avola / Shiraz / Durif`,`Northeast Victoria, Australia`,`$100`],[`2024 Clos St Jean Vin de Pays Caucluse Rouge`,`IGP Vaucluse, Southern Rhone, France`,`$105`],[`2024 La Boca 'Las Calles' Malbec`,`Uco Valley, Mendoza, Argentina`,`$110`],[`2022 Le Baron de Mallaret`,`Haut-Medoc, Bordeaux, France`,`$110`],[`2025 Woodstock Grenache Townsend`,`McLaren Vale, South Australia`,`$110`],[`2019 Medoc Chateau Loirac Cru Bourgeois`,`Medoc, Bordeaux, France`,`$120`],[`2022 BenMarco Malbec`,`Uco Valley, Mendoza, Argentina`,`$120`],[`2024 Condie Giarracca Sangiovese`,`Heathcote, Central Victoria, Australia`,`$130`],[`2023 Le Ragnaie Il Troncone Sangiovese Toscana IGT`,`Montalcino, Tuscany, Italy`,`$140`],[`2019 Poggio Landi Brunello di Montalcino DOC`,`Tuscany, Italy`,`$170`],[`2022 Chateau Lilian Ladouys`,`Saint-Estephe, Bordeaux, France`,`$190`],[`2023 Bruno Rocca Nebbiolo Langhe Fralu`,`Piedmont, Italy`,`$210`],[`2021 Giovanni Rosso Barolo del Comune di Serralunga d'Alba DOCG`,`Serralunga d'Alba, Piedmont, Italy`,`$290`]]},{title:`Sweet & Fortified`,items:[[`2024 Maxwell Spiced Mead`,`McLaren Vale, South Australia`,`$55`],[`2025 Kismet Moscato`,`Victoria, Australia`,`$65`],[`2025 Rutherglen Tawny`,`Rutherglen, Victoria, Australia`,`$65`],[`2025 Rutherglen Muscadelle Topaque`,`Rutherglen, Victoria, Australia`,`$80`],[`2024 Borgo Maragliano La Caliera Moscato d'Asti DOCG`,`Piedmont, Northwest Italy`,`$95`]]},{title:`Half Bottle Wines`,items:[[`2022 Fringe Societe Pinot Noir Pay's Doc`,`Southwest France`,`$45`],[`2017 Cullen Semillon / Sauvignon Blanc`,`Margaret River, Western Australia`,`$50`],[`2022 Sauternes Le Tertre du Lys d'Or`,`Bordeaux, France`,`$55`],[`2024 Aix - Maison Saint Aix Rose AOP`,`Coteaux d'Aix-en-Provence, France`,`$60`],[`2022 Pressing Matters Riesling R139`,`Coal River Valley, Tasmania`,`$65`],[`2022 Henschke 'Keyneton Euphonium' Shiraz Cabernet Blend`,`Eden Valley and Barossa Valley, South Australia`,`$75`]]}]}),t=e=>`/img/${e}`,n={hero:t(`EMBERTOORAK-WEB-006.jpg`),entry:t(`EMBERTOORAK-WEB-010.jpg`),dining:t(`EMBERTOORAK-WEB-007.jpg`),privateDining:t(`EMBERTOORAK-WEB-005.jpg`),oysters:t(`EMBERTOORAK-WEB-024.jpg`),cocktail:t(`EMBERTOORAK-WEB-044.jpg`),lobster:t(`EMBERTOORAK-WEB-049.jpg`),scallops:t(`EMBERTOORAK-WEB-030.jpg`),grill:t(`EMBERTOORAK-WEB-092.jpg`),steakFlame:t(`EMBERTOORAK-WEB-118.jpg`),spread:t(`EMBERTOORAK-WEB-130.jpg`),pasta:t(`EMBERTOORAK-WEB-145.jpg`),chicken:t(`EMBERTOORAK-WEB-157.jpg`),steak:t(`EMBERTOORAK-WEB-182.jpg`),beef:t(`EMBERTOORAK-WEB-162.jpg`),dessert:t(`EMBERTOORAK-WEB-195.jpg`),wine:t(`EMBERTOORAK-WEB-199.jpg`)},r=[n.privateDining,n.entry,n.dining,n.grill],i={"/":`home`,"/about/":`about`,"/menus/":`menus`,"/menus/a-la-carte/":`alacarte`,"/menus/lunch/":`lunch`,"/menus/set-menu/":`setMenu`,"/drinks/":`drinks`,"/wine-list/":`wineList`,"/experience/":`experience`,"/reservations/":`reservations`,"/contact/":`contact`},a=[[`Home`,`/`],[`About Us`,`/about/`],[`Menus`,`/menus/`],[`Drinks`,`/drinks/`],[`Experience`,`/experience/`],[`Contact`,`/contact/`]],o=[[`A La Carte`,`/menus/a-la-carte/`,`alacarte`],[`Lunch`,`/menus/lunch/`,`lunch`],[`Set Menu`,`/menus/set-menu/`,`set`]],s={address:`Level 1, 32 Jackson St, Toorak VIC 3142`,phone:`+61 3 9191 9973`,email:`embertoorak@gmail.com`},c=encodeURIComponent(s.address),l=`https://www.google.com/maps?q=${c}&output=embed`,u=`https://www.google.com/maps/search/?api=1&query=${c}`,d=[[`Monday - Thursday`,`11:00 AM - 9:00 PM`],[`Friday - Saturday`,`11:00 AM - 10:00 PM`],[`Sunday`,`11:00 AM - 9:00 PM`]],{menuPanels:f,setMenuTwoPanel:ee,wineByGlassCategories:p,wineBottleCategories:m}=e(n),h=Object.fromEntries(f.map(e=>[e.id,e])),g=[h.set,ee],te={...h.drinks,label:`From the bar`,title:`Cocktails, Spirits & Beer`,intro:`Cocktails, chilled martinis, aperitifs, beer, cider, soft drinks and spirits. The wine list is kept separate so it can breathe like a cellar document.`,actions:[[`Wine list`,`/wine-list/`],[`Book at the bar`,`/reservations/`]],categories:h.drinks.categories};n.wine,n.oysters,n.spread,[...p,...m];var _={id:`wineGlass`,label:`By the glass`,title:`Wine By The Glass`,intro:`Rose, sparkling, Champagne, whites, reds and sweet pours selected for a single glass at the table.`,actions:[],images:[n.wine,n.oysters,n.spread],categories:p},ne={id:`wineBottle`,label:`By the bottles`,title:`Wine By The Bottles`,intro:`Sparkling, Champagne, rose, white, red, sweet and half-bottle selections from the cellar list.`,actions:[],images:[n.wine,n.privateDining,n.spread,n.oysters,n.cocktail],categories:m},v=o.map(([,,e])=>h[e]).filter(Boolean),y=e=>o.find(([,,t])=>t===e)?.[1]||`/menus/`,b={alacarte:[n.oysters,n.scallops,n.lobster,n.chicken,n.pasta,n.steak,n.steakFlame,n.spread,n.dessert],lunch:[n.dining,n.pasta,n.chicken,n.beef,n.dessert],set:[n.spread,n.chicken,n.steak,n.wine],setUltimate:[n.spread,n.scallops,n.beef,n.chicken],drinks:[n.cocktail,n.wine,n.privateDining],wine:[n.wine,n.oysters,n.spread,n.cocktail,n.privateDining],wineGlass:[n.wine,n.oysters,n.spread],wineBottle:[n.wine,n.privateDining,n.spread,n.oysters,n.cocktail]},x=(e,t=0)=>{let n=b[e.id]||e.images;return n[t%n.length]},S={alacarte:{Snacks:n.oysters,"Mains From The Ember":n.chicken,"O'Connor Steaks":n.steak,"Westholme Wagyu":n.beef,Desserts:n.dessert},lunch:{"Small To Share":n.pasta,Mains:n.chicken,"Crowd's Favourite":n.beef},set:{Entree:n.spread,Mains:n.chicken},setUltimate:{Entree:n.scallops,Mains:n.beef},drinks:{"Signature Cocktails":n.cocktail,Beer:n.privateDining,"Bourbon, Whisky & Cognac":n.wine},wineGlass:{"Rose & Sparkling":n.wine},wineBottle:{"Sparkling & Champagnes":n.wine,Chardonnay:n.oysters,"New World Pinot Noir":n.privateDining,Shiraz:n.spread}},C=(e,t)=>S[e.id]?.[t.title]||null,w=e=>{if(e.id!==`alacarte`)return e.categories;let t=[];return e.categories.forEach(e=>{if(e.title!==`Steaks`){t.push(e);return}let n=e.items.filter(([e])=>e.startsWith(`O'Connor`)),r=e.items.filter(([e])=>e.includes(`Tomahawk`)),i=e.items.filter(([e])=>e.startsWith(`Westholme`));t.push({title:`O'Connor Steaks`,note:`O'Connor is a Victorian beef producer from Gippsland, selected for pasture-raised character, consistency and a clean finish over the grill. The beef carries depth without heavy handling: sea salt, heat, rest, and the right sauce.`,items:n}),t.push({title:`Sharing Steaks`,note:`Built for the centre of the table. Larger cuts hold heat beautifully, carve cleanly and turn dinner into a slower, more generous steakhouse experience.`,items:r}),t.push({title:`Westholme Wagyu`,note:`Westholme Wagyu is chosen for marbling, texture and measured richness that still feels balanced beside Ember's sauces and sides.`,items:i})}),t},T=[n.dining,n.entry,n.oysters,n.cocktail,n.grill,n.steakFlame,n.spread,n.pasta,n.chicken,n.steak,n.beef,n.dessert,n.wine,n.privateDining],E=`magnetic inline-flex min-h-12 items-center justify-center border border-[#b88938] px-7 py-3 font-rethink-sans text-sm text-[#f4ead6] transition duration-300 hover:bg-[#b88938] hover:text-[#062218] focus:outline-none focus:ring-2 focus:ring-[#d3aa62] focus:ring-offset-2 focus:ring-offset-[#062218]`,D=`magnetic inline-flex min-h-12 items-center justify-center bg-[#b88938] px-8 py-3 font-rethink-sans text-sm text-[#061d15] transition duration-300 hover:bg-[#d4a24f] focus:outline-none focus:ring-2 focus:ring-[#d3aa62] focus:ring-offset-2 focus:ring-offset-[#061d15]`,re=`magnetic inline-flex min-h-12 items-center justify-center border border-[#b88938]/70 px-8 py-3 font-rethink-sans text-sm text-[#f4ead6] transition duration-300 hover:bg-[#b88938] hover:text-[#061d15]`,O=`font-rethink-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4a24f] sm:text-xs`,k=()=>{let e=window.location.pathname;return i[e]?e:!e.endsWith(`/`)&&i[`${e}/`]?`${e}/`:`/`},A=(e,t=`h-5 w-5`)=>`<svg class="${t}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${{instagram:`
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
    `,phone:`
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
    `}[e]}</svg>`,j=(e=``)=>`
  <a href="/" class="inline-flex h-20 w-20 items-center justify-center p-2 sm:h-24 sm:w-24 ${e}" aria-label="Home">
    <img class="h-full w-full object-contain" src="/ember-logo.png" alt="Ember on Toorak">
  </a>
`,M=()=>`
  <a href="/" class="inline-flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32" aria-label="Home">
    <img class="h-full w-full object-contain" src="/ember-logo.png" alt="Ember on Toorak">
  </a>
`,N=(e=``)=>`
  <span class="flex h-12 w-12 items-start justify-center overflow-hidden ${e}" aria-hidden="true">
    <img class="h-[4.5rem] w-[4.5rem] object-contain opacity-90 drop-shadow-[0_0_18px_rgba(212,162,79,0.18)]" src="/ember-logo.png" alt="">
  </span>
`,P=(e=!1)=>a.map(([t,n])=>t===`Menus`?e?`
            <div class="border-y border-white/10 py-3">
              <a class="nav-link block text-lg font-rethink-sans text-[#f7eddc] underline-offset-8 transition hover:text-[#d4a24f] hover:underline" href="${n}" data-path="${n}">Menus</a>
              <div class="mt-3 grid gap-2 pl-4">
                ${o.map(([e,t])=>`<a class="block py-1 font-rethink-sans text-sm text-[#d4a24f] underline-offset-4 transition hover:text-[#f7eddc] hover:underline" href="${t}">${e}</a>`).join(``)}
              </div>
            </div>
          `:`
          <div class="group relative">
            <a class="nav-link inline-flex items-center gap-1 text-sm font-rethink-sans text-[#f7eddc] underline-offset-8 transition hover:text-[#d4a24f] hover:underline" href="${n}" data-path="${n}">
              Menus ${A(`chevron`,`h-4 w-4`)}
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
      `).join(``),F=(e,t,n,r=``)=>`
  <a class="magnetic group inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#f7eddc] transition duration-300 hover:border-[#b88938] hover:bg-[#b88938] hover:text-[#061d15]" href="${t}" aria-label="${e}" ${r}>
    ${A(n,`h-5 w-5 transition duration-300 group-hover:scale-110`)}
  </a>
`,I=()=>`
  <header id="siteHeader" class="site-header fixed inset-x-0 top-0 z-50">
    <div class="mx-auto grid h-20 max-w-7xl grid-cols-[auto_auto] items-center justify-between px-5 sm:h-24 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
      ${j(`justify-self-start`)}
      <nav class="hidden items-center justify-center gap-8 lg:flex">${P()}</nav>
      <div class="hidden items-center justify-end gap-3 lg:flex">
        ${F(`Instagram`,`https://www.instagram.com/`,`instagram`,`target="_blank" rel="noreferrer"`)}
        <a class="magnetic inline-flex min-h-12 items-center justify-center border border-[#b88938]/75 bg-[#b88938] px-7 font-rethink-sans text-sm text-[#061d15] transition duration-300 hover:bg-transparent hover:text-[#f7eddc]" href="/reservations/">Reservations</a>
      </div>
      <button id="menuToggle" class="magnetic flex h-11 w-11 items-center justify-center justify-self-end border border-white/20 text-[#f7eddc] sm:h-12 sm:w-12 lg:hidden" type="button" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false">
        ${A(`menu`,`h-5 w-5`)}
      </button>
    </div>
    <div id="mobileMenu" class="hidden border-t border-white/10 bg-[#061d15] px-6 pb-7 lg:hidden">
      ${P(!0)}
      <div class="mt-5 flex gap-3">
        ${F(`Instagram`,`https://www.instagram.com/`,`instagram`,`target="_blank" rel="noreferrer"`)}
        ${F(`Email Ember on Toorak`,`mailto:${s.email}`,`mail`)}
      </div>
      <a class="mt-5 inline-flex min-h-12 items-center justify-center border border-[#b88938]/75 bg-[#b88938] px-7 font-rethink-sans text-sm text-[#061d15]" href="/reservations/">Reservations</a>
    </div>
  </header>
`,L=()=>`
  <div class="cursor-dot" aria-hidden="true"></div>
  <div class="cursor-ring" aria-hidden="true"></div>
`,R=(e=[])=>`
  <div class="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
    ${e.map(([e,t,n=`dark`])=>`<a href="${t}" class="${n===`light`?D:E}">${e}</a>`).join(``)}
  </div>
`,z=({eyebrow:e,title:t,copy:n,image:r,actions:i=[],meta:a=[],tall:o=!0})=>`
  <section class="interactive-hero relative overflow-hidden bg-[#061d15] pt-20 text-[#f7eddc] sm:pt-24" style="--hero-image:url('${r}')">
    <div class="hero-image absolute inset-0 bg-cover bg-center"></div>
    <div class="hero-veil absolute inset-0"></div>
    <div class="hero-spotlight absolute inset-0"></div>
    <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#061d15] to-transparent"></div>
    <div class="relative mx-auto flex ${o?`min-h-[520px] sm:min-h-[calc(92vh-6rem)]`:`min-h-[460px] sm:min-h-[620px]`} max-w-7xl flex-col items-center justify-center px-6 text-center">
      <p class="mb-4 ${O}">${e}</p>
      <h1 class="max-w-5xl font-cormorant-garamond text-4xl leading-none text-[#f8efe1] sm:text-7xl lg:text-8xl">${t}</h1>
      <p class="mt-6 max-w-2xl font-rethink-sans text-sm leading-7 text-[#f0dfbd] sm:mt-8 sm:text-base sm:leading-8">${n}</p>
      ${R(i)}
      ${a.length?`<div class="absolute bottom-10 hidden w-full max-w-5xl grid-cols-3 px-6 font-rethink-sans text-sm text-[#f7eddc] lg:grid">
              ${a.map(([e,t],n)=>`<a class="${n===0?`justify-self-start`:n===a.length-1?`justify-self-end`:`justify-self-center`} underline underline-offset-4 hover:text-[#d4a24f]" href="${t}">${e}</a>`).join(``)}
            </div>`:``}
    </div>
  </section>
`,B=()=>`
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
        <a class="${D}" href="/reservations/">Book now</a>
      </div>
      <p class="mb-8 text-center font-rethink-sans text-xs font-semibold uppercase tracking-[0.36em] text-[#f7eddc]/90">Toorak Steakhouse</p>
      <div class="hidden w-full max-w-5xl grid-cols-3 font-rethink-sans text-sm text-[#f7eddc]/90 lg:grid">
        <a class="justify-self-start underline underline-offset-4 hover:text-[#d4a24f]" href="tel:+61391919973">03 9191 9973</a>
        <a class="justify-self-center underline underline-offset-4 hover:text-[#d4a24f]" href="/reservations/">Lunch & Dinner, 7 days</a>
        <a class="justify-self-end underline underline-offset-4 hover:text-[#d4a24f]" href="/contact/">32 Jackson St, Toorak</a>
      </div>
    </div>
  </section>
`,V=(e,t,n,r,i=[])=>z({eyebrow:e,title:t,copy:n,image:r,actions:i,tall:!1}),H=()=>`
  <section class="border-y border-[#b88938]/20 bg-[#071c15] text-[#f4ead6]">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-32">
      <div>
        <p class="${O}">Welcome to Ember</p>
        <h2 class="mt-4 font-cormorant-garamond text-4xl leading-tight sm:text-6xl">Fire cooking, steady service and a slower table.</h2>
        <div class="mt-7 space-y-4 font-rethink-sans text-sm leading-7 text-[#d9ceba] sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8">
          <p>Steaks are seasoned, rested and finished over heat. Handmade pasta, oysters, slow-cooked cuts and seasonal sides move from the kitchen with a steady rhythm.</p>
          <p>The dining room stays warm and low-lit, with timber, brass, wine glasses and the glow of the grill setting the pace for long lunches and unhurried dinners.</p>
          <p>Service follows the table: drinks before dinner, plates to share, sauces beside the steak, and room for the last pour.</p>
        </div>
        <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a href="/menus/a-la-carte/" class="${D}">View menu</a>
          <a href="/reservations/" class="${re}">Reservations</a>
        </div>
      </div>
      <div class="grid gap-4 sm:grid-cols-[0.8fr_1fr]">
        <img class="tilt-card h-[300px] w-full border border-[#b88938]/25 object-cover shadow-2xl shadow-black/35 sm:h-[480px]" src="${n.entry}" alt="Entrance to Ember on Toorak">
        <img class="tilt-card h-[340px] w-full border border-[#b88938]/25 object-cover shadow-2xl shadow-black/35 sm:mt-20 sm:h-[520px]" src="${n.dining}" alt="Warm dining room at Ember on Toorak">
      </div>
    </div>
  </section>
`,U=(e,t,n,r)=>`
  <section class="relative -mt-16 border-y border-[#b88938]/20 bg-[#0b241b] pt-16 text-[#f4ead6] sm:-mt-20 sm:pt-20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#061d15] via-[#061d15]/70 to-transparent"></div>
    <div class="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center">
      <div>
        <p class="${O}">${e}</p>
        <h2 class="mt-4 font-cormorant-garamond text-4xl leading-tight sm:text-6xl">${t}</h2>
        <div class="mt-7 space-y-4 font-rethink-sans text-sm leading-7 text-[#d9ceba] sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8">
          ${n.map(e=>`<p>${e}</p>`).join(``)}
        </div>
      </div>
      <img class="tilt-card h-[340px] w-full border border-[#b88938]/25 object-cover shadow-2xl shadow-black/35 sm:h-[560px]" src="${r}" alt="${t}">
    </div>
  </section>
`,ie=()=>`
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
          <a href="/drinks/" class="${E} mt-7 sm:mt-8">Drinks menu</a>
        </div>
        <div>
          <h2 class="font-cormorant-garamond text-4xl leading-tight text-[#d4a24f] sm:text-5xl">Events</h2>
          <div class="mt-6 space-y-4 font-rethink-sans text-sm leading-7 text-[#e5dccb] sm:mt-7 sm:space-y-5 sm:text-base sm:leading-8">
            <p>Private dining tables can be set for birthdays, client dinners, family celebrations and group lunches.</p>
            <p>Menus, drinks and timing are shaped around the occasion so the table has structure without feeling staged.</p>
          </div>
          <a href="/reservations/" class="${E} mt-7 sm:mt-8">Make an enquiry</a>
        </div>
      </div>
    </div>
  </section>
`,G=()=>`
  <section class="border-y border-[#b88938]/20 bg-[#071c15] text-[#f4ead6]">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
      <div class="text-center">
        <p class="${O}">Menu pathways</p>
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
`,J=e=>`
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
`,Y=e=>`
  <div>
    ${N()}
    <h3 class="mt-5 font-rethink-sans text-2xl font-light uppercase leading-tight tracking-[0.04em] text-[#f7eddc] sm:text-4xl">${e.title}</h3>
    ${e.note?`<p class="mt-5 border-y border-[#d4a24f]/30 py-5 font-rethink-sans text-sm leading-7 text-[#f4ead6] sm:text-base sm:leading-8">${e.note}</p>`:`<div class="mt-6 h-px bg-[#d4a24f]/30"></div>`}
    ${J(e)}
  </div>
`,ae=(e,t,n)=>{let r=C(e,t),i=n%2==1;return r?`
    <section class="mx-auto grid max-w-7xl gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
      <div class="${i?`lg:order-2`:``}">
        <img class="tilt-card h-[320px] w-full object-cover shadow-2xl shadow-black/35 sm:h-[560px]" src="${r}" alt="${t.title} at Ember">
      </div>
      <div class="${i?`lg:order-1`:``}">
        ${Y(t)}
      </div>
    </section>
  `:`
      <section class="mx-auto max-w-5xl py-9 sm:py-12">
        ${Y(t)}
      </section>
    `},oe=(e,t=!1)=>`
  <div class="mx-auto max-w-5xl text-center">
    ${t?``:N(`mx-auto`)}
    <h2 class="${t?`mt-0`:`mt-8`} font-rethink-sans text-3xl font-light uppercase leading-tight tracking-[0.06em] text-[#f7eddc] sm:text-5xl">${e.title}</h2>
    <div class="mx-auto mt-7 h-px max-w-2xl bg-[#b88938]"></div>
    ${e.price?`<p class="mt-5 font-rethink-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#d4a24f] sm:mt-6">${e.price}</p>`:``}
    <p class="mx-auto ${e.price?`mt-5 sm:mt-6`:`mt-7`} max-w-4xl font-rethink-sans text-xs italic leading-6 text-[#e7ddca] sm:text-sm sm:leading-7">${e.intro}</p>
    ${e.actions?.length?q(e.actions):``}
  </div>
`,X=(e,t=!1,n=!1)=>`
  <div id="menu-panel-${e.id}" class="menu-panel ${t?``:`hidden`}">
    ${oe(e,n)}
    <div class="mt-10 sm:mt-16">
      ${w(e).map((t,n)=>ae(e,t,n)).join(``)}
    </div>
  </div>
`,se=()=>`
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
                <img class="h-60 w-full object-cover transition duration-700 group-hover:scale-[1.025] sm:h-80" src="${x(e,t)}" alt="${e.title}">
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
`,Z=e=>`
  <section class="menu-texture relative overflow-hidden py-16 text-[#f4ead6] sm:py-32">
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8">
      ${K(e.id)}
      <div class="mt-10 sm:mt-16">${X(e,!0)}</div>
    </div>
  </section>
`,ce=()=>`
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
        ${g.map(e=>`<div id="${e.id}" class="scroll-mt-32">${X(e,!0)}</div>`).join(``)}
      </div>
    </div>
  </section>
`,le=(e,t=!1)=>`
  <section class="menu-texture relative overflow-hidden ${t?`-mt-px pb-16 pt-10 sm:pb-28 sm:pt-14`:`py-16 sm:py-28`} text-[#f4ead6]">
    ${t?`<div class="menu-texture-overlay pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#061d15] via-[#061d15]/70 to-transparent"></div>`:``}
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8">${X(e,!0,t)}</div>
  </section>
`,ue=()=>`
  <section class="menu-texture relative -mt-px overflow-hidden pb-16 pt-10 text-[#f4ead6] sm:pb-28 sm:pt-14">
    <div class="menu-texture-overlay pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#061d15] via-[#061d15]/70 to-transparent"></div>
    <div class="relative mx-auto max-w-7xl px-6 sm:px-8">
      <nav class="mx-auto grid max-w-2xl grid-cols-1 border border-[#b88938]/60 sm:grid-cols-2" aria-label="Wine list sections">
        <a class="magnetic inline-flex min-h-12 items-center justify-center border-[#b88938]/60 px-4 py-3 font-rethink-sans text-xs uppercase text-[#f4ead6] transition duration-300 hover:bg-[#b88938] hover:text-[#061d15] sm:border-r" href="#wine-by-the-glass">
          Wine by the glass
        </a>
        <a class="magnetic inline-flex min-h-12 items-center justify-center px-4 py-3 font-rethink-sans text-xs uppercase text-[#f4ead6] transition duration-300 hover:bg-[#b88938] hover:text-[#061d15]" href="#wine-by-the-bottles">
          Wine by the bottles
        </a>
      </nav>
      <div id="wine-by-the-glass" class="mt-12 scroll-mt-32 sm:mt-16">
        ${X(_,!0,!0)}
      </div>
      <div class="mx-auto my-10 h-px max-w-5xl bg-gradient-to-r from-transparent via-[#b88938]/70 to-transparent sm:my-16"></div>
      <div id="wine-by-the-bottles" class="scroll-mt-32">
        ${X(ne,!0,!0)}
      </div>
    </div>
  </section>
`,Q=()=>`
  <section class="bg-[#071c15] py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 sm:px-8">
      <div class="mb-8 flex flex-col justify-between gap-4 sm:mb-12 md:flex-row md:items-end">
        <div>
          <p class="${O}">Gallery</p>
          <h2 class="mt-3 font-cormorant-garamond text-4xl text-[#f4ead6] sm:text-5xl">Inside the room.</h2>
        </div>
        <p class="max-w-md font-rethink-sans text-xs leading-6 text-[#ded4c3] sm:text-sm sm:leading-7">Click any image to bring it forward. Warm timber, open flame, cellar light and quiet corners make up the visual rhythm of Ember.</p>
      </div>
      <div class="grid auto-rows-[132px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
        ${T.map((e,t)=>`<button class="gallery-item group overflow-hidden ${t===0||t===6?`md:col-span-2 md:row-span-2`:t===3||t===10?`md:row-span-2`:``}" type="button" data-gallery="${e}" aria-label="Open gallery image ${t+1}">
              <img class="h-full w-full object-cover transition duration-700 group-hover:scale-110" src="${e}" alt="Ember gallery image ${t+1}">
            </button>`).join(``)}
      </div>
    </div>
  </section>
`,de=()=>`
  <form class="border border-[#b88938]/35 bg-[#061d15]/85 p-6 shadow-2xl shadow-black/25 sm:p-10" name="reservation">
    <div class="grid gap-5 sm:grid-cols-2">
      ${[[`First name`,`text`,`firstName`],[`Last name`,`text`,`lastName`],[`Email`,`email`,`email`],[`Phone`,`tel`,`phone`],[`Guests`,`number`,`guests`],[`Preferred date`,`date`,`date`]].map(([e,t,n])=>`
            <label class="font-rethink-sans text-sm text-[#f4ead6]">${e}
              <input class="mt-2 min-h-12 w-full border border-[#b88938]/30 bg-[#02100c]/50 px-4 text-[#f4ead6] outline-none transition focus:border-[#d4a24f]" type="${t}" name="${n}" ${t===`number`?`min="1"`:``}>
            </label>
          `).join(``)}
    </div>
    <label class="mt-5 block font-rethink-sans text-sm text-[#f4ead6]">Message
      <textarea class="mt-2 min-h-32 w-full border border-[#b88938]/30 bg-[#02100c]/50 px-4 py-3 text-[#f4ead6] outline-none transition focus:border-[#d4a24f]" name="message"></textarea>
    </label>
    <button class="${D} mt-6" type="submit">Submit enquiry</button>
  </form>
`,$=()=>`
  <section class="border-y border-[#b88938]/20 bg-[#0b241b] text-[#f4ead6]">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
      <div>
        <p class="${O}">Reservations</p>
        <h2 class="mt-4 font-cormorant-garamond text-4xl leading-tight sm:text-6xl">Reserve table.</h2>
        <div class="mt-7 space-y-4 font-rethink-sans text-sm leading-7 text-[#d9ceba] sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8">
          <p>Ember is open seven days a week for lunch and dinner. Advance bookings are recommended for weekends, group dining and special occasions.</p>
          <p>For private dining, celebrations or event enquiries, contact the team directly to shape the occasion.</p>
        </div>
        <div class="mt-8 space-y-3 font-rethink-sans text-sm text-[#e6ddcf]">
          ${d.map(([e,t])=>`<div class="grid grid-cols-[1fr_auto] border-b border-[#b88938]/25 py-3"><span>${e}</span><span>${t}</span></div>`).join(``)}
        </div>
      </div>
      ${de()}
    </div>
  </section>
`,fe=()=>`
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
            <h2 class="${O}">Contact Us</h2>
            <div class="mt-4 flex flex-col gap-3">
              <a class="inline-flex items-center gap-3 underline underline-offset-4" href="tel:+61391919973">${A(`phone`)} ${s.phone}</a>
              <a class="inline-flex items-center gap-3 underline underline-offset-4" href="mailto:${s.email}">${A(`mail`)} ${s.email}</a>
            </div>
          </div>
          <div>
            <h2 class="${O}">Opening Hours</h2>
            ${d.map(([e,t])=>`<p class="mt-3">${e}<br>${t}</p>`).join(``)}
          </div>
        </div>
      </div>
      <div class="relative min-h-[440px] overflow-hidden sm:min-h-[620px]">
        <img class="absolute inset-0 h-1/2 w-full object-cover" src="${n.entry}" alt="Ember on Toorak entrance">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-[#061d15]">
          <iframe
            class="h-full w-full border-0"
            title="Map to Ember"
            src="${l}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
          </iframe>
          <a class="magnetic absolute bottom-5 left-5 inline-flex min-h-10 items-center gap-2 border border-[#d4a24f]/70 bg-[#061d15]/85 px-4 font-rethink-sans text-xs text-[#f4ead6] backdrop-blur-sm transition hover:bg-[#b88938] hover:text-[#061d15] sm:bottom-8 sm:left-8 sm:min-h-11 sm:gap-3 sm:px-5 sm:text-sm" href="${u}" target="_blank" rel="noreferrer">
            ${A(`map`,`h-5 w-5`)} Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  </section>
`,pe=()=>`
  <footer class="border-t border-[#b88938]/30 bg-[#04150f] text-[#f4ead6]">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
      <div>${M()}</div>
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
          ${F(`Instagram`,`https://www.instagram.com/`,`instagram`,`target="_blank" rel="noreferrer"`)}
        </div>
      </div>
    </div>
  </footer>
`,me={home:()=>`
  ${B()}
  ${H()}
  ${G()}
  ${$()}
`,about:()=>`
  ${V(`About Us`,`The room, the grill, the table.`,`Upstairs in Toorak, lunch and dinner move around open flame, seasonal produce, cellar drinks and a room made for lingering.`,n.dining,[[`Reserve a table`,`/reservations/`,`light`],[`View menus`,`/menus/`]])}
  ${U(`Our Story`,`Open flame, produce and the pace of the table.`,[`The kitchen works with premium Australian beef, seafood, handmade pasta and seasonal sides, finished with restraint over heat.`,`Lunch moves with polish and ease; dinner stretches into steak, wine, cocktails and plates shared across the table.`,`The room stays intimate: timber, low light, glassware, the bar close by, and the grill setting the rhythm in the background.`],n.entry)}
  ${ie()}
  ${Q()}
`,menus:()=>`
  ${se()}
`,alacarte:()=>Z(h.alacarte),lunch:()=>Z(h.lunch),setMenu:()=>ce(),drinks:()=>`
  ${V(`From the bar`,`Drinks`,`Cocktails, aperitifs, beer and spirits for the first drink, the last drink, and everything between.`,n.cocktail,[[`Wine list`,`/wine-list/`,`light`],[`Book at the bar`,`/reservations/`]])}
  ${le(te,!0)}
`,wineList:()=>`
  ${V(`Cellar`,`Wine list.`,`A focused cellar selection for steak, seafood, pasta and the quieter end of the evening.`,n.wine,[[`Drinks`,`/drinks/`,`light`],[`Reserve your table`,`/reservations/`]])}
  ${ue()}
`,experience:()=>`
  ${V(`Ember Experience`,`Fire, craft and private moments.`,`At the centre of Ember is the flame: premium steaks, slow-cooked dishes, handmade pasta, warm service and a bar built for lingering.`,n.grill,[[`View menu`,`/menus/a-la-carte/`,`light`],[`Make an enquiry`,`/reservations/`]])}
  ${W()}
  ${G()}
`,reservations:()=>`
  ${V(`Reservations`,`Make a reservation.`,`Ember is open seven days a week for lunch and dinner. Book ahead for weekends, group dining and special occasions.`,n.steak,[[`Call now`,`tel:+61391919973`,`light`],[`Contact`,`/contact/`]])}
  ${$()}
`,contact:()=>`
  ${V(`Contact`,`Find us in Toorak.`,`For reservations, events and private dining, contact the Ember team directly.`,n.entry,[[`Call`,`tel:+61391919973`,`light`],[`Email`,`mailto:${s.email}`]])}
  ${fe()}
  ${$()}
`},he=()=>{let e=i[k()]||`home`;return document.title={home:`Ember on Toorak`,about:`About | Ember on Toorak`,menus:`Menus | Ember on Toorak`,alacarte:`A La Carte | Ember on Toorak`,lunch:`Lunch | Ember on Toorak`,setMenu:`Set Menu | Ember on Toorak`,drinks:`Drinks | Ember on Toorak`,wineList:`Wine List | Ember on Toorak`,experience:`Experience | Ember on Toorak`,reservations:`Reservations | Ember on Toorak`,contact:`Contact | Ember on Toorak`}[e]||`Ember on Toorak`,`
    ${L()}
    ${I()}
    <main>${me[e]()}</main>
    ${pe()}
    <div id="lightbox" class="fixed inset-0 z-[80] hidden bg-[#050b08]/90 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Gallery image preview">
      <button id="lightboxClose" class="magnetic absolute right-5 top-5 border border-white/30 px-4 py-3 font-rethink-sans text-sm text-[#f4ead6]" type="button">Close</button>
      <img id="lightboxImage" class="mx-auto h-full max-h-[92vh] w-full max-w-6xl object-contain" alt="">
    </div>
  `};document.body.className=`bg-[#061d15] font-rethink-sans antialiased`,document.querySelector(`#app`).innerHTML=he(),(()=>{let e=document.querySelector(`#mobileMenu`),t=document.querySelector(`#menuToggle`),n=document.querySelector(`#siteHeader`);t?.addEventListener(`click`,()=>{let r=!e.classList.contains(`hidden`);e.classList.toggle(`hidden`,r),t.setAttribute(`aria-expanded`,String(!r)),n?.classList.toggle(`menu-open`,!r)})})(),(()=>{let e=document.querySelector(`#siteHeader`),t=()=>e?.classList.toggle(`is-scrolled`,window.scrollY>32);t(),window.addEventListener(`scroll`,t,{passive:!0})})(),(()=>{let e=k();document.querySelectorAll(`.nav-link`).forEach(t=>{let n=t.dataset.path;(n===e||n===`/menus/`&&e.startsWith(`/menus/`)||n===`/drinks/`&&e===`/wine-list/`)&&t.classList.add(`text-[#d4a24f]`,`underline`)})})(),document.querySelectorAll(`form[name="reservation"]`).forEach(e=>{e.addEventListener(`submit`,e=>{e.preventDefault();let t=e.currentTarget.querySelector(`button[type="submit"]`);t&&(t.textContent=`Enquiry ready to send`)})}),(()=>{let e=document.querySelector(`#lightbox`),t=document.querySelector(`#lightboxImage`),n=document.querySelector(`#lightboxClose`);document.querySelectorAll(`.gallery-item`).forEach(n=>{n.addEventListener(`click`,()=>{t.src=n.dataset.gallery,e.classList.remove(`hidden`),document.body.classList.add(`overflow-hidden`)})});let r=()=>{e.classList.add(`hidden`),t.removeAttribute(`src`),document.body.classList.remove(`overflow-hidden`)};n?.addEventListener(`click`,r),e?.addEventListener(`click`,t=>{t.target===e&&r()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&!e?.classList.contains(`hidden`)&&r()})})(),(()=>{let e=document.querySelectorAll(`.reveal, section h2, section article, .menu-line`);if(!e.length)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12});e.forEach(e=>{e.classList.add(`reveal`),e.getBoundingClientRect().top<window.innerHeight*.92?e.classList.add(`is-visible`):t.observe(e)})})(),(()=>{if(!window.matchMedia(`(pointer:fine)`).matches)return;let e=document.querySelector(`.cursor-dot`),t=document.querySelector(`.cursor-ring`),n=window.innerWidth/2,r=window.innerHeight/2,i=n,a=r,o=()=>{i+=(n-i)*.18,a+=(r-a)*.18,e.style.transform=`translate3d(${n}px, ${r}px, 0)`,t.style.transform=`translate3d(${i}px, ${a}px, 0)`,requestAnimationFrame(o)};window.addEventListener(`mousemove`,e=>{n=e.clientX,r=e.clientY}),document.querySelectorAll(`a, button, input, textarea, .gallery-item`).forEach(e=>{e.addEventListener(`mouseenter`,()=>document.body.classList.add(`cursor-active`)),e.addEventListener(`mouseleave`,()=>document.body.classList.remove(`cursor-active`))}),o()})(),document.querySelectorAll(`.interactive-hero`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width,i=(t.clientY-n.top)/n.height;e.style.setProperty(`--mx`,`${r*100}%`),e.style.setProperty(`--my`,`${i*100}%`),e.style.setProperty(`--rx`,`${(i-.5)*-7}deg`),e.style.setProperty(`--ry`,`${(r-.5)*9}deg`),e.querySelectorAll(`.hero-float`).forEach(e=>{let t=Number(e.dataset.depth||10);e.style.transform=`translate3d(${(r-.5)*t}px, ${(i-.5)*t}px, 0)`})}),e.addEventListener(`pointerleave`,()=>{e.style.setProperty(`--mx`,`50%`),e.style.setProperty(`--my`,`50%`),e.style.setProperty(`--rx`,`0deg`),e.style.setProperty(`--ry`,`0deg`)})}),window.matchMedia(`(pointer:fine)`).matches&&document.querySelectorAll(`.tilt-card`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.transform=`perspective(900px) rotateX(${i*-4}deg) rotateY(${r*5}deg) translateY(-2px)`}),e.addEventListener(`pointerleave`,()=>{e.style.transform=``})}),window.matchMedia(`(pointer:fine)`).matches&&document.querySelectorAll(`.magnetic`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left-n.width/2,i=t.clientY-n.top-n.height/2;e.style.transform=`translate(${r*.08}px, ${i*.08}px)`}),e.addEventListener(`pointerleave`,()=>{e.style.transform=``})});