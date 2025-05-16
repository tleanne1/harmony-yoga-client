const SectionHeader = ({ title, subtitle }) => {
    return (
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">{title}</h2>
        <p className="text-base md:text-lg text-slate">{subtitle}</p>
      </div>
    );
  };
  
  export default SectionHeader;
  