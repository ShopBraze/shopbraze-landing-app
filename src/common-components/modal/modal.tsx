import React from 'react';

function Modal({ children, isOpen }: { children: React.ReactNode, isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[100]`}>
      <div className='bg-[#fff] relative rounded-lg'>
        {children}
      </div>
    </div>
  );
}

export default Modal;