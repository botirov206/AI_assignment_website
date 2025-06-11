import React from 'react';

const DataPreparation: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Data Preparation</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Project Objectives</h2>
        <p className="mb-4">
          The primary objective of this AI project is to develop a classification model capable of predicting 
          the structural <code>TYPE</code> of a bridge based on its recorded characteristics. The Pittsburgh 
          Bridges dataset provides various features like the river it crosses, location, erection year, purpose, 
          material, span length, and number of lanes.
        </p>
        <p>
          By training a model on this data, we aim to understand which features are most indicative of a bridge's 
          type and create a system that can classify bridges with reasonable accuracy. Success is measured by the 
          model's performance on unseen test data, evaluated using standard classification metrics.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Dataset Overview</h2>
        <p className="mb-4">
          The Pittsburgh Bridges dataset was acquired from the UCI Machine Learning Repository. It contains 
          information about 108 bridges with 13 features:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Feature</th>
                <th className="py-2 px-4 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border"><code>IDENTIF</code></td>
                <td className="py-2 px-4 border">Identifier</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>RIVER</code></td>
                <td className="py-2 px-4 border">River crossed (A, M, O, Y)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>LOCATION</code></td>
                <td className="py-2 px-4 border">Location number along the river</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>ERECTED</code></td>
                <td className="py-2 px-4 border">Year erected</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>PURPOSE</code></td>
                <td className="py-2 px-4 border">Purpose (WALK, AQUEDUCT, RR, HIGHWAY)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>LENGTH</code></td>
                <td className="py-2 px-4 border">Length in feet</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>LANES</code></td>
                <td className="py-2 px-4 border">Number of lanes</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>CLEAR-G</code></td>
                <td className="py-2 px-4 border">Clear-G (N: not navigable, G: navigable)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>T-OR-D</code></td>
                <td className="py-2 px-4 border">Through or Deck</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>MATERIAL</code></td>
                <td className="py-2 px-4 border">Material (WOOD, IRON, STEEL)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>SPAN</code></td>
                <td className="py-2 px-4 border">Span (SHORT, MEDIUM, LONG)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>REL-L</code></td>
                <td className="py-2 px-4 border">Relative length (S, S-F, F)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border"><code>TYPE</code></td>
                <td className="py-2 px-4 border">Bridge type (WOOD, ARCH, SIMPLE-T, CONT-T, CANTILEV, SUSPEN, NIL)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A sample of the raw data (first 5 rows after loading and adding column names) looked like this:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto mb-6">
          <pre className="text-sm">
{`  IDENTIF RIVER  LOCATION  ERECTED   PURPOSE  LENGTH  LANES CLEAR-G   T-OR-D MATERIAL    SPAN REL-L  TYPE
0      E1     M       3.0     1818   HIGHWAY     NaN    2.0       N  THROUGH     WOOD   SHORT     S  WOOD
1      E2     A      25.0     1819   HIGHWAY  1037.0    2.0       N  THROUGH     WOOD   SHORT     S  WOOD
2      E3     A      39.0     1829  AQUEDUCT     NaN    1.0       N  THROUGH     WOOD     NaN     S  WOOD
3      E5     A      29.0     1837   HIGHWAY  1000.0    2.0       N  THROUGH     WOOD   SHORT     S  WOOD
4      E6     M      23.0     1838   HIGHWAY     NaN    2.0       N  THROUGH     WOOD     NaN     S  WOOD`}
          </pre>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Data Cleaning Process</h2>
        <p className="mb-4">
          Initial inspection revealed several issues that needed to be addressed:
        </p>
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Missing Values</h3>
          <p className="mb-2">Several columns contained missing values (NaN):</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><code>LOCATION</code>: 1 missing</li>
            <li><code>LENGTH</code>: 27 missing</li>
            <li><code>LANES</code>: 16 missing</li>
            <li><code>CLEAR-G</code>: 2 missing</li>
            <li><code>T-OR-D</code>: 6 missing</li>
            <li><code>MATERIAL</code>: 2 missing</li>
            <li><code>SPAN</code>: 16 missing</li>
            <li><code>REL-L</code>: 5 missing</li>
            <li><code>TYPE</code>: 2 missing</li>
          </ul>
        </div>
        
        <p className="mb-4">The following cleaning steps were performed:</p>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Drop Identifier:</strong> The <code>IDENTIF</code> column, being a unique identifier for each bridge, 
            provides no predictive value for the bridge <code>TYPE</code>. Therefore, it was dropped from the dataset.
          </li>
          <li>
            <strong>Handle Missing Values:</strong> Given the relatively small size of the dataset (108 rows), simply dropping 
            rows with missing values could significantly reduce the available data. Instead, imputation was chosen:
            <ul className="list-disc pl-5 mt-2">
              <li>
                For <strong>numerical columns</strong> (<code>LOCATION</code>, <code>LENGTH</code>, <code>LANES</code>), 
                missing values were imputed using the <strong>median</strong> value of the respective column.
              </li>
              <li>
                For <strong>categorical columns</strong> (<code>CLEAR-G</code>, <code>T-OR-D</code>, <code>MATERIAL</code>, 
                <code>SPAN</code>, <code>REL-L</code>, <code>TYPE</code>), missing values were imputed using the 
                <strong>mode</strong> (most frequent category) of the respective column.
              </li>
            </ul>
          </li>
        </ol>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Exploratory Data Analysis (EDA)</h2>
        <p className="mb-4">
          With the data cleaned, EDA was performed to understand the distributions of individual features and their 
          potential relationships with the target variable, <code>TYPE</code>.
        </p>
        
        <h3 className="text-xl font-medium mb-3">Numerical Features Distribution</h3>
        <div className="mb-6 text-center">
          <img 
            src="/EDA-Plot-1.png" 
            alt="Histograms of Numerical Features" 
            className="mx-auto max-w-full h-auto"
          />
        </div>
        <p className="mb-6">
          The histograms revealed that <code>LOCATION</code> appeared somewhat normally distributed. <code>ERECTED</code> 
          showed a peak around the early 1900s. <code>LENGTH</code> was right-skewed, with most bridges having shorter 
          lengths. <code>LANES</code> was concentrated at 2 and 4 lanes.
        </p>
        
        <h3 className="text-xl font-medium mb-3">Categorical Features Distribution</h3>
        <div className="mb-6 text-center">
          <img 
            src="/EDA-Plot-2.png" 
            alt="Count Plots of Categorical Features" 
            className="mx-auto max-w-full h-auto"
          />
        </div>
        <p className="mb-6">
          The count plots illustrated that River <code>A</code> (Allegheny) and <code>M</code> (Monongahela) were most common. 
          Most bridges served <code>HIGHWAY</code> or <code>RR</code> (Railroad) purposes. <code>STEEL</code> was the dominant 
          <code>MATERIAL</code>. <code>MEDIUM</code> was the most frequent <code>SPAN</code>. The target variable <code>TYPE</code> 
          was imbalanced, with <code>SIMPLE-T</code> being the most common type by a significant margin.
        </p>
        
        <h3 className="text-xl font-medium mb-3">Numerical Features vs. Target</h3>
        <div className="mb-6 text-center">
          <img 
            src="/EDA-Plot-3.png" 
            alt="Numerical Features vs. Target" 
            className="mx-auto max-w-full h-auto"
          />
        </div>
        <p className="mb-6">
          The box plots showed how numerical features varied across different bridge types. <code>ERECTED</code> year showed 
          noticeable differences; <code>WOOD</code> bridges were generally much older, while <code>CONT-T</code> bridges were 
          typically newer. <code>LENGTH</code> also varied, with <code>SUSPEN</code> and <code>CANTILEV</code> types tending 
          to be longer.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Feature Engineering</h2>
        <p className="mb-4">
          Machine learning models require numerical input. Therefore, the categorical features needed to be converted 
          into a numerical format:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Target Encoding</h3>
            <p>
              The target variable <code>TYPE</code> was categorical. <strong>Label Encoding</strong> was used to convert 
              each unique bridge type string into an integer. For example, 'ARCH' might become 0, 'CANTILEV' 1, 'WOOD' 6, etc.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Feature Encoding</h3>
            <p>
              The remaining categorical predictor features were transformed using <strong>One-Hot Encoding</strong>. 
              This technique creates new binary (0 or 1) columns for each category within a feature, expanding the 
              number of feature columns from the original set to 25.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Data Splitting and Scaling</h2>
        <p className="mb-4">
          To evaluate the model's performance on unseen data, the dataset was split into a <strong>training set</strong> 
          (used to train the model) and a <strong>testing set</strong> (used to evaluate the trained model).
        </p>
        
        <div className="bg-gray-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Process Details</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>An 80/20 split was used (80% training, 20% testing)</li>
            <li>The single row corresponding to the <code>NIL</code> type was removed before splitting</li>
            <li><strong>Stratification</strong> based on the target variable was employed to maintain class proportions</li>
            <li><strong>Standard Scaling</strong> was applied to normalize numerical features</li>
            <li>The scaler was fitted only on the training data to prevent data leakage</li>
          </ul>
        </div>
        
        <p>
          The result was a fully prepared dataset: <code>X_train_scaled</code>, <code>y_train</code>, <code>X_test_scaled</code>, 
          and <code>y_test</code>, ready for model training and evaluation.
        </p>
      </section>
    </div>
  );
};

export default DataPreparation;
