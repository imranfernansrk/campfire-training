import React, { Dispatch, SetStateAction, useState } from "react";
import { API, BASE_URL } from "../../constants";

import "./styles.css";
import { Button, Card, Col, Form, Input, Row, Select } from "antd"
import { CameraOutlined, CommentOutlined, FileTextOutlined, FormOutlined, HeartOutlined, SearchOutlined, ShareAltOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { useEffect } from "react";
const { Option } = Select;

interface Props {
    postData: any
}
const SinglePostCard = ({ postData }: Props) => {
    console.log('testing----', postData)
    
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
        <div className="main-post-card-container" key={postData?._id} id={postData._id}>
            <Card className="">
                <Card
                    title={
                        (
                            <div className="post-member-details-header">
                                <div className="post-member-detail-profile">
                                    {
                                        postData.createdUserId && (postData.createdUserId.profileImage != null) ? (<Avatar src={BASE_URL + '/' + postData.createdUserId?.profileImage} alt="" />): null
                                    }
                                </div>
                                <div >
                                    <p className="post-member-detail-username">{postData.createdUserId?.fname + postData.createdUserId?.lname}</p>
                                    <p className="post-member-detail-desc">{postData.createdUserId?.company} - Member</p>
                                    <p className="post-member-detail-time">{postData?.dateCreated}</p>
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
                        {
                            (postData.postAssets != null) ? (postData.postAssets.map((asset: any)=>(
                                (asset.assetType == "image") ? (<img key={asset?._id} alt='' src={asset?.assetURL} width='100%' height='auto' />) : null
                            ))) : null
                        }
                        {
                            (postData.postText != null) ? (<p>{postData?.postText}</p>) : null
                        }
                        <p>{postData?.comments} comments - {postData?.likes} likes</p>
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
    )
}

export default SinglePostCard;