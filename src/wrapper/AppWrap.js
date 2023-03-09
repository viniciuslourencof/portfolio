import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia></SocialMedia>               
        
        <div className='app__wrapper app_flex'>
            <Component></Component>            
            <div className='copyright'>
              <p className='p-text'>2023 VINICIUS</p>
              <p className='p-text'>Todos os direitos reservados</p>
            </div>

        </div>
        <NavigationDots active={idName}></NavigationDots>
    </div>
  )
}

export default AppWrap