let id=Number(window.localStorage.getItem('maxId')||26);
function createId(){
    id++;
    window.localStorage.setItem('maxId',String(id));
    return id;
}

export {createId}