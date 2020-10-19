import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.0.13:3333',
    // se tiver testando pelo celular pega o endereço LAN do 
    //expo sem a porta 19000. Exemplo: http://192.168.0.13:3333
    //se tiver usando emulador do ios: usa o localhost
    //se tiver usando emulador do android, rodar no terminal:
    // adb reverse tcp:3333 tcp:3333
});

export default api;

