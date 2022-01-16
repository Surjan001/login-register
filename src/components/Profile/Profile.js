import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllData from '../redux/action'

import './Profile.css';

function Profile() {
    const [dataSuccess, setDataSuccess] = useState(false);
    const data = useSelector((state) => state.crypto)
    const getData = () =>{
        // console.log('data',data)
        console.log(data.data.data.BTC)
        console.log(data.data.data.ETH)
        setDataSuccess(true)
    };
    const dispatch = useDispatch();
    const getCryptoData = () =>{
        dispatch(getAllData())
    }
    useEffect(() =>{
        getCryptoData()
    },[])
    return(
        <div className='profile-root'>
            <h1>Welcome to Profile page</h1>
            <button onClick={getData}>Get Crypto Data</button>
            {dataSuccess && (
                <div className='crypto-root'>
                    <div className='btc'>
                        <h2>Bitcoin Price</h2>
                        <p>USD: {data.data.data.BTC.USD}</p>
                        <p>EUR: {data.data.data.BTC.EUR}</p>
                    </div>
                    <div className='eth'>
                    <h2>Ethereum Price</h2>
                        <p>USD: {data.data.data.ETH.USD}</p>
                        <p>EUR: {data.data.data.ETH.EUR}</p>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Profile;