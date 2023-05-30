import React, { useState, useEffect } from "react"

const DeviceDetector = () => {
  return navigator.maxTouchPoints === 0
}

export default DeviceDetector
