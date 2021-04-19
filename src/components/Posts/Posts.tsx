import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchPostDatas, addPostData } from "../../actions";
import PostsContent from "./PostsContent";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { SystemAPIModels } from "../../models";

import "./styles.css";
import { Row, Col } from "antd"
import Title from "antd/lib/typography/Title";


const Posts = () => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const postsData: [] | any = useSelector<SystemAPIModels.RootState>(state => state.posts);
    const [showComments, setShowComments] = useState<boolean>(false);
    const [postObject, setPostObject] = useState({
        id: "",
        title: ""
    });

    useEffect(() => {
        actionDispatch(fetchPostDatas());
    }, [])
    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        setPostObject({ ...postObject, [fieldName]: e.target.value });
    }
    const onSubmitEvent = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        actionDispatch(addPostData(postObject));
    }
    const onCardChange = (e: string) => {
        console.log("Tabs", e)
    }
    const onSelectComments = (postId: number) => {
        sessionStorage.setItem('postId', postId.toString());
        setShowComments(true);
    }
    if (showComments) {
        return (<Redirect to="/comments" />)
    }
    const height = window.innerHeight + 'px';

    return (
        <div>
            <Row className="post-menu-sidebar">
                <Col span={4}>
                    <LeftSidebar />
                </Col>
                <Col span={15}>
                    <PostsContent />
                </Col>
                <Col span={5}>
                    <RightSidebar />
                </Col>
            </Row>
        </div>
    )

}
export default Posts;