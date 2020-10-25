let id=parseInt(window.localStorage.getItem('maxId')||'17');
function createId(){
    id++;
    window.localStorage.setItem('maxId',id.toString());
    return id;
}

export {createId}
