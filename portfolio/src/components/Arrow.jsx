function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow arrow-diagonal' : 'arrow'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4 10h11m-5-5 5 5-5 5" />
    </svg>
  )
}

export default Arrow
