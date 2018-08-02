import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Icon} from 'antd-mobile'
import CommonHeader from '../../components/header/commonHeader'
import RoomStyle from './room.css'
import TopImage from '../../images/img-3.png'
import BottomImage from '../../images/img-4.png'
import {Route,Switch } from 'react-router-dom'
import AddJointRent from "./addJointRent";

///app/room/addJointRent
class AddRoom extends Component{

    render(){
        return(
            <div>
                <div>
                    <Switch>
                        <Route path={'/addJointRent'}  component={AddJointRent} />
                    </Switch>
                </div>
                <CommonHeader title='添加房源' />
                <div className={RoomStyle["add-room-content"]}>
                    <Link to="addJointRent">
                    <div className={RoomStyle["add-room-top"]}>
                        <div className={RoomStyle["add-room-top-content"]}>
                            <img className={RoomStyle["add-room-top-image"]} src={TopImage} />
                            <div className={RoomStyle["add-room-title"]}>
                                <div className={RoomStyle["add-room-check-out"]}>
                                    <Icon type="check" className={RoomStyle["add-room-icon"]} />
                                </div>
                                <span>整租</span>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <div className={RoomStyle["add-room-bottom"]}>
                        <div className={RoomStyle["add-room-bottom-content"]}>
                            <img className={RoomStyle["add-room-bottom-image"]} src={BottomImage} />
                            <div className={RoomStyle["add-room-title"]}>
                                <div className={RoomStyle["add-room-check-out"]}>
                                    <Icon type="check" className={RoomStyle["add-room-icon"]} />
                                </div>
                                <span>合租</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export  default AddRoom