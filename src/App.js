import React, {Component} from 'react';

import './App.css';
import Login from './Components/Login';
import axios from 'axios';


const headers = {
    headers: {
        'Authorization': 'KISI-LOGIN 94c2056abb993b570517f2d3a89c9b5a',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};
const body = {
    "user": {
        "email": "email",
        "name": "name",
        "password": "password",
        "terms_and_conditions": true
    }
};

class App extends Component {


//https://api.github.com/users/John
//

    constructor(props) {
        super(props)
        this.state = {
            body: [],
            headers: [],
            token: ''
        }
    }

    componentDidMount() {
        axios.post('https://api.getkisi.com/logins?type=type&primary=true&user_id=0', body, headers)
            .then(res => {
                const token = res.data.authentication_token
                this.setState({
                    token
                })
            }, json => console.log(json))

    }

    render() {
        const headers1 = {

            headers: {
                'Authorization':  'KISI-LOGIN 94c2056abb993b570517f2d3a89c9b5a' || `KISI-LINK token= ${this.state.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        };
        axios.get('https://api.getkisi.com/locks?name=name&online=true&assigned=true&gateway_id=0&place_id=0', headers1).then(json => {
            console.log(json)
        })
        return (


            <div className="App">


                <div>
                    ss
                    {this.state.token}
                </div>
                <Login/>
            </div>
        );
    }
}

export default App;
