import React, { useState, useEffect, Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import { HeaderTitle, HeaderString } from "../../constants";
import { SystemAPIModels } from "../../models";
import { userLogoutAction } from "../../actions";

import { Menu, Layout, Dropdown, notification, Avatar } from 'antd';
import "./styles.css";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

const HeaderTab = () => {
    const datas: any = useSelector<SystemAPIModels.RootState>(state => state.datas)
    const actionDispatch = useDispatch<Dispatch<any>>();

    const [activeTabKey, setActiveTabKey] = useState<string>('')
    const [needHeader, setNeedHeader] = useState<boolean>(false);
    const [userSignOut, setUserSignOut] = useState<boolean>(false);


    let userDataObject = sessionStorage.getItem('userLog');
    console.log("Header", userDataObject);
    useEffect(() => {
        console.log("user datas header", datas)
        if (datas != {} && datas.hasOwnProperty('data')) {
            setUserSignOut(false);
            setNeedHeader(true);
        }
    }, [datas]);

    const clearLoggedUser = () => {
        console.log("Log out");
        successNotification(HeaderString.SIGN_OUT_SUCCESS);
        actionDispatch(userLogoutAction());
        sessionStorage.removeItem("userLog");
        setUserSignOut(true);
    }
    const successNotification = (message: string) => {
        notification.config({
            placement: 'topLeft'
        });
        notification['success']({
            message: message,
        });
    }
    const profileMenu = (
        <Menu >
            <Menu.Item key="0">
                {/* <Link className="external-link" to="/profile"> */}
                    View Profile
                    {/* </Link> */}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" onClick={() => {}}>Sign Out</Menu.Item>
        </Menu>
    )


    // if (userSignOut) {
    //     return (<Redirect to="/login" />);
    // }
    // if (needHeader) {
    //     return (
    //         <Header className="header-bar">
    //             <Menu className="homepage-header-menus" theme="light" mode="horizontal" defaultSelectedKeys={[activeTabKey]} onSelect={() => setActiveTabKey(activeTabKey)} defaultOpenKeys={['sub1']}>
    //                 <Menu.Item key="1">{HeaderTitle.HOME}</Menu.Item>
    //                 <Menu.Item key="2">
    //                     <Link className="external-link" to="/posts">{HeaderTitle.POSTS}</Link>
    //                 </Menu.Item>
    //                 <Menu.Item key="3">{HeaderTitle.SERVICES}</Menu.Item>
    //                 <Menu.Item key="4">{HeaderTitle.CONTACT}</Menu.Item>
    //                 <Menu.Item key="5">{HeaderTitle.ABOUT_US}</Menu.Item>
    //                 <Menu.Item key="6">
    //                     <Dropdown overlay={profileMenu} trigger={['click']} className="profile-drop-down">
    //                         <Avatar size="default" icon={<UserOutlined />} />
    //                     </Dropdown>
    //                 </Menu.Item>
    //             </Menu>
    //         </Header>
    //     )
    // };

    // return <></>;
    return (
        <Header className="header-bar">
            <Menu className="homepage-header-menus" theme="light" mode="horizontal" defaultSelectedKeys={[activeTabKey]} onSelect={() => setActiveTabKey(activeTabKey)} defaultOpenKeys={['sub1']}>
                <Menu.Item key="1">{HeaderTitle.HOME}</Menu.Item>
                <Menu.Item key="2">
                    <Link className="external-link" to="/posts">{HeaderTitle.POSTS}</Link>
                </Menu.Item>
                <Menu.Item key="3">{HeaderTitle.SERVICES}</Menu.Item>
                <Menu.Item key="4">{HeaderTitle.CONTACT}</Menu.Item>
                <Menu.Item key="5">{HeaderTitle.ABOUT_US}</Menu.Item>
                <Menu.Item key="6">
                    <Dropdown overlay={profileMenu} trigger={['click']} className="profile-drop-down">
                        <Avatar size="default" icon={<UserOutlined />} />
                    </Dropdown>
                </Menu.Item>
            </Menu>
        </Header>
    )
}
export default HeaderTab;