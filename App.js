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
