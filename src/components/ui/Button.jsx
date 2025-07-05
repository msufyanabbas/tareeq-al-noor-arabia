const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...props 
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    active:scale-95 transform hover:scale-105
    whitespace-nowrap
    ${fullWidth ? 'w-full' : ''}
    ${loading ? 'cursor-wait' : ''}
  `;
  
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700 text-white 
      hover:from-blue-700 hover:to-blue-800 
      focus:ring-blue-500 shadow-lg hover:shadow-xl
      border border-transparent
    `,
    secondary: `
      bg-white text-blue-600 border-2 border-blue-600 
      hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700
      focus:ring-blue-500 shadow-sm hover:shadow-md
    `,
    accent: `
      bg-gradient-to-r from-amber-500 to-amber-600 text-white 
      hover:from-amber-600 hover:to-amber-700 
      focus:ring-amber-500 shadow-lg hover:shadow-xl
      border border-transparent
    `,
    outline: `
      bg-transparent text-gray-700 border-2 border-gray-300 
      hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900
      focus:ring-gray-500 shadow-sm hover:shadow-md
    `,
    ghost: `
      bg-transparent text-gray-700 border border-transparent
      hover:bg-gray-100 hover:text-gray-900
      focus:ring-gray-500
    `,
    danger: `
      bg-gradient-to-r from-red-600 to-red-700 text-white 
      hover:from-red-700 hover:to-red-800 
      focus:ring-red-500 shadow-lg hover:shadow-xl
      border border-transparent
    `
  };
  
  const sizes = {
    xs: 'px-2 py-1 text-xs rounded-md min-h-[24px] gap-1',
    sm: 'px-3 py-1.5 text-sm rounded-md min-h-[32px] gap-1.5 sm:px-4 sm:py-2',
    md: 'px-4 py-2 text-sm rounded-lg min-h-[40px] gap-2 sm:px-6 sm:py-3 sm:text-base',
    lg: 'px-6 py-3 text-base rounded-lg min-h-[48px] gap-2 sm:px-8 sm:py-4 sm:text-lg sm:rounded-xl',
    xl: 'px-8 py-4 text-lg rounded-xl min-h-[56px] gap-3 sm:px-10 sm:py-5 sm:text-xl'
  };

  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const buttonContent = (
    <>
      {loading && <LoadingSpinner />}
      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span className={loading ? 'opacity-70' : ''}>
        {children}
      </span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );

  return (
    <button 
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;