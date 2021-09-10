
export default class RestoService {

    url = 'http://localhost:3000/menu'; // !!! For json-serv -> json-server src/db.json -> Localhost 3000
    gitUrl = 'https://my-json-server.typicode.com/BohdanShaban/json-server_Fake_Back-End/menu'; // !!! For Fake Json-Serv


    getMenuItems = async () => {

        const response = await fetch(this.gitUrl);
        
        if (!response.ok) { throw new Error('Server Error'); }

        return await response.json();

        // const result = await response.json();
        // return result;
    }
}