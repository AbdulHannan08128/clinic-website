'use client';
import './Success.css';

export default function Success(props) {
  return (
    <div className='wrapper'>
      {props.success.map((suc, index) => (
        <div key={index} className='success'>
          {suc}
        </div>
      ))}
    </div>
  );
}
