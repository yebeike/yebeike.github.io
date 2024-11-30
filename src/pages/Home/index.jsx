import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
    
    /* 限制内容区域宽度 */
    max-width: 1200px;
    /* 水平居中*/
    margin: 0 auto;
    // 增加内边距
    padding: 2rem;
`;

// 顶部展示区
const Hero = styled.div`

    // 文字水平居中
    text-align: center;
    // 添加底部外边距
    margin-bottom: 4rem;
`;

// 标题样式
const Title = styled.h1`

    font-size: 2.5rem;
    // 深灰色
    color: #333;

    margin-bottom: 1rem;
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    // 中灰色
    color: #666;

    line-height: 1.6;
`;

const Home = () =>{
    return(
        <HomeContainer>
            <Hero>
                <Title>Welcome to my Portfolio</Title>
                <Subtitle>
                    A passionate developer focused on creating beautiful and functional web applications.
                    Here you'll find my projects and thoughts on technology.
                </Subtitle>
            </Hero>

            {
                /*
                未来加其他
                
                */
            }
        </HomeContainer>
    );
};

export default Home;

