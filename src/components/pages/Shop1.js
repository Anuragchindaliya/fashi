import React from 'react';

const Shop1 = ({ match, location }) => {
    const {
        params: { userId }
      } = match;
    console.log(userId);
    return (
        <div>
            hello world
        </div>
    )
}

export default Shop1
