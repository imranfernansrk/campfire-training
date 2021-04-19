import { HomepageString, HomepageTitle } from "../../constants";

import './styles.css'
import 'antd/dist/antd.css';

import { Typography, Layout } from 'antd';
const { Footer } = Layout;
const { Title } = Typography;

const FooterContent = () => {
    return (
        <Layout>
            <Footer className="footer-content">
                <Title level={2}>{HomepageTitle.ABOUT_US}</Title>
                <p>{HomepageString.ABOUT_US}</p>
            </Footer>
        </Layout>
    )
}
export default FooterContent;