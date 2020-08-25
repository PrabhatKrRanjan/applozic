import React, { Component } from 'react';
import './ListUser.css'
import axios from 'axios';
import Modal from './Modal';
import Pagination from './pagination/Pagination'
import { connect } from 'react-redux';
import { addUserData } from './../redux/action';


class ListUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            currentData: '',
            name : '',
            showModal: false,
        }
    }

    componentDidMount() {
        axios.get("https://reqres.in/api/users?page=1")
            .then(res => {
                this.props.addUserData(res.data)
            })
            .then(() => {
                axios.get("https://reqres.in/api/users?page=2")
                .then(res => {
                    this.props.addUserData(res.data)
                }).catch(err => console.log(err))
            })
            .then(res => {
                this.setState({
                    userData:this.props.userList
                })
            })
            .catch(err => console.log(err))
        }

    handelClick = e => {
        this.setState({
            currentData: e,
            showModal: true
        })
    }

    handelClose = () => {
        this.setState({
            showModal: false
        })
    }

    handelSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },()=>{
            let searchResult = this.props.userList.filter(e => this.state.name.toLocaleLowerCase() === e.first_name.toLocaleLowerCase().slice(0, this.state.name.length))
            this.setState({
                userData : searchResult
            })
            console.log(searchResult)
        })
    }

    render() {
        const { page, perPage } = this.props
        console.log(this.state.userData)
        return (
            <div className='container'>
                <h1>User List</h1>
                <form>
                    <div>Enter Name For Search </div>
                    <input name="name" value={this.state.name} onChange={this.handelSearch} type="text"/>
                </form>
                {this.state.showModal && <Modal close={this.handelClose} user={this.state.currentData} />}
                <div className='showmodal'>
                </div>
                <table className='content-table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Avtar</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Get Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userData.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map((item) => <tr key={item.email}>
                            <td>{item.id}</td>
                            <td><img src={item.avatar} height="20px" alt={item.avatar} /></td>
                            <td>{item.first_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => this.handelClick(item)}>Click Here</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <div className="paginatoin">
                    <Pagination />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    userList: state.userInfo,
    page: state.page,
    perPage: state.perPage
})

const mapDispatchToProps = (dispatch) => ({
    addUserData: (payload) => dispatch(addUserData(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(ListUser)
