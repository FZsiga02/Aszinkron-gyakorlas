document.addEventListener('DOMContentLoaded', () => {
    let osszes = document.getElementById('osszes');
    let elerhetosegek = document.getElementById('elerhetosegek');
    let sulyos = document.getElementById('sulyos');
    let suly = document.getElementById('suly');
    let barna = document.getElementById('barna');
    let tablazat = document.getElementById('tablazat');

    osszes.addEventListener('click', async () => {
        let response = await fetch('users.json');
        let result = await response.json();
        megjelenites(result.users);
    })

    function megjelenites(felhasznalok){
        let felhasznalokLista = document.getElementById('felhasznalok');
        felhasznalokLista.textContent = '';

        for (let f of felhasznalok){
            let li = document.createElement('li');
            li.innerHTML = f.firstName + " " + f.lastName + "<hr>";
            felhasznalokLista.appendChild(li);
        }
    }
})