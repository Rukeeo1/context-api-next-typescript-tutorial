import { useContext } from 'react';
import { DummyContext } from '../page';

export const ChildThree = () => {
  const valueFromContext = useContext(DummyContext);

  return (
    <>
      <div className='card child-three'>
        <h1>Child Three</h1>
        <div>
          This is my first name:{' '}
          <span style={{ fontWeight: 'bold' }}>
            {valueFromContext?.firstName}
          </span>{' '}
          and this is my last name:{' '}
          <span style={{ fontWeight: 'bold' }}>
            {valueFromContext?.lastName}
          </span>
        </div>
      </div>
    </>
  );
};
