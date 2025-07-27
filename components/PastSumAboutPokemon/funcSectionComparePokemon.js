export const funcSectionComparePokemon = (inserirInTag) => {
    const sectionComparePokemon = document.createElement('section');
    sectionComparePokemon.className = 'sectionComparePokemon'

    sectionComparePokemon.innerHTML = `
    <h1>👨🏻‍💻 Seleção dinâmica de comparação em desenvolvimento 🔥</h1>
    `

    inserirInTag.appendChild(sectionComparePokemon);
}