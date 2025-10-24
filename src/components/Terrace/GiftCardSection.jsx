'use client';

export default function GiftCardSection() {
  const giftCards = [
    {
      title: 'Gift Cards',
      price: '£25.00 - £200.00',
      image: '/images/giftcards/giftcard-general.png',
    },
    {
      title: 'Father’s Day Gift Card',
      price: '£25.00 - £200.00',
      image: '/images/giftcards/giftcard-fathers.png',
    },
    {
      title: 'Mother’s Day Gift Card',
      price: '£25.00 - £200.00',
      image: '/images/giftcards/giftcard-mothers.png',
    },
    {
      title: 'Christmas Day Gift Card',
      price: '£25.00 - £200.00',
      image: '/images/giftcards/giftcard-christmas.png',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Gift Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {giftCards.map((card, index) => (
            <div
              key={index}
              className="text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-xl shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-1 text-red-600 font-bold">{card.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
