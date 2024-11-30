import React from "react";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard";


// 项目页面容器
const ProjectsContainer = styled.div`

  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

// 页面标题样式
const PageTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

// 项目网格容器
const ProjectGrid = styled.div`

    display: grid;
    
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    
    gap: 2rem;

    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Projects = () => {
    const projectsData = [
        {
            title: "个人作品展示网站",
            description: "使用React和styled-components构建的个人作品展示网站,包含响应式设计。",
            tags: ["React", "styled-components", "responsive"],
            link: "https://github.com/yourusername/portfolio"
          },
          {
            title: "项目示例2",
            description: "这是另一个项目的描述示例。",
            tags: ["JavaScript", "Node.js", "MongoDB"],
            link: "https://github.com/yourusername/project2"
          },
          // 可以继续添加更多项目
    ];

    return (
        <ProjectsContainer>
            <PageTitle>My Projects</PageTitle>
            <ProjectGrid>
                {/* data传到这个组件上 */}
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        link={project.link}
                    />
                ))}
            </ProjectGrid>
        </ProjectsContainer>
    );
};

export default Projects;