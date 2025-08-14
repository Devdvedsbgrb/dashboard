import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdPeople
} from "react-icons/md"; 

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path:"/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path:"/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path:"/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Sales",
        path:"/dashboard/sales",
        icon: <MdAttachMoney /> ,
      },
    ],
  },
      { title:"Analytics",
        list:[
          {
            title: "Jobs",
            path:"/dashboard/jobs",
            icon: <MdWork />,
          },
      {
        title: "Analytics",
        path: "/dashboard/analytics",
        icon: <MdAnalytics />,
      },
    ],
  },
      { 
        title:"User",
        list:[
        {
        title: "Settings",
        path:"/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path:"/dashboard/help",
        icon: <MdHelpCenter />,
      },
      {
        title: "Logout",
        path:"/dashboard/logout",
        icon: <MdLogout />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      }
      ],
    },   
];
const Sidebar = () => {
  return (
    <div className={styles.container}> 
    <div className={styles.user}>
      <Image className={styles.userImage} src="/noavatar.png" alt="User avatar" width="50" height="50" />
    <div className={styles.userDetails}>
      <span className={styles.username}>Лянхуа</span>
      <span className={styles.userTitle}>Adminisrator</span>
    </div>
    </div>
    <ul>
      {menuItems.map((cat)=>(
        <li key={cat.title}>
          <span className={styles.cat}>{cat.title }</span>
          {cat.list.map((item) => (
            <MenuLink item={item} key={item.title} />
          ))}
        </li>
      ))}
    </ul>
     </div>
  );
};

export default Sidebar;
