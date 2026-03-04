'use client'

export default function SmartHomeDataSection() {
  const stats = [
    {
      label: 'Consommation Énergétique',
      value: '-35%',
      description: 'Réduction moyenne avec optimisation intelligente',
    },
    {
      label: 'Confort Résidentiel',
      value: '+92%',
      description: 'Satisfaction utilisateur après intégration',
    },
    {
      label: 'Accessibilité Contrôle',
      value: '1 Clic',
      description: 'Gestion complète de la maison depuis n\'importe où',
    },
    {
      label: 'Automatisation 24/7',
      value: '365j',
      description: 'Fonctionnement continu et autonome toute l\'année',
    },
  ]

  return (
    <section
      className="relative w-full py-28 px-6 lg:px-10 z-20"
      style={{ backgroundColor: '#efd555' }}
      aria-label="Bénéfices Smarthome"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h2
            className="font-black uppercase leading-none text-balance"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
              color: '#000000',
            }}
          >
            Les Bénéfices du Smarthome
          </h2>
          <p
            className="mt-6 text-[15px] leading-relaxed max-w-2xl"
            style={{ color: '#000000' }}
          >
            Découvrez comment la domotique intelligente transforme votre quotidien en réduisant la consommation énergétique, en augmentant le confort et en simplifiant le contrôle de votre maison.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="space-y-3"
            >
              {/* Value */}
              <div
                className="font-black leading-none"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                  letterSpacing: '-0.03em',
                  color: '#000000',
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <h3
                className="font-bold uppercase text-sm tracking-wide"
                style={{ color: '#000000' }}
              >
                {stat.label}
              </h3>

              {/* Description */}
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: '#1a1a1a' }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
