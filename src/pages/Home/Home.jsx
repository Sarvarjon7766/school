import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ChooseSection from '../../components/ChooseSection/ChooseSection'
import StartCoursesImg from '../../utils/images/start-courses-img.jpg'
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion'
import { Card } from 'react-bootstrap'
import Blog1img from '../../utils/images/blog1-img.jpg'
import Blog2img from '../../utils/images/blog2-img.jpg'
import Blog3img from '../../utils/images/blog3-img.jpg'
import Blog4img from '../../utils/images/yutuq1.jpg'

const blogs = [
    {
        id:1,
        img:[Blog1img],
        title:'Blog 1',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae dolor quod maxime expedita, repellendus molestias magni voluptates nesciunt quo'
    },
    {
        id:2,
        img:[Blog2img],
        title:'Blog 2',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae dolor quod maxime expedita, repellendus molestias magni voluptates nesciunt quo'
    },
    {
        id:3,
        img:[Blog3img],
        title:'Blog 3',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae dolor quod maxime expedita, repellendus molestias magni voluptates nesciunt quo'
    },
    {
        id:4,
        img:[Blog4img],
        title:'Blog 4',
        description:"Yoshlar oyligi doirasida «Yangi O‘zbekiston yoshlari, birlashaylik!» shiori ostida «Viloyat hokimi sovrini» uchun umumta’lim fanlari bo‘yicha o‘tkazilgan fanlar olimpiadasining viloyat bosqichida, Bulung'ur Akademiyasi Xususiy maktabining 11-sinf o‘quvchisi Abduhalimov Humoyun fizika fani bo‘yicha faol qatnashib, 80 ballni qo‘lga kiritdi va faxrli 1-o‘rinni egalladi!"
    }
    
]


const Home = () => {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Hush kelibsiz</h2>
                <h1 className='text-center fw-semibold'>Bulung'ur Akademiyasi xususiy maktabiga</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum? Sapiente ab ad dicta deleniti quibusdam sequi porro officiis cumque.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to='/courses'>
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Bizning kurslarimiz</button>
                    </Link>
                    <Link to='/contact'>
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Bog'lanish uchun</button>
                    </Link>
                </div>
            </div>
        </header>
        <div className='py-5'>
            <ChooseSection />
        </div>
        <div className='py-5 bg-light'>
            <div className='container'>
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-ld-5 ' >
                        <h2 className='text-capitalize'>2024-yil start olgan kurslar</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae dolor quod maxime expedita, repellendus molestias magni voluptates nesciunt quo.</p>
                        <Link to='/courses'>
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Ko'proq ma'lumot</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0 '>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="py-5">
            <FaqAccordion />
        </div>
        <div className='blog-section text-light py-5'>
            <div className="container d-flex flex-column  align-items-center">
                <h2 className='text-center text-capitalize mb-5'>Oxirgi Yangiliklar</h2>
                <div className='row g-4'>
                    {blogs.map((blog)=>(
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to='/blog' className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant='top' src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>

                            </Link>
                        </div>
                    ))}
                </div>
                <Link to='/blog'>
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Ko'proq Yangiliklar</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home