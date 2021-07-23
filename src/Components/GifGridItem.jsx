import { Col,Image } from 'react-bootstrap';

export const GifGridItem = ( { title,url } ) => {
    return (
        <Col sm={10} md={3} lg={3} className="mx-1 mb-4 p-2 bg-white animate__animated animate__fadeIn border border-dark rounded">
            <Image 
                alt={title}
                src={url}
                fluid
            />
            <p className="mt-3 text-center">{title}</p>
        </Col>
    )
}
