import { useState } from 'react'
import Toast from 'toasty-bite'
import type { ToastPosition, ToastTheme } from 'toasty-bite'
import 'toasty-bite/min.css'
import './ToastyBitePage.css'

const REPO_URL = 'https://github.com/DevCsoul/Toasty-Bite'

const positions: ToastPosition[] = [
  'top-right',
  'top-left',
  'top-center',
  'bottom-right',
  'bottom-left',
  'bottom-center',
]

export default function ToastyBitePage() {
  const [theme, setTheme] = useState<ToastTheme>('dark')
  const [position, setPosition] = useState<ToastPosition>('top-right')

  const [durInfo, setDurInfo] = useState('4000')
  const [durSuccess, setDurSuccess] = useState('4000')
  const [durWarning, setDurWarning] = useState('7000')
  const [durError, setDurError] = useState('')

  const handleTheme = (next: ToastTheme) => {
    setTheme(next)
    Toast.configure({ theme: next })
    Toast.show({
      type: 'info',
      title: 'Theme updated',
      message: next === 'light' ? 'Switched to light mode' : 'Switched to dark mode',
    })
  }

  const handlePosition = (next: ToastPosition) => {
    setPosition(next)
    Toast.configure({ position: next })
    Toast.info('Position updated', `Now anchored to ${next}`)
  }

  const handleFlood = () => {
    Toast.info('Update available', 'Version 2.15 is ready')
    setTimeout(() => Toast.success('Saved to drafts', 'Changes auto-backed up'), 200)
    setTimeout(() => Toast.warning('Quota almost up', '92% of plan used'), 400)
    setTimeout(() => Toast.error('Connection lost', 'Retrying in 5 seconds'), 600)
    setTimeout(() => Toast.info('Sync complete', 'All files are up to date'), 800)
  }

  const handleApplyDurations = () => {
    const info = parseInt(durInfo, 10) || 4000
    const success = parseInt(durSuccess, 10) || 4000
    const warning = parseInt(durWarning, 10) || 7000
    const error = durError ? parseInt(durError, 10) || Infinity : Infinity

    Toast.configure({ duration: { info, success, warning, error } })
    Toast.info(
      'Durations updated',
      `info ${info}ms · success ${success}ms · warning ${warning}ms · error ${
        isFinite(error) ? `${error}ms` : 'manual'
      }`,
    )
  }

  return (
      <div className="tb-demo">
        <div className="tb-layout">
          <div className="tb-intro-main">
            <h1 className="tb-intro__title">Toasty Bite</h1>
            <p className="tb-intro__subhead">Take a bite of toasty notifications.</p>
            <p className="tb-lead">
              Small, satisfying notifications that deliver the message without getting in the way.
            </p>
            <p className="tb-lead">
              Fire a few toasts, watch the bottom bar count down, hover to pause it, and click the
              ✕ to dismiss.
            </p>
          </div>

          <div className="tb-panel">
            <div className="tb-grid">
              <button
                className="tb-trigger"
                onClick={() => Toast.info('Update available', 'Version 2.15 is ready')}
              >
                <span className="tb-dot tb-dot--info"></span>Info toast
              </button>
              <button
                className="tb-trigger"
                onClick={() => Toast.success('Saved to drafts', 'Changes auto-backed up')}
              >
                <span className="tb-dot tb-dot--success"></span>Success toast
              </button>
              <button
                className="tb-trigger"
                onClick={() => Toast.warning('Quota almost up', '92% of plan used')}
              >
                <span className="tb-dot tb-dot--warning"></span>Warning toast
              </button>
              <button
                className="tb-trigger"
                onClick={() => Toast.error('Connection lost', 'Retrying in 5 seconds')}
              >
                <span className="tb-dot tb-dot--error"></span>Error toast
              </button>
            </div>

            <div className="tb-footer-row">
              <button className="tb-secondary" onClick={handleFlood}>
                Fire 5 at once (test stacking)
              </button>
              <button className="tb-secondary" onClick={() => Toast.dismissAll()}>
                Dismiss all
              </button>
            </div>

            <h2>Customize</h2>
            <div className="tb-config-row">
              <label>Theme</label>
              <div className="tb-theme-toggle" role="group" aria-label="Toast theme">
                <button
                  type="button"
                  className={`tb-theme-toggle__btn ${theme === 'dark' ? 'is-active' : ''}`}
                  onClick={() => handleTheme('dark')}
                >
                  Dark
                </button>
                <button
                  type="button"
                  className={`tb-theme-toggle__btn ${theme === 'light' ? 'is-active' : ''}`}
                  onClick={() => handleTheme('light')}
                >
                  Light
                </button>
              </div>
            </div>
            <div className="tb-config-row">
              <label htmlFor="cfg-position">Position</label>
              <select
                id="cfg-position"
                value={position}
                onChange={(e) => handlePosition(e.target.value as ToastPosition)}
              >
                {positions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <h2>Duration per type</h2>
            <div className="tb-config-row">
              <label htmlFor="cfg-dur-info">Info</label>
              <input
                type="number"
                id="cfg-dur-info"
                min={1000}
                step={500}
                value={durInfo}
                onChange={(e) => setDurInfo(e.target.value)}
              />
              <span className="tb-unit">ms</span>
            </div>
            <div className="tb-config-row">
              <label htmlFor="cfg-dur-success">Success</label>
              <input
                type="number"
                id="cfg-dur-success"
                min={1000}
                step={500}
                value={durSuccess}
                onChange={(e) => setDurSuccess(e.target.value)}
              />
              <span className="tb-unit">ms</span>
            </div>
            <div className="tb-config-row">
              <label htmlFor="cfg-dur-warning">Warning</label>
              <input
                type="number"
                id="cfg-dur-warning"
                min={1000}
                step={500}
                value={durWarning}
                onChange={(e) => setDurWarning(e.target.value)}
              />
              <span className="tb-unit">ms</span>
            </div>
            <div className="tb-config-row">
              <label htmlFor="cfg-dur-error">Error</label>
              <input
                type="number"
                id="cfg-dur-error"
                min={1000}
                step={500}
                placeholder="never (manual)"
                value={durError}
                onChange={(e) => setDurError(e.target.value)}
              />
              <span className="tb-unit">ms</span>
            </div>
            <div className="tb-config-row">
              <button type="button" style={{ flex: 1 }} onClick={handleApplyDurations}>
                Apply all durations
              </button>
            </div>
          </div>

          <div className="tb-intro-footer">
            <a
              className="tb-doc-btn"
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="tb-doc-btn__icon"
                viewBox="0 0 16 16"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
                  1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                  0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68
                  0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
                  0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01
                  8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <span>See documentation</span>
            </a>

            <p className="tb-credit">DevCsoul &copy; 2026</p>
          </div>
        </div>
      </div>
  )
}