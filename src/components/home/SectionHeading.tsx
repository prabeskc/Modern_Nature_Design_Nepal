interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};

export default function SectionHeading({ 
  title, 
  subtitle, 
  alignment = 'center', 
  className = '' 
}: SectionHeadingProps) {
  return (
    <div className={`${alignmentClasses[alignment]} ${className}`}>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}