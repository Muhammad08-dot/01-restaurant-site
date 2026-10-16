/**
 * Single source of truth for restaurant content.
 * Everything the pages render (hours, menu, testimonials, gallery) lives here
 * so copy edits never require touching components.
 */

export const restaurant = {
  name: 'Saffron & Ash',
  tagline: 'A wood-fire kitchen in Portland, cooking the Anatolian table the way it is actually eaten — shared, seasonal, a little smoky.',
  address: {
    street: '214 SE Ash Street',
    city: 'Portland, OR 97214',
    full: '214 SE Ash Street, Portland, OR 97214',
  },
  phone: '(503) 555-0182',
  phoneHref: 'tel:+15035550182',
  email: 'hello@saffronandash.com',
  founded: 2019,
  chef: 'Elif Doğan',
  hours: [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tuesday – Thursday', time: '5:00 pm – 10:00 pm' },
    { days: 'Friday – Saturday', time: '5:00 pm – 11:00 pm' },
    { days: 'Sunday', time: 'Serpme brunch 10:00 am – 2:00 pm · dinner 5:00 pm – 9:00 pm' },
  ],
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-122.669%2C45.504%2C-122.644%2C45.521&layer=mapnik&marker=45.5122%2C-122.6569',
  mapLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=214+SE+Ash+Street+Portland+OR+97214',
} as const;

/** Unsplash photos verified live; each entry is used in a matching context. */
export const photos = {
  heroDish: '1414235077428-338989a2e8c0',      // candlelit plated dish
  diningRoom: '1517248135467-4c7edcad34c4',    // dark wood dining room
  grillRibs: '1544025162-d76694265947',        // wood-grilled ribs board
  winterSalad: '1540189549336-e6e99c3679fe',   // moody kale salad plate
  grilledFish: '1467003909585-2f8a72700288',   // plated salmon, wine beside
  kofte: '1529042410759-befb1204b468',         // grilled köfte on greens
  wineToast: '1510812431401-41d2bd2722f3',     // glasses raised outdoors
  stoneBread: '1509440159596-0249088772ff',    // dark artisan loaves
  sharedTable: '1466978913421-dad2ebd01d17',   // overhead of a shared table
  coffeeToast: '1495474472287-4d71bcdd2085',   // coffee cups raised
  kunefe: '1551024506-0bccd828d307',           // caramel poured over dessert
  serpmeBread: '1482049016688-2d3e1b311543',   // styled breakfast plate
} as const;

