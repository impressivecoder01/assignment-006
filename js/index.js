const loadTrees = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(plants => showTrees(plants.plants))
}
const showTrees = (plants) => {
    // console.log(plants)
    const category = document.getElementById('category')
    category.innerHTML = ''
    for (let plant of plants) {
        const aside = document.createElement('div')
        aside.innerHTML = `
        <div class="">
            <img src=${plant.image} alt="error">
        <div class="text-div">
            <h1>${plant.name}</h1>
            <p>${plant.description}</p>
        </div>
        <div class="text-div-two">
            <button class="">${plant.category}</button>
            <h1>৳${plant.price}</h1>
        </div>
            <button class="bg-[#15803d] text-white font-medium">Add to Card</button>
        </div>
        `
        category.appendChild(aside)
    }
}
loadTrees()