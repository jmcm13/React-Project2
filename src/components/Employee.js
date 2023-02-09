import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Employee extends Component {
    state = {
        post: []
    }
    componentDidMount = () => {
        //api calls
        let url = "https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001";
        axios
            .get(url)
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    post: data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        const postList = this.state.post.length ? (<div style={{ height: 'auto', width: 'auto' }}>
            {this.state.post.map((user) => {
                return (
                    <React.Fragment key={user.id}>
                        <Link to={"/employee/" + user.id}>{user.firstName} {user.lastName}</Link>
                        <p>{user.email}</p>
                    </React.Fragment>
                );
            })}
        </div>) : (
            <div style={{ float: 'center' }}>
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
        );
        return <div style={{ float: 'center' }}>{postList}</div>;
    }
}

export default Employee;
