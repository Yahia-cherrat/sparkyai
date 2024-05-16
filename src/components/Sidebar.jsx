import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 18rem;
  height: 100vh;
  background-color: rgba(24, 12, 33, 0.7);
  padding: 1.25rem 1.25rem;
  transition: transform 0.3s;
`;

const SidebarTitle = styled.p`
  font-size: 1rem;
  color: #f4f4f5;
  margin-bottom: 1.25rem;
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  font-size: 0.875rem;
  color: #f4f4f5;
  font-weight: 300;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #351C48;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Chat history</SidebarTitle>
      <SidebarList>
        <SidebarItem>How can I improve my soft skills?</SidebarItem>
        <SidebarItem>How do you handle criticism?</SidebarItem>
        <SidebarItem>How can you help me?</SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
