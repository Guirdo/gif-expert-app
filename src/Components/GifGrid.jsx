import { Col,Row } from 'react-bootstrap';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images,loading } = useFetchGifs(category);

    return (
        <Col>
            <h3 className="mt-2 animate__animated animate__flipInX">{category}</h3>

            {loading && <p className="animate__animated animate__bounce">LOADING...</p>}

            <Row className="justify-content-around mt-3">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </Row>
        </Col>
    )
}
