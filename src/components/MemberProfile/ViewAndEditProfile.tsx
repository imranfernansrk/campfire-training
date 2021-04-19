import React, { } from "react";
import { Row, Col, Card, Form, Input } from "antd";

interface Props {
    memberData: any,
}
const ViewAndEditProfile = ({ memberData }: Props) => {
    return (
        <div className="container">
            <Row>
                <Col span={6}>
                    <Card style={{ height: '100%' }}>
                        <div className="account-settings">
                            <div className="user-profile">
                                <div className="user-avatar">
                                    <img src={memberData?.profileImage} alt={memberData?.fullName} />
                                </div>
                                <h5 className="user-name">{memberData?.fullName}</h5>
                                <h6 className="user-email">{memberData?.email}</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={18}>
                    <Card style={{ height: "100%" }}>
                        <Form className="form-container">
                            <Row>
                                <Col span={24}>
                                    <h6 className="mb-2 text-primary">Personal Details</h6>
                                </Col>
                                <Col span={12}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input value={memberData?.fullName} type="text" className="form-control" name="fullName" placeholder="Enter full name" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="form-group">
                                        <label >Email</label>
                                        <input type="email" value={memberData?.email} className="form-control" name="email" placeholder="Enter Email ID" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={memberData?.phoneNumber} type="text" className="form-control" name="phoneNumber" placeholder="Enter phone number" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input value={memberData?.gender} type="text" className="form-control" name="gender" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="form-group">
                                        <label>Date Of Birth</label>
                                        <input value={memberData?.dateOfBirth} type="text" className="form-control" name="dateOfBirth" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <h6 className="mb-2 text-primary">Patient Database</h6>
                                </Col>
                                <Col span={12}>
                                    <div className="form-group">
                                        <label >Patient ID</label>
                                        <input disabled value={memberData?.patientid} type="text" className="form-control" name="patientid" placeholder="Enter Patient ID" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="form-group">
                                        <label >Joining Data</label>
                                        <input disabled type="joiningDate" value={memberData?.joiningDate} className="form-control" name="joiningDate" placeholder="Joining Date" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="form-group">
                                        <label>Success State</label>
                                        <input disabled value={memberData?.successState} type="text" className="form-control" name="successState" placeholder="Enter Success State" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-right">
                                        {/* <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button> */}
                                        <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ViewAndEditProfile;