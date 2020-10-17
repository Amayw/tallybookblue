let id=parseInt(window.localStorage.getItem('maxId')||'26');
function createId(){
    id++;
    window.localStorage.setItem('maxId',id.toString());
    return id;
}

export {createId}
