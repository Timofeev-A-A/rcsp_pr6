import React from "react";
import {hasName, hasPass} from "./auth";
import {Link} from "react-router-dom";
import '../App.css'

export class AuthForm extends React.Component {
    user = {
        name: 'user',
        pass: 'userpass',
        rights: ['can_view_articles']
    };
    admin = {
        name: 'admin',
        pass: 'adminpass',
        rights: ['can_view_articles', 'can_view_users']
    };
    constructor(props) {
        super(props);
        this.state = {
            userName: 'user',
            passWord: 'userpass',
            uVisible: 'hidden',
            aVisible: 'hidden'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        if (hasName(this.user, this.state.userName) && hasPass(this.user, this.state.passWord)) {
            event.preventDefault();
            this.setState({uVisible: 'visible'});
            alert('Вы авторизовались как пользователь');
        }
        else if (hasName(this.admin, this.state.userName) && hasPass(this.admin, this.state.passWord)) {
            event.preventDefault();
            this.setState({aVisible: 'visible'});
            alert('Вы авторизовались как администратор');
        }
        else alert('Неверное имя пользователя или пароль');
    }

    render() {
        const ustyle = {visibility: this.state.uVisible}
        const astyle = {visibility: this.state.aVisible}
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя пользователя:
                    <input
                        name="userName"
                        type="text"
                        value={this.state.userName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Пароль:
                    <input
                        name="passWord"
                        type="password"
                        value={this.state.passWord}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <input type="submit" value="Отправить" />
            </form>
                <Link className='link' style={ustyle} to='/user'>Пользовательская</Link><br/>
                <Link className='link' style={astyle} to='/admin'>Администраторская</Link>
            </div>
        );
    }
}