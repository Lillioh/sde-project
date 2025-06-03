import { useState, useEffect } from "react";
import { Home, ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductInfoPage() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [itemVariation, setItemVariation] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("0");
  const [productImages, setProductImages] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const availableCategories = ["Clothes", "Foods", "End Devices", "Foot Wear", "Jewelry"];
  
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = files.map(file => URL.createObjectURL(file));
      setProductImages([...productImages, ...newImages]);
    }
  };
  
  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };
  
  const toggleCategory = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter(c => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!productName.trim()) errors.productName = "Product name is required";
    if (!productDescription.trim()) errors.productDescription = "Product description is required";
    if (categories.length === 0) errors.categories = "Please select at least one category";
    if (productImages.length === 0) errors.images = "At least one product image is required";
    if (!price.trim()) errors.price = "Price is required";
    if (parseFloat(price) <= 0) errors.price = "Price must be greater than 0";
    if (parseInt(stock) < 0) errors.stock = "Stock cannot be negative";
    
    return errors;
  };
  
  const handlePublish = () => {
    setFormSubmitted(true);
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form submitted successfully");
      // Here you would typically submit the form data to your backend
    }
  };
  
  // Check for errors when form is submitted
  useEffect(() => {
    if (formSubmitted) {
      setFormErrors(validateForm());
    }
  }, [productName, productDescription, categories, productImages, price, stock, formSubmitted]);

  return (
    <div className="flex flex-col overflow-hidden w-screen h-screen font-sans">
      {/* Top Navbar */}
      <header className="bg-[#1a2f5d] text-white px-6 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <h1 className="text-lg font-medium">User's Shop Information</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Home size={20} />
          <span className="text-sm">Home</span>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 overflow-y-auto bg-[#FAEBD7]">
        <div className="max-w-4xl mx-auto bg-[#FAEBD7] p-4">
    {/* Back button - flush left */}
        <button 
        onClick={handleGoBack}
        className="mb-4 flex items-center text-[#1a2f5d] hover:underline pl-0 -ml-2"
        >
        <ArrowLeft size={18} className="mr-1" />
        <span>Back</span>
        </button>

          {/* Product Information Form */}
          <div className="bg-white p-6 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Product Information</h2>
            
            {/* Product Images Section */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <h3 className="font-medium text-gray-700">Product Images</h3>
                {formErrors.images && <span className="ml-2 text-red-500 text-sm flex items-center"><AlertCircle size={16} className="mr-1" /> {formErrors.images}</span>}
              </div>
              <div className="flex flex-wrap gap-4">
                {productImages.map((image, index) => (
                  <div key={index} className="w-36 h-36 border border-gray-300 rounded overflow-hidden">
                    <img src={image} alt={`Product ${index}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <label htmlFor="imageUpload" className={`w-36 h-36 border-2 border-dashed ${formErrors.images ? 'border-red-500' : 'border-gray-300'} rounded flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors`}>
                  <div className={`${formErrors.images ? 'text-red-500' : 'text-gray-500'} mb-2`}>
                    <Upload size={24} />
                  </div>
                  <span className={`text-sm ${formErrors.images ? 'text-red-500' : 'text-gray-600'}`}>Add Images</span>
                  <input 
                    id="imageUpload" 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={handleImageUpload} 
                    className="hidden" 
                  />
                </label>
              </div>
              <p className="text-sm text-gray-600 mt-2 pl-0 text-left">
  Upload high-quality product images
</p>
            </div>

            {/* Form Layout */}
            <div className="space-y-6">
              {/* Product Name - zero left margin for label */}
              <div className="form-group">
                <div className="flex items-center">
                  <label htmlFor="productName" className="text-gray-700 font-medium">
                    Product Name
                  </label>
                  {formErrors.productName && <span className="ml-2 text-red-500 text-sm flex items-center"><AlertCircle size={16} className="mr-1" /> {formErrors.productName}</span>}
                </div>
                <input
                  type="text"
                  id="productName"
                  placeholder="Enter product name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className={`w-full mt-2 border ${formErrors.productName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800`}
                />
              </div>

              {/* Product Description - zero left margin for label */}
              <div className="form-group">
                <div className="flex items-center">
                  <label htmlFor="productDescription" className="text-gray-700 font-medium">
                    Product Description
                  </label>
                  {formErrors.productDescription && <span className="ml-2 text-red-500 text-sm flex items-center"><AlertCircle size={16} className="mr-1" /> {formErrors.productDescription}</span>}
                </div>
                <textarea
                  id="productDescription"
                  placeholder="Describe your product in detail"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  rows={4}
                  className={`w-full mt-2 border ${formErrors.productDescription ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800`}
                />
              </div>

        {/* Category - custom-styled multi-select checkboxes */}
        <div className="form-group">
        <div className="flex items-center">
            <label className="text-gray-700 font-medium">
            Category
            </label>
            {formErrors.categories && (
            <span className="ml-2 text-red-500 text-sm flex items-center">
                <AlertCircle size={16} className="mr-1" /> 
                {formErrors.categories}
            </span>
            )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {availableCategories.map((cat) => (
            <div key={cat} className="flex items-center">
                <input 
                type="checkbox"
                id={cat.toLowerCase().replace(/\s/g, '')}
                className={`mr-2 w-4 h-4 appearance-none rounded-sm border-2 
                            ${formErrors.categories ? 'border-red-500' : 'border-gray-300'}
                            focus:ring-0 focus:ring-offset-0
                            ${categories.includes(cat) ? 'bg-black border-black' : 'bg-white'}`}
                checked={categories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                />
                <label 
                htmlFor={cat.toLowerCase().replace(/\s/g, '')} 
                className="text-gray-700 cursor-pointer select-none"
                >
                {cat}
                </label>
            </div>
            ))}
        </div>
        </div>
              
              {/* Variations - using a two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Item Variation - zero left margin for label */}
                <div className="form-group">
                  <label htmlFor="itemVariation" className="text-gray-700 font-medium">
                    Item Variation
                  </label>
                  <input
                    type="text"
                    id="itemVariation"
                    placeholder="e.g. Model, Type"
                    value={itemVariation}
                    onChange={(e) => setItemVariation(e.target.value)}
                    className="w-full mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                  />
                </div>
                
                {/* Sizes - with checkboxes for standard sizes */}
                <div className="form-group">
                  <label className="text-gray-700 font-medium">
                    Sizes
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {availableSizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-2 border rounded-md ${
                          selectedSizes.includes(size) 
                            ? 'bg-[#1a2f5d] text-white border-[#1a2f5d]' 
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Color - zero left margin for label */}
              <div className="form-group">
                <label htmlFor="color" className="text-gray-700 font-medium">
                  Color
                </label>
                <input
                  type="text"
                  id="color"
                  placeholder="e.g. Red, Blue, Black"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full mt-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                />
              </div>
              
              {/* Sales Information */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Sales Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Price - zero left margin for label */}
                  <div className="form-group">
                    <div className="flex items-center">
                      <label htmlFor="price" className="text-gray-700 font-medium">
                        Price
                      </label>
                      {formErrors.price && <span className="ml-2 text-red-500 text-sm flex items-center"><AlertCircle size={16} className="mr-1" /> {formErrors.price}</span>}
                    </div>
                    <div className="flex mt-2">
                      <div className="border border-gray-300 rounded-l-lg p-3 bg-gray-50 text-gray-700 flex items-center">
                        P
                      </div>
                      <input
                        type="text"
                        id="price"
                        placeholder="0.00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={`flex-1 border border-l-0 ${formErrors.price ? 'border-red-500' : 'border-gray-300'} rounded-r-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800`}
                      />
                    </div>
                  </div>
                  
                  {/* Stock - zero left margin for label */}
                  <div className="form-group">
                    <div className="flex items-center">
                      <label htmlFor="stock" className="text-gray-700 font-medium">
                        Stock
                      </label>
                      {formErrors.stock && <span className="ml-2 text-red-500 text-sm flex items-center"><AlertCircle size={16} className="mr-1" /> {formErrors.stock}</span>}
                    </div>
                    <input
                      type="number"
                      id="stock"
                      placeholder="0"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      min="0"
                      className={`w-full mt-2 border ${formErrors.stock ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800`}
                    />
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handlePublish}
                  className="px-6 py-3 bg-[#1a2f5d] text-white rounded-lg hover:bg-[#152548] transition-colors font-medium"
                >
                  Publish Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}