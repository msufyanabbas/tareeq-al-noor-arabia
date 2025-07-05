const Container = ({ 
  children, 
  className = '',
  size = 'default',
  fluid = false,
  centerContent = false,
  noPadding = false,
  as = 'div',
  ...props 
}) => {
  const baseClasses = `
    mx-auto
    ${!noPadding ? 'px-4 sm:px-6 lg:px-8' : ''}
    ${centerContent ? 'flex flex-col items-center' : ''}
  `;

  const sizes = {
    // Extra small - for narrow content like forms
    xs: 'max-w-md',
    // Small - for focused content
    sm: 'max-w-2xl',
    // Medium - for articles, blog posts
    md: 'max-w-4xl',
    // Large - for dashboards, most pages
    lg: 'max-w-6xl',
    // Extra large - for wide layouts
    xl: 'max-w-7xl',
    // Full width with reasonable max
    full: 'max-w-screen-2xl',
    // Default responsive breakpoints
    default: 'max-w-7xl',
    // Completely fluid
    fluid: 'max-w-none w-full',
    // Responsive sizing that adapts to content
    responsive: 'max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl',
    // Breakpoint-specific max widths
    breakpoint: 'max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'
  };

  const containerSize = fluid ? 'fluid' : sizes[size] || sizes.default;

  const Element = as;

  return (
    <Element 
      className={`
        ${baseClasses}
        ${containerSize}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </Element>
  );
};

// Container sub-components for better layout composition
Container.Section = ({ 
  children, 
  className = '',
  spacing = 'default',
  background = 'transparent',
  ...props 
}) => {
  const spacingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    default: 'py-12 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-32'
  };

  const backgroundClasses = {
    transparent: '',
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white'
  };

  return (
    <section 
      className={`
        ${spacingClasses[spacing]}
        ${backgroundClasses[background]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </section>
  );
};

Container.Grid = ({ 
  children, 
  className = '',
  cols = 'auto',
  gap = 'default',
  ...props 
}) => {
  const gridCols = {
    auto: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12'
  };

  const gaps = {
    none: 'gap-0',
    sm: 'gap-4 sm:gap-6',
    default: 'gap-6 sm:gap-8',
    lg: 'gap-8 sm:gap-10 lg:gap-12',
    xl: 'gap-10 sm:gap-12 lg:gap-16'
  };

  return (
    <div 
      className={`
        grid 
        ${gridCols[cols] || gridCols.auto}
        ${gaps[gap]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </div>
  );
};

Container.Flex = ({ 
  children, 
  className = '',
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = true,
  gap = 'default',
  ...props 
}) => {
  const directions = {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse',
    responsive: 'flex-col sm:flex-row'
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };

  const justifications = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };

  const gaps = {
    none: 'gap-0',
    sm: 'gap-2 sm:gap-4',
    default: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8',
    xl: 'gap-8 sm:gap-10'
  };

  return (
    <div 
      className={`
        flex 
        ${directions[direction]}
        ${alignments[align]}
        ${justifications[justify]}
        ${wrap ? 'flex-wrap' : 'flex-nowrap'}
        ${gaps[gap]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </div>
  );
};

Container.Row = ({ children, className = '', ...props }) => (
  <div 
    className={`flex flex-wrap -mx-2 sm:-mx-3 lg:-mx-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

Container.Col = ({ 
  children, 
  className = '',
  span = 12,
  sm,
  md,
  lg,
  xl,
  ...props 
}) => {
  const getColClass = (breakpoint, spanValue) => {
    if (!spanValue) return '';
    const prefix = breakpoint ? `${breakpoint}:` : '';
    return `${prefix}w-${spanValue}/12`;
  };

  const colClasses = [
    getColClass('', span),
    getColClass('sm', sm),
    getColClass('md', md),
    getColClass('lg', lg),
    getColClass('xl', xl)
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={`px-2 sm:px-3 lg:px-4 ${colClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;