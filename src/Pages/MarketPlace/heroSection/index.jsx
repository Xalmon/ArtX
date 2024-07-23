import React, { useState } from 'react';
import Image from '../../../component/Image'
import styles from './index.module.css'
import LemonFace from '../../../assests/images/Lemon face.jpeg'
import AfricanWoman from '../../../assests/images/A black woman a.png'
import BlackWoman from '../../../assests/images/A black woman b.png'
import CosmicUrban from '../../../assests/images/Cosmic Urban Majesty.jpeg'
import img from '../../../assests/images/1.jpg'
import img1 from '../../../assests/images/2.jpeg'
import img3 from '../../../assests/images/3.jpg'
import img4 from '../../../assests/images/5.png'
import img5 from '../../../assests/images/6.jpg'
import img6 from '../../../assests/images/7.jpg'
import img7 from '../../../assests/images/8.jpg'
import img8 from '../../../assests/images/9.jpg'
import { RiThumbUpLine, RiThumbUpFill } from 'react-icons/ri';



const MarketPlaceHeroSection = () => {
    // const [cart, setCart] = useState([]);
    // const [warning, setWarning] = useState(false);

    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };
  return (
    <div className={styles.heroDiv}>

        <p className={styles.heroCaption}>ARTXPRESS Marketplace.</p>
        <p className={styles.heroSubCaption}>
            Dive into the creative realm with ArtXpress – where every stroke tells a story and every piece is a masterpiece. <br /> 
                Join us on a journey of artistic expression and joyful exploration. Happy scrolling.
        </p>

        <div className={styles.heroImagesDiv}>
            <div>
                    <Image
                src={LemonFace}
                alt="Lemon face"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />

            </div>
            <div>                
                <Image
                src={BlackWoman}
                alt="Lemon face"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>

            <div>
                <Image
                src={AfricanWoman}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            <RiThumbUpLine />
            <RiThumbUpFill />
            </div>

            <div>
                <Image
                src={CosmicUrban}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>
        </div>
        <div className={styles.heroImagesDiv}>
            <div>   
                <Image
                src={img}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>
            
            <div>
                <Image
                src={img1}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>

            <div>
                <Image
                src={img3}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>

            <div>
                <Image
                src={img4}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>
        </div>
        <div className={styles.heroImagesDiv}>
            <div>
                <Image
                src={img5}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>
            
            <div>
                <Image
                src={img6}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>

            <div>
                <Image
                src={img8}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>

            <div>
                <Image
                src={img7}
                alt="Black woman"
                price="#100,000"
                artist="Joel"
                title="Lemon face"
                genre="Any genre"
                description="Lemon on the face"
                medium="Palm oil on tissue"
                size="45 x 75"
                handleClick={handleClick}
            />
            </div>
        </div>
    </div>
  )
}

export default MarketPlaceHeroSection