export const unsplash = (id: string, w = 1200, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/* ------------------------------------------------------------------ */
/* Menu                                                                */
/* ------------------------------------------------------------------ */

export type MenuItem = {
  name: string;
  sub?: string; // Turkish name or short origin note
  description: string;
  price: number;
  tags?: string[]; // v = vegetarian, vg = vegan, gf = gluten-free, fire = cooked over wood
};

export type MenuCategory = {
  id: string;
  label: string;
  turkish: string;
  note: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'meze',
    label: 'Meze',
    turkish: 'Başlangıçlar',
    note: 'Served at the middle of the table, the way it should be. Order three or four for two people.',
    items: [
      { name: 'Acılı Ezme', sub: 'charred tomato relish', description: 'Tomatoes and peppers blistered over the fire, hand-chopped with pomegranate molasses, sumac and flat-leaf parsley.', price: 11, tags: ['vg', 'gf'] },
      { name: 'Haydari', sub: 'yoghurt & dried mint', description: 'Strained sheep’s-milk yoghurt whipped with garlic and dried mint, finished with a dusting of Aleppo pepper.', price: 10, tags: ['v', 'gf'] },
      { name: 'Fava', sub: 'broad bean purée', description: 'Slow-cooked broad beans pressed with lemon and olive oil, topped with capers and red onion.', price: 12, tags: ['vg', 'gf'] },
      { name: 'Sigara Böreği', description: 'Crisp pastry cigars wound around fresh lor peyniri and parsley, served with hot honey from a Hood River apiary.', price: 12, tags: ['v'] },
      { name: 'Gemici Pastırması', sub: 'cured beef, sesame', description: 'Dry-aged beef shoulder coated in çemen — fenugreek, chilli and garlic — sliced translucent on the mandoline.', price: 16, tags: ['gf'] },
      { name: 'Közde Patlıcan', sub: 'smoked aubergine', description: 'Aubergines buried in the embers until collapsed, dressed with tahini, roasted garlic and nigella.', price: 12, tags: ['vg', 'gf'] },
    ],
  },
  {
    id: 'ates',
    label: 'From the Fire',
    turkish: 'Ateşten',
    note: 'Everything here meets oak and olive-wood embers in the hearth. Allow a little time — the fire sets the schedule.',
    items: [
      { name: 'Adana Köfte', sub: 'hand-minced lamb skewer', description: 'Tail-fat lamb, worked by hand and slapped onto a wide iron skewer, charred over olive wood. Sumac onions, burnt lime, pide.', price: 27, tags: ['fire'] },
      { name: 'Kuzu Şiş', sub: 'marinated lamb chops', description: 'Four lamb chops rested in yoghurt and onion juice, grilled pink-rose. Served with charred peppers and pilav.', price: 34, tags: ['fire', 'gf'] },
      { name: 'Çökertme Tavuk', sub: 'fire chicken & potatoes', description: 'Half chicken brined 12 hours, skin lacquered with butter and pul biber, over thin-fried potatoes and garlic yoghurt.', price: 26, tags: ['fire', 'gf'] },
      { name: 'Çöp Şiş', sub: 'beef fillet skewers', description: 'Six small skewers of dry-aged sirloin, salt and bay leaf only. A test of the fire, not the marinade.', price: 31, tags: ['fire', 'gf'] },
      { name: 'Levrek Buğulama', sub: 'whole sea bass in embers', description: 'Whole Pacific bass packed with lemon, thyme and fennel, steamed in foil on the coals. Opened at the table.', price: 33, tags: ['fire', 'gf'] },
      { name: 'Közlenmiş Sebze', sub: 'ember vegetables', description: 'Whole carrots, beets and leeks roasted in the ash, dressed with pomegranate molasses and pistachio dukkah.', price: 18, tags: ['vg', 'gf', 'fire'] },
    ],
  },
  {
    id: 'mutfak',
    label: 'From the Kitchen',
    turkish: 'Mutfaktan',
    note: 'Pots, pans and the cold side of the pass — the dishes that never see the grill.',
    items: [
      { name: 'Mantı', sub: 'Kayseri dumplings', description: 'Forty small beef dumplings under garlic yoghurt and peppered butter, dried mint scattered over. Sized the way Kayseri insists.', price: 19, tags: [] },
      { name: 'Işkembe', sub: 'tripe soup, late-night classic', description: 'Six-hour beef broth with tripe, vinegar-garlic at the side, red pepper butter. A hangover cure we take seriously.', price: 14, tags: ['gf'] },
      { name: 'Ezogelin Çorbası', description: 'Red lentil, bulgur and dried mint soup thickened the Anatolian way — no flour, just time.', price: 9, tags: ['vg'] },
      { name: 'Karnıyarık', sub: 'stuffed aubergine', description: 'Split aubergine fried then baked with beef, tomato and parsley. Served over bulgur pilav with burnt lemon.', price: 21, tags: [] },
      { name: 'Pilav Üstü Tavuk', sub: 'chicken over rice', description: 'Slow-braised hen thighs on saffron-tinged rice, the broth poured through so every grain tastes of the pot.', price: 23, tags: ['gf'] },
      { name: 'Zeytinyağlı Enginar', sub: 'artichokes, green peas', description: 'Artichoke hearts braised in olive oil with peas, dill and lemon — served cool, the Aegean way.', price: 16, tags: ['vg', 'gf'] },
    ],
  },
  {
    id: 'tatli',
    label: 'Dessert',
    turkish: 'Tatlılar',
    note: 'Small, sharp and sweet. The Turkish coffee arrives unrequested — that is how you know it is time.',
    items: [
      { name: 'Künefe', sub: 'made to order, 20 minutes', description: 'Shredded pastry over Tel cheese, baked in copper, soaked in orange-blossom syrup. Clotted cream and crushed pistachio.', price: 13, tags: ['v'], },
      { name: 'Sütlaç', sub: 'baked rice pudding', description: 'Set in a clay bowl and browned under the grill, the skin wrinkled and bitter-sweet.', price: 9, tags: ['v', 'gf'] },
      { name: 'Kara Orman Baklavası', description: 'Pistachio baklava layers with sour Black Forest cherries — a Gaziantep pastry chef arguing with the Pacific Northwest, and winning.', price: 11, tags: ['v'] },
      { name: 'Ayva Tatlısı', sub: 'quince in red wine', description: 'Poached Oregon quince, reduced wine and a spoon of clotted cream. October through February only.', price: 10, tags: ['v'] },
      { name: 'Turkish Coffee', sub: 'köfte kavurma roast', description: 'Pulled fine in a copper cezve, served with lokum and a glass of water. Ask for it sade if you mean it.', price: 5, tags: ['vg', 'gf'] },
    ],
  },
  {
    id: 'icecek',
    label: 'Drinks',
    turkish: 'İçecekler',
    note: 'A short list: Anatolian grapes, Willamette pinot, a rakı that would pass in Beyoğlu, and things we make in house.',
    items: [
      { name: 'Şıra', sub: 'house pressed grape must', description: 'Cloudy, faintly fizzy, barely sweet. Pressed weekly from Willamette Valley grapes.', price: 7, tags: ['vg'] },
      { name: 'Ayran', description: 'Yoghurt, water, salt — churned to a foam. The only correct partner for the Adana.', price: 5, tags: ['v', 'gf'] },
      { name: 'Türk Kahvesi & Rakı Flight', sub: 'for the table', description: 'Two cezves of coffee, two small pours of Tekirdağ rakı, water and melon.', price: 18, tags: ['vg'] },
      { name: 'Öküzgözü, Elazığ', sub: 'glass / bottle', description: 'Anatolian red, sour-cherry and leather, mild tannin. Grown on ungrafted vines above 800m.', price: 12, tags: ['vg'] },
      { name: 'Nar Şerbeti', sub: 'pomegranate shrub', description: 'Press-juiced pomegranate with sour cherry and mint, over ice. Non-alcoholic, seriously good.', price: 6, tags: ['vg'] },
      { name: 'Saffron Spritz', description: 'House saffron-vermouth cordial, cava, a twist of burnt orange. Our one invention on the list.', price: 13, tags: ['vg'] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    quote:
      'We came for the Adana and stayed for the way the room feels — loud in the right places, candles going out, someone’s grandmother arguing about pilav two tables over. It is the closest thing to eating in Gaziantep that doesn’t involve a plane.',
    name: 'Marcus Bell',
    role: 'Regular since 2020',
    date: 'March 2024',
  },
  {
    quote:
      'I have hosted eleven business dinners in this city and the künefe timing has never once let me down. They cook over fire and still hit every course to the minute. I don’t know how.',
    name: 'Priya Raghavan',
    role: 'Booked the private room for a company dinner',
    date: 'November 2023',
  },
  {
    quote:
      'My husband is from Hatay and is famously impossible about köfte. He went quiet, then asked for the recipe, then went quiet again. From him, that is five stars.',
    name: 'Dana Whitfield',
    role: 'Dined with us in September',
    date: 'September 2024',
  },
];

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const galleryImages: { id: string; alt: string; caption: string; tall?: boolean }[] = [
  { id: photos.diningRoom, alt: 'The main dining room at dusk, dark timber tables and brass pendant lamps', caption: 'The room, 6:40 pm, before the second seating', tall: true },
  { id: photos.grillRibs, alt: 'Wood-grilled lamb ribs on a board with sumac onions', caption: 'Olive-wood embers, second burn of the night' },
  { id: photos.kofte, alt: 'Grilled köfte spoons on charred greens', caption: 'Elif’s test kitchen, 2019' },
  { id: photos.heroDish, alt: 'A plated meze course lit by candlelight', caption: 'Table nine, Friday', tall: true },
  { id: photos.stoneBread, alt: 'Dark sourdough loaves dusted with flour', caption: 'Pide and sourdough, baked daily at 7 am' },
  { id: photos.wineToast, alt: 'Glasses of red wine raised at an outdoor table', caption: 'Last Thursday of the month, terrace if the sky allows', tall: true },
  { id: photos.sharedTable, alt: 'Overhead view of a table sharing several plates', caption: 'Four strangers, one long table — the Sunday experiment' },
  { id: photos.grilledFish, alt: 'Grilled sea bass plated with herbs beside a glass of red', caption: 'Levrek, straight from the coals' },
  { id: photos.kunefe, alt: 'Caramel poured over a plated künefe dessert', caption: 'Künefe, twenty minutes, worth every one' },
];

/* Reservation time slots offered by the form */
export const reservationSlots = [
  '5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm',
  '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm',
];
