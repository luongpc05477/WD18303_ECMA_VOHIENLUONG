function generateTableHeader(herderTitles) {
   if(!herderTitles || herderTitles.length === 0){
    
    return "";
   }

    let html = ``;
    herderTitles.forEach(element => {
    html += `<th>${element}</th>`;
    
   });

   return `<thead><tr>${html}</tr></thead>`;
          
}
let array = [
    "ID",
    "Họ và tên",
    "Ảnh đại diện",
    "Ngày tạo"
];

console.log(generateTableHeader(array));




function generateTableRow(object) {
    if(!object || object.length === 0){
        return "";
}
    return `
        <tr>
            <td>${object.id}</td>
            <td>${object.name}</td>
            <td><img src ="${object.avatar}" height="150"></td>
            <td>${object.createdAt}</td>
        </tr>
    `;
}




function gennerateTable(herders, data) {
    if(!herders || !data || herders.length === 0 || data.length === 0){
        return "";
}

    let headerRow = generateTableHeader(herders);
    let html = ``  ;

    data.forEach(element =>{
        html += generateTableRow(element);
    })
     
    return `<table>${headerRow}<tbody>${html}</tbody></table>`;
}


let list = [
    {
    id: 1,
    name: "Võ Hiền Lương",
    avatar : "https://i.pinimg.com/736x/a0/76/98/a076984d817dbd445bda21ec231c41b9.jpg",
    createdAt: "2024/01/09"
    },

    {
        id: 2,
        name: "Nguyễn Văn Tèo",
        avatar : "https://i.pinimg.com/736x/a0/76/98/a076984d817dbd445bda21ec231c41b9.jpg",
        createdAt: "2024/01/09"
    }
]

let header = [
    "ID",
    "Họ và tên",
    "Ảnh đại diện",
    "Ngày tạo"

];
document.write(gennerateTable(header,list));



