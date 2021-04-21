import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { createPost, fetchHomepagePostsData } from "../../actions";

import { Modal, Button, Avatar, Input, Select, Upload, notification } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { SystemAPIModels } from "../../models";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../constants";

const { Option } = Select;

interface Props {
    showCreatePost: boolean,
    setShowCreatePost: Dispatch<SetStateAction<boolean>>,
    setCurrentPage: Dispatch<SetStateAction<any>>,
}

const CreatePostModal = ({ setCurrentPage, showCreatePost, setShowCreatePost }: Props) => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const createNewPost: SystemAPIModels.PostsDataObject | any = useSelector<SystemAPIModels.RootState>(state => state.createNewPost);
    const [firstPage, setFirstPage] = useState<number>(1);
    const [createPostObject, setCreatePostObject] = useState<SystemAPIModels.CreateNewPost>({
        postText: '',
        postImages: [],
        postAudienceType: 1,
        postAudienceData: [],
        postVideos: [],
        postFiles: [],
        postThumbs: [],
    })
    // useEffect(() => {
    //     if(createNewPost != {} && createNewPost.status == 200){
    //         successNotification(createNewPost.message)
    //         actionDispatch(fetchHomepagePostsData(firstPage));
    //         setShowCreatePost(false);
    //         clearCreateNewPost()
    //     }else if(createNewPost != {} && createNewPost.status != 200){
    //         errorNotification(createNewPost.message)
    //         clearCreateNewPost();
    //     }
    // }, [createNewPost]);
    const clearCreateNewPost = () => {
        setCreatePostObject({
            postText: '',
            postImages: [],
            postAudienceType: 1,
            postAudienceData: [],
            postVideos: [],
            postFiles: [],
            postThumbs: [],
        });
        actionDispatch(fetchHomepagePostsData(firstPage));
    }
    const successNotification = (message: string) => {
        notification.config({
            placement: 'topLeft'
        });
        notification['success']({
            message: message,
        });
    }
    const errorNotification = (message: string) => {
        notification.config({
            placement: 'topLeft'
        });
        notification['error']({
            message: message,
        });
    }
    const onChangeGenderEvent = (value: number) => {
        setCreatePostObject({ ...createPostObject, ['postAudienceType']: value });
    }
    const onChangeTextEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        setCreatePostObject({ ...createPostObject, [fieldName]: e.target.value });
    }
    const onChangeImage = (e: UploadChangeParam<UploadFile<any>>) => {
        console.log(e.fileList)
        let thumbArr: string[] | undefined = [];
        for (let index = 0; index < e.fileList.length; index++) {
            const element = e.fileList[index].thumbUrl;
            if (element != undefined) {
                thumbArr.push(element);
            }
        }
        // let thumbArr = e.fileList.map((file: UploadFile) => console.log(file.thumbUrl));
        console.log(thumbArr)
        if (thumbArr != undefined) {
            setCreatePostObject({ ...createPostObject, ["postThumbs"]: [...thumbArr] });
        }
    }
    const onSubmitPostForm = async () => {
        console.log(createPostObject)
        // actionDispatch(createPost(createPostObject));
        // setShowCreatePost(false);
        const createdPostObject = await axios.post(API.CREATE_POST, createPostObject, {
            headers: {
                'Content-Type': 'application/json',
                'token': API.ACCESS_TOKEN,
                'associationId': API.ASSOCIATE_ID
            }
        })
        console.log(createdPostObject);
        if (createdPostObject.data != {} && createdPostObject.data.status == 200) {
            successNotification(createdPostObject.data.message)
            clearCreateNewPost()
            setShowCreatePost(false);
        } else if (createdPostObject.data != {} && createdPostObject.data.status != 200) {
            errorNotification(createdPostObject.data.message)
        }
    }
    const [postUserDetail, setPostUserDetail] = useState({
        profileImage: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png',
        username: 'imran Basha',
        designation: 'developer At 10decoders'
    })
    return (
        <Modal
            className="create-post-modal"
            visible={showCreatePost}
            title={
                <b>Create Post</b>
            }
            onOk={() => setShowCreatePost(false)}
            onCancel={() => setShowCreatePost(false)}
            footer={[
                <Button
                    onClick={() => onSubmitPostForm()}
                    size="middle"
                    className="create-post-button"
                    key="post">
                    Post
            </Button>
            ]}
        >
            <div>
                <div className="create-post-profile-div">
                    <div className="create-post-avatar-div">
                        <Avatar src={postUserDetail.profileImage} alt="" />
                    </div>
                    <div className="create-post-details-div">
                        <p className="create-post-username">{postUserDetail.username}</p>
                        <p className="create-post-desc">{postUserDetail.designation}</p>
                    </div>
                </div>
                <div className="share-input-div">
                    <Input type="text"
                        name="postText"
                        onChange={(e) => onChangeTextEvent(e)}
                        value={createPostObject.postText}
                        bordered={false}
                        placeholder="What do you want to share"
                        className="create-post-share-input" />
                    <p className="create-post-input-placeholder">
                        Note: You can add <span>#hashtag</span>, <span>@people</span> and <span>links</span> to text in your post
                </p>
                </div>
                <div>
                    {
                        createPostObject && createPostObject.postThumbs?.map((upload: any) => (
                            <img src={upload} />
                        ))
                    }
                </div>
                <div className="create-post-add-buttons">
                    <Upload
                        listType="picture"
                        // defaultFileList={[...postImages]}
                        onChange={(e) => onChangeImage(e)}
                        showUploadList={true}
                        className="upload-list-inline">
                        <Button className="create-post-action-button">Add Photos</Button>
                    </Upload>
                    <Upload
                        listType="picture"
                        // defaultFileList={[...postImages]}
                        onChange={(e) => onChangeImage(e)}
                        showUploadList={true}
                        className="upload-list-inline">
                        <Button className="create-post-action-button">Add Videos</Button>
                    </Upload>
                    <Upload
                        listType="picture"
                        // defaultFileList={[...postImages]}
                        onChange={(e) => onChangeImage(e)}
                        showUploadList={true}
                        className="upload-list-inline">
                        <Button className="create-post-action-button">Add Documents</Button>
                    </Upload>
                    {/* <Button className="create-post-action-button">Add Photos</Button>           
                    <Button className="create-post-action-button">Add Videos</Button>
                    <Button className="create-post-action-button">Add Documents</Button> */}
                </div>
                <div className="create-post-privacy-option-div">
                    <label className="create-post-select-label">
                        Who can see your post?
                    </label>
                    <Select
                        size="small"
                        onSelect={(val) => onChangeGenderEvent(val)}
                        defaultValue={createPostObject.postAudienceType}
                        bordered={false}
                        className="create-post-select-options">
                        <Option value={1}><span>Everyone</span></Option>
                        <Option value={2}><span>Followers</span></Option>
                        <Option value={3}><span>Following</span></Option>
                        <Option value={4}><span>Nobody</span></Option>
                    </Select>
                </div>
            </div>
        </Modal>
    )
}

export default CreatePostModal;