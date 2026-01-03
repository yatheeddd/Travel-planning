function Testimonials() {
  const reviews = [
    { id: 1, author: "Sarah M.", avatar: "👩‍💼", text: "GlobeTrotter made planning my honeymoon so easy! Highly recommended.", rating: 5 },
    { id: 2, author: "John D.", avatar: "👨‍💻", text: "The best travel planning app I've used. Simple, effective, and beautiful.", rating: 5 },
    { id: 3, author: "Emma L.", avatar: "👩‍🎓", text: "Great features for organizing group trips. My friends and I love it!", rating: 4 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">What Travelers Say</h2>
        <p className="text-gray-600 mb-8 text-center">Join thousands of happy travelers using GlobeTrotter</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="card">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{review.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.author}</h4>
                  <div className="text-yellow-400">{'⭐'.repeat(review.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
