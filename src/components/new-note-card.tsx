import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function NewNoteCard() {
   return (
      <Dialog.Root>

         <Dialog.Trigger className="relative flex flex-col gap-3 p-5 overflow-hidden text-left rounded-md outline-none bg-slate-700 hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400">
            <span className="text-sm font-medium text-slate-200">
               Adicionar Nota
            </span>
            <p className='text-sm leading-6 text-slate-400'>
               Grave uma nota em áudio de será convertida para texto automaticamente
            </p>
         </Dialog.Trigger>

         <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 bg-black/50' />
            <Dialog.Content className='fixed overflow-hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
               <Dialog.Close className='top-0 right-0 absolute bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
                  < X className='size-5' />
               </Dialog.Close>
               <div className="flex flex-col flex-1 gap-3 p-5">
                  <span className="text-sm font-medium text-slate-300">
                     Adicionar Nota
                  </span>
                  <p className='text-sm leading-6 text-slate-400'>
                     Comece <button className='font-medium text-lime-400 hover:underline'>gravando uma nota</button> em áudio ou se preferir <button className='font-medium text-lime-400 hover:underline'>utilize apenas texto</button>
                  </p>
               </div>
               <button
                  type='button'
                  className='w-full py-4 text-sm font-medium text-center outline-none bg-lime-400 text-lime-950 group hover:bg-lime-500'
               >
                  Salvar Nota
               </button>
            </Dialog.Content>
         </Dialog.Portal>
      </Dialog.Root>
   )
}
