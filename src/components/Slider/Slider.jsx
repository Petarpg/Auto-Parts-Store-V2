import React, { useState } from "react";
import Card from "../Card/Card";
import "./Slider.css";
import ProductCard from "../ProductCard/ProductCard";

// Expanded models data
const expandedModelsData = {
  "audi-80": [
    {
      id: "audi-80-b3",
      name: "Audi 80 B3",
      image: "images/models/expanded/audi-80-b3.jpg",
      engines: [
        {
          id: "eng-1",
          name: "1.8",
          specs: {
            engine: "1.8L I4",
            power: "75kW/102HP",
            year: "1986-1991",
            fuelType: "Gasoline",
            engineCode: "PM",
          },
        },
        {
          id: "eng-2",
          name: "1.6D",
          specs: {
            engine: "1.6L I4",
            power: "54kW/73HP",
            year: "1986-1991",
            fuelType: "Diesel",
            engineCode: "RA",
          },
        },
      ],
    },
  ],
  "audi-100": [
    {
      id: "audi-100-c3",
      name: "Audi 100 C3",
      image: "images/models/audi-100-c4.png",
      engines: [
        {
          id: "eng-3",
          name: "2.0",
          specs: {
            engine: "2.0L I5",
            power: "85kW/115HP",
            year: "1988-1991",
            fuelType: "Gasoline",
            engineCode: "PS",
          },
        },
        {
          id: "eng-4",
          name: "2.5 TDI",
          specs: {
            engine: "2.5L I5",
            power: "88kW/120HP",
            year: "1990-1994",
            fuelType: "Diesel",
            engineCode: "AAT",
          },
        },
      ],
    },
  ],
  "audi-a3": [
    {
      id: "audi-a3-8l",
      name: "Audi A3 8L",
      image: "images/models/audi-100-c4.png",
      engines: [
        {
          id: "eng-5",
          name: "1.8T",
          specs: {
            engine: "1.8L I4 Turbo",
            power: "110kW/150HP",
            year: "1996-2003",
            fuelType: "Gasoline",
            engineCode: "AGU",
          },
        },
        {
          id: "eng-6",
          name: "1.9 TDI",
          specs: {
            engine: "1.9L I4",
            power: "66kW/90HP",
            year: "1996-2001",
            fuelType: "Diesel",
            engineCode: "AGR",
          },
        },
      ],
    },
  ],
};

// Auto parts categories for each engine type
const enginePartsData = {
  "eng-1": {
    transmission: [
      {
        id: "flywheel-1",
        name: "Flywheel",
        image: "images/parts/brake-system.jpg",
      },
      {
        id: "clutch-1",
        name: "Clutch Kit",
        image: "images/parts/brake-system.jpg",
      },
    ],
    accessories: [
      {
        id: "alarm-1",
        name: "Car Alarm System",
        image: "images/parts/brake-system.jpg",
      },
      {
        id: "cosmetic-1",
        name: "Body Kit",
        image: "images/parts/brake-system.jpg",
      },
    ],
  },
  "eng-2": {
    transmission: [
      {
        id: "flywheel-2",
        name: "Diesel Flywheel",
        image: "images/parts/brake-system.jpg",
      },
      {
        id: "clutch-2",
        name: "Heavy Duty Clutch",
        image: "images/parts/brake-system.jpg",
      },
    ],
    accessories: [
      {
        id: "alarm-2",
        name: "Remote Start System",
        image: "images/parts/brake-system.jpg",
      },
      {
        id: "cosmetic-2",
        name: "LED Lighting Kit",
        image: "images/parts/brake-system.jpg",
      },
    ],
  },
  // Add similar structures for eng-3 through eng-6
};

// Auto parts categories
const autoPartsTypes = [
  {
    id: "transmission",
    name: "Transmission",
    image: "images/parts/brake-system.jpg",
    components: [
      {
        id: "flywheel",
        name: "Flywheel",
        image: "images/parts/brake-system.jpg",
      },
      {
        id: "clutch",
        name: "Clutch",
        image: "images/parts/brake-system.jpg",
      },
    ],
  },
  {
    id: "accessories",
    name: "Auto Accessories",
    image: "images/parts/brake-system.jpg",
    components: [
      {
        id: "alarms",
        name: "Car Alarms",
        image: "images/parts/brake-system.jpg",
      },
      {
        id: "cosmetics",
        name: "Car Cosmetics",
        image: "images/parts/brake-system.jpg",
      },
    ],
  },
];

