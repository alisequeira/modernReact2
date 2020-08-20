import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component {

    componentDidMount = () => {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const {user} = this.props;

        if(!user){
            return null;
        }
    return  <div className="header">{user.name}</div>
    }
};

const mapStateToProps = (state, ownProps) => {//ownprops is a copy of the props in the class component
    //we can extract anything that is going to do some computation on our redux state and the props comming into our components
    //this is what really mapState... is for
return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps, {fetchUser})( UserHeader);