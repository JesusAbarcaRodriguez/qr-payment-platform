interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}

export default function ActionCard({ icon, title, subtitle, href }: Props) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0 active:bg-gray-50 transition-colors"
    >
      <div className="w-11 h-11 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm leading-tight">{title}</p>
        <p className="text-gray-400 text-xs mt-0.5 leading-tight">{subtitle}</p>
      </div>
    </a>
  );
}
