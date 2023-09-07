import React, { useState} from 'react';
import tick from "../assets/images/icon-list.svg";
import { useNavigate } from 'react-router-dom';

const points = [
  "Product discovery and building what matters",
  "Measuring to ensure the updates are a success",
  "And much more!",
]

const Form = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Regular expression pattern for basic email validation
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Test the email against the pattern
    return pattern.test(email);
  };
  
  const handleSubmit = () => {
      const isValid = isEmailValid(email);

      if (!isValid) {
        setIsError(true); 
      } else {
        navigate('/success', {state: {email} });
      }

  }
  return (
    <div className='flex flex-col align-center justify-center px-5 py-10 ml-5 flex-wrap'>
      <h1 className='text-5xl font-bold flex mb-5 w-full text-blue-900'>Stay updated!</h1>

      <p className="flex flex-wrap mb-4 text-sm">
        Join 60,000+ product manangers recieving monthly updates on:
      </p>

      <div className='flex flex-col justify-start mb-5'>
       {points.map((point, index) => (
        <div className='flex gap-2' key={index}>
          <img src={tick} alt="tick" width="15" height="15" className='mb-1'/>
          <p className='flex text-sm mb-2 '>{point}</p>
        </div>
       ))}
      </div>

      <div className='flex flex-row justify-between text-xs font-bold py-1'>
        <p className='text-blue-900'>Email Address</p>
        {isError && <p className='text-red-500'>Valid Email Required</p>}
      </div>

      <div className='flex flex-col gap-3 mb-2'>
        <input 
          placeholder='email@company.com'
          className={`border-[2px] rounded-lg px-4 py-3 ${isError && 'border-red-500 text-red-500 bg-red-200'} `}
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className='bg-blue-900 text-white px-4 py-3 rounded-lg'
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  )
}

export default Form