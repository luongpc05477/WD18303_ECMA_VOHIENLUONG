///// Phần 1 
fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(function (response) {
        response.json().then(function (data) {

            let array = data.data;
            let number = 0;
            let html = document.getElementById('tbody1')

            array.forEach(data => {
                number += 1;
                let tr = `
                <tr>
                    <th scope="row">${number}</th>
                    <td>${data.Nation}</td>
                    <td>${data.Year}</td>
                    <td>${data.Population}</td>
                </tr>
               `
               html.innerHTML += tr
            });
           

        });
    })

///////////// Phần 2

fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
    .then(function (response) {
        response.json().then(function (data) {

            let array = data;
            let number = 0;
            let html = document.getElementById('tbody2')

            array.forEach(data => {
                number += 1;
                let tr = `
                <tr>
                    <th scope="row">${number}</th>
                    <td><img src="${data.avatar}"/></td>
                    <td>${data.name}</td>
                    <td>${data.createdAt}</td>                   

                </tr>
               `
               html.innerHTML += tr
            });
           

        });
    })







