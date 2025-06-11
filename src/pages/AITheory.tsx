import React from 'react';
import ImageWithFallback from '../components/ImageWithFallback';

const AITheory: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">AI Theory</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Fundamental Concepts of AI</h2>
        <p className="mb-4">
          Artificial Intelligence represents the endeavor to imbue computer systems with capabilities typically 
          associated with human intellect. This encompasses a range of cognitive functions, including the capacity 
          to learn from data and experience, comprehend natural language, identify complex patterns within information, 
          engage in problem-solving, and make reasoned decisions or predictions.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">Types of AI</h3>
          <p className="mb-3">
            The landscape of AI can be broadly categorized into different types:
          </p>
          <div className="pl-4">
            <p className="mb-2"><strong>Narrow AI (Weak AI):</strong> Systems designed to execute specific, well-defined tasks. 
            Examples include virtual assistants, facial recognition systems, and recommendation algorithms.</p>
            
            <p className="mb-2"><strong>General AI (Strong AI):</strong> Largely theoretical systems with the ability to understand, 
            learn, and apply intelligence across the full spectrum of human cognitive tasks.</p>
            
            <p className="mb-2"><strong>Machine Learning (ML):</strong> A critical subfield focusing on algorithms that allow 
            computer systems to learn directly from data without explicit programming for every scenario.</p>
            
            <p><strong>Deep Learning (DL):</strong> A specialized subset of ML employing artificial neural networks with numerous 
            interconnected layers, particularly adept at learning intricate patterns from massive datasets.</p>
          </div>
        </div>
        <div className="my-6 text-left">
          <ImageWithFallback 
            src="/AI-theory-1.png" 
            alt="AI Types Hierarchy Diagram" 
            className="mx-auto max-w-[50%] h-auto"
            placeholder="Diagram showing the hierarchy of AI, with Machine Learning as a subset of AI, and Deep Learning as a subset of Machine Learning" 
          />
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
        <p className="mb-4">
          The transformative potential of AI is being realized across nearly every sector of the economy and society:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Healthcare</h3>
            <p>
              AI algorithms analyze medical images to assist in disease detection, accelerate drug discovery, 
              help personalize treatment plans, and streamline hospital operations through intelligent patient data management.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Finance</h3>
            <p>
              The finance industry relies on AI for detecting fraudulent transactions, developing algorithmic trading strategies, 
              assessing credit risk, managing investment portfolios, and enhancing customer service with intelligent chatbots.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Transportation</h3>
            <p>
              AI is revolutionizing transportation through self-driving cars, traffic signal optimization, 
              logistics management, and improved scheduling and reliability of public transportation systems.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Manufacturing</h3>
            <p>
              Manufacturing benefits from AI through production line optimization, predictive maintenance systems, 
              and enhanced quality control processes using AI-powered visual inspection systems.
            </p>
          </div>
        </div>
        <div className="my-6 text-left">
          <ImageWithFallback 
            src="/AI-theory-2.png" 
            alt="AI Industry Applications" 
            className="mx-auto max-w-[50%] h-auto"
            placeholder="Infographic showing AI applications across different industries including healthcare, finance, transportation, manufacturing, retail, and education" 
          />
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Benefits and Risks</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3 text-green-700">Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Efficiency and Automation:</strong> Taking over repetitive tasks, allowing humans to focus on more strategic work</li>
              <li><strong>Accuracy and Consistency:</strong> Minimizing errors in tasks requiring precision</li>
              <li><strong>Advanced Data Analysis:</strong> Identifying patterns in large datasets impossible for humans to discern</li>
              <li><strong>Enhanced Capabilities:</strong> Enabling new services from medical diagnostics to language translation</li>
              <li><strong>Continuous Availability:</strong> Operating 24/7 without fatigue</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3 text-red-700">Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Job Displacement:</strong> Potential automation of certain roles requiring workforce adaptation</li>
              <li><strong>Bias and Unfairness:</strong> Systems inheriting and amplifying biases present in training data</li>
              <li><strong>Security Vulnerabilities:</strong> Susceptibility to attacks like adversarial examples</li>
              <li><strong>Privacy Concerns:</strong> Extensive use of personal and sensitive data</li>
              <li><strong>Complexity and Opacity:</strong> "Black box" nature of some advanced models</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ethical Considerations</h2>
        <p className="mb-4">
          The development and application of AI cannot proceed in an ethical vacuum. Key considerations include:
        </p>
        <div className="bg-gray-50 p-5 rounded-lg">
          <ul className="space-y-3">
            <li><strong>Fairness:</strong> Identifying and mitigating biases to ensure AI systems don't perpetuate discrimination</li>
            <li><strong>Accountability:</strong> Establishing frameworks to determine responsibility when AI systems cause harm</li>
            <li><strong>Transparency:</strong> Making AI operations understandable to users, regulators, and affected individuals</li>
            <li><strong>Privacy:</strong> Implementing stringent controls over personal data collection and use</li>
            <li><strong>Human Oversight:</strong> Ensuring humans retain ultimate control, especially for high-consequence systems</li>
          </ul>
        </div>
        <div className="my-6 text-center">
          <ImageWithFallback 
            src="/AI-theory-3.png" 
            alt="AI Ethics Framework" 
            className="mx-auto max-w-[50%] h-auto"
            placeholder="Diagram illustrating key ethical principles in AI: fairness, transparency, privacy, accountability, human oversight, and safety" 
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Future Trends</h2>
        <p className="mb-4">
          The field of AI continues to evolve rapidly. Significant trends likely to shape its future impact include:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Progress towards more capable, potentially even General AI</li>
          <li>Advancements in Explainable AI (XAI) to make complex models more transparent</li>
          <li>Increasing integration of AI into everyday devices through the Internet of Things (IoT)</li>
          <li>Development of more robust regulatory frameworks and governance structures</li>
          <li>Greater focus on AI systems that can operate with less data and computational resources</li>
        </ul>
      </section>
    </div>
  );
};

export default AITheory;
