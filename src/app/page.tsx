import RecipeCard from '@/components/homepage/recipe-card'
import FONT_PRESETS from './utils/font-presets'
import Link from 'next/link'

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
      <section className='mb-4'>
        <figure>
          <img alt='' src="/placeholder.png" className='w-full h-xl mb-4' />
          <figcaption className={`${FONT_PRESETS.agbalumo} text-4xl mb-2 text-primary drop-shadow-[0_-4px_0px_#F1F1F1]`}>Spicy Thai Noodles</figcaption>
          <p className={`text-2xl ${FONT_PRESETS.montserrat_standard} text-green-1`}>Vegan</p>
          <p className={`text-2xl ${FONT_PRESETS.montserrat_standard}`}>October 10, 2025</p>
        </figure>
      </section>
      <hr className='border-2 border-[#1D252A33]  mb-4' />
      <h2 className={`${FONT_PRESETS.agbalumo} text-4xl text-primary my-8 drop-shadow-[0_-4px_0px_#F1F1F1]`}>Random Recipes</h2>
      <section className=' grid grid-cols-[1fr_1fr_1fr] gap-3'>
        <RecipeCard name="Test recette" date="7 Octobre 2023" category='Levantin' />
        <RecipeCard name="Test recette" date="7 Octobre 2023" category='Levantin' />
        <RecipeCard name="Test recette" date="7 Octobre 2023" category='Levantin' />
      </section>

      <h2 className={`${FONT_PRESETS.agbalumo} text-4xl text-primary my-8 drop-shadow-[0_-4px_0px_#F1F1F1]`}>Seasonal Recipes</h2>
      <section className='grid grid-cols-[1fr_1fr_1fr] gap-3'>
        <RecipeCard name="Test recette" date="7 Octobre 2023" category='Levantin' />
        <RecipeCard name="Test recette" date="7 Octobre 2023" category='Levantin' />
        <RecipeCard name="Test recette" date="7 Octobre 2023" category='Levantin' />
      </section>
      <center><Link href="/create">
        <h3 className={`${FONT_PRESETS.agbalumo} text-primary my-4 text-6xl drop-shadow-[0_-4px_0px_#F1F1F1]`}>Share your Recipe now!</h3>
      </Link></center>
    </main>
  )
}
