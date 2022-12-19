const Films_Api ='https://mosesochacha.github.io/db.json'
document.addEventListener('DOMContentLoaded',(event)=>{
    event.preventDefault();
    const navbar = document.getElementById('navbar')
    const sign_up = document.getElementById('sign_up')
    const sign_in = document.getElementById('sign_in')
    const container = document.getElementById('container')
    const btnr = document.getElementById('btnr')
    const btnl = document.getElementById('btnl')
    btnr.addEventListener('click',(e)=>{
        e.preventDefault()
        
        container.style.display = "none"
        navbar.style.display = "none"
        sign_in.removeAttribute('hidden')
        sign_in.style.display = "flex"
        sign_up.style.display = "none"
    })

    btnl.addEventListener('click',()=>{
        sign_in.style.display = "none"
        sign_up.style.display = "none"
        container.removeAttribute('hidden')
        container.style.display = "flex"
        
    })
    // craete movies list
    const menuLists=(names)=>{
        const CardDiv = document.createElement('div')
        CardDiv.classList.add('card' ,'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const menu_list= document.getElementsByClassName('menu_list')
        const information = document.getElementById('Information')
        const image = document.getElementById('poster')
        const movie = document.getElementById('movie')
        const menu = document.getElementById('menu')
        const container = document.getElementById('container')
        const times = document.getElementsById('times')


    }
      function showtime(){
        let dateTime = new Date ()
        let time =dateTime.toLocaleString()
        const times = document.getElementById('times')
        times.innerHTML=`
         ${time}
        `
      }
      let display = setInterval(showtime,1)
    // creating funtion of the top most movies
    const topMovies = ()=>{
        fetch (Films_Api)
        .then((response)=>response.json())
        .then((data)=>{
            
            const filmData = data.films[0];
            const poster  = filmData.poster
            const title = filmData.title
            const runtime = filmData.runtime
            const showtime = filmData.showtime
            const tickets_sold =filmData.tickets_sold
            const capacity =filmData.capacity
            const availableTickets = +capacity- +tickets_sold
            const soldTickets = +capacity -(+tickets_sold+ +1)
            
        const information = document.getElementById('Information')
        const image = document.getElementById('poster')

            
            information.innerHTML=`
            <h3 id="info ">Information</h3>
            <li>Title: ${title}</li>
            <li>Runtime: ${runtime}</li>
            <li>Showtime: ${showtime}</li>
            <li id ="tickets">Available-Tickets: ${availableTickets}</li>
             <button class="btn btn-primary" type="submit" id = "btn">Buy</button>
            `
            const tickets = document.getElementById("tickets")
            information.querySelector("#btn").addEventListener('click', (event)=>{
                event.preventDefault()
                 filmData.tickets_sold+= 1
                  const ticks = filmData.capacity - filmData.tickets_sold
                if(filmData.capacity > filmData.tickets_sold){
                    tickets.textContent = ` Available-Tickets: ${ticks}`
                }
                else if(filmData.capacity = filmData.tickets_sold){
                    tickets.textContent =` Tickets Sold Out`
                }

            })
            image.src=poster
         })
        }
       
         // creating menu of the films
        const moviesList = () =>{
            fetch(Films_Api)
            .then((response)=>response.json())
            .then((data)=>{
                data.films.map(item=>{
                    const filmsMenu = item.title
                    const menu_lists= document.getElementById('menu_lists')
                    const movies = document.createElement('li')
                    movies.addEventListener('click',(event)=>{
                        event.preventDefault()
                        const i = item.id
                        displays(data.films[i-1])
                    })
                    movies.innerHTML= `${filmsMenu}`
                    menu_lists.appendChild(movies)
                   })   
            })
        }
        // displaying data of the whole movies
        const displays = (filmData)=>{
            fetch (Films_Api)
        .then((response)=>response.json())
        .then((data)=>{
            data.films.forEach(element =>{
             
                const poster  = filmData.poster
                const title = filmData.title
                const runtime = filmData.runtime
                const showtime = filmData.showtime
                const tickets_sold =filmData.tickets_sold
                const capacity =filmData.capacity
                const availableTickets = +capacity- +tickets_sold
                const soldTickets = +capacity -(+tickets_sold+ +1)
                
            const information = document.getElementById('Information')
            const image = document.getElementById('poster')

            information.innerHTML=`
            <h3 id="info ">Information</h3>
            <li>Title: ${title}</li>
            <li>Runtime: ${runtime}</li>
            <li>Showtime: ${showtime}</li>
            <li id="tickets" >Available-Tickets: ${availableTickets}</li>
             <button class="btn btn-primary" type="submit" id = "btn">Buy</button>
            `
            const tickets = document.getElementById("tickets")
            information.querySelector("#btn").addEventListener('click', (event)=>{
                event.preventDefault()

                filmData.tickets_sold+= 1
           
                const ticks = filmData.capacity - filmData.tickets_sold
                if(filmData.capacity > filmData.tickets_sold){
                    tickets.textContent = ` Available-Tickets: ${ticks}`
                }
                else if(filmData.capacity = filmData.tickets_sold){
                    tickets.textContent =` Tickets Sold Out`
                }
                

            })
            image.src=poster
            
            })
                   
            });
           
        }
       
        // calling functions
    moviesList()
    topMovies();
    showtime()
})