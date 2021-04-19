import React, { useState } from "react";

import { Row, Col, Image } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const MyGroup = () => {
    const [arrayMap, setArrayMap] = useState([
        {
            groupName: 'Group 01',
            lastAction: 'last action 1h ago',
            groupImg: 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
        },
        {
            groupName: 'Group 02',
            lastAction: 'last action 5h ago',
            groupImg: 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
        },
        {
            groupName: 'Group 03',
            lastAction: 'last action 7h ago',
            groupImg: 'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
        },
    ])
    return (
        <div>
            {
                arrayMap.map((data: any) => (
                    <Row className="mygroup-card-row">
                        <Col span={6}>
                            <Avatar size="large"
                                src={<Image preview={false} alt="" src={data.groupImg} />}
                            />
                        </Col>
                        <Col span={18}>
                            <div className="">
                                <p className="mygroup-name">{data.groupName}</p>
                                <p className="mygroup-lastAction">{data.lastAction}</p>
                            </div>
                        </Col>
                    </Row>
                ))
            }
        </div>
    )
}

export default MyGroup;