// src/pages/Blog/index.jsx
import React from 'react';
import styled from 'styled-components';
import BlogPost from "../../components/BlogPost";

// 博客页面容器
const BlogContainer = styled.div`
  /* 最大宽度和居中 */
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

// 页面标题样式
const PageTitle = styled.h2`
  /* 文字居中 */
  text-align: center;
  /* 字体大小和颜色 */
  font-size: 2rem;
  color: #333;
  /* 底部边距 */
  margin-bottom: 2rem;
`;

// 博客文章列表容器
const BlogList = styled.div`
  /* 使用grid布局 */
  display: grid;
  /* 设置行间距 */
  gap: 2rem;
`;

// Blog页面的主体结构
const Blog = () => {
  // 示例博客数据
  const blogPosts = [
    {
      date: "2024-01-15",
      title: "React开发心得",
      preview: "在使用React进行开发的过程中，我总结了一些实用的技巧和经验...",
      link: "/blog/react-tips"
    },
    {
      date: "2024-01-10",
      title: "响应式设计实践",
      preview: "如何使用modern CSS特性实现优雅的响应式设计？本文将分享一些实用技巧...",
      link: "/blog/responsive-design"
    },
    // 可以继续添加更多博客文章
  ];

  return (
    <BlogContainer>
      <PageTitle>My Blog</PageTitle>
      <BlogList>
        {/* 将博客数据映射为BlogPost组件 */}
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            date={post.date}
            title={post.title}
            preview={post.preview}
            link={post.link}
          />
        ))}
      </BlogList>
    </BlogContainer>
  );
};

export default Blog;