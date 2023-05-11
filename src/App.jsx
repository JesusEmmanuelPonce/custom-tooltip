import { useRef } from 'react';

import CustomTooltip from './components/CustomTooltip/CustomTooltip';
import "./styles.css";

const App = () => {

  const buttonRef = useRef();

  return (
    <div className='app'>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum quo. Blanditiis voluptatem reiciendis, sapiente natus veniam quos. Eveniet quaerat dignissimos quis ab laudantium, soluta tempora nostrum nisi error ullam!</h2>
      <button ref={buttonRef}>Holaa</button>
      <div className="item" >
        <div className="box">
        </div>
      </div>
      <CustomTooltip
        buttonRef={buttonRef}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae reprehenderit odit consequatur aperiam pariatur animi dolorem voluptas, libero architecto vero quisquam repudiandae? Expedita, sint labore dolores deleniti pariatur perspiciatis facere!</p>
      </CustomTooltip>
    </div>
  )
}

export default App