import { LoadingSpinner } from '../common'
import './RouteFallback.css'

/**
 * Suspense fallback shown while a lazily-loaded route chunk is fetched.
 * Reserves vertical space so the header/footer don't jump, and announces
 * itself politely to assistive tech via LoadingSpinner's role="status".
 */
const RouteFallback = () => (
  <div className="route-fallback">
    <LoadingSpinner size="lg" label="Loading page" />
  </div>
)

export default RouteFallback
