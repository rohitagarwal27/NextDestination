const sampleListings = [
 {
   title: "Cozy Beachfront Cottage in Goa",
  description: "Escape to this charming beachfront cottage in Goa for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1569513745068-7eec28cfd68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 15000,
  location: "Goa",
  country: "India",
  geometry: {
    type: 'Point',
    coordinates: [73.818000, 15.299300]
  },
  category: 1,
},
{
  title: "Modern Loft in Mumbai",
  description: "Stay in the heart of Mumbai in this stylish loft apartment. Perfect for urban explorers!",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1597001353824-cdd8ba4a07b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVtYmFpJTIwc2t5c2NyYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 20000,
  location: "Mumbai",
  country: "India",
  geometry: {
    type: 'Point',
    coordinates: [72.8777, 19.0760]
  },
  category: 1,
},
{
  title: "Mountain Retreat in Manali",
  description: "Unplug and unwind in this peaceful mountain cabin in Manali. Surrounded by nature, it's a perfect place to recharge.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1536004053756-1b3d96f7f9a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuYWxpJTIwbW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 12000,
  location: "Manali",
  country: "India",
  geometry: {
    type: 'Point',
    coordinates: [77.1892, 32.2432]
  },
  category: 2,
},
{
  title: "Historic Villa in Jaipur",
  description: "Experience the charm of Jaipur in this beautifully restored villa. Explore the rich heritage and vibrant culture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1584020517695-90fd48935d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFpcHVyJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 25000,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: 'Point',
    coordinates: [75.7873, 26.9124]
  },
  category: 3,
},
{
  title: "Secluded Treehouse Getaway in Kerala",
  description: "Live among the treetops in this unique treehouse retreat in Kerala. A true nature lover's paradise.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhJTIwdHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 18000,
  location: "Wayanad",
  country: "India",
  geometry: {
    type: 'Point',
    coordinates: [76.1320, 11.6854]
  },
  category: 2,
},
{
  title: "Beachfront Paradise in Andaman",
  description: "Step out of your door onto the sandy beach in Andaman. This beachfront condo offers the ultimate relaxation.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1600566756067-08a2b9c607fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5kYW1hbiUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 22000,
  location: "Havelock Island",
  country: "India",
  geometry: {
    type: 'Point',
    coordinates: [92.9908, 11.9696]
  },
  category: 1,
},
{
  title: "Rustic Cabin by the Lake in Nainital",
  description: "Spend your days fishing and kayaking on the serene lake in Nainital. This cozy cabin is perfect for outdoor enthusiasts.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1610024448669-fc8d1c146a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbml0YWwlMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 10000,
  location: "Nainital",
  country: "India",
  geometry: {
    type: 'Point',
    coordinates: [79.4636, 29.3919]
  },
  category: 2,
},
{
  title: "Luxury Penthouse with City Views in Delhi",
  description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment in Delhi.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVsaGklMjBza3lsaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 35000,
  location: "Delhi",
  country: "India",
  geometry: {
    type: 'Point',
    coordinates: [77.2090, 28.6139]
  },
  category: 3,
},
   
];

module.exports = { data: sampleListings };