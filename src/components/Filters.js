import React, { useState } from 'react';
import { 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    InputGroup, 
    InputGroupText, 
    Input,
    Row
} from 'reactstrap';


const Filters = props => {

    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [albumTitle, setAlbumTitle] = useState('');

    const applyFilters = () => {
        const params = [];
        if (title) {
            params.push(`title=${encodeURIComponent(title)}`);
        }
        if (albumTitle) {
            params.push(`album.title=${encodeURIComponent(albumTitle)}`);
        }
        if (email) {
            params.push(`album.user.email=${encodeURIComponent(email)}`);
        }
        const queryParams = params.length ? `?${params.join('&')}` : '';
        props.onApply(queryParams);
        props.onCancel();
    }

    return (
        <Modal isOpen={props.isOpen}>
            <ModalHeader >Filtros</ModalHeader>
            <ModalBody>
                <Row className='input-filter'>
                    <InputGroup>
                        <InputGroupText>
                            Titulo 
                        </InputGroupText>
                        <Input 
                            placeholder="titulo" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)}
                        />
                    </InputGroup>
                </Row>
                <Row className='input-filter'>
                    <InputGroup>
                        <InputGroupText>
                            Titulo Album
                        </InputGroupText>
                        <Input 
                            placeholder="titulo del album" 
                            value={albumTitle} 
                            onChange={e => setAlbumTitle(e.target.value)}
                        />
                    </InputGroup>
                </Row>
                <Row className='input-filter'>
                    <InputGroup>
                        <InputGroupText>
                            Email Fotografo 
                        </InputGroupText>
                        <Input 
                            placeholder="email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </InputGroup>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={applyFilters} >
                    Aplicar
                </Button>{' '}
                <Button color="secondary" onClick={props.onCancel}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default Filters;