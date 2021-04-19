import React, { Dispatch, SetStateAction, useState } from "react";
import { HomepagePosts } from "../../constants";

import "./styles.css";
import { Button, Card, Col, Form, Input, Row } from "antd"
import { CameraOutlined, CommentOutlined, FileTextOutlined, FormOutlined, HeartOutlined, SearchOutlined, ShareAltOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const PostsContents = () => {
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
                    <FormOutlined className="create-post-form-icons" />
                    <Input
                        className="create-post-input-field"
                        type="text"
                        placeholder={HomepagePosts.CREATE_HOMEPAGE_POST} />
                    <CameraOutlined className="create-post-form-icons" />
                    <VideoCameraOutlined className="create-post-form-icons" />
                    <FileTextOutlined className="create-post-form-icons" />
                </Form>
            </div>
            <div className="main-post-card-container">
                <Card className="">
                    <Card
                        title={
                            (
                                <div className="post-member-details-header">
                                    <div className="post-member-detail-profile">
                                        <Avatar  src={postData.postUserProfile} alt="" />
                                    </div>
                                    <div >
                                        <p className="post-member-detail-username">{postData.username}</p>
                                        <p className="post-member-detail-desc">{postData.designation} - Member</p>
                                        <p className="post-member-detail-time">{postData.postTime}</p>
                                    </div>
                                </div>
                            )
                        }
                        className="post-card"
                        actions={[
                            <div className="post-item-action">
                                <CommentOutlined className="post-options-button" key="comment" />
                                <span className="post-item-actions-span">Comment</span>
                            </div>,
                            <div className="post-item-action">
                                <HeartOutlined className="post-options-button" key="like" />
                                <span className="post-item-actions-span">Like</span>
                            </div>,
                            <div className="post-item-action">
                                <ShareAltOutlined className="post-options-button" key="share" />
                                <span className="post-item-actions-span">Share</span>
                            </div>,
                        ]}>
                        <>
                            <img alt='' src={postData.postImages} width='100%' height='auto' />
                            <p>{postData.postText}</p>
                            <p>{postData.comments} comments - {postData.likes} likes</p>
                        </>
                    </Card>
                    <Row className="">
                        <Col span={2} className="post-comment-profile">
                            <Avatar src={commentsData.profileImage} alt="" />
                        </Col>
                        <Col span={22} className="post-comment-content">
                            <div className="post-comment-content-div">
                                <span className="post-comment-time ">{commentsData.time}</span>
                                <p className="post-comment-username">{commentsData.username}- Member</p>
                                <p className="post-comment-desc">{commentsData.designation}</p>
                                <p className="post-comment-text">{commentsData.commentText}</p>
                            </div>
                            <div className="post-comments-sub-actions">
                                <span>Like</span>
                                <span>Reply</span>
                                <span>{commentsData.time}</span>
                            </div>
                            <Row className="post-sub-comment-container">
                                <Col span={2} className="post-comment-profile">
                                    <Avatar src={subCommentsData.profileImage} alt="" />
                                </Col>
                                <Col span={22}>
                                    <div className="post-comment-content-div ">
                                        <span className="post-comment-time ">{subCommentsData.time}</span>
                                        <p className="post-comment-username">{subCommentsData.username} - Member</p>
                                        <p className="post-comment-desc">{subCommentsData.designation}</p>
                                        <p className="post-comment-text">{subCommentsData.commentText}</p>
                                    </div>
                                    <div className="post-comments-sub-actions">
                                        <span>Like</span>
                                        <span>Reply</span>
                                        <span>{subCommentsData.time}</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    )
}

export default PostsContents;