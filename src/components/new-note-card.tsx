export function NewNoteCard() {
    return (
        <div className="relative p-5 space-y-3 overflow-hidden rounded-md bg-slate-700">
            <span className="text-sm font-medium text-slate-200">
                Adicionar Nota
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Grave uma nota em áudio de será convertida para texto automaticamente
            </p>
        </div>
    )
}
