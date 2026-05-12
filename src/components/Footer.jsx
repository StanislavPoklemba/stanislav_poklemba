export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-textmuted">
        <p>
          © {new Date().getFullYear()} Stanislav Poklemba · Built with React &{' '}
          <span className="text-rose-400">❤️</span>
        </p>
        <p className="text-xs tracking-widest uppercase">Košice · Slovakia</p>
      </div>
    </footer>
  )
}
