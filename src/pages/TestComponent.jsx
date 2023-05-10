import React, {useEffect, useState} from 'react';
import { registerUser } from '../api/UserApi';

const TestComponent = () => {
  const [data, setData] = useState();
  useEffect(() => {
    registerUser({'email': 'liyakat ali'})
  }, []);
  return (
    <div>TestComponent</div>
  )
}

export default TestComponent