// Original brandsData remains the same
const brandsData = [
  {
    id: "audi",
    name: "Audi",
    image: "images/brands/audi.png",
    models: [
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
  },
  // Add more brands here
];

const Slider = () => {
  // Track the current view and selections
  const [currentView, setCurrentView] = useState("brands");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedExpandedModel, setSelectedExpandedModel] = useState(null);
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [selectedPartsType, setSelectedPartsType] = useState(null);
  const [fuelTypeFilter, setFuelTypeFilter] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Handle navigation
  const handleBack = () => {
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
      case "components":
        setSelectedPartsType(null);
        setCurrentView("autoPartsTypes");
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
    switch (currentView) {
      case "brands":
        return brandsData.map((brand) => (
          <Card
            key={brand.id}
            image={brand.image}
            name={brand.name}
            onClick={() => {
              setSelectedBrand(brand);
              setCurrentView("models");
            }}
          />
        ));

      case "models":
        return (
          selectedBrand?.models?.map((model) => (
            <Card
              key={model.id}
              image={model.image}
              name={model.name}
              onClick={() => {
                setSelectedModel(model);
                setCurrentView("expandedModels");
              }}
            />
          )) || null
        );

      case "expandedModels":
        return (
          (selectedModel &&
            expandedModelsData[selectedModel.id]?.map((model) => (
              <Card
                key={model.id}
                image={model.image}
                name={model.name}
                onClick={() => {
                  setSelectedExpandedModel(model);
                  setCurrentView("engines");
                }}
              />
            ))) ||
          null
        );

      case "engines":
        if (!selectedExpandedModel?.engines) return null;

        const engines = selectedExpandedModel.engines.filter(
          (engine) =>
            !fuelTypeFilter || engine.specs.fuelType === fuelTypeFilter
        );
        return (
          <>
            <FilterButtons />
            <div className="engines-container">
              {engines.map((engine) => (
                <EngineCard
                  key={engine.id}
                  engine={engine}
                  specs={engine.specs}
                  onClick={() => {
                    setSelectedEngine(engine);
                    setCurrentView("autoPartsTypes");
                  }}
                />
              ))}
            </div>
          </>
        );

      case "autoPartsTypes":
        return (
          <div className="parts-types-container">
            {autoPartsTypes.map((type) => (
              <Card
                key={type.id}
                image={type.image}
                name={type.name}
                onClick={() => {
                  setSelectedPartsType(type);
                  setCurrentView("components");
                }}
              />
            ))}
          </div>
        );

      case "components":
        if (!selectedPartsType) return null;
        return (
          <div className="components-container">
            {selectedPartsType.components.map((component) => (
              <ProductCard
                key={component.id}
                product={{
                  ...component,
                  price: 100.0, // Add appropriate price
                  additionalImages: [
                    component.image,
                    component.image,
                    component.image,
                  ],
                  onAddToCart: handleAddToCart,
                }}
              />
            ))}
          </div>
        );

      case "parts":
        if (!selectedEngine) return null;

        return (
          <div className="parts-container">
            <h3 className="parts-section-title">Transmission Parts</h3>
            <div className="parts-section">
              {enginePartsData[selectedEngine.id]?.transmission.map((part) => (
                <Card
                  key={part.id}
                  image={part.image}
                  name={part.name}
                  onClick={() => {
                    // Handle part selection
                    console.log(`Selected part: ${part.name}`);
                  }}
                />
              ))}
            </div>

            <h3 className="parts-section-title">Accessories</h3>
            <div className="parts-section">
              {enginePartsData[selectedEngine.id]?.accessories.map((part) => (
                <Card
                  key={part.id}
                  image={part.image}
                  name={part.name}
                  onClick={() => {
                    // Handle part selection
                    console.log(`Selected accessory: ${part.name}`);
                  }}
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="slider-container">
      <button
        className="nav-arrow left"
        onClick={handleBack}
        style={{ visibility: currentView !== "brands" ? "visible" : "hidden" }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <div className="slider">{renderContent()}</div>
    </div>
  );
};

export default Slider;
