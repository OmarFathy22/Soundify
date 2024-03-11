import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'
interface IAppProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string
  description: string
  children: React.ReactNode
}
const Modal: React.FC<IAppProps>  =  ({
  isOpen,
  onChange,
  title,
  description,
  children
}) => {
  
  return (
    <Dialog.Root
     open = {isOpen}
     onOpenChange = {onChange}
     defaultOpen = {isOpen}
    >
      <Dialog.Portal>
        <Dialog.Overlay
         className='bg-neutral-900/90 backdrop-blur-sm fixed inset-0'
        />
        <Dialog.Content className='fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-neutral-800 p-[25px] shadow-lg shadow-black/25 focus:outline-none'>
          <Dialog.Title className='text-xl font-medium text-white text-center'>{title}</Dialog.Title>
          <Dialog.Description className='text-sm text-neutral-400 text-center'>{description}</Dialog.Description>
          <div>
            {children}
          </div>

          <Dialog.Close asChild>
            <button
              className='text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none'
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>

        
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
