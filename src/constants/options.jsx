export const SelectTravelesList = [
    {
        id:1,
        title: 'Apenas eu',
        desc:'Um viajante solitário em exploração',
        icon: '✈️',
        people:'1'
    },
    {
        id:2,
        title: 'Casal',
        desc:'Dois viajantes em exploração',
        icon: '🥂',
        people:'2 People'
    },
    {
        id:3,
        title: 'Família',
        desc:'Um grupo de pessoas que ama se divertir',
        icon: '🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title: 'Amigos',
        desc:'Um grupo de aventureiros',
        icon: '⛵',
        people:'5 to 10 People'
    },
]

export const SelectBudgetOptions = [
    {
        id:1,
        title: 'Barato',
        desc:'Fique atento aos custos',
        icon: '💵',
    }, 
    {
        id:2,
        title: 'Moderado',
        desc:'Mantenha o custo na média',
        icon: '💰',
    }, 
    {
        id:1,
        title: 'Luxo',
        desc:'Não se preocupe com o custo',
        icon: '💸',
    }, 
]

export const AI_PROMPT = 'Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} with a {budget} budget ,give me Hotels options list with HotelName , Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, PlaceDetails, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'