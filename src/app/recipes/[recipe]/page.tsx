async function Recipe({ params }: { params: {recipe: string } }) {
    // await fetch("http://localhost:3636/recipes")
    return (
        <main>
            <h1>{params.recipe}</h1>
            <section>
                Ceci est un tiramisu halal
            </section>
        </main>
    )
};

export default Recipe;
