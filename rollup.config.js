import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import {terser} from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import css from 'rollup-plugin-css-porter'
import copy from 'rollup-plugin-copy'

export default {
    input: 'src/L.Control.Height.js',
    output: [
        {
            file: 'dist/L.Control.Height.js',
            format: 'cjs'
        },
        {
            file: 'dist/L.Control.Height.min.js',
            format: 'cjs',
            plugins: [terser()]
        }

    ],
    plugins: [
        nodeResolve({
            mainFields: ['jsnext', 'main']
        }),
        commonjs({
            namedExports: {
                "d3-selection": ["select", "selectAll", "mouse","event","touch","customEvent"],
                "d3-scale-chromatic": [
                    "schemeAccent", "schemeDark2", "schemeSet2", "schemeCategory10", "schemeSet3", "schemePaired"
                ],
                "d3-scale": ["scaleOrdinal", "scaleLinear"],
                "d3-array": ["quantile", "min", "max", "bisector", "range", "bisect", "tickStep", "ticks", "tickIncrement", "ascending"],
                "d3-shape": ["curveBasis", "curveLinear", "line", "area", "symbol", "symbolTriangle"],
                "d3-format": ["format", "formatSpecifier", "precisionPrefix", "formatPrefix", "precisionRound", "precisionFixed"],
                "d3-drag": ["drag"],
                "d3-path": ["path"],
                "d3-color": ["cubehelix","rgb"],
                "d3-dispatch": ["dispatch","touch"],
                "d3-time": ["timeYear", "timeMonth", "timeWeek", "timeDay", "timeHour", "timeMinute", "timeSecond", "timeMillisecond", "utcYear", "utcMonth", "utcWeek", "utcDay", "utcHour", "utcMinute", "utcSecond","utcMillisecond"],
                "d3-time-format": ["timeFormat","utcFormat"],
                "d3-axis": ["axisLeft", "axisBottom", "axisRight"],
                "d3-interpolate": ["interpolate", "interpolateNumber", "interpolateRound","piecewise","interpolateRgbBasis","interpolateCubehelixLong"]
            }
        }),
        babel({
            exclude: "node_modules/**" // only transpile our source code
        }),
        css({
            raw: 'dist/L.Control.Height.css',
            minified: 'dist/L.Control.Height.min.css'
        }),
        copy({
            targets: [
                {src: 'src/img/**/*', dest: 'dist/img'}
            ]

        })
    ],
    external: ['leaflet']
};
