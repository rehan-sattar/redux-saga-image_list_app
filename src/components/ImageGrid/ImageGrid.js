import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import Stats from '../Stats';
import { loadImages } from '../../actions';
import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error,
});

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { isLoading, images, loadImages, error, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(ImageGrid);
