import axios from "axios";

const url = "http://localhost:3000/professores"

class ProfessorService {
    //GET SERVICES
    static getProfessoresAxiosThenCatch = (callback) => {
    axios
        .get(url)
        .then((response) => {
        //console.log(response.data)
        callback(response.data);
        })
        .catch((error) => console.log(error));
    };

    static getProfessoresAxiosAsyncAwait = async (callback) => {
    try {
        const response = await axios.get(url);
        callback(response.data);
    } catch (error) {
        console.log(error);
    }
    };

    static getProfessoresFetchThenCatch = (callback) => {
    fetch(url)
        .then((response) => response.json())
        .then((json) => callback(json))
        .catch((error) => console.log(error));
    };

    static getProfessoresFetchAsyncAwait = async (callback) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        callback(json);
    } catch (error) {
        console.log(error);
    }
    };

    static getProfessorById = (id, callback) => {
    axios
        .get(`http://localhost:3000/professores/${id}`)
        .then((response) => {
            //console.log(response)
        //const { nome, curso, titulacao, ai, universidade } = response.data[0];
        callback(response.data);
        })
        .catch((error) => console.log([error,"ajsdlfjasldkfj al"]));
    };

    //POST SERVICES
    static postProfessorAxiosThenCatch = (professor, callback) => {
    axios
        .post(url, professor)
        .then((response) => {
        callback(response);
        })
        .catch((error) => console.log(error));
    };

    static postProfessorFetchThenCatch = (professor, callback) => {
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(professor),
    })
        .then((response) => {
        return response.json();
        })
        .then((json) => callback(json))
        .catch((error) => console.log(error));
    };

    // PUT SERVICES

    static updateProfessor = (id, professorEditado, callback) => {
    axios
        .put(`http://localhost:3000/professores/${id}`, professorEditado)
        .then((response) => {
        //console.log(response)
        callback(response)
        })
        .catch((error) => console.log(error));
    };

    // DELETE SERVICES

    static deleteProfessor = (id, callback) => {
    axios.delete(`http://localhost:3000/professores/${id}`)
        .then(response => {
        alert("Professor apagado!")
        //navigate("/professor/listar")
        callback("ok!")
        })
        .catch( error => console.log(error))
    }
}

export default ProfessorService