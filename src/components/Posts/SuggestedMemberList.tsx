import React from "react";
import { useState } from "react";

import { Avatar, Col, Row, Image } from "antd";


const SuggestedMemberList = () => {
    const [arrayMap, setArrayMap] = useState([
        {
            fullName: 'Test 01',
            designation: 'test01',
            company: '10decoders',
            profileImage: 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
        },
        {
            fullName: 'Test 02',
            designation: 'test02',
            company: '10decoders',
            profileImage: 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
        },
        {
            fullName: 'Test 03',
            designation: 'test03',
            company: '10decoders',
            profileImage: 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
        },
        {
            fullName: 'Test 04',
            designation: 'test04',
            company: '10decoders',
            profileImage: 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
        }
    ])
    return (
        <div>
            {
                arrayMap.map((data: any) => (
                    <Row className="suggested-card-row">
                        <Col span={6}>
                            <Avatar size="large"
                                src={<Image preview={false} alt="" src={data.profileImage} />}
                            />
                        </Col>
                        <Col span={18}>
                            <div className="">
                                <p className="suggested-card-member-name">{data.fullName}</p>
                                <p className="suggested-card-member-designation">{data.designation}</p>
                                <p className="suggested-card-member-company"><b>{data.company}</b></p>
                            </div>
                        </Col>
                    </Row>
                ))
            }
        </div>
    )
}

export default SuggestedMemberList;