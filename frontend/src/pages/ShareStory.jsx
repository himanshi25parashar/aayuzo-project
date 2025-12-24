import React, {useState} from "react";
import {motion} from "framer-motion";
import "../styles/ShareStory.css";
import BackButton from "../components/BackButton";

const ShareStory = () => {
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        profession: "",
        category: "",
        rating: "",
        story: "",
        image: null,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if (files) {
            setFormData({...formData, image: files[0]});
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="story-section">
               <BackButton />
            <div className="golden-glow"></div>
            <div className="story-container">
                <motion.h2
                    className="story-title"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <motion.h2 className="story-title">
                        Every <span>Glow</span> Has a Story <span className="sparkle"></span>
                    </motion.h2>
                </motion.h2>
                <p className="story-sub">Share your Aayuzo experience — your journey inspires others to shine.</p>

                <form className="story-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="Your City"
                        value={formData.city}
                        onChange={handleChange}
                    />

                    {/* Profession Dropdown */}
                    <select name="profession" value={formData.profession} onChange={handleChange} required>
                        <option value="">Select Profession</option>
                        <option value="Bridal Client">Bridal Client</option>
                        <option value="Salon Partner">Salon Partner</option>
                        <option value="Makeup Artist">Makeup Artist</option>
                        <option value="Spa Therapist">Spa Therapist</option>
                        <option value="Hair Stylist">Hair Stylist</option>
                        <option value="Corporate Professional">Corporate Professional</option>
                        <option value="Other">Other</option>
                    </select>

                    {/* Category Dropdown */}
                    <select name="category" value={formData.category} onChange={handleChange}>
                        <option value="">Experience Type</option>
                        <option value="Hair Styling">Hair Styling</option>
                        <option value="Makeup / Bridal">Makeup / Bridal</option>
                        <option value="Spa & Wellness">Spa & Wellness</option>
                        <option value="Men’s Grooming">Men’s Grooming</option>
                        <option value="Other">Other</option>
                    </select>

                    {/* Rating */}
                    <div className="rating-group">
                        <label>Rate Your Experience:</label>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={formData.rating >= star ? "star active" : "star"}
                                    onClick={() => setFormData({...formData, rating: star.toString()})}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Story Field */}
                    <textarea
                        name="story"
                        placeholder="Tell us how Aayuzo made your experience special..."
                        value={formData.story}
                        onChange={handleChange}
                        required
                    ></textarea>

                    {/* Upload Image */}
                    <div className="file-upload">
                        <label htmlFor="image">
                            Upload Your Profile Photo <span>(optional)</span>
                        </label>
                        <p className="upload-hint">
                            Add your photo to personalize your Aayuzo story — it helps others connect with your
                            experience.
                        </p>
                        <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} />
                    </div>

                    <button type="submit" className="story-btn">
                        Share My Aayuzo Story
                    </button>
                </form>

                {submitted && (
                    <motion.div
                        className="thankyou-message"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <h3>💛 Thank you for glowing with Aayuzo!</h3>
                        <p>Your story makes our community shine brighter.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ShareStory;
