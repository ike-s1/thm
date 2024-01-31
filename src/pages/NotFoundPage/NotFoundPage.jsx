import React from 'react';
import './NotFoundPage.scss';
import titleDecour from "../../assets/step-three-decour.svg";
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/Shared/CustomBtn/CustomBtn';

export const  NotFoundPage = ()  => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/')
    }

  return (
    <div className='not-found-page'>
       <div className="not-found-title-box">
        <img src={titleDecour} alt="decour" />
        <h2 className="not-found-title">Page not found, but never stop trying</h2>
      </div>
      <CustomButton text="Back" onClick={handleBackClick} />
    </div>
  )
}

