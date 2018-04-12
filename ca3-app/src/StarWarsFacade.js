const URL = "http://localhost:8084/jwtbackend/api/starwars";

function handleHttpErrors(res) {
    if (!res.ok) {
        throw {message:res.statusText,status:res.status};
    }
    return res.json();
}

class StarWarsFacade {

    makeFetchOptions = (type, b) => {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      
        return {
            method: type,
            headers,
            body: JSON.stringify(b)
        }
    }


    fetchDataPeople = (id) => {
        const options = this.makeFetchOptions("GET");
        return fetch(URL+ id,options).then(handleHttpErrors);
    }

    fetchDataPlanets = (id) => {
        const options = this.makeFetchOptions("GET");
        return fetch(URL+id,options).then(handleHttpErrors);
    }

    fetchDataStarships = (id) => {
        const options = this.makeFetchOptions("GET");
        return fetch(URL + id ,options).then(handleHttpErrors);
    }


}


const facade = new StarWarsFacade();
export default facade;