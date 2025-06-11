import FONT_PRESETS from './utils/font-presets'

export default function Home() {
  return (
    <main>
      <section className='h-100 flex items-center'>
        <div style={{ flex: 1 }}>
        <h1 className={`${FONT_PRESETS.agbalumo} text-8xl text-primary my-8 drop-shadow-[0_-4px_0px_#F1F1F1]`}>Bienvenue sur Cookgether</h1>
        <div className={`shadow-[-8px_6px_0px_-3px_#C8CFBB] text-2xl w-full text-primary block text-primary/50 px-4 pr-8 border-2 rounded-lg bg-cg-white ${FONT_PRESETS.montserrat_standard}`}>
          Découvrez des recettes délicieuses, et partagez vos propres créations culinaires
        </div>
      </div>
      <div style={{ flex: 2 }}>
        
      </div>
      </section>
      <section className='mx-8'>
        <figure>
          <img alt='' src="/placeholder.png" className='w-5xl mb-4' />
          <figcaption className={`${FONT_PRESETS.agbalumo} text-4xl text-primary drop-shadow-[0_-4px_0px_#F1F1F1]`}>Spicy Thai Noodles</figcaption>
        </figure>
      </section>
    </main>
  )
}
