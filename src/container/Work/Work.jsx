import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {

  const handleWorkFilter = (item) => {
    
  }

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portifolio</span> section</h2>

        <div className="app__work-filter">
          {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
            >

            </div>
          ))}
        </div>
    </>
  )
}

export default Work