import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        post: [],
    };

    componentDidMount = () => {
        //api calls
        let url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    post: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        const postList = this.state.post.length ? (
            <div className='container row'>
                <div className='row'></div>
                {this.state.post.map((user) => {
                    return (
                        <div key={user.id} className="row">
                            <div className="col s3 left">
                                <img src={user.imageUrl} alt={user.firstName + ' ' + user.lastName} />
                            </div>
                            <div className="col s9 left">
                                <p>{user.firstName} {user.lastName}</p>
                                <p>{user.email}</p>
                                <p>{user.contactNumber}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : (
            <div className='container'>
                <div className='row'></div>
                <div className="row center-align">
                    <div className="preloader-wrapper active">
                        <div className="spinner-layer spinner-red-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className='container'>
            <div className='row'>
                <h2 className='center'>Home</h2>
            </div>
                {postList}
            </div>
        );
    }
}

export default Home;