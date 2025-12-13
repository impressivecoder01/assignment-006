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
        <div class="card bg-white w-96 shadow-sm">
  <figure>
    <img class='h-[185px] w-[310px]'
      src="${plant.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${plant.name}</h2>
    <p>${plant.description}</p>
    <div class='flex items-center gap-7'>
    <button>${plant.category}</button>
    <p>৳${plant.price}</p>
    </div>
    <div class="card-actions w-full">
      <button class="btn btn-primary">Add to Card</button>
    </div>
  </div>
</div>
        `
        category.appendChild(aside)
    }
}
loadTrees()