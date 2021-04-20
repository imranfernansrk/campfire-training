import React, { Dispatch, SetStateAction, useState } from "react";
import { createPost } from "../../actions";

import { Modal, Button, Avatar, Input, Select, Upload } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { SystemAPIModels } from "../../models";
import { useDispatch } from "react-redux";
import Form from "antd/lib/form/Form";
const { Option } = Select;

interface Props {
    showCreatePost: boolean,
    setShowCreatePost: Dispatch<SetStateAction<boolean>>,
    setCurrentPage: Dispatch<SetStateAction<any>>,
}

const CreatePostModal = ({ setCurrentPage, showCreatePost, setShowCreatePost }: Props) => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const [postImages, setPostImages] = useState<any>();
    console.log(postImages)
    const [createPostObject, setCreatePostObject] = useState<SystemAPIModels.CreateNewPost>({
        postText: '',
        postImages: [],
        postAudienceType: 1,
        postAudienceData: [],
        postVideos: [],
        postFiles: [],
        postThumbs: [],
    })
    const onChangeGenderEvent = (value: number) => {
        setCreatePostObject({ ...createPostObject, ['postAudienceType']: value });
    }
    const onChangeTextEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        setCreatePostObject({ ...createPostObject, [fieldName]: e.target.value });
    }
    const onChangeImage = (e: UploadChangeParam<UploadFile<any>>) => {
        console.log(e.fileList)
        let thumbArr = e.fileList.map((file: any) => file.thumbUrl);
        console.log(thumbArr)
        if (e.fileList[0].thumbUrl != undefined) {
            setCreatePostObject({ ...createPostObject, ["postThumbs"]: [...thumbArr] });
        }
    }
    const onSubmitPostForm = () => {
        console.log(createPostObject)
        actionDispatch(createPost(createPostObject));
        // setCurrentPage(1);
        setShowCreatePost(false);
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
                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        // defaultFileList={[...postImages]}
                        onChange={(e) => onChangeImage(e)}
                        showUploadList={true}
                        className="upload-list-inline"
                    >
                        <Button className="create-post-action-button">Add Photos</Button>
                    </Upload>
                    
                    {/* <Input className="btn btn-primary" type="file"/> */}
                    
                    {/* <Input type="file" onChange={(e) => onChangeImage(e)} className="create-post-action-button" /> */}
                    <Button className="create-post-action-button">Add Videos</Button>
                    <Button className="create-post-action-button">Add Documents</Button>
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