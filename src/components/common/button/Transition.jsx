import {React, useState} from 'react'
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';


export const Transition = () => {
    // const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);
      const [isVisible, setIsVisible] = useState(false);
    
  return (
    <div>
        {/* <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>
      
      <CSSTransition
        in={show}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="message text-white">
          Hello! This will fade in and out.
        </div>
      </CSSTransition>
    </div> */}

    <div 
      className={`box ${isActive ? 'active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      Click me
    </div>

          <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      
              {isVisible && (
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          Content with animation
        </motion.div>
      )}
    </div>
    </div>
  )
}
