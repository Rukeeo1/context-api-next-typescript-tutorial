import { ChangeEvent, useContext } from 'react';
import { DummyContext } from '../page';

export const ChildTwo = () => {
  const valueFromContext = useContext(DummyContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // update parent state:

    valueFromContext?.setFirstName(value);
  };



  return (
    <div className='card child-two'>
      <h1>Child Two</h1>
      <div>
        Enter first name:
        <div>
          <input placeholder='First name' onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Last name' onChange={(event) => valueFromContext?.setLastName(event.target.value)} />
        </div>
      </div>
    </div>
  );
};
