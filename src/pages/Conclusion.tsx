import React from 'react';

const Conclusion: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Conclusion</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Project Summary</h2>
        <p className="mb-4">
          This project explored the application of artificial intelligence to classify bridge types using the Pittsburgh 
          Bridges dataset from the UCI Machine Learning Repository. Through a structured approach, we demonstrated how 
          machine learning can be applied to civil engineering data to make predictions about structural characteristics.
        </p>
        <p className="mb-4">
          The project followed a comprehensive workflow:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li>Understanding the theoretical foundations of AI and its applications</li>
          <li>Acquiring and cleaning the Pittsburgh Bridges dataset</li>
          <li>Performing exploratory data analysis to understand feature distributions and relationships</li>
          <li>Engineering features through encoding techniques to prepare for modeling</li>
          <li>Implementing a Logistic Regression model for multi-class classification</li>
          <li>Evaluating the model using appropriate metrics and identifying areas for improvement</li>
        </ol>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Model Performance</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>The Logistic Regression model achieved an overall accuracy of 77.27% on the test set</li>
            <li>Performance varied significantly across bridge types:
              <ul className="list-disc pl-5 mt-2">
                <li>Perfect classification (100% recall) for <code>SIMPLE-T</code> and <code>WOOD</code> types</li>
                <li>Moderate performance (67% recall) for <code>ARCH</code> type</li>
                <li>Poor performance (50% recall) for <code>CONT-T</code> and <code>SUSPEN</code> types</li>
                <li>Complete failure (0% recall) for <code>CANTILEV</code> type</li>
              </ul>
            </li>
            <li>The model showed high precision for <code>SIMPLE-T</code>, <code>SUSPEN</code>, and <code>WOOD</code> types</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Dataset Insights</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>The dataset exhibited significant class imbalance, with <code>SIMPLE-T</code> being the most common bridge type</li>
            <li>Several features showed strong relationships with bridge type:
              <ul className="list-disc pl-5 mt-2">
                <li><code>ERECTED</code> year showed clear patterns, with <code>WOOD</code> bridges being older and <code>CONT-T</code> bridges being newer</li>
                <li><code>MATERIAL</code> was strongly associated with certain bridge types</li>
                <li><code>LENGTH</code> varied across bridge types, with suspension bridges typically being longer</li>
              </ul>
            </li>
            <li>Missing values were present in multiple columns, requiring careful imputation strategies</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
        <p className="mb-4">
          Despite the promising results, several limitations should be acknowledged:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Small Dataset Size:</strong> With only 108 bridges (and one <code>NIL</code> type removed), 
            the dataset is relatively small for machine learning applications, limiting the model's ability to 
            generalize, especially for underrepresented bridge types.
          </li>
          <li>
            <strong>Class Imbalance:</strong> The uneven distribution of bridge types, with <code>SIMPLE-T</code> 
            being overrepresented and other types having very few examples, likely contributed to the model's 
            inconsistent performance across classes.
          </li>
          <li>
            <strong>Missing Values:</strong> The dataset contained numerous missing values that required imputation, 
            potentially introducing bias or inaccuracies.
          </li>
          <li>
            <strong>Model Simplicity:</strong> Logistic Regression, while interpretable, may not capture complex 
            non-linear relationships between features and bridge types.
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Future Work</h2>
        <p className="mb-4">
          Several avenues for future improvement and exploration include:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Advanced Models</h3>
            <p>
              Implementing more sophisticated algorithms such as Random Forests, Gradient Boosting, or Neural Networks 
              could potentially capture more complex patterns in the data and improve classification performance.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Addressing Class Imbalance</h3>
            <p>
              Techniques like SMOTE for oversampling minority classes, or adjusting class weights during model training, 
              could help improve performance on underrepresented bridge types.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Feature Engineering</h3>
            <p>
              Creating interaction terms between features, or developing more sophisticated encoding strategies, 
              might reveal additional patterns that could improve classification accuracy.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Hyperparameter Optimization</h3>
            <p>
              Systematic tuning of model hyperparameters through techniques like Grid Search or Bayesian Optimization 
              could identify optimal configurations for improved performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conclusion;
