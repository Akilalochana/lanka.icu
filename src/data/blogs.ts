export interface Blog {
  id: string;
  title: string;
  category: 'jungle' | 'temple' | 'waterfall';
  image: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogs: Blog[] = [
  {
    id: 'jungle-wildlife-safari',
    title: 'Exploring the Wildlife of Yala National Park',
    category: 'jungle',
    image: '/yala.jpg',
    excerpt: 'Discover the rich biodiversity and magnificent wildlife of Sri Lanka\'s most famous national park.',
    content: `
      <p>Yala National Park, located in the southeastern region of Sri Lanka, is the country's most visited and second largest national park. Spanning over 979 square kilometers, Yala is divided into five blocks, with only two open to the public.</p>
      
      <p>The park is renowned for having one of the highest leopard densities in the world, making it a prime location for leopard spotting. Apart from leopards, the park is home to elephants, sloth bears, crocodiles, and numerous bird species.</p>
      
      <p>The landscape of Yala is diverse, featuring everything from open parkland to dense jungle. The coastal areas of the park were affected by the 2004 tsunami, and evidence of this natural disaster can still be seen in some areas.</p>
      
      <p>The best time to visit Yala is during the dry season from February to June when water levels are low, and animals gather around water holes. Early morning and late afternoon safari drives offer the best wildlife viewing opportunities.</p>
      
      <p>For the ultimate Yala experience, consider staying at one of the luxury tented camps near the park. These provide a perfect blend of comfort and wilderness, allowing you to fully immerse yourself in the natural environment.</p>
    `,
    author: 'Samantha Perera',
    date: 'June 15, 2025',
    readTime: '5 min read'
  },
  {
    id: 'temple-anuradhapura',
    title: 'The Sacred City of Anuradhapura: A Journey Through Time',
    category: 'temple',
    image: '/gallery3.jpg',
    excerpt: 'Explore the ancient ruins and sacred temples of Sri Lanka\'s first capital city.',
    content: `
      <p>Anuradhapura, founded around 5th century BCE, served as Sri Lanka's first capital and one of the greatest monastic cities of the ancient world. Today, this UNESCO World Heritage site stands as a testament to the island's rich cultural and religious heritage.</p>
      
      <p>The city is home to numerous dagobas (stupas), temples, monasteries, and ancient pools. Among the most notable structures is the Sri Maha Bodhi, the world's oldest documented tree, said to be grown from a cutting of the original Bodhi tree under which Buddha attained enlightenment.</p>
      
      <p>The Ruwanwelisaya, a massive white stupa built by King Dutugemunu around 140 BCE, remains an important place of worship. Its majestic presence is particularly stunning during sunset when the golden rays illuminate the structure.</p>
      
      <p>Another remarkable site is the Jetavanarama Dagoba, which was the third tallest structure in the ancient world at the time of its construction. The engineering precision involved in building these structures without modern technology is truly awe-inspiring.</p>
      
      <p>Visitors should allocate at least a full day to explore Anuradhapura properly. Early morning or late afternoon visits are recommended to avoid the midday heat. Remember to dress modestly when visiting these sacred sites as a sign of respect.</p>
    `,
    author: 'Dr. Rajith Silva',
    date: 'May 28, 2025',
    readTime: '7 min read'
  },
  {
    id: 'waterfall-dunhinda',
    title: 'The Breathtaking Beauty of Dunhinda Falls',
    category: 'waterfall',
    image: '/gallery10.jpg',
    excerpt: 'Discover one of Sri Lanka\'s most spectacular waterfalls hidden in the lush highlands.',
    content: `
      <p>Nestled in the verdant hills near Badulla town in Sri Lanka's Uva Province, Dunhinda Falls stands as one of the island's most spectacular natural wonders. Plunging from a height of approximately 63 meters (210 feet), the waterfall creates a mesmerizing mist that gave rise to its local name "Bridal Falls."</p>
      
      <p>Reaching Dunhinda requires a pleasant 1.5 km trek through lush greenery, offering glimpses of the region's rich biodiversity. The path is relatively easy but becomes somewhat challenging during the rainy season when it gets slippery.</p>
      
      <p>The best time to visit Dunhinda Falls is during the monsoon season (November to March) when the water volume is at its peak. However, the falls maintain an impressive flow throughout the year, making it a worthwhile destination regardless of when you visit.</p>
      
      <p>Along the hiking trail, local vendors sell refreshments and snacks, providing an opportunity to taste authentic Sri Lankan treats like "kitul pani" (palm jaggery) and "pol pani" (coconut jaggery).</p>
      
      <p>For photography enthusiasts, early morning visits are recommended to capture the magical interaction between sunlight and the mist rising from the falls. The viewpoint at the end of the trek offers a perfect vantage point for capturing the grandeur of Dunhinda in its entirety.</p>
    `,
    author: 'Malini Gunawardena',
    date: 'July 3, 2025',
    readTime: '4 min read'
  },
  {
    id: 'jungle-sinharaja',
    title: 'Sinharaja Forest Reserve: The Last Pristine Rainforest',
    category: 'jungle',
    image: '/gallery8.jpg',
    excerpt: 'Journey into Sri Lanka\'s biodiversity hotspot and UNESCO World Heritage Site.',
    content: `
      <p>Sinharaja Forest Reserve, a UNESCO World Heritage Site and Biosphere Reserve, represents the last viable area of primary tropical rainforest in Sri Lanka. Spanning approximately 11,187 hectares, this lowland rainforest is a treasure trove of endemic species.</p>
      
      <p>The name "Sinharaja" translates to "Lion Kingdom," reflecting ancient legends that the Sinhala race descended from a union between a princess and a lion who once inhabited these forests. While lions are long gone from Sri Lanka, the forest remains home to many rare species.</p>
      
      <p>Over 60% of the trees in Sinharaja are endemic, and many of them are considered rare. The forest is also home to over 50% of Sri Lanka's endemic species of mammals and butterflies, as well as many birds, insects, reptiles, and rare amphibians.</p>
      
      <p>Hiking through Sinharaja requires a guide, not only for navigation but also to spot and identify the elusive wildlife. The dense canopy means that animals are often heard rather than seen, making an experienced guide invaluable.</p>
      
      <p>Visitors should come prepared for rain regardless of the season, as this is a rainforest in the truest sense. Leech socks are also recommended as these tiny creatures are abundant, especially during and after rainfall.</p>
    `,
    author: 'Lakshman Ratnayake',
    date: 'April 12, 2025',
    readTime: '6 min read'
  },
  {
    id: 'temple-temple-of-tooth',
    title: 'Sri Dalada Maligawa: The Temple of the Sacred Tooth Relic',
    category: 'temple',
    image: '/gallery18.jpg',
    excerpt: 'Discover the cultural and spiritual significance of Kandy\'s most revered temple.',
    content: `
      <p>The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) in Kandy is not just a religious monument but a symbol of Sri Lankan heritage and sovereignty. Housing Buddha's tooth relic, it has been a pilgrimage site for Buddhists worldwide for over 400 years.</p>
      
      <p>Built within the royal palace complex of the former Kingdom of Kandy, the temple's architecture represents the unique Kandyan style. The main shrine room, where the tooth relic is kept, features intricate wood carvings and ivory inlays that showcase the exquisite craftsmanship of the Kandyan era.</p>
      
      <p>The relic itself is enshrined in seven golden caskets, each encrusted with precious gems. While the actual tooth remains hidden from public view, the outer casket is displayed to devotees during puja (offering) ceremonies held three times daily.</p>
      
      <p>The annual Esala Perahera, one of Asia's most spectacular festivals, centers around the tooth relic. This ten-day procession features elaborately decorated elephants, traditional dancers, drummers, and fire performers parading through the streets of Kandy.</p>
      
      <p>When visiting, it's essential to observe proper dress code and decorum. Shoulders and legs should be covered, and shoes must be removed before entering the temple premises. The best time to visit is during the morning puja when the atmosphere is most vibrant with devotional activities.</p>
    `,
    author: 'Priyanka Jayawardene',
    date: 'June 25, 2025',
    readTime: '5 min read'
  },
  {
    id: 'waterfall-bakers-falls',
    title: 'The Hidden Charm of Baker\'s Falls in Horton Plains',
    category: 'waterfall',
    image: '/gallery13.jpg',
    excerpt: 'Experience the misty beauty of this waterfall nestled in Sri Lanka\'s central highlands.',
    content: `
      <p>Located within the misty landscapes of Horton Plains National Park, Baker's Falls presents a serene contrast to the rugged plains surrounding it. Named after Sir Samuel Baker, a British explorer who pioneered the agricultural development of the region, this waterfall cascades approximately 20 meters through lush montane forest.</p>
      
      <p>Reaching Baker's Falls is part of the popular 9.5 km circular hiking trail that also includes World's End, a sheer cliff with a drop of about 880 meters. The well-marked path to the falls winds through cloud forests and grasslands, offering glimpses of endemic flora and fauna along the way.</p>
      
      <p>The waterfall is at its most spectacular during the rainy season (October to January), when the volume of water increases dramatically. However, the surrounding ecosystem of Horton Plains maintains its misty, ethereal quality throughout the year.</p>
      
      <p>The cool climate of the region (temperatures can drop to near freezing at night) creates a unique habitat for numerous endemic species. Lucky visitors might spot sambar deer, purple-faced langurs, or even the elusive fishing cat. Bird watchers will appreciate the opportunity to see montane specialists like the Sri Lanka whistling thrush and Sri Lanka bush warbler.</p>
      
      <p>For the best experience, arrive early in the morning when mist blankets the plains, creating an otherworldly atmosphere. By mid-morning, the mist usually clears, offering clear views of the falls and surrounding landscapes.</p>
    `,
    author: 'Nirmal Bandara',
    date: 'March 8, 2025',
    readTime: '5 min read'
  }
];
