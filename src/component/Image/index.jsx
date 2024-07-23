import React from 'react';
import styles from './index.module.css';
import FilledButton from '../Buttons/FilledButton/index';

const Image = ({ id, src, alt, price, artist, title, genre, description, medium, size, handleClick }) => {
    return (
        <div>
            <img src={src} alt={alt} className={styles.heroImages} />
            <div className={styles.imageData}>
                <p>Price: {price}</p>
                <p>Artist: {artist}</p>
                <p>Title: {title}</p>
                <p>Genre: {genre}</p>
                <p>Description: {description}</p>
                <p>Medium: {medium}</p>
                <p>Size: {size}</p>
                <FilledButton
                    text={'Add to Cart'}
                    padding={"7px 20px"}
                    fontSize={'14px'}
                    cursor={"pointer"}
                    fontWeight={"bold"}
                    border={"1px solid"}
                    borderRadius={"10px"}
                    onClick={() => handleClick({ id, price, artist, title })}
                />
            </div>
        </div>
    );
}

export default Image;
