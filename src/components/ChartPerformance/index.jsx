import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
  Text,
} from 'recharts'

import PropTypes from 'prop-types'

/**
 * Render a RadarChart using Recharts
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

{
  /* soutenance 13 */
}

function ChartPerformance({ data }) {
  const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
    const formatLabel = (value) => {
      if (value === 'Energy') return 'Energie'
      if (value === 'Strength') return 'Force'
      if (value === 'Speed') return 'Vitesse'
      if (value === 'Intensity') return 'Intensité'
      return value
    }

    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 100}
        fill="#FFFFFF"
        fontSize="0.75rem"
      >
        {formatLabel(
          data.kind[payload.value].charAt(0).toUpperCase() +
            data.kind[payload.value].slice(1)
        )}
      </Text>
    )
  }

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={[...data.data].reverse()}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  )
}

ChartPerformance.propTypes = {
  /**
   * Data to be displayed in the chart
   */
  data: PropTypes.object.isRequired,
}

export default ChartPerformance
