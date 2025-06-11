import React from 'react';

const References: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">References</h1>
      
      <section className="mb-10">
        <p className="mb-6">
          The following sources were consulted during the development of this project. All references are formatted in Harvard style.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Academic Sources</h2>
          <ul className="space-y-4">
            <li>
              <p>Alpaydin, E. (2020) <em>Introduction to Machine Learning</em>. 4th edn. Cambridge, MA: MIT Press.</p>
            </li>
            <li>
              <p>Bishop, C.M. (2006) <em>Pattern Recognition and Machine Learning</em>. New York: Springer.</p>
            </li>
            <li>
              <p>Dua, D. and Graff, C. (2019) <em>UCI Machine Learning Repository</em>. Irvine, CA: University of California, School of Information and Computer Science. Available at: <a href="http://archive.ics.uci.edu/ml" className="text-blue-600 hover:underline">http://archive.ics.uci.edu/ml</a></p>
            </li>
            <li>
              <p>Géron, A. (2022) <em>Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow</em>. 3rd edn. Sebastopol, CA: O'Reilly Media.</p>
            </li>
            <li>
              <p>Hastie, T., Tibshirani, R. and Friedman, J. (2009) <em>The Elements of Statistical Learning: Data Mining, Inference, and Prediction</em>. 2nd edn. New York: Springer.</p>
            </li>
            <li>
              <p>James, G., Witten, D., Hastie, T. and Tibshirani, R. (2021) <em>An Introduction to Statistical Learning: with Applications in R</em>. 2nd edn. New York: Springer.</p>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Online Resources</h2>
          <ul className="space-y-4">
            <li>
              <p>McKinney, W. (2022) <em>Python for Data Analysis</em>. 3rd edn. Sebastopol, CA: O'Reilly Media. Available at: <a href="https://wesmckinney.com/book/" className="text-blue-600 hover:underline">https://wesmckinney.com/book/</a></p>
            </li>
            <li>
              <p>Pedregosa, F. et al. (2011) 'Scikit-learn: Machine Learning in Python', <em>Journal of Machine Learning Research</em>, 12, pp. 2825-2830. Available at: <a href="https://scikit-learn.org/stable/" className="text-blue-600 hover:underline">https://scikit-learn.org/stable/</a></p>
            </li>
            <li>
              <p>Russell, S. and Norvig, P. (2021) <em>Artificial Intelligence: A Modern Approach</em>. 4th edn. Hoboken, NJ: Pearson.</p>
            </li>
            <li>
              <p>VanderPlas, J. (2016) <em>Python Data Science Handbook</em>. Sebastopol, CA: O'Reilly Media. Available at: <a href="https://jakevdp.github.io/PythonDataScienceHandbook/" className="text-blue-600 hover:underline">https://jakevdp.github.io/PythonDataScienceHandbook/</a></p>
            </li>
            <li>
              <p>Waskom, M. (2021) 'Seaborn: statistical data visualization', <em>Journal of Open Source Software</em>, 6(60), p. 3021. Available at: <a href="https://seaborn.pydata.org/" className="text-blue-600 hover:underline">https://seaborn.pydata.org/</a></p>
            </li>
            <li>
              <p>Quinlan, J.R. (1993) <em>C4.5: Programs for Machine Learning</em>. San Francisco, CA: Morgan Kaufmann Publishers.</p>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Dataset Citation</h2>
          <p>
            Quinlan, J.R. (1990) 'Pittsburgh Bridges Data Set', <em>UCI Machine Learning Repository</em>. Available at: <a href="https://archive.ics.uci.edu/dataset/18/pittsburgh+bridges" className="text-blue-600 hover:underline">https://archive.ics.uci.edu/dataset/18/pittsburgh+bridges</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default References;
