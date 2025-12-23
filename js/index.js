const loadTrees = () => {
  spinner(true)
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(plants => showTrees(plants.plants))
}
const showTrees = (plants) => {
    removeActive()
  const getBtn = document.getElementById('all-tree-btn')
  getBtn.classList.add('active')
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
    <button onclick="loadTreeDetails(${plant.id})" class="card-title">${plant.name}</button>
    <p>${plant.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${plant.category}</button>

    <p>৳${plant.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${plant.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
        `
        category.appendChild(aside)
    }
    spinner(false)
}
// fruit
const loadFruit =()=>{
  spinner(true)
      fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showFruitTree(fruit.plants))
}
const showFruitTree = (fruits) =>{
  removeActive()
  const getBtn = document.getElementById('fruit-btn')
  getBtn.classList.add('active')
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
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// fruit end
// flower
const loadFlower=()=>{
  spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showFlower(fruit.plants))
}
const showFlower =(fruits)=>{
  removeActive()
  const getBtn = document.getElementById('flower-btn')
  getBtn.classList.add('active')
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
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// flower end
// Shade 
const loadShade=()=>{
    spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showShade(fruit.plants))
}
const showShade = (fruits)=>{
  removeActive()
  const getBtn = document.getElementById('shade-btn')
  getBtn.classList.add('active')
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Shade Tree'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// Shade end
// medical
const loadMedical = ()=>{
    spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showMedical(fruit.plants))
}
const showMedical = (fruits)=>{
  removeActive()
  const getBtn = document.getElementById('medical-btn')
  getBtn.classList.add('active')
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Medicinal Tree'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// medical end
// timber
const loadTimber = ()=>{
  spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showTimber(fruit.plants))
}
const showTimber = (fruits)=>{
  removeActive()
  const getBtn = document.getElementById('timber-btn')
  getBtn.classList.add('active')
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Timber Tree'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// timber end
// evergreen
const loadEverGreen = ()=>{
  spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showEverGreen(fruit.plants))
}
const showEverGreen = (fruits)=>{
  removeActive()
  const getBtn = document.getElementById('evergreen-btn')
  getBtn.classList.add('active')
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Evergreen Tree'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// evergreen end
// ornamental
const loadOrnamental = ()=>{
  spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showOrnamental(fruit.plants))
}
const showOrnamental = (fruits)=>{
  removeActive()
  const getBtn = document.getElementById('ornamental-btn')
  getBtn.classList.add('active')
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Ornamental Plant'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// ornamental end
// bamboo
const loadBamboo = ()=>{
  spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => showBamboo(fruit.plants))
}
const showBamboo = (fruits)=>{
  removeActive()
  const getBtn = document.getElementById('bamboo-btn')
  getBtn.classList.add('active')
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Bamboo'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// bamboo end
// climbers
const loadClimber = ()=>{
  spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => {
        showClimber(fruit.plants)
        
      })
}
const showClimber= (fruits)=>{
  const category = document.getElementById('category')
  removeActive()
  const getBtn = document.getElementById('climber-btn')
  getBtn.classList.add('active')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Climber'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// climbers end
// aquatic
const loadAquatic = ()=>{
  spinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
      .then(res =>res.json())
      .then(fruit => {
        removeActive()
        showAquatic(fruit.plants)
      })
}
const showAquatic = (fruits)=>{
  const getBtn= document.getElementById('aquatic-btn')
  getBtn.classList.add('active')
  const category = document.getElementById('category')
  category.innerHTML = ''
  for(let fruit of fruits){
    if(fruit.category === 'Aquatic Plant'){
      const fruitTree = document.createElement('div')
      fruitTree.innerHTML = `
      <figure>
    <img class='h-[185px] w-[310px]'
      src="${fruit.image}" />
  </figure>
  <div class="card-body">
    <button onclick="loadTreeDetails(${fruit.id})" class="card-title">${fruit.name}</button>
    <p>${fruit.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${fruit.category}</button>

    <p>৳${fruit.price}</p>
    </div>
    <div class="card-actions w-full">
      <button onclick='showInAddCard(${fruit.id})' class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
      `
 category.appendChild(fruitTree)

    }
  }
  spinner(false)
}
// aquatic end
// active function btn
const removeActive = ()=>{
  const lstbtn = document.querySelectorAll('.tree-btn')
  // console.log(lstbtn)
  lstbtn.forEach(btn => btn.classList.remove('active'))
  // lstbtn.forEach(btn => btn.classList.add('active'))
}
// active function btn end



// show card in right div
const showInAddCard = async(id)=>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  const res = await fetch(url)
  const details = await res.json()
  showing(details.plants)
}
const showing = (details)=>{
  const rightContainer = document.getElementById('right')
  let sum = [0]
  // let price =details.price
  // let total = sum + price
  // console.log(total)
  alert(`${details.name} added in your card`)
  const card = document.createElement('div')
  sum.push(details.price)
  console.log(details.id)
  // sum.forEach(detail=>)
  card.innerHTML=`
  <div class='flex justify-between'>
  <div>
  <p>${details.name}</p>
  <p>৳${details.price}</p>
  </div>
  <div>
  <p onclick='deleteCard('${details.id}')>Delete</p>
  </div>
  </div>
  `
  rightContainer.appendChild(card)
  const deleteCard = (id)=>{
  const newCards = details.filter(i =>details.id !==id)
  console.log(newCards)
  } 
  
}
// }

// end
// details function
const loadTreeDetails = async(id)=>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  const res = await fetch(url)
  const details = await res.json()
  displayTreeDetails(details.plants)
}
const displayTreeDetails = (details)=>{
  console.log(details)
  const detailsContainer = document.getElementById('details-container')
  detailsContainer.innerHTML = `
  <figure>
    <img class='h-[195px] w-full'
      src="${details.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${details.name}</h2>
    <p>${details.description}</p>
    <div class='flex items-center gap-7'>
   
    <button>${details.category}</button>

    <p>৳${details.price}</p>
    </div>
    <div class="card-actions w-full">
      <button class="btn btn-primary w-full">Add to Card</button>
    </div>
  </div>
</div>
  `
  document.getElementById('my_modal_5').showModal()
}
// details function end
// loading spinner
const spinner = (s)=>{
  if(s === true){
    document.getElementById('spinner').classList.remove('hidden')
    document.getElementById('category').classList.add('hidden')
  }
  else{
    document.getElementById('category').classList.remove('hidden')
    document.getElementById('spinner').classList.add('hidden')
  }
}

loadTrees()