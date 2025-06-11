import React from 'react';

const CodeShowcase: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Code Showcase</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Google Colab Implementation</h2>
        <p className="mb-6">
          This section highlights key code snippets from the Google Colab notebook used to implement the Pittsburgh Bridges 
          classification project. The complete implementation follows a structured approach from data loading to model evaluation.
        </p>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Environment Setup</h3>
          <p className="mb-3">First, we imported all necessary libraries:</p>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# Import necessary libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import requests
from io import BytesIO
import os

# Import necessary sklearn components
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Set visualization styles
sns.set(style="whitegrid")
plt.rcParams["figure.figsize"] = (12, 6)`}
          </pre>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Data Loading</h3>
          <p className="mb-3">We loaded the dataset directly from the UCI Machine Learning Repository:</p>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# URLs for the dataset and names file
data_url = "https://archive.ics.uci.edu/ml/machine-learning-databases/bridges/bridges.data.version1"
names_url = "https://archive.ics.uci.edu/ml/machine-learning-databases/bridges/bridges.names"

# Define column names based on dataset description
columns = ['IDENTIF', 'RIVER', 'LOCATION', 'ERECTED', 'PURPOSE', 'LENGTH', 
           'LANES', 'CLEAR-G', 'T-OR-D', 'MATERIAL', 'SPAN', 'REL-L', 'TYPE']

# Download the data file
data_response = requests.get(data_url)
data_response.raise_for_status()

# Load the dataset using pandas, specifying no header and providing column names
# The data uses commas as separators
df = pd.read_csv(BytesIO(data_response.content), header=None, names=columns, na_values='?')`}
          </pre>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Data Cleaning</h3>
          <p className="mb-3">We handled missing values and dropped unnecessary columns:</p>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# 1. Drop the Identifier column (likely not useful for prediction)
if 'IDENTIF' in df.columns:
    print("Dropping identifier column 'IDENTIF'")
    df = df.drop('IDENTIF', axis=1)

# 2. Handle Missing Values
# Get columns with missing values
cols_with_missing = df.columns[df.isnull().any()].tolist()
print(f"Columns with missing values: {cols_with_missing}")

for col in cols_with_missing:
    # Check if column is numeric
    if pd.api.types.is_numeric_dtype(df[col]):
        # Impute numerical columns with median
        median_val = df[col].median()
        df[col].fillna(median_val, inplace=True)
        print(f"Imputed missing values in numerical column '{col}' with median ({median_val})")
    else:
        # Impute categorical columns with mode
        mode_val = df[col].mode()[0]
        df[col].fillna(mode_val, inplace=True)
        print(f"Imputed missing values in categorical column '{col}' with mode ('{mode_val}')")`}
          </pre>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Exploratory Data Analysis</h3>
          <p className="mb-3">We created visualizations to understand the data:</p>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# 1. Distribution of Numerical Features
numerical_cols = df.select_dtypes(include=np.number).columns
plt.figure(figsize=(15, len(numerical_cols) * 2))
for i, col in enumerate(numerical_cols):
    plt.subplot(len(numerical_cols), 1, i + 1)
    sns.histplot(df[col], kde=True)
    plt.title(f"Distribution of {col}", fontsize=14)
    plt.xlabel("")
plt.tight_layout()
plt.show()

# 2. Distribution of Categorical Features
categorical_cols = df.select_dtypes(include=object).columns
plt.figure(figsize=(15, len(categorical_cols) * 2))
for i, col in enumerate(categorical_cols):
    plt.subplot(len(categorical_cols), 1, i + 1)
    sns.countplot(y=df[col], palette="viridis")
    plt.title(f"Distribution of {col}", fontsize=14)
    plt.xlabel("Count")
plt.tight_layout()
plt.show()

# 3. Relationship between Numerical Features and Target Variable ("TYPE")
plt.figure(figsize=(15, len(numerical_cols) * 5))
for i, num_col in enumerate(numerical_cols):
    plt.subplot(len(numerical_cols), 1, i + 1)
    sns.boxplot(x=df[num_col], y=df["TYPE"], palette="coolwarm")
    plt.title(f"{num_col} vs. Bridge TYPE", fontsize=14)
    plt.xlabel(num_col)
plt.tight_layout()
plt.show()`}
          </pre>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Feature Engineering</h3>
          <p className="mb-3">We encoded categorical features and prepared the data for modeling:</p>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# 1. Encode the target variable (TYPE)
