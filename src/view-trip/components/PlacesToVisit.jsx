import React from 'react'
import PlaceCardItem from './PlaceCardItem'

const PlacesToVisit = ({trip}) => {
  return (
    <div>
      <h2 className='font-bold text-lg mt-5'>Lugares para Visitar</h2>

      <div>
        {trip.tripData?.itinerary.map((item,index)=> (
            <div className='mt-5'>
                <h2 className='font-medium text-lg'>{item.Day}</h2>
                <div className='grid md:grid-cols-2 gap-5'>
                    {item.Plan.map((place,index)=>(
                        <div className=''>
                            <h2 className='font-medium text-sm text-[#f56551]'>{place.Time}</h2>
                            <PlaceCardItem place={place}/>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit
