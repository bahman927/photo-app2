import React, { useState } from "react";
import FormData from "/client/src/components/FormData";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);   // show category details
    setShowForm(false);              // hide form if open
    setIsDropdownOpen(false);        // close dropdown
  };

  // Handle InsertPhoto link
  const handleLinkClick = (e) => {
    e.preventDefault();
    setShowForm(true);              // show insert form
    setSelectedCategory(null);      // hide category details
  };

  return (
    <header className="flex flex-col items-center w-full px-5 py-4 bg-gray-300 border-b shadow-md">
      {/* Logo */}
      <div className="mb-4 text-2xl font-bold">Hannah PhotoGallery</div>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <a href="#" className="hover:text-blue-500">Home</a>

        {/* Category Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}   // ✅ fixed: keeps menu open while hovering
        >
          <button className="z-20 hover:text-gray-400">Category</button>
          {isDropdownOpen && (
            <ul className="absolute z-50 py-2 mt-2 bg-gray-200 rounded shadow-lg">
              {["Street", "Sport", "Fashion", "Nature", "Outdoor"].map(
                (category) => (
                  <li
                    key={category}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-500"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          )}
        </div>

        {/* Insert Photo */}
        <a href="#" className="hover:text-gray-400" onClick={handleLinkClick}>
          Insert Photo
        </a>

        <a href="#" className="text-xl hover:text-gray-400">Contact Us</a>
        <a href="#" className="hover:text-gray-400">About Me</a>
        <a href="#" className="hover:text-gray-400">Login</a>
      </nav>

      {/* Insert Photo Form */}
      {showForm && (
        <div className="w-1/2 mt-6">
          <div className="p-6 bg-blue-200 border border-gray-700 rounded-lg shadow">
            <FormData />
          </div>
        </div>
      )}

      {/* Category Details */}
      {selectedCategory && (
        <div className="w-1/2 mt-6">
          <div className="p-6 text-center bg-white border border-gray-700 rounded-lg shadow">
            <h2 className="mb-2 text-xl font-semibold">{selectedCategory}</h2>
            <p className="text-gray-600">
              Here are some details about <strong>{selectedCategory}</strong> photography.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
    <div className="flex items-center gap-8" style={styles.menuItem}>
           <button
                style={{
                  ...styles.menuButton,
                  ...(isUploadOpen ? styles.activeButton : {}),
                }}
                onClick={toggleManage}
              >
                Upload Photos
           </button>
       
        {username && (
          <>
            {/* Upload button */}
            <form onSubmit={handleUpload} className="flex items-center gap-2">
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-2 py-1 text-black rounded"
              />

              <button
                type="button"
                onClick={handleInsertPhoto}
                className="px-3 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
                disabled={uploading}
              >
                Choose File
              </button>

              <button
                type="submit"
                className="px-3 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </form>
        
            {/* Delete Photos button */}
            <div style={styles.menuItem}>
              <button
                style={{
                  ...styles.menuButton,
                  ...(isManageOpen ? styles.activeButton : {}),
                }}
                onClick={toggleManage}
              >
                Delete Photos
              </button>

              {isManageOpen && (
                <div
                  ref={manageModalRef}
                  style={{
                    ...styles.modal,
                    ...(isManageOpen ? styles.modalOpen : styles.modalClosed),
                    width: "500px",
                  }}
                >
                  <div style={styles.modalContent}>
                    <h3 style={styles.modalTitle}>Manage Photos</h3>

                    <div style={styles.photoList}>
                      {photos.length === 0 ? (
                        <p style={styles.noPhotosText}>No photos available.</p>
                      ) : (
                        photos.map((photo) => (
                          <div
                            key={photo.id}
                            style={styles.photoItem}
                          >
                            {/* Fixed-size Thumbnail */}
                            <img
                              src={photo.image}
                              alt={photo.title}
                              style={styles.photoThumbnail}
                            />

                            {/* Info takes remaining space */}
                            <div style={styles.photoInfo}>
                              <h4 style={styles.photoTitle}>{photo.title}</h4>
                              <p style={styles.photoCategory}>
                                {photo.category?.name}
                              </p>
                            </div>

                            {/* Delete Button */}
                            <button
                              onClick={() => handleDelete(photo.id)}
                              style={styles.deleteButton}
                            >
                              Delete
                            </button>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Close Button */}
                    <div style={styles.modalActions}>
                      <button
                        onClick={() => setIsManageOpen(false)}
                        style={styles.closeButton}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div> 




//  style={{
//      ...styles.deleteButton,
//       ...(isLoggedIn ? {} : { opacity: 0.5, cursor: "not-allowed" })
//                           }} 
//       disabled={!isLoggedIn}
//                     style={{ ...styles.chooseButton2, ...(uploading ? styles.disabledButton : {}) }} 
//                     disabled={uploading}
//                      > 