'use client';
import './Error.css';

export default function Error(props) {
  return (
    <div className='wrapper'>
      {props.errors.map((err, index) => (
        <div key={index} className='error'>
          {err}
        </div>
      ))}
    </div>
  );
}
