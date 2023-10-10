import React from 'react'
import '../App.css';

const Scroll = () => {
  return (
    <div className="flex overflow-x-auto overflow-y-hidden scrollable-container">
      <div className="flex">
        <div className="h-28 w-72 bg-slate-600 rounded-2xl m-2"></div>
        <div className="h-28 w-72 bg-slate-600 rounded-2xl m-2"></div>
        <div className="h-28 w-72 bg-slate-600 rounded-2xl m-2"></div>
        <div className="h-28 w-72 bg-slate-600 rounded-2xl m-2"></div>
        <div className="h-28 w-72 bg-slate-600 rounded-2xl m-2"></div>
        <div className="h-28 w-72 bg-slate-600 rounded-2xl m-2"></div>
        <div className="h-28 w-72 bg-slate-600 rounded-2xl m-2"></div>
        <div className="h-28 w-72 bg-slate-600 rounded-2xl m-2"></div>
      </div>
    </div>
  )
}

export default Scroll