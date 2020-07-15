import React from 'react'
import Magic from './test'

export default function MyButton() {
  return <button>Namespace button {Magic()}</button>
}
