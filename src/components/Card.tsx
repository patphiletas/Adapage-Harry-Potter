type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  onReadMore: () => void;
};

function Card({ title, subtitle, description, image, onReadMore }: CardProps) {
  return (
    <div className="bg-white/95 border border-slate-200 rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 md:p-5">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-xs tracking-wide text-slate-500 mb-2.5">{subtitle}</p>

        {/* Texte volontairement tronqué */}
        <p className="text-sm leading-relaxed text-slate-700 line-clamp-3">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="mt-3 text-sm text-red-800 font-medium hover:text-red-700 hover:underline"
        >
          Lire plus
        </button>
      </div>
    </div>
  );
}

export default Card;
