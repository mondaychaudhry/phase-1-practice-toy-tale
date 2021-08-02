let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const w = document.querySelector ('#toy-collection')
fetch ('http://localhost:3000/toys').then(x=>x.json())
.then(y=>y.forEach(z=>
  a(z)))

  function a (z)  {
    let b = document.createElement('div')
    b.className = 'card'
    let d = document.createElement('h2')
    d.innerText = z.name
    let e= document.createElement('img')
    e.src = z.image
    e.className= 'toy-avatar'
    let f = document.createElement('p')
    f.innerText = `${z.likes} Likes`
    let c = document.createElement ('button')
    c.innerText= 'Like <3'
    c.className= 'like-btn'
    c.addEventListener ('click',(e) => {
    const g = e.target.previousSibling.innerText 
    const h = g.split('')[0]
    e.target.previousSibling.innerText = `${parseInt(h) + 1} Likes`
    fetch (`http://localhost:3000/toys/${z.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({likes: parseInt(h)+1})
    })
    })
    w.appendChild(b)
    b.append(d,e,f,c)
    }

    

    document.querySelector('.add-toy-form').addEventListener ('submit', e => {
      e.preventDefault()
      const x = e.target.name.value
      const y = e.target.image.value
      const z = {
        name: x,
        image: y,
        likes: 0 
      }
      a (z)
      fetch (`http://localhost:3000/toys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        'name': `${x}`, 
        'image':`${y}`,
        'likes': 0
      })
    })
    })


