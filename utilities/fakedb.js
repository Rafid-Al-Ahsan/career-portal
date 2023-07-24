/* eslint-disable no-unused-vars */
const addToDb = id => {
    let storage = getJobs();

    const quantity = storage[id];
    if(!quantity){
        storage[id] = 1
    }
    else {
        const newQuantity = quantity + 1;
        storage[id] = newQuantity;
    }
    localStorage.setItem('job-id', JSON.stringify(storage));
}

const getJobs = () => {
    let storage = {};

    const stored = localStorage.getItem('job-id');

    if(stored) {
        storage = JSON.parse(stored);
    }

    return storage;
}

export{
    addToDb,
    getJobs
}