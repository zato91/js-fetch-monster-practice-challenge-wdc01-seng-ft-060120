document.addEventListener("DOMContentLoaded", () => {
const URL = "http://localhost:3000/monsters" ;
const URL50 = "http://localhost:3000/monsters/?_limit=50&_page=1";


     function renderMonster() {

        fetch(URL50)
            .then(response => response.json())
            .then(monsters => monsters.forEach( monster => displaymonster(monster) ));
     }

     function displaymonster(monster) {
         let monsterContainer = document.getElementById("monster-container");
         let divMonster = document.createElement("div");
         divMonster.innerHTML = `
         <h2>${monster.name}</h2>
         <h4>${monster.age}</h4>
         <p>${monster.description}</p>
         `
         monsterContainer.append(divMonster);
        
     }


     renderMonster();
     



     const createForm = () => {
        const monsterContainer = document.querySelector('#create-monster')
        let form = document.createElement('FORM')
        form.id = "monster-form"
        form.innerHTML =
        `<input id="name" placeholder= "name...">
        <input id="age" placeholder= "age...">
        <input id="description" placeholder= "description...">
        <button>Create</button>`
        monsterContainer.append(form)
    }
    // const options = {
    //     method: "POST",
    //             headers: {
    //                 "content-type": "application/json",
    //                 "accept": "application/json",
    //             },
    //             body: JSON.stringify(
    //                 name =
    //                 age = 
    //                 description =
    //             )
    //         }
    
    createForm();
    const monsterForm = document.getElementById("monster-form")
    monsterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const monsterName = monsterForm.name.value
        const monsterAge = monsterForm.age.value
        const monsterDes = monsterForm.description.value
        
        c
        
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify({monsterName, monsterAge, monsterDes})

    }
    fetch(URL50,options)
        .then(res => res.json())
        .then(monster => renderMonster(monster))

    })

    


})

// const monsterForm = document.getElementById("monster-form")
    
//     monsterForm.addEventListener('submit', (e) => {
//         e.preventDefault()
       
//         let monsterName = monsterForm.name.value
//         let monsterAge = monsterForm.age.value
//         let monsterDes = monsterForm.description.value
//         fetchPost(monsterName, monsterAge, monsterDes)
//         monsterForm.reset()
//     })



    


