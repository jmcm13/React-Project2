import React, { Component } from 'react';
import withRouter from './withRouter';
import axios from 'axios';

class Post extends Component {
    state = {
        post: [],
    }
    componentDidMount = () => {
        let id = this.props.params.post_id;
        let url = 'https://hub.dummyapis.com/employee?noofRecords=1&idStarts=' + id;
        axios.get(url).then((res) => {
            console.log(res);
            this.setState({
                post: res.data
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        const postList = this.state.post.length ? (<div style={{ height: 'auto', width: 'auto', float: 'left' }}>
            {this.state.post.map((user) => {
                return (
                    <div key={user.id} style={{textAlign: 'center'}}>
                        <p>{user.firstName} {user.lastName}</p>
                        <p>{user.email}</p>
                        <p>{user.contactNumber}</p>
                        <p>{user.age}</p>
                        <p>{user.dob}</p>
                        <p>{user.salary}</p>
                        <p>{user.address}
                        </p>
                    </div>
                );
            })}
        </div>) : (<p>No Post Yet</p>)
        return <>{postList}</>;
    }
}

export default withRouter(Post);