label_encoder = LabelEncoder()
df['TYPE_encoded'] = label_encoder.fit_transform(df['TYPE'])
y = df['TYPE_encoded']
print("Target variable encoded.")
print(f"Label mapping: {dict(zip(label_encoder.classes_, label_encoder.transform(label_encoder.classes_)))}")

# 2. Select features (X)
X = df.drop(['TYPE', 'TYPE_encoded'], axis=1)
print(f"Initial features shape: {X.shape}")

# 3. Apply One-Hot Encoding to Categorical Features in X
categorical_features = X.select_dtypes(include="object").columns
print(f"Categorical features to encode: {list(categorical_features)}")
X_encoded = pd.get_dummies(X, columns=categorical_features, drop_first=False)
print(f"Features shape after One-Hot Encoding: {X_encoded.shape}")`}
          </pre>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Data Splitting and Scaling</h3>
          <p className="mb-3">We prepared the data for training and testing:</p>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# 1. Find and remove the NIL class (which has only one sample)
nil_label = None
if 'NIL' in label_encoder.classes_:
    nil_label = label_encoder.transform(['NIL'])[0]
    print(f"Found 'NIL' class with label {nil_label}")
    
    # Filter out the NIL class
    nil_indices = y[y == nil_label].index
    X_encoded_filtered = X_encoded.drop(nil_indices)
    y_filtered = y.drop(nil_indices)
    print(f"Removed {len(nil_indices)} row(s) with 'NIL' class")
else:
    X_encoded_filtered = X_encoded
    y_filtered = y
    print("No 'NIL' class found, proceeding with all data")

# 2. Split Data into Training and Testing Sets
X_train, X_test, y_train, y_test = train_test_split(
    X_encoded_filtered, y_filtered, test_size=0.2, random_state=42, stratify=y_filtered
)
print(f"X_train shape: {X_train.shape}")
print(f"X_test shape: {X_test.shape}")
print(f"y_train shape: {y_train.shape}")
print(f"y_test shape: {y_test.shape}")

# 3. Scale Numerical Features using StandardScaler
scaler = StandardScaler()

# Fit on training data and transform both training and testing data
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Convert scaled arrays back to DataFrames
X_train_scaled = pd.DataFrame(X_train_scaled, columns=X_encoded_filtered.columns, index=X_train.index)
X_test_scaled = pd.DataFrame(X_test_scaled, columns=X_encoded_filtered.columns, index=X_test.index)`}
          </pre>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Model Training and Prediction</h3>
          <p className="mb-3">We trained the Logistic Regression model and made predictions:</p>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# 1. Initialize the Model
model = LogisticRegression(multi_class='ovr', solver='liblinear', random_state=42, max_iter=1000)

# 2. Train the Model
model.fit(X_train_scaled, y_train)
print("Model training complete.")

# 3. Make Predictions on the Test Set
y_pred = model.predict(X_test_scaled)
print("Predictions made successfully.")`}
          </pre>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-3">Model Evaluation</h3>
          <p className="mb-3">Finally, we evaluated the model's performance:</p>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`# 1. Calculate Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.4f}")

# 2. Generate Classification Report
# Get the class names back from the label encoder for the report
class_names = label_encoder.classes_
# Filter class names to exclude 'NIL' if it was removed
if nil_label is not None:
    class_names = [name for i, name in enumerate(class_names) if i != nil_label]

report = classification_report(y_test, y_pred, target_names=class_names, zero_division=0)
print(report)

# 3. Generate and Plot Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", 
            xticklabels=class_names, yticklabels=class_names)
plt.xlabel("Predicted Label")
plt.ylabel("True Label")
plt.title("Confusion Matrix")
plt.show()`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default CodeShowcase;
