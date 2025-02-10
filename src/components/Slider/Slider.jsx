import React, { useState } from "react";
import Card from "../Card/Card";
import "./Slider.css";
import ProductCard from "../ProductCard/ProductCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Brands data
const brandsData = [
  {
    id: "audi",
    name: "Audi",
    image: "images/brands/audi.png",
  },
  {
    id: "bmw",
    name: "BMW",
    image: "images/brands/bmw.png",
  },
  {
    id: "opel",
    name: "Opel",
    image: "images/brands/opel.png",
  },
  {
    id: "mazda",
    name: "Mazda",
    image: "images/brands/mazda.png",
  },
  {
    id: "dacia",
    name: "Dacia",
    image: "images/brands/dacia.png",
  },
  {
    id: "hyundai",
    name: "Hyundai",
    image: "images/brands/hyundai.png",
  },
  {
    id: "mercedes",
    name: "Mercedes",
    image: "images/brands/mercedes.png",
  },
  {
    id: "toyota",
    name: "Toyota",
    image: "images/brands/toyota.png",
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    image: "images/brands/volkswagen.png",
  },
  {
    id: "skoda",
    name: "Skoda",
    image: "images/brands/skoda.png",
  },
  {
    id: "nissan",
    name: "Nissan",
    image: "images/brands/nissan.png",
  },
  {
    id: "volvo",
    name: "Volvo",
    image: "images/brands/volvo.png",
  },
  {
    id: "peugeot",
    name: "Peugeot",
    image: "images/brands/peugeot.png",
  },

  // Add more brands here
];

// Models data
const modelsData = {
  audi: [
    {
      id: "audi-80",
      name: "Audi 80",
      image: "images/models/audi-80.jpg",
    },
    {
      id: "audi-100",
      name: "Audi 100",
      image: "images/models/audi-100.png",
    },
    {
      id: "audi-a3",
      name: "Audi A3",
      image: "images/models/audi-a3.jpg",
    },
  ],
  bmw: [
    {
      id: "bmw-3",
      name: "3 Series",
      image: "images/models/bmw-3.jpg",
    },
    {
      id: "bmw-5",
      name: "5 Series",
      image: "images/models/bmw-5.jpg",
    },
    {
      id: "bmw-7",
      name: "7 Series",
      image: "images/models/bmw-7.jpg",
    },
  ],
  opel: [
    {
      id: "opel-astra",
      name: "Astra",
      image: "images/models/opel-astra.jpg",
    },
    {
      id: "opel-corsa",
      name: "Corsa",
      image: "images/models/opel-corsa.jpg",
    },
    {
      id: "opel-vectra",
      name: "Vectra",
      image: "images/models/opel-vectra.jpg",
    },
  ],
  mazda: [
    {
      id: "mazda-323",
      name: "323",
      image: "images/models/mazda-323.jpg",
    },
    {
      id: "mazda-626",
      name: "626",
      image: "images/models/mazda-626.jpg",
    },
    {
      id: "mazda-mx6",
      name: "MX-6",
      image: "images/models/mazda-mx6.jpg",
    },
  ],
  dacia: [
    {
      id: "dacia-logan",
      name: "Logan",
      image: "images/models/dacia-logan.jpg",
    },
    {
      id: "dacia-sandero",
      name: "Sandero",
      image: "images/models/dacia-sandero.jpg",
    },
    {
      id: "dacia-duster",
      name: "Duster",
      image: "images/models/dacia-duster.jpg",
    },
  ],
  hyundai: [
    {
      id: "hyundai-accent",
      name: "Accent",
      image: "images/models/hyundai-accent.jpg",
    },
    {
      id: "hyundai-elantra",
      name: "Elantra",
      image: "images/models/hyundai-elantra.jpg",
    },
    {
      id: "hyundai-sonata",
      name: "Sonata",
      image: "images/models/hyundai-sonata.jpg",
    },
  ],
  mercedes: [
    {
      id: "mercedes-c",
      name: "C-Class",
      image: "images/models/mercedes-c.jpg",
    },
    {
      id: "mercedes-e",
      name: "E-Class",
      image: "images/models/mercedes-e.jpg",
    },
    {
      id: "mercedes-s",
      name: "S-Class",
      image: "images/models/mercedes-s.jpg",
    },
  ],
  toyota: [
    {
      id: "toyota-corolla",
      name: "Corolla",
      image: "images/models/toyota-corolla.jpg",
    },
    {
      id: "toyota-camry",
      name: "Camry",
      image: "images/models/toyota-camry.jpg",
    },
    {
      id: "toyota-avalon",
      name: "Avalon",
      image: "images/models/toyota-avalon.jpg",
    },
  ],
  volkswagen: [
    {
      id: "vw-golf",
      name: "Golf",
      image: "images/models/vw-golf.jpg",
    },
    {
      id: "vw-passat",
      name: "Passat",
      image: "images/models/vw-passat.jpg",
    },
    {
      id: "vw-polo",
      name: "Polo",
      image: "images/models/vw-polo.jpg",
    },
  ],
  skoda: [
    {
      id: "skoda-octavia",
      name: "Octavia",
      image: "images/models/skoda-octavia.jpg",
    },
    {
      id: "skoda-fabia",
      name: "Fabia",
      image: "images/models/skoda-fabia.jpg",
    },
    {
      id: "skoda-superb",
      name: "Superb",
      image: "images/models/skoda-superb.jpg",
    },
  ],
  nissan: [
    {
      id: "nissan-almera",
      name: "Almera",
      image: "images/models/nissan-almera.jpg",
    },
    {
      id: "nissan-primera",
      name: "Primera",
      image: "images/models/nissan-primera.jpg",
    },
    {
      id: "nissan-maxima",
      name: "Maxima",
      image: "images/models/nissan-maxima.jpg",
    },
  ],
  volvo: [
    {
      id: "volvo-s60",
      name: "S60",
      image: "images/models/volvo-s60.jpg",
    },

    {
      id: "volvo-s70",
      name: "S70",
      image: "images/models/volvo-s70.jpg",
    },

    {
      id: "volvo-s90",
      name: "S90",
      image: "images/models/volvo-s90.jpg",
    },
  ],
};

