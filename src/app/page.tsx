import Textarea from '@/components/homepage/textarea'
import FONT_PRESETS from './utils/font-presets'

export default function Home() {
  return (
    <main>
      <section className='h-100 flex items-center'>
        <div style={{ flex: 1 }}>
        <h1 className={`${FONT_PRESETS.agbalumo} text-8xl text-primary my-4 drop-shadow-[0_-4px_0px_#F1F1F1]`}>Bienvenue sur Cookgether</h1>
        <Textarea />
      </div>
      <div style={{ flex: 2 }}>
        
      </div>
      </section>
      <section>
        <center>
          <h2 className={`${FONT_PRESETS.agbalumo} text-6xl text-primary my-8 drop-shadow-[0_-4px_0px_#F1F1F1]`}>Recette du jour</h2>
        </center>
      </section>
    </main>
  )
}
