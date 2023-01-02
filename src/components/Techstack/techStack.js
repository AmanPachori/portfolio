import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import ReactTooltip from "react-tooltip";

import 'bootstrap/dist/css/bootstrap.min.css';


const data = [
  {id:'1',name:'Css',img:'https://img.icons8.com/fluency/64/000000/css3.png',desc:'The language we use to style an HTML document'},
  {id:'2',name:'Javascript',img:'https://img.icons8.com/color/64/000000/javascript--v1.png',desc:'A fun and flexible programming language and one of the core technologies of web development and can be used on both the front-end and the back-end'},
  {id:'3',name:'Bootstrap',img:'https://img.icons8.com/color/64/000000/bootstrap.png',desc:'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development'},
  {id:'4',name:'Git',img:'https://img.icons8.com/color/64/000000/git.png',desc:'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency'},
  {id:'5',name:'C++',img:'https://img.icons8.com/color/64/000000/c-plus-plus-logo.png',desc:'C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs'},
  {id:'6',name:'Github',img:'https://img.icons8.com/ios-glyphs/64/FFFFFF/github.png',desc:'GitHub is an Internet hosting service for software development and version control using Git'},
  {id:'7',name:'Express',img:'https://img.icons8.com/ios/58/FFFFFF/express-js.png',desc:'Express.js is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License'},
  {id:'8',name:'HTML5',img:'https://img.icons8.com/color/64/000000/html-5.png',desc:'HTML5 is a markup language used for structuring and presenting content on the World Wide Web'},
  {id:'9',name:'Jest',img:'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/64/000000/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-shadow-tal-revivo.png',desc:'Jest is a JavaScript testing framework built on top of Jasmine and maintained by Meta. It was designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications'},
  {id:'10',name:'Mocha',img:'https://user-images.githubusercontent.com/84467090/199014691-8bfb82a0-58f9-4cfd-827e-dfdb4e26822f.png',desc:'Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library'},
  {id:'11',name:'Markdown',img:'https://img.icons8.com/ios-filled/64/FFFFFF/markdown.png',desc:'Markdown is a lightweight markup language for creating formatted text using a plain-text editor.'},
  {id:'12',name:'Material UI',img:'https://img.icons8.com/color/64/000000/material-ui.png',desc:'Material UI is an open-source React component library that implements Google Material Design.'},
  {id:'13',name:'Mongo DB',img:'https://img.icons8.com/color/64/000000/mongodb.png',desc:'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas'},
  {id:'14',name:'PostgreSQL',img:'https://img.icons8.com/color/64/000000/postgreesql.png',desc:'PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance'},
  {id:'15',name:'MySQL',img:'https://img.icons8.com/external-those-icons-flat-those-icons/64/000000/external-MySQL-programming-and-development-those-icons-flat-those-icons.png',desc:'MySQL is an open-source relational database management system'},
  {id:'16',name:'React',img:'https://img.icons8.com/office/64/000000/react.png',desc:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components'},
  {id:'17',name:'Chai',img:'https://user-images.githubusercontent.com/84467090/199016598-60527043-f048-4bde-b139-145f214ac7e9.png',desc:'Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework'},
  {id:'18',name:'Svelte',img:'https://img.icons8.com/doodle/64/000000/svetle.png',desc:'Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members'},
  {id:'19',name:'Ubuntu',img:'https://img.icons8.com/color/64/000000/ubuntu.png',desc:'Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.'},
  {id:'20',name:'Postman',img:'https://user-images.githubusercontent.com/84467090/199018090-ed7efb02-da5c-4234-8814-507397ddcb87.png',desc:'Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster'},
  {id:'21',name:'Node',img:'https://img.icons8.com/fluency/64/000000/node-js.png',desc:'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser'},
  {id:'22',name:'NPM',img:'https://img.icons8.com/color/64/000000/npm.png',desc:'npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js'},
  {id:'23',name:'Leaflet',img:'https://user-images.githubusercontent.com/84467090/199022257-52396ebc-7e32-4959-b696-8f0ba7a76d97.jpg',desc:'Leaflet is an open source JavaScript library used to build web mapping applications'},
]

data.sort((a,b)=>{
  let fa = a.name.toLowerCase()
  let fb = b.name.toLowerCase()
  if (fa < fb) {
    return -1;
}
if (fa > fb) {
    return 1;
}
return 0;
})

const IconData = (prop) => {
  return(
    <>
    <ReactTooltip id={prop.id}  place='bottom'
 
      effect='solid'
      delayHide={500}
      delayShow={300}
      arrowColor='var(--primaryColor)'
      delayUpdate={500} className='icondata'>
    <h4 className='py-2 fw-bold'>{prop.name}</h4>
    <p className='fw-normal fs-6'>{prop.desc}</p>
  </ReactTooltip>
    </>
  )
}
const TechStack = () => {

  return (
    <div className='techStack container'>
     <h5 className='fs-1 fw-bold m-2 p-2'>Technologies I Know</h5>
      {
        data.map((e)=>{
          return(
            <>
             <img className="m-2 px-1 py-2 " src={e.img} alt={e.name} data-tip data-for={e.id}/> <IconData name={e.name} desc={e.desc} id={e.id}/>
             </>
          )
        })
      }
    </div>
  )
}

export default TechStack