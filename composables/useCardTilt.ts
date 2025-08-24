import { onMounted, onUnmounted } from 'vue'

export function useCardTilt(cardRef: any) {
  let mouseHover = false
  const SCALE_X = 4
  const SCALE_Y = 8

  function handleMouseMove(e: MouseEvent) {
	if (!mouseHover || !cardRef.value) return
	const rect = cardRef.value.getBoundingClientRect()
	const x = e.clientX - rect.left
	const y = e.clientY - rect.top
	const width = cardRef.value.offsetWidth || 0
	const height = cardRef.value.offsetHeight || 0
	cardRef.value.style.transform = `perspective(1000px) rotateX(${
	  (y / height) * -(SCALE_Y * 2) + SCALE_Y
	}deg) rotateY(${
	  (x / width) * (SCALE_X * 2) - SCALE_X
	}deg) translateZ(10px)`
  }

  function resetTransform() {
	if (cardRef.value)
	  cardRef.value.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
  }

  onMounted(() => {
	if (!cardRef.value) return
	cardRef.value.addEventListener('mouseenter', () => { mouseHover = true })
	cardRef.value.addEventListener('mouseleave', () => {
	  mouseHover = false
	  resetTransform()
	})
	cardRef.value.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
	if (!cardRef.value) return
	cardRef.value.removeEventListener('mouseenter', () => { mouseHover = true })
	cardRef.value.removeEventListener('mouseleave', () => {
	  mouseHover = false
	  resetTransform()
	})
	cardRef.value.removeEventListener('mousemove', handleMouseMove)
  })
}