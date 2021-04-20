import React, { Dispatch, SetStateAction, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { HomepagePosts } from "../../constants";
import SinglePostCard from "./SinglePostCard";


import "./styles.css";
import { Button, Card, Col, Form, Input, Row, Select } from "antd"
import { CameraOutlined, CommentOutlined, FileTextOutlined, FormOutlined, HeartOutlined, SearchOutlined, ShareAltOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
const { Option } = Select;

interface Props {
    setShowCreatePost: Dispatch<SetStateAction<boolean>>,
    homepagePostsData: [],
    fetchHomepageDatas: any,
    hasMorePage: boolean,
}
const PostsContents = ({ setShowCreatePost, homepagePostsData, fetchHomepageDatas, hasMorePage }: Props) => {
    console.log('Homepage post -----', homepagePostsData);

    const [postData, setPostData] = useState({
        username: 'Jon Snow',
        designation: 'VP Marketing at American Institude',
        postTime: '4h',
        postUserProfile: 'https://eshendetesia.com/images/user-profile.png',
        postImages: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3oVguQRk290hiS7afDIGWptrd1ZvuVcmrA&usqp=CAU',
        postText: 'Sometimes musicians, actors, or the otherwise famous have already expressed exactly what you’re trying to say. If that’s the case, borrow a quote for your next Instagram post. For added inspiration from your favorite artist, add the quote to a custom photo calendar so you can stay motivated as the days and months turn.',
        comments: 4,
        likes: 32
    })
    const [commentsData, setCommentsData] = useState({
        profileImage: 'https://wallpapercave.com/download/steve-jobs-wallpaper-4Tm8un2?nocache=1',
        username: 'Steve Jobs',
        designation: 'CEO',
        commentText: 'Great Meeting',
        time: '2h'
    })
    const [subCommentsData, setSubCommentsData] = useState({
        profileImage: 'https://wallpapercave.com/download/john-wick-wallpapers-wp1867298?nocache=1',
        username: 'John Wick',
        designation: 'Manager Director',
        commentText: 'It was presure to attend the meeting',
        time: '1h'
    })
    return (
        <div className="center-homepage-post-layout">
            <div className="search-homepage-container ">
                <Input
                    className="post-search-input-field"
                    type="text"
                    prefix={<SearchOutlined />}
                    placeholder={HomepagePosts.SEARCH_PLACEHOLDER}
                    width="100%" />
            </div>
            <div className="create-post-div-container">
                <Form className="create-post-form-div">
                    <FormOutlined className="create-post-form-icons" onClick={() => setShowCreatePost(true)} />
                    <Input
                        className="create-post-input-field"
                        type="text"
                        placeholder={HomepagePosts.CREATE_HOMEPAGE_POST} />
                    <CameraOutlined className="create-post-form-icons" />
                    <VideoCameraOutlined className="create-post-form-icons" />
                    <FileTextOutlined className="create-post-form-icons" />
                </Form>
            </div>
            <div className="center-post-filter-div">
                <span className="post-filter-label">Sort By:</span>
                <Select
                    size="small"
                    defaultValue="recent"
                    bordered={false}
                    className="post-filter-select-options">
                    <Option value="recent"><span>Recent</span></Option>
                    <Option value="date"><span>Date</span></Option>
                    <Option value="name"><span>Name</span></Option>
                </Select>
            </div>
            <div className="homepage-post-scrollable" id="homepage-post-list">
            <InfiniteScroll
                dataLength={homepagePostsData?.length}
                next={fetchHomepageDatas}
                hasMore={hasMorePage}
                loader="Loading"
                scrollableTarget="homepage-post-list">
                {
                    homepagePostsData && homepagePostsData.map((postData: any) => (
                        <SinglePostCard postData={postData} />
                    ))
                }
            </InfiniteScroll>
            </div>
        </div>
    )
}

export default PostsContents;