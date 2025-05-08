import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import profilePhoto1 from "../assets/images/profilePhoto1.jpg";
import profilePhoto2 from "../assets/images/profilePhoto2.jpg";
import profilePhoto3 from "../assets/images/profilePhoto3.jpg";
const AvatarProfile = () => {
  return (
    <> 
    <Avatar.Group
      size="large"
      max={{
        count: 3,
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          cursor: 'pointer',
        },
        popover: {
          trigger: 'click',
        },
      }}
    >
      <Avatar src={profilePhoto2} size={50}/>
      <Avatar src={profilePhoto1}  style={{ border: '3px solid white' ,zIndex: 1}}  size={60} />
      <Avatar src={profilePhoto3} size={50} />
      
    </Avatar.Group>
   
  
  </>
  )
}

export default AvatarProfile