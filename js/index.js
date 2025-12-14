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
// fruit
const loadFruit =()=>{
      fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showFruitTree(fruit.plants))
}
const showFruitTree = (fruits) =>{
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Fruit Tree'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${fruit.name}</h2>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button class="btn btn-primary">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
}
// fruit end
// flower
const loadFlower=()=>{
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showFlower(fruit.plants))
}
const showFlower =(fruits)=>{
  // console.log(fruits)
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Flowering Tree'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${fruit.name}</h2>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button class="btn btn-primary">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
}
// flower end

loadTrees()