export default function Home() {
  return (
    <main>
      <section>
        <div className="m-24">
          <h1>Welcome to my personal website.</h1>
          <p>Personal website and blog of <strong>Enoabasi</strong>, Software Engineer &amp; Game developer.</p>

          <div>
            <p className="muted">This is a muted text</p>
          </div>

          <div className="mt-6 p-4">
            <input type="text" placeholder="Enter username..." className="px-3 py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-muted focus:border focus:border-primary/80 transition-colors border hover:border-primary/80 ease-out" />
          </div>
        </div>
      </section>
    </main>
  );
}
