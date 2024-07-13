import { DummyContext } from '../page';
import { useContext } from 'react';
// context api hooks

// export const ChildOne = () => {
//   return (
//     <>
//       <DummyContext.Consumer>
//         {(value) => (
//           <div className='card child-one'>
//             <h1>Child One</h1>
//             <div>content comes here...</div>
//             <div>first name: {value?.firstName}</div>
//             <div>last name: {value?.lastName}</div>
//           </div>
//         )}
//       </DummyContext.Consumer>
//     </>
//   );
// };

export const ChildOne = () => {
  const value = useContext(DummyContext);

  const capitalFirstName = value?.firstName.toUpperCase();

  return (
    <>
      <div className='card child-one'>
        <h1>Child One</h1>
        <div>content comes here...</div>
        <div>first name: {value?.firstName}</div>
        <div>last name: {value?.lastName}</div>
        <div>capitalFirstName: {capitalFirstName}</div>
      </div>
    </>
  );
};
