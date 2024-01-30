import React from 'react'

import './TextBlock.scss';
import { CustomButton } from '../CustomBtn/CustomBtn';
import useTextFormatter from '../../../hooks/UseTextFormatter';

export const  TextBlock = ({textBlockData: {title, text, btnText}, btnType, displayBtn=true}) => {
  const formattedText = useTextFormatter(text);

  return (
    <div className='text-block'>
         <h2 className='text-block-title'>{title}</h2>
         <p className='text-block-text'>{formattedText}</p>
         {displayBtn && <CustomButton text={btnText} styleType={btnType}/>}
    </div>
  )
}

