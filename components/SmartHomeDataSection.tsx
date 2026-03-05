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
      className="relative w-full py-12 px-6 lg:px-10 z-20"
      style={{ backgroundColor: '#efd555' }}
      aria-label="Bénéfices Smarthome"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-black" aria-hidden="true" />
            <h2
              className="font-black uppercase leading-none text-balance"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                letterSpacing: '-0.02em',
                color: '#000000',
              }}
            >
              Les bénéfices
            </h2>
          </div>
          <p
            className="text-[13px] leading-relaxed max-w-2xl"
            style={{ color: '#000000' }}
          >
            Découvrez comment la domotique intelligente transforme votre quotidien en réduisant la consommation énergétique, en augmentant le confort et en simplifiant le contrôle.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="space-y-2"
            >
              {/* Value */}
              <div
                className="font-black leading-none"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 3rem)',
                  letterSpacing: '-0.03em',
                  color: '#000000',
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <h3
                className="font-bold uppercase text-xs tracking-wide"
                style={{ color: '#000000' }}
              >
                {stat.label}
              </h3>

              {/* Description */}
              <p
                className="text-[12px] leading-tight"
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
