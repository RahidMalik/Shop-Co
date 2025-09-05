import React from 'react'

export default function Reviews() {
  return (
    <>
      <div className='flex justify-start items-center text-2xl pt-10 pb-4 px-13 lg:text-3xl  font-bold leading-tight'>
        <h1>OUR HAPPY CUSTOMERS</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 px-13 py-3 gap-3'>

        <div className='border p-4 pb-10 rounded-lg border-gray-300'>
          <div className='flex space-x-1 t'>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
          </div>
          <div className='font-bold leading-tight py-2 flex items-center'>
            <h1>Sarah M.</h1>
            <ion-icon
              className="text-green-500 text-lg"
              name="checkmark-circle"
              aria-label="verified"
            ></ion-icon>
          </div>
          <div className='text-gray-500'>
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
        </div>
        <div className='border p-4 pb-10 rounded-lg border-gray-300'>
          <div className='flex space-x-1 t'>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
          </div>
          <div className='font-bold leading-tight py-2 flex items-center'>
            <h1>Alex K.</h1>
            <ion-icon
              className="text-green-500 text-lg"
              name="checkmark-circle"
              aria-label="verified"
            ></ion-icon>
          </div>
          <div className='text-gray-500'>
            <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
          </div>
        </div>
        <div className='border p-4 pb-10 rounded-lg border-gray-300'>
          <div className='flex space-x-1 t'>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
            <ion-icon className="text-yellow-500 text-xl" name="star-sharp"></ion-icon>
          </div>
          <div className='font-bold leading-tight py-2 flex items-center'>
            <h1>Jeams L.</h1>
            <ion-icon
              className="text-green-500 text-lg"
              name="checkmark-circle"
              aria-label="verified"
            ></ion-icon>
          </div>
          <div className='text-gray-500'>
            <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
          </div>
        </div>
      </div>
    </>
  )
}
