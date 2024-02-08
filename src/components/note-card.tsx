
export function NoteCard() {
    return (
        <div className="relative p-5 space-y-3 overflow-hidden rounded-md pointer-events-none bg-slate-800">
            <span className="text-sm font-medium text-slate-200">
                Há 4 dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint laboriosam quia architecto, eos dolorum ea maxime facilis necessitatibus ad aliquam placeat beatae velit officiis nostrum repudiandae in voluptates quo amet.
            </p>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-black/0 h-1/2" />
        </div>
    )
}
