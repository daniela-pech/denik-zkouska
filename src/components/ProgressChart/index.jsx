export const ProgressChart = () => {
  return (
    <div style={{ width: '100%', height: '300px', padding: '1rem' }}>
      <h2
        style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          marginBottom: '1rem',
        }}
      >
        Vývoj váhy (kg)
      </h2>
      <div className="flex flex-col items-start p-4">
        <label
          htmlFor="date"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          Vyberte datum
        </label>
        <input type="date" id="date" name="date" className="nazev-tridy" />
      </div>
    </div>
  );
};
