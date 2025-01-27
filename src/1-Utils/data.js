import loginPic from '../assests/projects/loginCss.png'
import ElectricBill from '../assests/projects/Electric_Bill.png'
import todoImg from '../assests/projects/todo-list.jpg'
import Furniture from '../assests/projects/projectFurniture.png'
import Calculator from '../assests/projects/calculator.png'
import Sudoku from '../assests/projects/Sudoku-Game.png'
import Ecommerce from '../assests/projects/ecommerce.png'
import Ecommerce2 from '../assests/projects/ecommerce-2.png'
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiReactrouter, SiRedux } from 'react-icons/si'
import { IoGitBranchOutline } from 'react-icons/io5'
import { TbBrandFramerMotion } from 'react-icons/tb'

export const SKILLS = [
  { skill: 'Html', icon: <FaHtml5 /> },
  { skill: 'Css', icon: <FaCss3 /> },
  { skill: 'Js', icon: <FaJs /> },
  { skill: 'React Js', icon: <FaReact /> },
  { skill: 'React-Router-Dom', icon: <SiReactrouter /> },
  { skill: 'Framer Motion', icon: <TbBrandFramerMotion /> },
  { skill: 'Redux Toolkit', icon: <SiRedux /> },
  { skill: 'Bootstrap', icon: <FaBootstrap /> },
  { skill: 'Tailwind Css', icon: <RiTailwindCssFill /> },
  { skill: 'Git', icon: <IoGitBranchOutline /> },
  { skill: 'Github', icon: <FaGithub /> },
];


export const MyProject = [
  {
    id: 1,
    category: ['Html & Css'],
    name: 'Simple Project',
    desc: 'Simple project created with Html and Css, its content a responsive Login. ',
    imgPath: loginPic,
    link: 'https://loginpagee8.netlify.app',
  },
  {
    id: 2,
    category: ['Html & Css'],
    name: 'Electricity tax',
    desc: 'Simple Project created with Html,Css and JS , its content about How much does it cost to spend this month of electricity.',
    imgPath: ElectricBill,
    link: 'https://electric-bill12.netlify.app'
  },
  {
    id: 3,
    category: ['Html & Css'],
    name: 'Furniture',
    desc: "Project created with Html,Css, Bootstrap and JS,An exhibition that displays company's services and projects and enables customers to communicate with  the company's employees.",
    imgPath: Furniture,
    link: 'https://gallery-furniture.netlify.app'
  },

  {
    id: 4,
    category: ['React'],
    name: 'Todo-List',
    desc: 'I created a Todo List application using React Js. This project allows users to manage their daily tasks efficiently.',
    imgPath: todoImg,
    link: 'https://todo-list-app-today.netlify.app',
    github: 'https://github.com/ahmadshz/TodoList'
  },
  {
    id: 5,
    category: ['React'],
    name: 'calculator',
    desc: 'I built a Calculator project using React Js.',
    imgPath: Calculator,
    link: 'https://calculator-webs1.netlify.app',
    github: 'https://github.com/ahmadshz/Calculator'
  },
  {
    id: 6,
    category: ['React'],
    name: 'Sudoku Game',
    desc: 'Ive built a Sudoku game in React featuring a 9x9 editable grid, validation, and puzzle generation at different difficulty levels. It also includes a solver, hints, and dark mode using Context API.',
    imgPath: Sudoku,
    link: 'https://sudoku91.netlify.app',
    github: 'https://github.com/ahmadshz/Sudoku-Game',
  },
  {
    id: 7,
    category: ['React'],
    name: 'Ecommerce-1',
    desc: 'A modern shopping cart built with React.js. Features include browsing products, viewing details, adding/removing items, and managing quantities. It dynamically fetches product data via API, auto-calculates totals, and is fully responsive. Built with React, Axios, Context API, React Router DOM and Bootstrap.',
    imgPath: Ecommerce,
    link: 'https://ecommerce-ahmd.netlify.app/',
    github: 'https://github.com/ahmadshz/my-shopping-cart',
  },
  {
    id: 8,
    category: ['React'],
    name: 'Ecommerce-2',
    desc: 'An e-commerce website with a dashboard for managing users, categories, and products, allowing for adding and updating data. The website includes login and signup functionality, protected routes, and a user role system (e.g., admin and employee). Employees can view products and use the shopping cart. It features search and filtering options, pagination support for data organization, and a responsive design compatible with all devices.',
    imgPath: Ecommerce2,
    link: 'https://e-commerce-amd.netlify.app',
    github: 'https://github.com/ahmadshz/Ecommerce-2',
  },
];