// Expanded models data
const expandedModelsData = {
  "audi-80": [
    {
      id: "audi-80-b2",
      name: "Audi 80 B2",
      image: "images/models/expanded/audi-80-b2.jpg",
    },
    {
      id: "audi-80-b3",
      name: "Audi 80 B3",
      image: "images/models/expanded/audi-80-b3.jpg",
    },
    {
      id: "audi-80-b4",
      name: "Audi 80 B4",
      image: "images/models/expanded/audi-80-b4.jpg",
    },
  ],
  "audi-100": [
    {
      id: "audi-100-c3",
      name: "Audi 100 C3",
      image: "images/models/audi-100-c4.png",
    },
  ],
  "audi-a3": [
    {
      id: "audi-a3-8l",
      name: "Audi A3 8L",
      image: "images/models/audi-100-c4.png",
    },
  ],
  "bmw-3": [
    {
      id: "bmw-3-e30",
      name: "3 Series E30",
      image: "images/models/expanded/bmw-3-e30.jpg",
    },
    {
      id: "bmw-3-e36",
      name: "3 Series E36",
      image: "images/models/expanded/bmw-3-e36.jpg",
    },
    {
      id: "bmw-3-e46",
      name: "3 Series E46",
      image: "images/models/expanded/bmw-3-e46.jpg",
    },
  ],
  "opel-astra": [
    {
      id: "opel-astra-f",
      name: "Astra F",
      image: "images/models/expanded/opel-astra-f.jpg",
    },
    {
      id: "opel-astra-g",
      name: "Astra G",
      image: "images/models/expanded/opel-astra-g.jpg",
    },
    {
      id: "opel-astra-h",
      name: "Astra H",
      image: "images/models/expanded/opel-astra-h.jpg",
    },
  ],
};

// Engine data
const engineData = {
  "audi-80-b2": [
    {
      id: "eng-1",
      name: "1.6",
      specs: {
        engine: "1.6L I4",
        power: "75kW/102HP",
        year: "1978-1984",
        fuelType: "Gasoline",
        engineCode: "YN",
      },
    },
    {
      id: "eng-2",
      name: "1.6D",
      specs: {
        engine: "1.6L I4",
        power: "54kW/73HP",
        year: "1980-1984",
        fuelType: "Diesel",
        engineCode: "CR",
      },
    },
  ],
  // Add engines for other models
};

// Auto parts categories without subcategories
const autoPartsCategories = [
  {
    id: "transmission",
    name: "Transmission",
    image: "images/parts/transmission.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "images/parts/accessories.jpg",
  },
  {
    id: "filters",
    name: "Filters",
    image: "images/parts/filters.jpg",
  },
];

