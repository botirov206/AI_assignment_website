import React from 'react';

const ModelDevelopment: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Model Development</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Logistic Regression Theory</h2>
        <p className="mb-4">
          For this classification task, <strong>Logistic Regression</strong> was selected as the initial model. 
          Despite its name, Logistic Regression is a fundamental and widely used algorithm for classification problems.
        </p>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">How Logistic Regression Works</h3>
          <p className="mb-3">
            The core idea behind Logistic Regression is to model the probability that an input instance belongs 
            to a particular class. It uses a logistic function (sigmoid function) to transform a linear combination 
            of features into a probability value between 0 and 1.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Linear Component:</strong> For features <code>x1, x2, ..., xn</code>, the model calculates:
              <div className="bg-gray-100 p-2 my-2 rounded">
                <code>z = w0 + w1*x1 + w2*x2 + ... + wn*xn</code>
              </div>
              where <code>w0, w1, ..., wn</code> are the model weights learned during training.
            </li>
            <li>
              <strong>Logistic (Sigmoid) Function:</strong> This linear combination is passed through:
              <div className="bg-gray-100 p-2 my-2 rounded">
                <code>p = 1 / (1 + e^(-z))</code>
              </div>
              The output <code>p</code> represents the estimated probability of class membership.
            </li>
            <li>
              <strong>Decision Boundary:</strong> A threshold (typically 0.5) converts the probability into a prediction.
            </li>
          </ol>
        </div>
        
        <div className="my-6">
          <img 
            src="/logistic-regression.png" 
            alt="Logistic Regression Concept" 
            className="max-w-md h-auto"
          />
        </div>
        
        <h3 className="text-xl font-medium mb-3">Multi-Class Classification</h3>
        <p className="mb-4">
          Since our problem involves predicting one of several bridge types, the binary Logistic Regression 
          approach needs to be adapted. We used the <strong>One-vs-Rest (OvR)</strong> strategy, which:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Trains a separate binary classifier for each class</li>
          <li>Treats that class as positive and all other classes as negative</li>
          <li>When predicting, all classifiers produce a probability</li>
          <li>The class with the highest probability is chosen as the final prediction</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Evaluation Metrics</h2>
        <p className="mb-4">
          Evaluating classification models requires appropriate metrics that go beyond simple accuracy, 
          especially when dealing with multi-class or imbalanced datasets:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Accuracy</h3>
            <p className="mb-2">
              The proportion of correctly classified instances:
            </p>
            <div className="bg-gray-100 p-2 rounded">
              <code>Accuracy = (Correct Predictions) / (Total Predictions)</code>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Confusion Matrix</h3>
            <p>
              A table that summarizes performance by comparing actual class labels with predicted class labels. 
              Diagonal elements represent correct predictions, while off-diagonal elements represent misclassifications.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Precision</h3>
            <p className="mb-2">
              For a given class, the proportion of instances predicted as belonging to that class that actually do:
            </p>
            <div className="bg-gray-100 p-2 rounded">
              <code>Precision = True Positives / (True Positives + False Positives)</code>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Recall</h3>
            <p className="mb-2">
              For a given class, the proportion of actual instances of that class that were correctly identified:
            </p>
            <div className="bg-gray-100 p-2 rounded">
              <code>Recall = True Positives / (True Positives + False Negatives)</code>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">F1-Score</h3>
            <p className="mb-2">
              The harmonic mean of precision and recall:
            </p>
            <div className="bg-gray-100 p-2 rounded">
              <code>F1-Score = 2 * (Precision * Recall) / (Precision + Recall)</code>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Support</h3>
            <p>
              The number of actual instances of each class in the dataset.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Implementation Process</h2>
        <p className="mb-4">
          The development process, executed within a Google Colab notebook using Python libraries like 
          <code>pandas</code> and <code>scikit-learn</code>, followed these steps:
        </p>
        
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Model Initialization:</strong> A <code>LogisticRegression</code> model object was created, 
            configured for multi-class classification using the One-vs-Rest strategy (<code>multi_class='ovr'</code>) 
            and the <code>liblinear</code> solver.
          </li>
          <li>
            <strong>Model Training:</strong> The <code>fit()</code> method was called with the scaled training 
            features (<code>X_train_scaled</code>) and target labels (<code>y_train</code>).
          </li>
          <li>
            <strong>Prediction:</strong> The trained model's <code>predict()</code> method was used with the 
            scaled test features (<code>X_test_scaled</code>) to generate predictions (<code>y_pred</code>).
          </li>
          <li>
            <strong>Evaluation:</strong> The predictions were compared against the actual test labels using 
            the evaluation metrics discussed above.
          </li>
        </ol>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Model Performance</h2>
        <p className="mb-4">
          The evaluation on the test set (22 samples) yielded the following results:
        </p>
        
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">Overall Accuracy: 77.27%</h3>
        </div>
        
        <h3 className="text-xl font-medium mb-3">Classification Report</h3>
        <div className="overflow-x-auto mb-6">
          <pre className="bg-gray-50 p-4 rounded-lg text-sm">
{`              precision    recall  f1-score   support

        ARCH       0.67      0.67      0.67         3
    CANTILEV       0.00      0.00      0.00         2
      CONT-T       0.50      0.50      0.50         2
    SIMPLE-T       0.91      1.00      0.95        10
      SUSPEN       1.00      0.50      0.67         2
        WOOD       1.00      1.00      1.00         3

    accuracy                           0.77        22
   macro avg       0.68      0.61      0.63        22
weighted avg       0.78      0.77      0.77        22`}
          </pre>
        </div>
        
        <h3 className="text-xl font-medium mb-3">Confusion Matrix</h3>
        <div className="mb-6">
          <img 
            src="/Confusion-Matrix.png" 
            alt="Confusion Matrix" 
            className="max-w-2xl h-auto" 
          />
        </div>
        
        <h3 className="text-xl font-medium mb-3">Interpretation</h3>
        <p className="mb-4">
          The detailed report and confusion matrix reveal significant performance disparities across classes:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>The model correctly classified all 10 <code>SIMPLE-T</code> bridges and all 3 <code>WOOD</code> bridges.</li>
          <li>It correctly identified 2 out of 3 <code>ARCH</code> bridges but misclassified one as <code>CANTILEV</code>.</li>
          <li>It failed entirely on <code>CANTILEV</code> bridges, misclassifying them as <code>ARCH</code> and <code>CONT-T</code>.</li>
          <li>It correctly identified 1 out of 2 <code>CONT-T</code> bridges, misclassifying the other as <code>SIMPLE-T</code>.</li>
          <li>It correctly identified 1 out of 2 <code>SUSPEN</code> bridges, misclassifying the other as <code>CANTILEV</code>.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Potential Refinements</h2>
        <p className="mb-4">
          Based on the initial results, several refinement strategies could improve the model:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Addressing Class Imbalance</h3>
            <p>
              Techniques like <strong>SMOTE</strong> (Synthetic Minority Over-sampling Technique) could generate 
              synthetic samples of minority classes. Alternatively, <strong>adjusting class weights</strong> could 
              penalize misclassifications of minority classes more heavily.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Alternative Models</h3>
            <p>
              More complex models like <strong>Random Forest</strong>, <strong>Gradient Boosting</strong>, 
              or <strong>Support Vector Machines</strong> might capture non-linear relationships that 
              Logistic Regression misses.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Hyperparameter Tuning</h3>
            <p>
              Techniques like <strong>Grid Search</strong> or <strong>Randomized Search</strong> with 
              cross-validation could find optimal hyperparameter settings for the model.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Feature Engineering</h3>
            <p>
              Creating interaction terms between existing features or applying different encoding strategies 
              might help. Advanced feature selection could identify if some one-hot encoded features are 
              introducing noise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelDevelopment;
