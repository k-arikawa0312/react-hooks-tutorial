
import React from 'react';



interface SomeChildProps {

  showCount: () => void;

}



const SomeChlid: React.FC<SomeChildProps> = ({ showCount }) => {

  return (

    <div>

      Some Child Component

      <button onClick={showCount}>Show Count</button>

    </div>

  );

};



export default SomeChlid;