// src/components/ui/Card.jsx
const Card = ({ 
  children, 
  className = '', 
  hover = true,
  variant = 'default',
  size = 'md',
  interactive = false,
  loading = false,
  header,
  footer,
  ...props 
}) => {
  const baseClasses = `
    bg-white rounded-lg shadow-sm border border-gray-200
    transition-all duration-300 ease-in-out
    ${hover ? 'hover:shadow-lg hover:-translate-y-0.5' : ''}
    ${interactive ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : ''}
    ${loading ? 'animate-pulse' : ''}
    sm:rounded-xl lg:rounded-2xl
  `;

  const variants = {
    default: `
      bg-white border-gray-200
      ${hover ? 'hover:shadow-lg hover:border-gray-300' : ''}
    `,
    elevated: `
      bg-white shadow-lg border-gray-200
      ${hover ? 'hover:shadow-xl hover:shadow-gray-200/50' : ''}
    `,
    bordered: `
      bg-white border-2 border-gray-200
      ${hover ? 'hover:border-gray-300 hover:shadow-md' : ''}
    `,
    flat: `
      bg-gray-50 border-gray-200 shadow-none
      ${hover ? 'hover:bg-gray-100 hover:shadow-sm' : ''}
    `,
    gradient: `
      bg-gradient-to-br from-white to-gray-50 border-gray-200
      ${hover ? 'hover:from-gray-50 hover:to-gray-100 hover:shadow-lg' : ''}
    `,
    glass: `
      bg-white/80 backdrop-blur-sm border-gray-200/50
      ${hover ? 'hover:bg-white/90 hover:shadow-lg' : ''}
    `
  };

  const sizes = {
    xs: 'p-3 sm:p-4',
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-7 lg:p-8',
    xl: 'p-7 sm:p-8 lg:p-10',
    none: ''
  };

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );

  const cardContent = (
    <>
      {header && (
        <div className="border-b border-gray-200 pb-4 mb-4 sm:pb-5 sm:mb-5">
          {header}
        </div>
      )}
      
      <div className="flex-1">
        {loading ? <LoadingSkeleton /> : children}
      </div>
      
      {footer && (
        <div className="border-t border-gray-200 pt-4 mt-4 sm:pt-5 sm:mt-5">
          {footer}
        </div>
      )}
    </>
  );

  const CardElement = interactive ? 'button' : 'div';

  return (
    <CardElement
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {cardContent}
    </CardElement>
  );
};

// Card sub-components for better composition
Card.Header = ({ children, className = '' }) => (
  <div className={`font-semibold text-lg sm:text-xl text-gray-900 ${className}`}>
    {children}
  </div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`font-semibold text-base sm:text-lg text-gray-900 mb-2 ${className}`}>
    {children}
  </h3>
);

Card.Content = ({ children, className = '' }) => (
  <div className={`text-gray-600 text-sm sm:text-base leading-relaxed ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`text-sm text-gray-500 ${className}`}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className = '' }) => (
  <div className={`-m-5 sm:-m-6 mb-4 sm:mb-5 overflow-hidden rounded-t-lg sm:rounded-t-xl lg:rounded-t-2xl ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
);

Card.Actions = ({ children, className = '' }) => (
  <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 sm:pt-5 ${className}`}>
    {children}
  </div>
);

export default Card;