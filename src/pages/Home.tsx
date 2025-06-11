import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pittsburgh Bridges AI Classification Project</h1>
        <p className="text-xl text-gray-600">
          An exploration of artificial intelligence applied to bridge type classification
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4">
          This project applies artificial intelligence techniques to predict the structural type of bridges
          using the Pittsburgh Bridges dataset from the UCI Machine Learning Repository. Through data analysis,
          feature engineering, and machine learning modeling, we demonstrate how AI can be used for classification
          tasks in civil engineering contexts.
        </p>
        <p>
          The project follows a structured approach: understanding AI fundamentals, preparing and analyzing the dataset,
          and developing a predictive model using Logistic Regression.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">AI Theory</h3>
          <p className="text-gray-700">
            Explore the fundamental concepts of artificial intelligence, its types, applications across industries,
            and the ethical considerations surrounding its use.
          </p>
          <div className="mt-4">
            <a href="#/ai-theory" className="text-blue-600 hover:underline">Learn more →</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Data Preparation</h3>
          <p className="text-gray-700">
            Discover how the Pittsburgh Bridges dataset was cleaned, analyzed, and prepared for machine learning,
            including exploratory data analysis and feature engineering.
          </p>
          <div className="mt-4">
            <a href="#/data-preparation" className="text-blue-600 hover:underline">Learn more →</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Model Development</h3>
          <p className="text-gray-700">
            Understand the Logistic Regression model used for bridge type classification, its implementation,
            performance metrics, and evaluation results.
          </p>
          <div className="mt-4">
            <a href="#/model-development" className="text-blue-600 hover:underline">Learn more →</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Comprehensive analysis of the Pittsburgh Bridges dataset</li>
          <li>Detailed data cleaning and feature engineering process</li>
          <li>Implementation of Logistic Regression for multi-class classification</li>
          <li>Evaluation using accuracy, precision, recall, and F1-score metrics</li>
          <li>Achieved 77.3% overall accuracy in bridge type prediction</li>
          <li>Complete code implementation in Python using pandas, scikit-learn, and visualization libraries</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