// Subcategories data organized by category
const autoPartsData = {
  transmission: [
    {
      id: "flywheel",
      name: "Flywheel",
      image: "images/parts/transmission/flywheel.jpg",
    },
    {
      id: "clutch",
      name: "Clutch",
      image: "images/parts/transmission/clutch.jpg",
    },
  ],
  accessories: [
    {
      id: "alarms",
      name: "Car Alarms",
      image: "images/parts/accessories/alarms.jpg",
    },
    {
      id: "cosmetics",
      name: "Car Cosmetics",
      image: "images/parts/accessories/cosmetics.jpg",
    },
  ],
  filters: [
    {
      id: "oil-filters",
      name: "Oil Filters",
      image: "images/parts/filters/oil-filters.jpg",
    },
    {
      id: "air-filters",
      name: "Air Filters",
      image: "images/parts/filters/air-filters.jpg",
    },
  ],
};

// Parts data organized by subcategory and expanded model
const partsData = {
  flywheel: {
    "audi-80-b2": [
      {
        id: "flywheel-1",
        name: "Flywheel",
        image: "images/parts/transmission/flywheel-1.jpg",
        price: 299.99,
        additionalImages: [
          "images/parts/transmission/flywheel-1-alt1.jpg",
          "images/parts/transmission/flywheel-1-alt2.jpg",
        ],
      },
    ],
  },
  clutch: {
    "audi-80-b2": [
      {
        id: "clutch-1",
        name: "Clutch Kit",
        image: "images/parts/transmission/clutch-1.jpg",
        price: 199.99,
        additionalImages: [
          "images/parts/transmission/clutch-1-alt1.jpg",
          "images/parts/transmission/clutch-1-alt2.jpg",
        ],
      },
    ],
  },
  alarms: {
    all: [
      // Universal parts available for all models
      {
        id: "alarm-1",
        name: "Car Alarm System",
        image: "images/parts/accessories/alarm-1.jpg",
        price: 149.99,
        additionalImages: [
          "images/parts/accessories/alarm-1-alt1.jpg",
          "images/parts/accessories/alarm-1-alt2.jpg",
        ],
      },
    ],
  },
  cosmetics: {
    all: [
      // Universal parts available for all models
      {
        id: "spray",
        name: "Car spray",
        image: "images/parts/accessories/cosmetic-1.jpg",
        price: 149.99,
        additionalImages: [
          "images/parts/accessories/cosmetic-1-alt1.jpg",
          "images/parts/accessories/cosmetic-1-alt2.jpg",
        ],
      },
    ],
  },
};

