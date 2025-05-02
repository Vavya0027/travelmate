// Define mock data for trips with prices in INR
const tripsData = [
    // Solo Travel Options
    {
      type: 'solo',
      destination: 'Rishikesh',
      price: '₹8000',
      days: '3 days',
      tags: ['eco', 'adventure'],
      image: 'https://source.unsplash.com/500x300/?rishikesh,travel',
    },
    {
      type: 'solo',
      destination: 'Spiti Valley',
      price: '₹12000',
      days: '5 days',
      tags: ['adventure', 'mountain'],
      image: 'https://source.unsplash.com/500x300/?spiti,adventure',
    },
    {
      type: 'solo',
      destination: 'Manali',
      price: '₹9000',
      days: '4 days',
      tags: ['adventure', 'hill station'],
      image: 'https://source.unsplash.com/500x300/?manali,mountains',
    },
    
    // Group Travel Options
    {
      type: 'group',
      destination: 'Goa',
      price: '₹20000',
      days: '5 days',
      tags: ['beach', 'adventure'],
      image: 'https://source.unsplash.com/500x300/?goa,beach',
    },
    {
      type: 'group',
      destination: 'Shimla',
      price: '₹15000',
      days: '4 days',
      tags: ['hill station', 'family'],
      image: 'https://source.unsplash.com/500x300/?shimla',
    },
    {
      type: 'group',
      destination: 'Jaipur',
      price: '₹18000',
      days: '3 days',
      tags: ['heritage', 'culture'],
      image: 'https://source.unsplash.com/500x300/?jaipur,fort',
    },
    
    // Student Travel Options
    {
      type: 'student',
      destination: 'Varanasi',
      price: '₹9000',
      days: '2 days',
      tags: ['spiritual', 'budget'],
      image: 'https://source.unsplash.com/500x300/?varanasi,temple',
    },
    {
      type: 'student',
      destination: 'Kolkata',
      price: '₹10000',
      days: '3 days',
      tags: ['cultural', 'affordable'],
      image: 'https://source.unsplash.com/500x300/?kolkata,india',
    },
    {
      type: 'student',
      destination: 'Delhi',
      price: '₹8000',
      days: '3 days',
      tags: ['heritage', 'budget'],
      image: 'https://source.unsplash.com/500x300/?delhi,india',
    },
    
    // Adventure Travel Options
    {
      type: 'adventure',
      destination: 'Spiti Valley',
      price: '₹15000',
      days: '7 days',
      tags: ['mountain', 'trekking'],
      image: 'https://source.unsplash.com/500x300/?spiti,adventure',
    },
    {
      type: 'adventure',
      destination: 'Leh-Ladakh',
      price: '₹25000',
      days: '10 days',
      tags: ['mountain', 'biking'],
      image: 'https://source.unsplash.com/500x300/?ladakh,adventure',
    },
    {
      type: 'adventure',
      destination: 'Goa (Water Sports)',
      price: '₹12000',
      days: '5 days',
      tags: ['beach', 'water sports'],
      image: 'https://source.unsplash.com/500x300/?goa,watersports',
    },
    
    // Family Travel Options
    {
      type: 'family',
      destination: 'Shimla',
      price: '₹20000',
      days: '5 days',
      tags: ['hill station', 'family-friendly'],
      image: 'https://source.unsplash.com/500x300/?shimla,family',
    },
    {
      type: 'family',
      destination: 'Ooty',
      price: '₹15000',
      days: '4 days',
      tags: ['hill station', 'family-friendly'],
      image: 'https://source.unsplash.com/500x300/?ooty,family',
    },
    {
      type: 'family',
      destination: 'Coorg',
      price: '₹18000',
      days: '4 days',
      tags: ['nature', 'family-friendly'],
      image: 'https://source.unsplash.com/500x300/?coorg,family',
    },
    
    // Couple Travel Options
    {
      type: 'couple',
      destination: 'Udaipur',
      price: '₹25000',
      days: '3 days',
      tags: ['romantic', 'luxury'],
      image: 'https://source.unsplash.com/500x300/?udaipur,couple',
    },
    {
      type: 'couple',
      destination: 'Goa',
      price: '₹22000',
      days: '4 days',
      tags: ['romantic', 'beach'],
      image: 'https://source.unsplash.com/500x300/?goa,couple',
    },
    {
      type: 'couple',
      destination: 'Kumarakom',
      price: '₹30000',
      days: '5 days',
      tags: ['romantic', 'backwaters'],
      image: 'https://source.unsplash.com/500x300/?kumarakom,couple',
    },
    
    // Budget Travel Options
    {
      type: 'budget',
      destination: 'Varanasi',
      price: '₹6000',
      days: '2 days',
      tags: ['spiritual', 'budget'],
      image: 'https://source.unsplash.com/500x300/?varanasi,budget',
    },
    {
      type: 'budget',
      destination: 'Pushkar',
      price: '₹8000',
      days: '3 days',
      tags: ['cultural', 'budget'],
      image: 'https://source.unsplash.com/500x300/?pushkar,budget',
    },
    {
      type: 'budget',
      destination: 'Rishikesh',
      price: '₹7000',
      days: '3 days',
      tags: ['eco', 'budget'],
      image: 'https://source.unsplash.com/500x300/?rishikesh,budget',
    },
    
    // Luxury Travel Options
    {
      type: 'luxury',
      destination: 'Taj Mahal',
      price: '₹35000',
      days: '2 days',
      tags: ['luxury', 'heritage'],
      image: 'https://source.unsplash.com/500x300/?tajmahal,travel',
    },
    {
      type: 'luxury',
      destination: 'Udaipur Palace',
      price: '₹50000',
      days: '4 days',
      tags: ['luxury', 'heritage'],
      image: 'https://source.unsplash.com/500x300/?udaipur,palace',
    },
    {
      type: 'luxury',
      destination: 'Rajasthan Palace Tour',
      price: '₹60000',
      days: '7 days',
      tags: ['luxury', 'culture'],
      image: 'https://source.unsplash.com/500x300/?rajasthan,palace',
    },
  ];
  
  // Function to filter trips based on traveler type
  function filterTrips(travelType) {
    const filteredTrips = tripsData.filter(trip => trip.type === travelType);
    displayTrips(filteredTrips);
  }
  
  // Function to display filtered trips
  function displayTrips(trips) {
    const tripsSection = document.getElementById('trip-results');
    tripsSection.innerHTML = '';  // Clear previous results
    
    if (trips.length === 0) {
      tripsSection.innerHTML = '<p>No results found. Try another filter.</p>';
      return;
    }
    
    trips.forEach(trip => {
      const tripCard = document.createElement('div');
      tripCard.classList.add('trip-card');
      tripCard.innerHTML = `
        <img src="${trip.image}" alt="${trip.destination}" />
        <h3>${trip.destination}</h3>
        <p><strong>Price:</strong> ${trip.price}</p>
        <p><strong>Duration:</strong> ${trip.days}</p>
        <p><strong>Tags:</strong> ${trip.tags.join(', ')}</p>
      `;
      tripsSection.appendChild(tripCard);
    });
  }
  