import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';

import PostCards from './Postcards';

function Home() {
  return (
    <div>
    {/* <Header/> */}
      <PostCards/>
    </div>
  )
}

export default Home