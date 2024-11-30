// src/components/ProjectCard/index.jsx
import React from 'react';
import styled from 'styled-components';

// 项目卡片容器
const Card = styled.div`

  background: #ffffff;

  border-radius: 8px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  padding: 1.5rem;

  transition: transform 0.2s ease;
  

  &:hover {
    transform: translateY(-5px);
  }
`;

// 项目标题样式
const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

// 项目描述样式
const Description = styled.p`

  color: #666;

  line-height: 1.6;
  margin-bottom: 1rem;
`;

// 技术标签容器
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
`;

// 单个技术标签样式
const Tag = styled.span`

  background: #f0f0f0;

  color: #555;

  padding: 0.25rem 0.75rem;

  border-radius: 15px;

  font-size: 0.875rem;
`;

// 链接按钮样式
const Link = styled.a`

  display: inline-block;

  color: #007bff;

  text-decoration: none;

  margin-top: 1rem;

  &:hover {
    color: #0056b3;
  }
`;

// ProjectCard组件的主体结构
const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tags>
        {/* 将传入的标签数组映射为Tag组件 */}
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      {/* 如果传入了链接,则显示查看按钮 */}
      {link && (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          View Project →
        </Link>
      )}
    </Card>
  );
};

export default ProjectCard;