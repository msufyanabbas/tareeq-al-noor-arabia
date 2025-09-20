// src/components/ui/Container.jsx
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
    ${!noPadding ? 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16' : ''}
    ${centerContent ? 'flex flex-col items-center justify-center' : ''}
  `;

  const sizes = {
    // Extra small - for narrow content like forms, login pages
    xs: 'max-w-sm',
    // Small - for focused content, narrow articles
    sm: 'max-w-2xl',
    // Medium - for articles, blog posts, forms
    md: 'max-w-4xl',
    // Large - for dashboards, most application pages
    lg: 'max-w-6xl',
    // Extra large - for wide layouts, data tables
    xl: 'max-w-7xl',
    // Full width with reasonable constraint
    full: 'max-w-screen-2xl',
    // Default responsive breakpoints with optimal reading width
    default: 'max-w-7xl',
    // Completely fluid - full viewport width
    fluid: 'max-w-none w-full',
    // Responsive sizing that grows with viewport
    responsive: 'max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl',
    // Breakpoint-specific max widths matching Tailwind screens
    breakpoint: 'max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'
  };

  const containerSize = fluid ? 'max-w-none w-full' : sizes[size] || sizes.default;

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

// Enhanced Section component with better spacing and background options
Container.Section = ({ 
  children, 
  className = '',
  spacing = 'default',
  background = 'transparent',
  fullHeight = false,
  ...props 
}) => {
  const spacingClasses = {
    none: '',
    xs: 'py-4 sm:py-6',
    sm: 'py-8 sm:py-12 md:py-16',
    default: 'py-12 sm:py-16 md:py-20 lg:py-24',
    lg: 'py-16 sm:py-20 md:py-24 lg:py-32',
    xl: 'py-20 sm:py-24 md:py-32 lg:py-40'
  };

  const backgroundClasses = {
    transparent: '',
    white: 'bg-white',
    gray: 'bg-gray-50',
    'gray-light': 'bg-gray-100',
    'gray-dark': 'bg-gray-800 text-white',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-blue-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100'
  };

  return (
    <section 
      className={`
        ${spacingClasses[spacing]}
        ${backgroundClasses[background]}
        ${fullHeight ? 'min-h-screen' : ''}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </section>
  );
};

// Enhanced Grid with better responsive behavior
Container.Grid = ({ 
  children, 
  className = '',
  cols = 'auto',
  gap = 'default',
  responsive = true,
  ...props 
}) => {
  const gridCols = {
    auto: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    1: 'grid-cols-1',
    2: responsive ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-4',
    5: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'grid-cols-5',
    6: responsive ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6' : 'grid-cols-6',
    12: responsive ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12' : 'grid-cols-12'
  };

  const gaps = {
    none: 'gap-0',
    xs: 'gap-2 sm:gap-3',
    sm: 'gap-4 sm:gap-5 md:gap-6',
    default: 'gap-6 sm:gap-8 md:gap-10',
    lg: 'gap-8 sm:gap-10 md:gap-12 lg:gap-16',
    xl: 'gap-10 sm:gap-12 md:gap-16 lg:gap-20'
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

// Enhanced Flex with more alignment options
Container.Flex = ({ 
  children, 
  className = '',
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = true,
  gap = 'default',
  responsive = true,
  ...props 
}) => {
  const directions = {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse',
    responsive: responsive ? 'flex-col sm:flex-row' : 'flex-row'
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline'
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
    xs: 'gap-1 sm:gap-2',
    sm: 'gap-2 sm:gap-3 md:gap-4',
    default: 'gap-4 sm:gap-6 md:gap-8',
    lg: 'gap-6 sm:gap-8 md:gap-10',
    xl: 'gap-8 sm:gap-10 md:gap-12'
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

// Enhanced Row with better gutter system
Container.Row = ({ 
  children, 
  className = '', 
  gutter = 'default',
  align = 'stretch',
  ...props 
}) => {
  const gutters = {
    none: '',
    sm: '-mx-2 sm:-mx-3',
    default: '-mx-3 sm:-mx-4 md:-mx-6',
    lg: '-mx-4 sm:-mx-6 md:-mx-8',
    xl: '-mx-6 sm:-mx-8 md:-mx-10'
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };

  return (
    <div 
      className={`
        flex flex-wrap 
        ${gutters[gutter]}
        ${alignments[align]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </div>
  );
};

// Enhanced Col with better responsive system
Container.Col = ({ 
  children, 
  className = '',
  span = 12,
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  offset = 0,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
  gutter = 'default',
  ...props 
}) => {
  const gutters = {
    none: '',
    sm: 'px-2 sm:px-3',
    default: 'px-3 sm:px-4 md:px-6',
    lg: 'px-4 sm:px-6 md:px-8',
    xl: 'px-6 sm:px-8 md:px-10'
  };

  const getColClass = (breakpoint, spanValue) => {
    if (!spanValue) return '';
    const prefix = breakpoint ? `${breakpoint}:` : '';
    if (spanValue === 'auto') return `${prefix}w-auto`;
    return `${prefix}w-${spanValue}/12`;
  };

  const getOffsetClass = (breakpoint, offsetValue) => {
    if (!offsetValue) return '';
    const prefix = breakpoint ? `${breakpoint}:` : '';
    return `${prefix}ml-${offsetValue}/12`;
  };

  const colClasses = [
    getColClass('', span),
    getColClass('sm', sm),
    getColClass('md', md),
    getColClass('lg', lg),
    getColClass('xl', xl),
    getColClass('2xl', xxl),
    getOffsetClass('', offset),
    getOffsetClass('sm', smOffset),
    getOffsetClass('md', mdOffset),
    getOffsetClass('lg', lgOffset),
    getOffsetClass('xl', xlOffset)
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={`
        ${gutters[gutter]}
        ${colClasses} 
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </div>
  );
};

// New Stack component for vertical layouts
Container.Stack = ({ 
  children, 
  className = '',
  spacing = 'default',
  align = 'stretch',
  ...props 
}) => {
  const spacings = {
    none: 'space-y-0',
    xs: 'space-y-2',
    sm: 'space-y-4',
    default: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-12'
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };

  return (
    <div 
      className={`
        flex flex-col
        ${spacings[spacing]}
        ${alignments[align]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </div>
  );
};

// New Inline component for horizontal layouts
Container.Inline = ({ 
  children, 
  className = '',
  spacing = 'default',
  align = 'center',
  wrap = true,
  ...props 
}) => {
  const spacings = {
    none: 'space-x-0',
    xs: 'space-x-2',
    sm: 'space-x-3',
    default: 'space-x-4',
    lg: 'space-x-6',
    xl: 'space-x-8'
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    baseline: 'items-baseline'
  };

  return (
    <div 
      className={`
        flex
        ${wrap ? 'flex-wrap' : 'flex-nowrap'}
        ${spacings[spacing]}
        ${alignments[align]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;