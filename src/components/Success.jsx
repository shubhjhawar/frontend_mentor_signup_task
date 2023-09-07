import React from 'react'
import tick from "../assets/images/icon-success.svg";
import { useLocation, useNavigate} from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
  return (
    <div className="flex flex-col justify-center items-center max-md:h-screen max-md:w-screen bg-white lg:rounded-2xl shadow-2xl w-1/3 h-1/3">
        <div className="flex flex-col flex-wrap justify-center items-center p-10 gap-10 ">
            <div className='flex flex-row justify-start w-full'>
                <img 
                    src={tick}
                    alt="tick"
                    width="50"
                    height="50"
                />
            </div>

            <h1 className='text-5xl font-blue-900 font-bold'>Thanks for subscribing!</h1>

            <div>
                A confirmation email has been sent to <p className='font-bold inline'>{location.state.email}</p>. Please open it and click the button inside to confirm your subscription.
            </div>

            <div className='flex max-md:absolute bottom-0 max-md:mb-2 max-md:p-5 w-full'>
                <button 
                    type="button"
                    onClick={() => navigate('/')}
                    className='bg-slate-900 text-white rounded-lg p-3 w-full
                        hover:bg-gradient-to-r from-pink-700 via-pink-500 to-orange-500 hover:shadow-2xl
                    '
                >
                    Dismiss Message
                </button>
            </div>

            

        </div>
    </div>
  )
}

export default Success