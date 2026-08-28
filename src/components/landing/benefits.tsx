import { ProposalData } from '@/lib/proposal-data';
import {
  Award,
  Bot,
  Clock,
  BarChart,
  Calendar,
  Hand,
  MessageSquare,
  Briefcase,
  Target,
  Star,
  Server,
  MapPin,
  Sparkles,
  Shield,
  Rocket,
  Eye,
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Award: <Award className="w-7 h-7" />,
  Bot: <Bot className="w-7 h-7" />,
  Clock: <Clock className="w-7 h-7" />,
  BarChart: <BarChart className="w-7 h-7" />,
  Calendar: <Calendar className="w-7 h-7" />,
  Hand: <Hand className="w-7 h-7" />,
  MessageSquare: <MessageSquare className="w-7 h-7" />,
  Briefcase: <Briefcase className="w-7 h-7" />,
  Target: <Target className="w-7 h-7" />,
  Star: <Star className="w-7 h-7" />,
  Server: <Server className="w-7 h-7" />,
  MapPin: <MapPin className="w-7 h-7" />,
  Sparkles: <Sparkles className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
  Rocket: <Rocket className="w-7 h-7" />,
  Eye: <Eye className="w-7 h-7" />,
};

const BenefitCard = ({
  icon,
  title,
  description,
  iconBg,
  iconColor,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}) => (
  <div className="p-10 rounded-[2.5rem] hyperglass border-none transition-all hover:-translate-y-2 duration-500 shadow-lg">
    <div
      className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center ${iconColor} mb-8`}
    >
      {icon}
    </div>
    <h5 className="font-bold text-xl text-slate-900 mb-4">{title}</h5>
    <p className="text-sm text-slate-500 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

export default function Benefits({
  proposalData,
}: {
  proposalData: ProposalData;
}) {
  const benefitsBlock = proposalData.bloques.find(
    (b) => b.id === 'ventajas'
  ) as any;

  if (!benefitsBlock || !benefitsBlock.items) {
    return null;
  }

  const benefits = benefitsBlock.items.map((item: any) => {
    const IconComponent = iconMap[item.icon];
    return {
      ...item,
      icon: IconComponent,
    };
  });

  return (
    <section className="mt-24 reveal">
      <h3 className="text-center text-xs uppercase tracking-[0.4em] text-blue-600 font-bold mb-5">
        {benefitsBlock.titulo}
      </h3>
      <div className="h-1.5 w-16 bg-blue-600 rounded-full mb-12 mx-auto"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
}
