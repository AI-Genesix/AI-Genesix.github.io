import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
    <div class="text-center text-white">
      <h1 class="text-4xl font-bold mb-4">🎉 Tailwind CSS fonctionne !</h1>
      <p class="text-xl mb-8">Configuration réussie avec Vite + TypeScript</p>
      <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Commencer le développement
      </button>
    </div>
  </div>
`
