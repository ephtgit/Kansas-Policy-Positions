const PolicySection = ({ title, policies }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {policies.map((policy, index) => (
      <div key={index} className="mb-4 bg-white p-3 rounded shadow">
        <h3 className="text-lg font-semibold mb-1">{policy.title}</h3>
        <p className="mb-1">{policy.description}</p>
        <p><em>Analogy: {policy.analogy}</em></p>
      </div>
    ))}
  </div>
);

const policyData = {
  housing: [
    {
      title: "Zoning Reform",
      description: "Change rules about what types of buildings can be built in different areas.",
      analogy: "Like allowing more Lego piece types in different areas of a board."
    },
    {
      title: "Land Value Tax (LVT)",
      description: "Tax based on land value, not including buildings.",
      analogy: "Paying for the spot your home sits on, not the home itself."
    },
    // Add more housing policies here...
  ],
  healthcare: [
    {
      title: "Medicaid Expansion",
      description: "Extend Medicaid coverage to more low-income adults.",
      analogy: "Extending a circus safety net to catch more people."
    },
    {
      title: "State Insurance Reforms",
      description: "Improve health insurance options and protections.",
      analogy: "Upgrading board game rules for fairer play."
    },
    // Add more healthcare policies here...
  ],
  // Add more policy categories here...
};

const App = () => {
  const [activeTab, setActiveTab] = React.useState('housing');
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Kansas Policy Prescriptions</h1>
      
      <div className="mb-6 flex justify-center flex-wrap">
        {Object.keys(policyData).map((key) => (
          <button
            key={key}
            className={`px-3 py-1 m-1 rounded ${activeTab === key ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
      <div className="max-w-3xl mx-auto">
        <PolicySection 
          title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} 
          policies={policyData[activeTab]} 
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
