import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
// import { showsampledata } from '../redux/action/action'
import PostCards from './Postcards';

function Home() {
  // const {sample} = useSelector(state => state.getSampledata);
  // console.log(sample)
  
  // const dispatch = useDispatch();
  
  // useEffect(()=>{
  //     dispatch(showsampledata());
  // },[dispatch])


  return (
    <div>
    <Header/>
      {/* <PostCards  sample={sample} /> */}
      <PostCards/>
    </div>
  )
}

export default Home