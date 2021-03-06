var React = require('react');
var Link = require('react-router').Link;
var UserStore = require('../../../stores/user');

var ProfileLinks = React.createClass({
    getInitialState: function () {
        return {
            user: UserStore.all()[0] || false
        }
    },
    mixins: [UserStore.mixin()],
    render: function () {
        var ProfileLinks = '';

        if (this.state.user) {
            //TODO Add 'logout' router
            ProfileLinks = (<li className="submenu-list__item">
                <Link to={`/profile`}
                      className="submenu-list__item__link js-bgstyle js-bgstyle__small js-link">Профиль</Link>
                <Link to={`/post/create`}
                      className="submenu-list__item__link js-bgstyle js-bgstyle__small js-link">Добавить запись</Link>
                <a href="/logout"
                   className="submenu-list__item__link js-bgstyle js-bgstyle__small js-link">Выйти</a>
            </li>);
        } else {
            ProfileLinks = (<li className="submenu-list__item">
                <Link to={`/login`}
                      className="submenu-list__item__link js-bgstyle js-bgstyle__small js-link">Вход</Link>
            </li>);
        }

        return (
            <div>
                <div className="submenu__title">Панель пользователя</div>
                <ul className="submenu-list">
                    {ProfileLinks}
                </ul>
            </div>
        );
    }
});

module.exports = ProfileLinks;