const Slider = () => {
  // Track the current view and selections
  const [direction, setDirection] = useState("slide-right");
  const [currentView, setCurrentView] = useState("brands");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedExpandedModel, setSelectedExpandedModel] = useState(null);
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [selectedPartsType, setSelectedPartsType] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [fuelTypeFilter, setFuelTypeFilter] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Handle navigation
  const handleBack = () => {
    setDirection("slide-left");
    switch (currentView) {
      case "models":
        setSelectedBrand(null);
        setCurrentView("brands");
        break;
      case "expandedModels":
        setSelectedModel(null);
        setCurrentView("models");
        break;
      case "engines":
        setSelectedExpandedModel(null);
        setCurrentView("expandedModels");
        break;
      case "autoPartsTypes":
        setSelectedEngine(null);
        setCurrentView("engines");
        break;
      case "subcategories":
        setSelectedPartsType(null);
        setCurrentView("autoPartsTypes");
        break;
      case "components":
        setSelectedSubcategory(null);
        setCurrentView("subcategories");
        break;
      default:
        break;
    }
  };

  // Update the EngineCard component to accept onClick prop
  const EngineCard = ({ specs, engine, onClick }) => (
    <div className="card engine-card" onClick={onClick}>
      <div className="engine-specs">
        <h3>{specs.engine}</h3>
        <p>Power: {specs.power}</p>
        <p>Year: {specs.year}</p>
        <p>Fuel: {specs.fuelType}</p>
        <p>Code: {specs.engineCode}</p>
      </div>
    </div>
  );

  // Filter buttons for fuel type
  const FilterButtons = () => (
    <div className="filter-buttons">
      <button
        className={`filter-btn gasoline ${
          fuelTypeFilter === "Gasoline" ? "active" : ""
        }`}
        onClick={() => setFuelTypeFilter("Gasoline")}
      >
        Gasoline
      </button>
      <button
        className={`filter-btn diesel ${
          fuelTypeFilter === "Diesel" ? "active" : ""
        }`}
        onClick={() => setFuelTypeFilter("Diesel")}
      >
        Diesel
      </button>
    </div>
  );

  // Add handleAddToCart function
  const handleAddToCart = (quantity) => {
    setCartCount((prev) => prev + quantity);
  };

  // Render content based on current view
  const renderContent = () => {
    const content = (
      <div
        className={`slider ${currentView === "brands" ? "brands-grid" : ""}`}
      >
        {currentView === "brands" &&
          brandsData.map((brand) => (
            <Card
              key={brand.id}
              image={brand.image}
              name={brand.name}
              onClick={() => {
                setDirection("slide-right");
                setSelectedBrand(brand);
                setCurrentView("models");
              }}
            />
          ))}

        {currentView === "models" && !selectedBrand && null}

        {currentView === "models" &&
          selectedBrand &&
          modelsData[selectedBrand.id].map((model) => (
            <Card
              key={model.id}
              image={model.image}
              name={model.name}
              onClick={() => {
                setDirection("slide-right");
                setSelectedModel(model);
                setCurrentView("expandedModels");
              }}
            />
          ))}

        {currentView === "expandedModels" && !selectedModel && null}

        {currentView === "expandedModels" &&
          selectedModel &&
          expandedModelsData[selectedModel.id]?.map((model) => (
            <Card
              key={model.id}
              image={model.image}
              name={model.name}
              onClick={() => {
                setDirection("slide-right");
                setSelectedExpandedModel(model);
                setCurrentView("engines");
              }}
            />
          ))}

        {currentView === "engines" && !selectedExpandedModel && null}

        {currentView === "engines" && selectedExpandedModel && (
          <>
            <FilterButtons />
            <div className="engines-container">
              {engineData[selectedExpandedModel.id]
                ?.filter(
                  (engine) =>
                    !fuelTypeFilter || engine.specs.fuelType === fuelTypeFilter
                )
                .map((engine) => (
                  <EngineCard
                    key={engine.id}
                    engine={engine}
                    specs={engine.specs}
                    onClick={() => {
                      setDirection("slide-right");
                      setSelectedEngine(engine);
                      setCurrentView("autoPartsTypes");
                    }}
                  />
                ))}
            </div>
          </>
        )}

        {currentView === "autoPartsTypes" && !selectedEngine && null}

        {currentView === "autoPartsTypes" &&
          selectedEngine &&
          autoPartsCategories.map((category) => (
            <Card
              key={category.id}
              image={category.image}
              name={category.name}
              onClick={() => {
                setDirection("slide-right");
                setSelectedPartsType(category);
                setCurrentView("subcategories");
              }}
            />
          ))}

        {currentView === "subcategories" && !selectedPartsType && null}

        {currentView === "subcategories" &&
          selectedPartsType &&
          autoPartsData[selectedPartsType.id].map((subcategory) => (
            <Card
              key={subcategory.id}
              image={subcategory.image}
              name={subcategory.name}
              onClick={() => {
                setDirection("slide-right");
                setSelectedSubcategory(subcategory);
                setCurrentView("components");
              }}
            />
          ))}

        {currentView === "components" && !selectedSubcategory && null}

        {currentView === "components" && selectedSubcategory && (
          <>
            {partsData[selectedSubcategory.id]?.["all"] ||
              partsData[selectedSubcategory.id]?.[selectedExpandedModel.id].map(
                (part) => (
                  <ProductCard
                    key={part.id}
                    product={{
                      ...part,
                      onAddToCart: handleAddToCart,
                    }}
                  />
                )
              )}
          </>
        )}
      </div>
    );

    return (
      <div className="image-wrapper">
        <TransitionGroup>
          <CSSTransition
            key={currentView}
            timeout={1000} // Match this with CSS transition duration
            classNames={direction}
          >
            {content}
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  };

  return (
    <div className="slider-container">
      {currentView !== "brands" && (
        <button
          className="nav-arrow left"
          onClick={handleBack}
          style={{
            visibility: currentView !== "brands" ? "visible" : "hidden",
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}

      {renderContent()}
    </div>
  );
};

export default Slider;
