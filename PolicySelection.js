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
