import React from 'react';
import axios from 'axios';
import style from "./collectorDashBoard/indes.module.css"

class uploadImage extends React.Component {
    state = {
        imageUrl: null,
        imageAlt: null,
    };

    handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        try {
            // Upload image to Cloudinary
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'jze7ylih'); // Set your upload preset

            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dwj0v6ggh/image/upload',
                formData
            );

            // Update state with image URL
            this.setState({
                imageUrl: response.data.secure_url,
                imageAlt: file.name,
            });
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    

    render() {
        const { imageUrl, imageAlt } = this.state;

        return (
            <main className="App">
                <section className="left-side">
                    <form>
                        <div className="form-group">
                            <input
                                type="file"
                                onChange={this.handleImageUpload}
                            />
                        </div>
                        <button type="submit" className={style.btn} >
                            Submit
                        </button>
                    </form>
                </section>
                <section className="right-side">
                    <p>The resulting image will be displayed here</p>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="displayed-image"
                        />
                    )}
                </section>
            </main>
        );
    }
}

export default uploadImage;