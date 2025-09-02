import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, description, image, href, icon }: ServiceCardProps) => {
  return (
    <div className="service-card-hover bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border group">
      <div className="space-y-4">
        
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Icon overlay */}
          {icon && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-lg">
              {icon}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          <a
            href={href}
            className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors duration-300 group"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;