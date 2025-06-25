import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile1 from'./profile1.png'
import profile3 from './profile3.png'
import work_blog from './work-blog.png'
import work_lms from './work-lms.png'
import work_image from './work-image.png'
import work_crypto from './work-crypto.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    profile1,
    profile3,
    work_blog,
    work_crypto,
    work_image,
    work_lms
};

export const workData = [
  {
    title: 'Blog Application',
    description: 'Full Stack Project',
    bgImage: '/work-blog.png',
    link: 'https://blog-application-frontend-sandy.vercel.app',
  },
  {
    title: 'LMS Website',
    description: 'E-Learning Platform',
    bgImage: '/work-lms.png',
    link: 'https://lms-frontend-beta-lemon.vercel.app',
  },
  {
    title: 'Image Generator',
    description: 'AI Based Tool',
    bgImage: '/work-image.png',
    link: 'https://image-generator-frontend-nine.vercel.app',
  },
  {
    title: 'Crypto App',
    description: 'Real-time Crypto Tracker',
    bgImage: '/work-crypto.png',
    link: 'https://cryptoapp-sandy-one.vercel.app',
  },
];



export const serviceData = [
  {
    icon: assets.web_icon,
    title: 'Full Stack Development',
    description: 'Building responsive and scalable web apps using React, Next.js, Node.js, and MongoDB.',
    link: '',
  },
  {
    icon: assets.ui_icon, // Replace with an actual icon you have or add one
    title: 'Machine Learning',
    description: 'Creating classification models and analytics dashboards using Python, Scikit-learn, and Pandas.',
    link: '',
  },
  {
    icon: assets.graphics_icon, // Replace with a data/graph icon
    title: 'Data Analytics',
    description: 'Performing data cleaning, visualization, and interpretation to generate actionable insights.',
    link: '',
  },
  {
    icon: assets.code_icon, // Use a code-related icon (like `</>`)
    title: 'Coding & DSA',
    description: 'Solved 20+ problems on LeetCode. Strong understanding of algorithms and data structures in Java and Python.',
    link: '',
  },
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js,  Node.js,TypeScript, Express.js, REST API, MongoDB, Sql, Next Js,C, C++, Java, Python,Data Structures and Algorithms.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E in Information technology in Thadomal Shahani Engineering College ' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];