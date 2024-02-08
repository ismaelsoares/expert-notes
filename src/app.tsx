import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

const note = {
   date: new Date(),
   content: 'Hello note 01'
}

export function App() {
   return (
      <div className='max-w-6xl mx-auto my-12 space-y-6'>
         <img src={logo} alt="NLV expert" />

         <form className='w-full mt-6'>
            <input
               type="text"
               placeholder='Busque em suas notas'
               className='w-full font-semibold tracking-tight bg-transparent outline-none text-3x1 placeholder:text-slate-500'
            />
         </form>

         <div className='h-px bg-slate-700' />

         <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">

            <NewNoteCard />

            <NoteCard note={note} />

         </div>
      </div>
   )
}

