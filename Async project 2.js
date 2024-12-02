const insert = document.querySelector('.insert')
window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
    <div class='box'>
        <table>
            <tr>
                <th>Key</th>
                <th>Key code</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${(e.key===' ' ? "space":e.key)}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `;
    
});