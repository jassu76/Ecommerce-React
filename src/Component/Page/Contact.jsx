import React from 'react'
import LoginButton from './LoginButton'
const Contact = () => {
  return (
    <div>
               <h1 className='text-center p-4 text-success'>Contact Page</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.6072008463607!2d76.10213337435401!3d28.036479010900212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912b5ebddba11e5%3A0x74dad23921f7bfb0!2sKoliyan%2C%20Seka%2C%20Narnaul%2C%20Haryana%20123001!5e0!3m2!1sen!2sin!4v1700644184548!5m2!1sen!2sin" width="100%" height="350" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded'></iframe>


      <div className="container-fluid">
        <div className="container">
          <div className="col-md-12">
            <div className=' d-flex flex-column justify-content-center  align-items-center  p-4  '>


              <form accept-charset="UTF-8" action="https://www.formbackend.com/f/2d87e542249c29fe" className='d-flex flex-column  gap-4 ' method='Post'>
                <div>
                  <input type="text" name="name"   id="name" className='rounded border-1 p-2' style={{ width: "300px" }} placeholder='Name' required autoComplete="off" />
                </div>
                <div>
                  <input type="email" name="email"  id="email" className=' rounded border-1 p-2' style={{ width: "300px" }} placeholder='Email' required autoComplete='off' />
                </div>
                <div>
                  <textarea className='rounded' name="Message" id="" cols="40" rows="5" placeholder='FeedBack' />
                </div>
                   
                <div className=''>
                <button ><LoginButton className='btn btn-outline-primary' /></button>
              </div>
              </form>
              
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact