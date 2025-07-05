const Card = ({ children, className = '', hover = true }) => (
  <div className={`bg-white rounded-2xl shadow-lg ${hover ? 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);

export default Card;