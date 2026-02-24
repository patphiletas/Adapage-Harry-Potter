type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  onReadMore: () => void;
};

function Card({ title, subtitle, description, image, onReadMore }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{subtitle}</p>

        {/* Texte volontairement tronqué */}
        <p className="text-gray-700 line-clamp-3">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="mt-4 text-red-800 font-semibold hover:underline"
        >
          Lire plus
        </button>
      </div>
    </div>
  );
}

export default Card;
