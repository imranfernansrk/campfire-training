import React from "react";
import { Link } from "react-router-dom";
import { SystemAPIModels } from "../../models";

import "./styles.css";
import { Button, Form, Input, Select, DatePicker, Row, Col } from "antd";
import { PhoneTwoTone, LockTwoTone, MailTwoTone, IdcardTwoTone, CameraTwoTone } from "@ant-design/icons";
const { Option } = Select;

interface Props {
    formName: string,
    newUserData: SystemAPIModels.Signup,
    onSubmitEvent: any,
    onChangeEvent: any,
    onChangeGenderEvent: any,
    labelName: string,
    placeholderName: string,
    labelId: string,
    placeholderId: string,
    labelTeamId?: string,
    palceholderTeamId?: string,
}

const ManagerSignup = ({ formName, newUserData,
    onSubmitEvent, onChangeEvent, onChangeGenderEvent,
    labelName, placeholderName,
    labelId, placeholderId,
    labelTeamId, palceholderTeamId
}: Props) => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    return (
        <Form
            name={formName}
            className="form-signup"
            onFinish={(e) => onSubmitEvent(e)}>
            <Form.Item>
                <Input prefix={<IdcardTwoTone />} onChange={(e) => onChangeEvent(e)}
                    value={newUserData.fullName}
                    name="fullName"
                    placeholder="Enter Full Name" />
            </Form.Item>
            <Form.Item>
                <Input prefix={<MailTwoTone />} onChange={(e) => onChangeEvent(e)}
                    value={newUserData.email}
                    name="email"
                    placeholder="Enter Email" />
            </Form.Item>
            <Form.Item>
                <Input.Password prefix={<LockTwoTone />}
                    value={newUserData.password}
                    name="password"
                    onChange={(e) => onChangeEvent(e)}
                    placeholder="Enter New Password" />
            </Form.Item>
            <Form.Item>
                <Input prefix={<PhoneTwoTone />} onChange={(e) => onChangeEvent(e)}
                    value={newUserData.phoneNumber}
                    name="phoneNumber"
                    placeholder="Enter Phone Number" />
            </Form.Item>
            <Form.Item>
                <Input prefix={<CameraTwoTone />} onChange={(e) => onChangeEvent(e)}
                    name="profileImage"
                    placeholder="Paste Profile Picture URL Here" />
            </Form.Item>
            <Row>
                <Col span={12}>
                    <Form.Item
                        label="Gender"
                        rules={[{ required: true, message: 'Please input your Gender!' }]}>
                        <Select defaultValue={newUserData.gender} onSelect={(val) => onChangeGenderEvent(val)}>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} className="dob-col">
                    <Form.Item label="DOB">
                        <DatePicker size="middle" placeholder="Date Of Birth" format={dateFormatList} />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary"
                    size="large"
                    className="create-button"
                    onClick={() => onSubmitEvent()}
                    htmlType="submit">
                    Create Account
                </Button>
            </Form.Item>
            <Form.Item className="signup-form-item">
                <span>Already have an account | </span>
                <Link to="/login">Sign In</Link>
            </Form.Item>
        </Form>
    )
}

export default ManagerSignup;