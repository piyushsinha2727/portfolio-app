import { Code, Zap, Shield, Globe, Cpu, Wifi } from "lucide-react";

type BackgroundVariant = "hero" | "calm" | "grid" | "contact";

interface BackgroundLayerProps {
  variant: BackgroundVariant;
}

/**
 * Shared Background Graphics Engine
 * 
 * Renders animated background elements based on the variant:
 * - hero:    Maximum density — Orbits, Blobs, Pings, Floating Icons
 * - calm:    Reduced density — Orbits + Blobs only (for reading sections)
 * - grid:    Timeline/grid feel — Glow Lines, Pings, Bouncing Squares
 * - contact: Single large pulsating blob centered behind the form
 * 
 * All animations use transform/opacity only for 60fps performance.
 * Complex layers are hidden on mobile via `bg-layer-complex`.
 */
export function BackgroundLayer({ variant }: BackgroundLayerProps) {
  return (
    <div className="bg-layer" aria-hidden="true">
      {/* === ORBITS === */}
      {(variant === "hero" || variant === "calm") && (
        <>
          <div className="orbit-ring orbit-ring--lg" />
          <div className="orbit-ring orbit-ring--md" />
        </>
      )}

      {/* === ENERGY BLOBS === */}
      {variant === "hero" && (
        <>
          {/* Coral blobs */}
          <div
            className="energy-blob energy-blob--coral"
            style={{ width: 350, height: 350, top: '15%', left: '10%', animationDelay: '0s' }}
          />
          <div
            className="energy-blob energy-blob--coral"
            style={{ width: 250, height: 250, bottom: '20%', right: '15%', animationDelay: '3s' }}
          />
          {/* Blue blobs */}
          <div
            className="energy-blob energy-blob--blue"
            style={{ width: 300, height: 300, top: '60%', left: '60%', animationDelay: '1.5s' }}
          />
          <div
            className="energy-blob energy-blob--cyan"
            style={{ width: 200, height: 200, top: '30%', right: '25%', animationDelay: '4s' }}
          />
        </>
      )}

      {variant === "calm" && (
        <>
          <div
            className="energy-blob energy-blob--blue"
            style={{ width: 300, height: 300, top: '20%', left: '5%', animationDelay: '0s' }}
          />
          <div
            className="energy-blob energy-blob--coral"
            style={{ width: 250, height: 250, bottom: '15%', right: '10%', animationDelay: '2s' }}
          />
        </>
      )}

      {variant === "contact" && (
        <div className="energy-blob energy-blob--cyan energy-blob--giant" />
      )}

      {variant === "grid" && (
        <>
          <div
            className="energy-blob energy-blob--blue"
            style={{ width: 250, height: 250, top: '10%', right: '5%', animationDelay: '0s', opacity: 0.08 }}
          />
          <div
            className="energy-blob energy-blob--coral"
            style={{ width: 200, height: 200, bottom: '10%', left: '5%', animationDelay: '2s', opacity: 0.08 }}
          />
        </>
      )}

      {/* === PINGS (hero + grid) === */}
      {variant === "hero" && (
        <div className="bg-layer-complex">
          <div className="ping-dot" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
          <div className="ping-dot" style={{ top: '70%', left: '80%', animationDelay: '0.7s' }} />
          <div className="ping-dot" style={{ top: '40%', left: '60%', animationDelay: '1.4s' }} />
          <div className="ping-dot" style={{ top: '85%', left: '30%', animationDelay: '2.1s' }} />
          <div className="ping-dot" style={{ top: '15%', left: '75%', animationDelay: '0.5s' }} />
        </div>
      )}

      {variant === "grid" && (
        <>
          <div className="ping-dot" style={{ top: '15%', left: '20%', animationDelay: '0s' }} />
          <div className="ping-dot" style={{ top: '45%', left: '85%', animationDelay: '1s' }} />
          <div className="ping-dot" style={{ top: '75%', left: '50%', animationDelay: '2s' }} />
          <div className="bg-layer-complex">
            <div className="ping-dot" style={{ top: '30%', left: '65%', animationDelay: '0.5s' }} />
            <div className="ping-dot" style={{ top: '60%', left: '10%', animationDelay: '1.5s' }} />
          </div>
        </>
      )}

      {/* === FLOATING ICONS (hero only) === */}
      {variant === "hero" && (
        <div className="bg-layer-complex">
          <div className="floating-icon" style={{ top: '25%', left: '8%', animationDelay: '0s' }}>
            <Code size={48} />
          </div>
          <div className="floating-icon" style={{ top: '60%', right: '12%', animationDelay: '0.8s' }}>
            <Zap size={48} />
          </div>
          <div className="floating-icon" style={{ top: '15%', right: '20%', animationDelay: '1.6s' }}>
            <Shield size={48} />
          </div>
          <div className="floating-icon" style={{ bottom: '20%', left: '20%', animationDelay: '2.4s' }}>
            <Globe size={48} />
          </div>
          <div className="floating-icon" style={{ top: '45%', left: '40%', animationDelay: '1.2s' }}>
            <Cpu size={48} />
          </div>
          <div className="floating-icon" style={{ bottom: '35%', right: '30%', animationDelay: '0.4s' }}>
            <Wifi size={48} />
          </div>
        </div>
      )}

      {/* === GLOW LINES (grid variant) === */}
      {variant === "grid" && (
        <div className="bg-layer-complex">
          <div className="glow-line" style={{ top: '20%', animationDelay: '0s', animationDuration: '6s' }} />
          <div className="glow-line" style={{ top: '40%', animationDelay: '2s', animationDuration: '7s' }} />
          <div className="glow-line" style={{ top: '60%', animationDelay: '4s', animationDuration: '5s' }} />
          <div className="glow-line" style={{ top: '80%', animationDelay: '1s', animationDuration: '8s' }} />
          <div className="glow-line" style={{ top: '10%', animationDelay: '3s', animationDuration: '6.5s' }} />
        </div>
      )}

      {/* === BOUNCING SQUARES (grid variant) === */}
      {variant === "grid" && (
        <div className="bg-layer-complex">
          <div className="bounce-sq" style={{ top: '18%', left: '25%', animationDelay: '0s' }} />
          <div className="bounce-sq" style={{ top: '35%', left: '70%', animationDelay: '0.5s' }} />
          <div className="bounce-sq" style={{ top: '55%', left: '15%', animationDelay: '1s' }} />
          <div className="bounce-sq" style={{ top: '72%', left: '80%', animationDelay: '1.5s' }} />
          <div className="bounce-sq" style={{ top: '88%', left: '45%', animationDelay: '0.8s' }} />
          <div className="bounce-sq" style={{ top: '25%', left: '90%', animationDelay: '1.2s' }} />
          <div className="bounce-sq" style={{ top: '65%', left: '35%', animationDelay: '0.3s' }} />
        </div>
      )}

      {/* === GRID PATTERN (grid variant) === */}
      {variant === "grid" && (
        <div className="grid-pattern-overlay" />
      )}
    </div>
  );
}
