import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CameraCardProps {
  title: string;
  features: string[];
  className?: string;
}

export default function CameraCard({ title, features, className = '' }: CameraCardProps) {
  return (
    <Card className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm group ${className}`}>
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-300 group/item"
            >
              <div className="bg-green-100 p-1 rounded-full group-hover/item:scale-110 transition-transform duration-300">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}