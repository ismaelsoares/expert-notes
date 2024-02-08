import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
interface NoteCardProps {
    note: {
        date: Date
        content: string
    }
}


export function NoteCard({ note }: NoteCardProps) {
    return (
        <Dialog.Root>

            <Dialog.Trigger className="relative flex flex-col gap-3 p-5 overflow-hidden text-left rounded-md outline-none bg-slate-800 hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400">
                <span className="text-sm font-medium text-slate-200">
                    {note.date.toISOString()}
                </span>
                <p className='text-sm leading-6 text-slate-400'>
                    {note.content}
                </p>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-black/0 h-1/2" />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black/50' />
                <Dialog.Content className='fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
                    <div className="flex flex-col flex-1 gap-3 p-5">
                        <span className="text-sm font-medium text-slate-200">
                            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                        </span>
                        <p className='text-sm leading-6 text-slate-400'>
                            {note.content}
                        </p>
                    </div>
                    <button
                        type='button'
                        className='w-full py-4 text-sm text-center bg-slate-800 text-slate-300 outline-now'
                    >
                        Deseja apagar essa nota?
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
