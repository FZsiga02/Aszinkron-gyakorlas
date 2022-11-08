document.addEventListener('DOMContentLoaded', () => {
    let osszes = document.getElementById('osszes');
    let elerhetosegek = document.getElementById('elerhetosegek');
    let sulyos = document.getElementById('sulyos');
    let suly = document.getElementById('suly');
    let barna = document.getElementById('barna');
    

    osszes.addEventListener('click', async () => {
        let response = await fetch('users.json');
        let result = await response.json();
        megjelenites(result.users);
    })

    elerhetosegek.addEventListener('click', async () => {
        let response = await fetch('users.json');
        let result = await response.json();
        elerhetoseg(result.users);
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

    function elerhetoseg(felhasznalok){
        let tablazat = document.getElementById('tablazat');
        tablazat.textContent = '';

        for (let f of felhasznalok){
            let tr = tablazat.insertRow();
            let td = tr.insertCell();
            let td2 = tr.insertCell();
            let td3 = tr.insertCell();
            td.appendChild(document.createTextNode(f.username));
            td.style.border = '1px solid black';
            td2.appendChild(document.createTextNode(f.email));
            td2.style.border = '1px solid black';
            td3.appendChild(document.createTextNode(f.phone));
            td3.style.border = '1px solid black';
        }
    }
})