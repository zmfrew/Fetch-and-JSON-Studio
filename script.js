// TODO: add code here

function init() {
    getAstronauts()
}

function getAstronauts() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            const container = document.getElementById('container')
            const sorted = json.sort((a, b) => b.hoursInSpace - a.hoursInSpace)
            container.innerHTML += `<h2>Found ${sorted.length} astronauts</h2>`
            for (let astronaut of sorted) {
                const color = astronaut.active ? 'green' : 'black'
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li style="color:${color}">Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                `
            }
        })
    })
}

window.onload = init