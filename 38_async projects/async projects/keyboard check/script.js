const insert = document.getElementById('insert')

window.addEventListener('keypress' , (e)=>{
    insert.innerHTML = `
    <div class=" color">
    <table height="100" width="300" border="2" align="center" bgcolor="blue">
        <tr>
            <th>key</th>
            <th >keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'space': e.key}</td>
            <td >${e.keyCode} </td>
            <td>${e.code}</td>
        </tr>
    </div>
    `
})