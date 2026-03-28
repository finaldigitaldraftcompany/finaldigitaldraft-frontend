import { useState, useEffect } from "react";
// 🆕 Import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom"; 
import "./AdminEditor.css";

// This is a simple function to generate a temporary unique ID
// for new services before they are saved.
const generateUniqueId = () => Date.now() + Math.random();

export default function EditServices() {
    // 🆕 Initialize the navigation function
    const navigate = useNavigate(); 
    
    // Initialize services with unique IDs for stability
    const [services, setServices] = useState([]);

    // Load saved services
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("services"));
        // Ensure loaded services have IDs for rendering stability
        if (saved) {
            const servicesWithIds = saved.map(service => ({
                ...service,
                // Assign a temporary ID if one is missing
                id: service.id || generateUniqueId(),
                // Ensure image field exists
                image: service.image || ""
            }));
            setServices(servicesWithIds);
        }
    }, []);

    const handleAddService = () => {
        setServices(prev => [
            ...prev,
            // 🔑 IMPORTANT: Add a unique ID for React keys
            { id: generateUniqueId(), title: "", description: "", image: "" }
        ]);
    };

    // 🛡️ IMPROVED: Updates state using functional update and map for immutability
    const handleUpdateService = (id, field, value) => {
        setServices(prevServices =>
            prevServices.map(service =>
                service.id === id
                    ? { ...service, [field]: value }
                    : service
            )
        );
    };

    const handleDeleteService = (id) => {
        setServices(prev => prev.filter(service => service.id !== id));
    };

    // 🆕 Handle image upload and store as base64
    const handleImageChange = (id, file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setServices(prevServices =>
                prevServices.map(service =>
                    service.id === id
                        ? { ...service, image: reader.result }
                        : service
                )
            );
        };
        reader.readAsDataURL(file);
    };

    // 🎯 UPDATED: Logic to save, prompt, and navigate
    const handleSave = () => {
        // Step 1: Prepare and save data (strip out id, keep image)
        const contentToSave = services.map(({ id, ...rest }) => rest);
        localStorage.setItem("services", JSON.stringify(contentToSave));
        
        // Step 2: Confirmation and Redirection Prompt
        const shouldRedirect = window.confirm(
            "Services updated successfully! Click OK to go to the Home Page, or Cancel to stay and continue editing."
        );

        if (shouldRedirect) {
            navigate('/'); 
        } else {
            alert("Changes saved. You can continue editing.");
        }
    };

    return (
        <div className="editor-container">
            <h1>Edit Services</h1>
            
            <div className="service-list">
                {services.length === 0 && (
                    <p>No services added yet. Click "Add New Service" to begin.</p>
                )}

                {services.map((service) => (
                    // 🔑 Use the unique service.id for the key
                    <div key={service.id} className="service-item">
                        <div className="input-group">
                            <label htmlFor={`title-${service.id}`}>Title:</label>
                            <input
                                id={`title-${service.id}`}
                                type="text"
                                value={service.title}
                                onChange={(e) =>
                                    handleUpdateService(service.id, "title", e.target.value)
                                }
                                placeholder="Service Title"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor={`desc-${service.id}`}>Description:</label>
                            <textarea
                                id={`desc-${service.id}`}
                                value={service.description}
                                onChange={(e) =>
                                    handleUpdateService(service.id, "description", e.target.value)
                                }
                                placeholder="Service Description"
                                rows="3"
                            />
                        </div>

                        {/* 🆕 Image upload field */}
                        <div className="input-group">
                            <label htmlFor={`image-${service.id}`}>Service Image:</label>
                            <input
                                id={`image-${service.id}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    handleImageChange(service.id, e.target.files[0])
                                }
                            />
                        </div>

                        {/* 🆕 Image preview */}
                        {service.image && (
                            <div className="image-preview">
                                <img src={service.image} alt="Service" />
                            </div>
                        )}

                        <button 
                            className="delete-button" 
                            onClick={() => handleDeleteService(service.id)}
                        >
                            Delete Service
                        </button>
                    </div>
                ))}
            </div>

            <div className="actions">
                <button 
                    className="add-button" 
                    onClick={handleAddService}
                >
                    + Add New Service
                </button>
                <button 
                    className="save-button" 
                    onClick={handleSave}
                >
                    Save Changes
                </button>
            </div>
            
            <button 
                className="home-button" 
                onClick={() => navigate('/')}
                style={{ marginTop: '20px' }}
            >
                Go to Home Page
            </button>
        </div>
    );
}