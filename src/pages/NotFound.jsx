import Logo from '../components/Logo/Logo.jsx'

function NotFoundPage() {
  return (
    <main className="not-found">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Logo />
      <h1 id="main-content" tabIndex="-1">Page not found</h1>
      <p>The page you requested does not exist.</p>
      <a className="not-found-button" href="/">Back to home</a>
    </main>
  )
}

export default NotFoundPage
