import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchHomepagePostsData, createPost } from "../../actions";
import PostsContent from "./PostsContent";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { SystemAPIModels } from "../../models";

import "./styles.css";
import { Row, Col } from "antd"
import Title from "antd/lib/typography/Title";
import CreatePostModal from "./CreatePostModal";
import { useCallback } from "react";


const Posts = () => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const homepagePostsData: SystemAPIModels.PostsDataObject | any = useSelector<SystemAPIModels.RootState>(state => state.postsData);
    const [ showCreatePost, setShowCreatePost] = useState<boolean>(false);
    const [hasMorePage, setHasMorePage] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        actionDispatch(fetchHomepagePostsData(currentPage));
        console.log('useEffect',homepagePostsData.posts); 
    }, [currentPage]);
    const fetchHomepageDatas = () => {
        // setCurrentPage(homepagePostsData.postsData.pageInfo.current);
        if(homepagePostsData && homepagePostsData.pageInfo.next){
            setCurrentPage(homepagePostsData.pageInfo.current + 1);
            // actionDispatch(fetchHomepagePostsData(currentPage + 1));
            console.log('scrollFetching......')
        }else{
            setHasMorePage(false)
            return;
        }
    }
    const height = window.screen.availHeight + 'px';

    return (
        <div>
            <Row style={{height:height}} className="post-menu-sidebar">
                <Col span={4}>
                    <LeftSidebar />
                </Col>
                <Col span={15} className="center-col-post-content">
                    <PostsContent
                    setShowCreatePost={setShowCreatePost}
                    homepagePostsData={homepagePostsData.posts}
                    fetchHomepageDatas={fetchHomepageDatas}
                    hasMorePage={hasMorePage}/>
                </Col>
                <Col span={5}>
                    <RightSidebar />
                </Col>
            </Row>
            <CreatePostModal setCurrentPage={setCurrentPage} showCreatePost={showCreatePost} setShowCreatePost={setShowCreatePost} />
        </div>
    )

}
export default Posts;