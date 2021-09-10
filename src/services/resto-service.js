
export default class RestoService {

    url = 'http://localhost:3000/menu';
    gitUrl = 'https://github.com/BohdanShaban/json-server_Fake_Back-End/blob/[main|master]/db.json'; // !!! For Fake Json-Serv

    getMenuItems = async () => {

        const response = await fetch(this.gitUrl);
        
        if (!response.ok) { throw new Error('Server Error'); }

        return await response.json();

        // const result = await response.json();
        // return result;
    }
}