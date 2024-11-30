// src/components/BlogPost/index.jsx
import React from 'react';
import styled from 'styled-components';

// 博客文章卡片容器
const PostCard = styled.div`

  background: #ffffff;

  border-radius: 8px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  padding: 2rem;

  transition: transform 0.2s ease;
  

  &:hover {

    transform: translateY(-5px);

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

// 文章日期样式
const PostDate = styled.span`

  color: #888;

  font-size: 0.9rem;
`;

// 文章标题样式
const PostTitle = styled.h3`

  font-size: 1.5rem;
  color: #333;

  margin: 0.5rem 0;
`;

// 文章预览内容样式
const PostPreview = styled.p`

  color: #666;

  line-height: 1.6;

  margin-bottom: 1rem;
`;

// "阅读更多"链接样式
const ReadMore = styled.a`

  color: #007bff;

  text-decoration: none;

  font-size: 0.95rem;
  

  &:hover {

    color: #0056b3;

    text-decoration: underline;
  }
`;

// BlogPost组件的主体结构
const BlogPost = ({ date, title, preview, link }) => {
  return (
    <PostCard>
      <PostDate>{date}</PostDate>
      <PostTitle>{title}</PostTitle>
      <PostPreview>{preview}</PostPreview>
      <ReadMore href={link}>Read more →</ReadMore>
    </PostCard>
  );
};

export default BlogPost;