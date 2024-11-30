import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 创建导航栏的样式组件
const Nav = styled.nav`
  /* position: fixed 表示导航栏会固定在页面顶部,不会随页面滚动而移动 */
  position: fixed;
  /* 设置导航栏的位置,top:0和left:0表示紧贴页面顶部和左侧 */
  top: 0;
  left: 0;
  right: 0;

  /* 导航栏的样式 */
  background: #ffffff;  // 白色背景
  /* box-shadow 添加阴影效果,让导航栏看起来像是"浮"在页面上 */
  /* rgba(0,0,0,0.1) 表示黑色阴影,透明度为0.1 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  /* padding设置内边距,格式为:上下 左右 */
  padding: 1rem 2rem;  // 1rem = 16px
  
  /* z-index确保导航栏显示在其他元素上面 */
  z-index: 1000;
`;

const NavList = styled.ul`
  // 列表样式
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  
  // 响应式设计
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// 创建导航链接的样式组件
// 这里使用styled(Link)是因为我们要美化react-router-dom的Link组件
const NavLink = styled(Link)`
  /* 链接文字颜色 */
  color: #333;
  twxt-decoration: none;
  // 字体粗细
  font-weight: 500;

  // 鼠标悬停链接上的样式
  &:hover{
    color: #007bff;
  }

`;

// header主体结构
const Header = () =>{
  return (
    <nav>
      <NavList>
        {/*导航项目 */}
        <navItem>
       {/* to="/" 表示点击后跳转到首页 */}
          <NavLink to="/">Home</NavLink>
        </navItem>
        <navItem>
       {/* to="/" 表示点击后跳转到首页 */}
          <NavLink to="/projects">Projects</NavLink>
        </navItem>
        <navItem>
       {/* to="/" 表示点击后跳转到首页 */}
          <NavLink to="/blog">Blog</NavLink>
        </navItem>
      </NavList>
    </nav>
  );
};

// 导出Header组件供其他文件使用
export default Header;