import React, { useRef } from 'react'
import './ClickBurst.css'

function ClickBurst() {
  const ref = useRef(null)

  const handleClick = (e) => {
    console.log('Click detected at', e.clientX, e.clientY)
    const container = ref.current
    if (!container) return
    // suportar toque (touch events) — obter coordenadas do first touch quando presente
    const clientX = e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX
    const clientY = e.touches && e.touches[0] ? e.touches[0].clientY : e.clientY
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    const explosion = document.createElement('div')
    explosion.className = 'cb-explosion'
    explosion.style.left = `${x}px`
    explosion.style.top = `${y}px`
    container.appendChild(explosion)
    setTimeout(() => explosion.remove(), 600)

    const colors = ['#ffd166', '#ef476f', '#06d6a0', '#118ab2', '#ffe066']
    const count = 14
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div')
      s.className = 'cb-spark'
      const angle = Math.random() * Math.PI * 2
      const speed = 40 + Math.random() * 120
      const dx = Math.cos(angle) * speed
      const dy = Math.sin(angle) * speed
      s.style.left = `${x}px`
      s.style.top = `${y}px`
      s.style.background = colors[Math.floor(Math.random() * colors.length)]
      s.style.setProperty('--dx', `${dx}px`)
      s.style.setProperty('--dy', `${dy}px`)
      s.style.opacity = '1'
      container.appendChild(s)
      const life = 700 + Math.random() * 600
      setTimeout(() => s.remove(), life)
    }
  }

  // também suportar toque (quando o usuário toca na tela)
  const handleTouch = (e) => {
    e.preventDefault()
    handleClick(e)
  }

  return (
    <div className="click-burst-root" ref={ref} onClick={handleClick} onTouchStart={handleTouch}>
      <div className="cb-instructions">
        <h1>Curso Front End</h1>
        <p>Clique em qualquer lugar para gerar faíscas!</p>
      </div>
    </div>
  )
}

// export default e export nomeado garantidos
export default ClickBurst
export { ClickBurst }
